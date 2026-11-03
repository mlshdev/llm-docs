> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/stage-name-casing.md](https://github.com/docker/docs/blob/d40e4d2c029e471aa18744e28bebe179d96abb6f/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/stage-name-casing.md)

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
