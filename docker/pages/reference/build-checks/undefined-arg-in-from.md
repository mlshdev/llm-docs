> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/undefined-arg-in-from.md](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/undefined-arg-in-from.md)

# UndefinedArgInFrom

## Output

```text
FROM argument 'VARIANT' is not declared
```

## Description

This rule warns for cases where you're consuming an undefined build argument in
`FROM` instructions.

Interpolating build arguments in `FROM` instructions can be a good way to add
flexibility to your build, and lets you pass arguments that overriding the base
image of a stage. For example, you might use a build argument to specify the
image tag:

```dockerfile
ARG ALPINE_VERSION=3.20

FROM alpine:${ALPINE_VERSION}
```

This makes it possible to run the build with a different `alpine` version by
specifying a build argument:

```console
$ docker buildx build --build-arg ALPINE_VERSION=edge .
```

This check also tries to detect and warn when a `FROM` instruction reference
miss-spelled built-in build arguments, like `BUILDPLATFORM`.

## Examples

❌ Bad: the `VARIANT` build argument is undefined.

```dockerfile
FROM node:22${VARIANT} AS jsbuilder
```

✅ Good: the `VARIANT` build argument is defined.

```dockerfile
ARG VARIANT="-alpine3.20"
FROM node:22${VARIANT} AS jsbuilder
```
