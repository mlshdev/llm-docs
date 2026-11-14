> Pinned source for Docker main: [content/manuals/build/ci/github-actions/reproducible-builds.md](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/content/manuals/build/ci/github-actions/reproducible-builds.md)

# Reproducible builds with GitHub Actions

`SOURCE_DATE_EPOCH` is a [standardized environment variable][source_date_epoch]
for instructing build tools to produce a reproducible output.
Setting the environment variable for a build makes the timestamps in the
image index, config, and file metadata reflect the specified Unix time.

[source_date_epoch]: https://reproducible-builds.org/docs/source-date-epoch/

With Docker GitHub Builder, pass `SOURCE_DATE_EPOCH` as a build argument.
With individual actions, use the built-in `env` property on the build step.

## Unix epoch timestamps

The following example sets the `SOURCE_DATE_EPOCH` variable to 0, Unix epoch.

### Set the epoch with GitHub Builder {#set-the-epoch-with-builder}

Pass the fixed epoch through the [Build workflow](https://docs.docker.com/build/ci/github-actions/build-workflow/):

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
    with:
      output: image
      build-args: |
        SOURCE_DATE_EPOCH=0
      meta-images: user/app
```

For the [Bake workflow](https://docs.docker.com/build/ci/github-actions/bake-workflow/), set
`*.args.SOURCE_DATE_EPOCH=0` using the `set` input.

### Set the epoch with individual actions

**`docker/build-push-action`**

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Build
        uses: docker/build-push-action@v7
        with:
          tags: user/app:latest
        env:
          SOURCE_DATE_EPOCH: 0
```

**`docker/bake-action`**

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Build
        uses: docker/bake-action@v7
        env:
          SOURCE_DATE_EPOCH: 0
```

## Git commit timestamps

The following individual-action examples set `SOURCE_DATE_EPOCH` to the Git
commit timestamp. Keep timestamp generation in the caller when it depends on
a workflow step. A reusable workflow call cannot reference earlier steps in
the same job.

**`docker/build-push-action`**

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Get Git commit timestamps
        run: echo "TIMESTAMP=$(git log -1 --pretty=%ct)" >> $GITHUB_ENV

      - name: Build
        uses: docker/build-push-action@v7
        with:
          tags: user/app:latest
        env:
          SOURCE_DATE_EPOCH: ${{ env.TIMESTAMP }}
```

**`docker/bake-action`**

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Get Git commit timestamps
        run: echo "TIMESTAMP=$(git log -1 --pretty=%ct)" >> $GITHUB_ENV

      - name: Build
        uses: docker/bake-action@v7
        env:
          SOURCE_DATE_EPOCH: ${{ env.TIMESTAMP }}
```

## Additional information

For more information about the `SOURCE_DATE_EPOCH` support in BuildKit,
see [BuildKit documentation](https://github.com/moby/buildkit/blob/master/docs/build-repro.md#source_date_epoch).
