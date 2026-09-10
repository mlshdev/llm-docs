> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/duplicate-stage-name.md](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/duplicate-stage-name.md)

# DuplicateStageName

## Output

```text
Duplicate stage name 'foo-base', stage names should be unique
```

## Description

Defining multiple stages with the same name results in an error because the
builder is unable to uniquely resolve the stage name reference.

## Examples

❌ Bad: `builder` is declared as a stage name twice.

```dockerfile
FROM debian:latest AS builder
RUN apt-get update; apt-get install -y curl

FROM golang:latest AS builder
```

✅ Good: stages have unique names.

```dockerfile
FROM debian:latest AS deb-builder
RUN apt-get update; apt-get install -y curl

FROM golang:latest AS go-builder
```
