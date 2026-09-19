> Pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/from-as-casing.md](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/from-as-casing.md)

# FromAsCasing

## Output

```text
'as' and 'FROM' keywords' casing do not match
```

## Description

While Dockerfile keywords can be either uppercase or lowercase, mixing case
styles is not recommended for readability. This rule reports violations where
mixed case style occurs for a `FROM` instruction with an `AS` keyword declaring
a stage name.

## Examples

❌ Bad: `FROM` is uppercase, `AS` is lowercase.

```dockerfile
FROM debian:latest as builder
```

✅ Good: `FROM` and `AS` are both uppercase

```dockerfile
FROM debian:latest AS deb-builder
```

✅ Good: `FROM` and `AS` are both lowercase.

```dockerfile
from debian:latest as deb-builder
```

## Related errors

- [`FileConsistentCommandCasing`](https://docs.docker.com/reference/build-checks/consistent-instruction-casing/)
