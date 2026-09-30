> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/redundant-target-platform.md](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/redundant-target-platform.md)

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
