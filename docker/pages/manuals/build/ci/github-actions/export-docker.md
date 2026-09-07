> Commit-pinned source for Docker main: [content/manuals/build/ci/github-actions/export-docker.md](https://github.com/docker/docs/blob/195c0626b986095e849a7353dd94af1f46f32787/content/manuals/build/ci/github-actions/export-docker.md)

# Export to Docker with GitHub Actions

You may want your build result to be available in the Docker client through
`docker images` to be able to use it in another step of your workflow:

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
          load: true
          tags: myimage:latest

      - name: Inspect
        run: |
          docker image inspect myimage:latest
```
