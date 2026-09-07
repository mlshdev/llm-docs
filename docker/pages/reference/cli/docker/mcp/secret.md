> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_secret.yaml](https://github.com/docker/docs/blob/9adf4bad79fbdb239706ba723e51ee9c6473bcbc/data/cli/mcp/docker_mcp_secret.yaml)

# docker mcp secret

Manage secrets in the local OS Keychain

## Description

Manage secrets in the local OS Keychain

## Subcommands

- [`docker mcp secret ls`](https://docs.docker.com/reference/cli/docker/mcp/secret/ls/)
- [`docker mcp secret rm`](https://docs.docker.com/reference/cli/docker/mcp/secret/rm/)
- [`docker mcp secret set`](https://docs.docker.com/reference/cli/docker/mcp/secret/set/)

## Examples

### Pass the secret via STDIN

> echo my-secret-password > pwd.txt
> cat pwd.txt | docker mcp secret set POSTGRES_PASSWORD
