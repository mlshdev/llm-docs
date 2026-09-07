> Commit-pinned source for Docker main: [_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/consistent-instruction-casing.md](https://github.com/docker/docs/blob/195c0626b986095e849a7353dd94af1f46f32787/_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules/consistent-instruction-casing.md)

# ConsistentInstructionCasing

## Output

```text
Command 'EntryPoint' should be consistently cased
```

## Description

Instruction keywords should use consistent casing (all lowercase or all
uppercase). Using a case that mixes uppercase and lowercase, such as
`PascalCase` or `snakeCase`, letters result in poor readability.

## Examples

❌ Bad: don't mix uppercase and lowercase.

```dockerfile
From alpine
Run echo hello > /greeting.txt
EntRYpOiNT ["cat", "/greeting.txt"]
```

✅ Good: all uppercase.

```dockerfile
FROM alpine
RUN echo hello > /greeting.txt
ENTRYPOINT ["cat", "/greeting.txt"]
```

✅ Good: all lowercase.

```dockerfile
from alpine
run echo hello > /greeting.txt
entrypoint ["cat", "/greeting.txt"]
```
