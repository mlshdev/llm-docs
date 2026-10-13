> Pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_rm.yaml](https://github.com/docker/docs/blob/9643ba0813ea4290a7ab1f206dddaf7683f39edd/data/cli/mcp/docker_mcp_catalog_rm.yaml)

# docker mcp catalog rm

Remove a catalog

**Usage:** `docker mcp catalog rm <name>`

## Description

Remove a locally configured catalog. This will delete the catalog and all its server definitions.
The Docker official catalog cannot be removed.

## Examples

```console
# Remove a catalog
  docker mcp catalog rm old-servers
```
