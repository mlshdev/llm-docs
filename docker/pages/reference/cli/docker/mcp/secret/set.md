> Pinned source for Docker main: [data/cli/mcp/docker_mcp_secret_set.yaml](https://github.com/docker/docs/blob/1cb9a4d2c65d712da863e30cd3a1319ddeea3298/data/cli/mcp/docker_mcp_secret_set.yaml)

# docker mcp secret set

Set a secret in the local OS Keychain

**Usage:** `docker mcp secret set key[=value]`

## Description

Set a secret in the local OS Keychain

## Examples

````console
### Pass the secret via STDIN

```console
echo my-secret-password > pwd.txt
cat pwd.txt | docker mcp secret set postgres_password
````

```
```
