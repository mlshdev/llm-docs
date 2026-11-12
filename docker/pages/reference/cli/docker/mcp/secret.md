> Pinned source for Docker main: [data/cli/mcp/docker_mcp_secret.yaml](https://github.com/docker/docs/blob/61cbfdc1e72d0ac62dbac59ceaf7b94dcbe69c80/data/cli/mcp/docker_mcp_secret.yaml)

# docker mcp secret

Manage secrets in the local OS Keychain

## Description

Manage secrets in the local OS Keychain

## Subcommands

- [`docker mcp secret ls`](https://docs.docker.com/reference/cli/docker/mcp/secret/ls/)
- [`docker mcp secret rm`](https://docs.docker.com/reference/cli/docker/mcp/secret/rm/)
- [`docker mcp secret set`](https://docs.docker.com/reference/cli/docker/mcp/secret/set/)

## Examples

```console
### Pass the secret via STDIN

> echo my-secret-password > pwd.txt
> cat pwd.txt | docker mcp secret set POSTGRES_PASSWORD
```
