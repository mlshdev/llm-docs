> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/governance/_index.md](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/content/manuals/ai/sandboxes/governance/_index.md)

# Governance

Sandbox governance covers the policy system that controls what sandboxes can
access over the network, on the filesystem, and through MCP. For MCP setup and
server registration, see [MCP gateway](https://docs.docker.com/ai/sandboxes/mcp-gateway/). Governance operates
at two layers:

**Local policy** is configured per machine using the `sbx policy` CLI. It
lets individual developers customize which domains their sandboxes can reach.
See [Local policy](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/).

**Organization policy** is configured centrally in Docker Home. Network and
filesystem policies can also be managed via the
[Governance API](https://docs.docker.com/reference/api/ai-governance/). Controls defined at the org
level apply uniformly across every sandbox in the organization. Organization
governance can also include MCP policies for sandbox MCP activity. When
organization governance is active, only organization allow rules grant access:
local `sbx policy` allow rules are no longer evaluated, while local deny rules
still apply on top. See
[Organization policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/organization/).

Alongside this access-control policy, admins can require developers to sign in
as members of their organization before using sandboxes at all.
[Sign-in enforcement](https://docs.docker.com/ai/sandboxes/governance/monitor-and-enforce/sign-in-enforcement/) is deployed
through endpoint management and ensures developers can't bypass organization
policy by using a personal account.

> \[!NOTE]
> Organization governance is available on a separate paid subscription.
> [Contact Docker Sales](https://www.docker.com/products/ai-governance/#contact-sales)
> to request access.

## Learn more

Start with [Policy concepts](https://docs.docker.com/ai/sandboxes/governance/concepts/) for the resource model, rule syntax,
MCP policy basics, evaluation, and precedence.

### Access controls

- [Local policy](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/): configure network rules on your
  machine with the `sbx policy` CLI.
- [Organization policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/organization/): centrally manage
  sandbox policies across your organization.
- [Network access policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/network/): control outbound network
  access from sandboxes.
- [Filesystem access policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/filesystem/): control which
  host paths sandboxes can mount as workspaces.
- [MCP access policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/mcp/): control MCP server registration,
  tool calls, resources, prompts, and approval gates.

### Monitor and enforce

- [Monitoring policies](https://docs.docker.com/ai/sandboxes/governance/monitor-and-enforce/monitoring/): inspect active
  rules and monitor sandbox network traffic with `sbx policy ls` and
  `sbx policy log`.
- [Audit logs](https://docs.docker.com/ai/sandboxes/governance/audit/): view, configure, export, and collect governance audit
  records.
- [Sign-in enforcement](https://docs.docker.com/ai/sandboxes/governance/monitor-and-enforce/sign-in-enforcement/): require
  developers to sign in as organization members, enforced through endpoint
  management.

### Reference

- [AI Governance API](https://docs.docker.com/reference/api/ai-governance/): manage network and
  filesystem org policies programmatically.
- [MCP policy reference](https://docs.docker.com/ai/sandboxes/governance/reference/mcp-policy/): look up Docker MCP policy
  actions, resources, attributes, context fields, and approval behavior.
