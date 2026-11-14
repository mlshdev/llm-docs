> Pinned source for Docker main: [content/manuals/build/ci/github-actions/multi-platform.md](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/content/manuals/build/ci/github-actions/multi-platform.md)

# Multi-platform image with GitHub Actions

Use [Docker GitHub Builder](https://docs.docker.com/build/ci/github-actions/) to build multi-platform
images across native runners and publish a combined image manifest.

## Distribute build across multiple runners

Building multiple platforms on the same runner can significantly extend build
times, particularly when dealing with complex Dockerfiles or a high number of
target platforms. If you want to split platform builds across multiple runners
without maintaining a custom matrix and merge job, use the
[Docker GitHub Builder](https://docs.docker.com/build/ci/github-actions/). The reusable workflows
compute the per-platform matrix, run each platform on its own runner, and
create the final manifest for you.

The following workflow uses the [`build.yml` reusable workflow](https://docs.docker.com/build/ci/github-actions/build-workflow/)
to distribute a multi-platform Dockerfile build:

```yaml
name: ci

on:
  push:

permissions:
  contents: read

jobs:
  build:
    uses: docker/github-builder/.github/workflows/build.yml@v1
    permissions:
      contents: read
      id-token: write
    with:
      output: image
      push: true
      platforms: linux/amd64,linux/arm64
      meta-images: user/app
      meta-tags: |
        type=ref,event=branch
        type=ref,event=pr
        type=semver,pattern={{version}}
        type=semver,pattern={{major}}.{{minor}}
    secrets:
      registry-auths: |
        - registry: docker.io
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
```

With `distribute: true`, which is the default, the workflow splits the build
into one platform per runner and assembles the final multi-platform image in
its finalize phase. The default `runner` mapping selects native GitHub-hosted
Linux runners for Arm and other platforms. To customize the mapping, see [runner selection](https://docs.docker.com/build/ci/github-actions/github-builder-architecture/#runner-selection).
If you need to control the Docker build inputs directly, see
[Build with Docker GitHub Builder build.yml](https://docs.docker.com/build/ci/github-actions/build-workflow/).

### With Bake

For builds defined in a Bake file, use the
[Bake reusable workflow](https://docs.docker.com/build/ci/github-actions/bake-workflow/#build-and-push-a-bake-target).
It distributes the target's platforms and publishes the combined manifest.

## Build with individual actions and QEMU

Use individual actions when you need to configure the job's Docker Engine or
run other steps alongside the build. The following example uses QEMU to build
both platforms on one runner.

You can build [multi-platform images](https://docs.docker.com/build/building/multi-platform/) using
the `platforms` option, as shown in the following example:

> \[!NOTE]
>
> - For a list of available platforms, see the [Docker Setup Buildx](https://github.com/marketplace/actions/docker-setup-buildx)
>   action.
> - If you want support for more platforms, you can use QEMU with the [Docker Setup QEMU](https://github.com/docker/setup-qemu-action)
>   action.

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Login to Docker Hub
        uses: docker/login-action@v4
        with:
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Build and push
        uses: docker/build-push-action@v7
        with:
          platforms: linux/amd64,linux/arm64
          push: true
          tags: user/app:latest
```

## Build and load multi-platform images

The default Docker setup for GitHub Actions runners supports building and pushing multi-platform images to registries. However, it does not support loading multi-platform images to the local image store of the runner after building them. To load a multi-platform image locally, you need to enable the containerd image store option for the Docker Engine.

There is no way to configure the default Docker setup in the GitHub Actions
runners directly, but you can use `docker/setup-docker-action` to customize the
Docker Engine and CLI settings for a job.

The following example workflow enables the containerd image store, builds a
multi-platform image, and loads the results into the GitHub runner's local
image store.

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker
        uses: docker/setup-docker-action@v5
        with:
          daemon-config: |
            {
              "debug": true,
              "features": {
                "containerd-snapshotter": true
              }
            }

      - name: Login to Docker Hub
        uses: docker/login-action@v4
        with:
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v4

      - name: Build and push
        uses: docker/build-push-action@v7
        with:
          platforms: linux/amd64,linux/arm64
          load: true
          tags: user/app:latest
```
