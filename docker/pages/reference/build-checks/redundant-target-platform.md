> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/redundant-target-platform.md](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/redundant-target-platform.md)

# RedundantTargetPlatform

## Output

```text
Setting platform to predefined $TARGETPLATFORM in FROM is redundant as this is the default behavior
```

## Description

A custom platform can be used for a base image. The default platform is the
same platform as the target output so setting the platform to `$TARGETPLATFORM`
is redundant and unnecessary.

## Examples

❌ Bad: this usage of `--platform` is redundant since `$TARGETPLATFORM` is the default.

```dockerfile
FROM --platform=$TARGETPLATFORM alpine AS builder
RUN apk add --no-cache git
```

✅ Good: omit the `--platform` argument.

```dockerfile
FROM alpine AS builder
RUN apk add --no-cache git
```
