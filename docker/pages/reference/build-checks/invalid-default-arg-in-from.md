> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/invalid-default-arg-in-from.md](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/invalid-default-arg-in-from.md)

# InvalidDefaultArgInFrom

## Output

```text
Using the global ARGs with default values should produce a valid build.
```

## Description

An `ARG` used in an image reference should be valid when no build arguments are used. An image build should not require `--build-arg` to be used to produce a valid build.

## Examples

❌ Bad: don't rely on an ARG being set for an image reference to be valid

```dockerfile
ARG TAG
FROM busybox:${TAG}
```

✅ Good: include a default for the ARG

```dockerfile
ARG TAG=latest
FROM busybox:${TAG}
```

✅ Good: ARG can be empty if the image would be valid with it empty

```dockerfile
ARG VARIANT
FROM busybox:stable${VARIANT}
```

✅ Good: Use a default value if the build arg is not present

```dockerfile
ARG TAG
FROM alpine:${TAG:-3.14}
```
