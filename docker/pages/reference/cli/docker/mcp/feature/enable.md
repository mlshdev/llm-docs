> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_feature_enable.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/cli/mcp/docker_mcp_feature_enable.yaml)

# docker mcp feature enable

Enable an experimental feature

**Usage:** `docker mcp feature enable <feature-name>`

## Description

Enable an experimental feature.

Available features:
  oauth-interceptor      Enable GitHub OAuth flow interception for automatic authentication
  mcp-oauth-dcr          Enable Dynamic Client Registration (DCR) for automatic OAuth client setup
  dynamic-tools          Enable internal MCP management tools (mcp-find, mcp-add, mcp-remove)
	profiles               Enable profile management (docker mcp profile <subcommand>)
  tool-name-prefix       Prefix all tool names with server name to avoid conflicts
