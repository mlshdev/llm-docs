> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_push.yaml](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/data/cli/scout/docker_scout_push.yaml)

# docker scout push

Push an image or image index to Docker Scout

**Usage:** `docker scout push IMAGE`

## Description

The `docker scout push` command lets you push an image or analysis result to Docker Scout.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--author` |  | Name of the author of the image |
| `--dry-run` |  | Do not push the image but process it |
| `--org` |  | Namespace of the Docker organization to which image will be pushed |
| `-o`, `--output` |  | Write the report to a file |
| `--platform` |  | Platform of image to be pushed |
| `--sbom` |  | Create and upload SBOMs |
| `--secrets` |  | Scan for secrets in the image |
| `--timestamp` |  | Timestamp of image or tag creation |

## Examples

### Push an image to Docker Scout

```console
$ docker scout push --org my-org registry.example.com/repo:tag
```
