> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/reserved-stage-name.md](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/reserved-stage-name.md)

# ReservedStageName

## Output

```text
'scratch' is reserved and should not be used as a stage name
```

## Description

Reserved words should not be used as names for stages in multi-stage builds.
The reserved words are:

- `context`
- `scratch`

## Examples

❌ Bad: `scratch` and `context` are reserved names.

```dockerfile
FROM alpine AS scratch
FROM alpine AS context
```

✅ Good: the stage name `builder` is not reserved.

```dockerfile
FROM alpine AS builder
```
