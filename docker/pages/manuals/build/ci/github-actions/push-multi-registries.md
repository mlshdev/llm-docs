> Pinned source for Docker main: [content/manuals/build/ci/github-actions/push-multi-registries.md](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/content/manuals/build/ci/github-actions/push-multi-registries.md)

# Push to multiple registries with GitHub Actions

Use [Docker GitHub Builder](https://docs.docker.com/build/ci/github-actions/build-workflow/) to publish to multiple
registries. List the image names in `meta-images` and credentials in the
`registry-auths` secret. This example publishes `latest` and `1.0.0` tags to
Docker Hub and GitHub Container Registry:

```yaml
name: ci

on:
  push:

jobs:
  build:
    uses: docker/github-builder/.github/workflows/build.yml@v1
    permissions:
      contents: read
      id-token: write
      packages: write
    with:
      output: image
      push: true
      platforms: linux/amd64,linux/arm64
      meta-tags: |
        type=raw,value=latest
        type=raw,value=1.0.0
      meta-images: |
        user/app
        ghcr.io/user/app
    secrets:
      registry-auths: |
        - registry: docker.io
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
        - registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GITHUB_TOKEN }}
```

Replace the image names with repositories you can push to. The
`packages: write` permission authorizes publishing to GitHub Container Registry.

## Push with individual actions

The following workflow will connect you to Docker Hub and GitHub Container
Registry, and push the image to both registries:

```yaml
name: ci

on:
  push:

jobs:
  docker:
    permissions:
      contents: read
      packages: write
    runs-on: ubuntu-latest
    steps:
      - name: Login to Docker Hub
        uses: docker/login-action@v4
        with:
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Login to GitHub Container Registry
        uses: docker/login-action@v4
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Build and push
        uses: docker/build-push-action@v7
        with:
          platforms: linux/amd64,linux/arm64
          push: true
          tags: |
            user/app:latest
            user/app:1.0.0
            ghcr.io/user/app:latest
            ghcr.io/user/app:1.0.0
```
