> Pinned source for Docker main: [content/manuals/build/ci/github-actions/export-docker.md](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/content/manuals/build/ci/github-actions/export-docker.md)

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
