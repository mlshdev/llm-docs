> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/maintainer-deprecated.md](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/maintainer-deprecated.md)

# MaintainerDeprecated

## Output

```text
MAINTAINER instruction is deprecated in favor of using label
```

## Description

The `MAINTAINER` instruction, used historically for specifying the author of
the Dockerfile, is deprecated. To set author metadata for an image, use the
`org.opencontainers.image.authors` [OCI label](https://github.com/opencontainers/image-spec/blob/main/annotations.md#pre-defined-annotation-keys).

## Examples

❌ Bad: don't use the `MAINTAINER` instruction

```dockerfile
MAINTAINER moby@example.com
```

✅ Good: specify the author using the `org.opencontainers.image.authors` label

```dockerfile
LABEL org.opencontainers.image.authors="moby@example.com"
```
