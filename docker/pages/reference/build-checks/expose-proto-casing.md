> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/expose-proto-casing.md](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/expose-proto-casing.md)

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
