> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/stage-name-casing.md](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/stage-name-casing.md)

# StageNameCasing

## Output

```text
Stage name 'BuilderBase' should be lowercase
```

## Description

To help distinguish Dockerfile instruction keywords from identifiers, this rule
forces names of stages in a multi-stage Dockerfile to be all lowercase.

## Examples

❌ Bad: mixing uppercase and lowercase characters in the stage name.

```dockerfile
FROM alpine AS BuilderBase
```

✅ Good: stage name is all in lowercase.

```dockerfile
FROM alpine AS builder-base
```
