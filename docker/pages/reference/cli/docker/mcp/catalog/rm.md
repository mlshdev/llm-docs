> Pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_rm.yaml](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/data/cli/mcp/docker_mcp_catalog_rm.yaml)

# docker mcp catalog rm

Remove a catalog

**Usage:** `docker mcp catalog rm <name>`

## Description

Remove a locally configured catalog. This will delete the catalog and all its server definitions.
The Docker official catalog cannot be removed.

## Examples

# Remove a catalog

docker mcp catalog rm old-servers
