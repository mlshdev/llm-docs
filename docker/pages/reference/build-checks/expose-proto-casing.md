> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/expose-proto-casing.md](https://github.com/docker/docs/blob/d40e4d2c029e471aa18744e28bebe179d96abb6f/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/expose-proto-casing.md)

# ExposeProtoCasing

## Output

```text
Defined protocol '80/TcP' in EXPOSE instruction should be lowercase
```

## Description

Protocol names in the [`EXPOSE`](https://docs.docker.com/reference/dockerfile/#expose)
instruction should be specified in lowercase to maintain consistency and
readability. This rule checks for protocols that are not in lowercase and
reports them.

## Examples

❌ Bad: protocol is not in lowercase.

```dockerfile
FROM alpine
EXPOSE 80/TcP
```

✅ Good: protocol is in lowercase.

```dockerfile
FROM alpine
EXPOSE 80/tcp
```
