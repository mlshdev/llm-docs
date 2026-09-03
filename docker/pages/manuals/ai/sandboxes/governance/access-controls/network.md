> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/governance/access-controls/network.md](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/content/manuals/ai/sandboxes/governance/access-controls/network.md)

# Network access policies

Network access policies control outbound connections from sandboxes. Each
policy contains one or more rules that allow the domains, IP ranges, and ports a
workflow needs, or block destinations that should stay unavailable.

You can configure network access in two places:

- [Local policy](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/), which applies to sandboxes on one developer machine
  when organization governance is not active.
- [Organization policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/organization/), which apply centrally across an
  organization or to selected teams.

When organization governance is active, only organization allow rules grant
network access. Local allow rules are inactive until organization governance no
longer applies, while local deny rules still apply on top of the organization
policy. See [Precedence](https://docs.docker.com/ai/sandboxes/governance/concepts/#precedence).

## Rule syntax

Network rules use the action `connect:tcp`. Resources are hostnames, CIDR
ranges, ports, or hostnames with ports. The governance policy schema also
accepts `connect:udp`, but Docker Sandboxes always blocks direct external UDP
and ICMP. `connect:udp` rules have no effect.

Examples:

- `api.example.com`
- `*.example.com`
- `**.example.com`
- `example.com:443`
- `10.0.0.0/8`

For exact wildcard behavior and CIDR support, see
[Network rules](https://docs.docker.com/ai/sandboxes/governance/concepts/#network-rules).

## Local network rules

Use `sbx policy allow network` and `sbx policy deny network` to manage local
network rules:

```console
$ sbx policy allow network api.example.com
$ sbx policy deny network ads.example.com
```

For presets, sandbox-scoped rules, testing, and troubleshooting, see
[Local policy](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/).

## Organization network rules

Organization network rules belong to policies that can apply to the whole
organization or to selected teams. For setup steps and team scoping, see
[Organization policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/organization/).

Use [Monitoring policies](https://docs.docker.com/ai/sandboxes/governance/monitor-and-enforce/monitoring/) to inspect
which network rules are active on a developer machine.

> \[!NOTE]
> To manage Model Context Protocol (MCP) server registration and requests
> through Docker's MCP gateway, use [MCP access policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/mcp/). These
> policies apply only to the gateway. Direct MCP connections from a sandbox
> don't use the gateway, but you can control access to remote MCP servers with
> network policy.
