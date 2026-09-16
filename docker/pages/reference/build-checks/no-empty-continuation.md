> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/no-empty-continuation.md](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/no-empty-continuation.md)

## Output

```text
Empty continuation line found in: RUN apk add     gnupg     curl
```

## Description

Support for empty continuation (`/`) lines have been deprecated and will
generate errors in future versions of the Dockerfile syntax.

Empty continuation lines are empty lines following a newline escape:

```dockerfile
FROM alpine
RUN apk add \

    gnupg \

    curl
```

Support for such empty lines is deprecated, and a future BuildKit release will
remove support for this syntax entirely, causing builds to break. To avoid
future errors, remove the empty lines, or add comments, since lines with
comments aren't considered empty.

## Examples

❌ Bad: empty continuation line between `EXPOSE` and 80.

```dockerfile
FROM alpine
EXPOSE \

80
```

✅ Good: comments do not count as empty lines.

```dockerfile
FROM alpine
EXPOSE \
# Port
80
```
