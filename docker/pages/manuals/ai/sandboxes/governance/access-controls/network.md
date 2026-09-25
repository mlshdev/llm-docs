> Pinned source for Docker main: [content/manuals/ai/sandboxes/governance/access-controls/network.md](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/content/manuals/ai/sandboxes/governance/access-controls/network.md)

# Network access policies

The governance described here applies to local sandboxes. Cloud sandboxes
use separate network policy configuration. See
[Cloud network policy](https://docs.docker.com/ai/sandboxes/cloud/network-policy/) for cloud controls.

Network access policies control outbound connections from sandboxes. Each
policy contains one or more rules that allow the domains, IP ranges, and ports a
workflow needs, or block destinations that should stay unavailable. A local
policy rule can also match the HTTP method and path of a request, so it can
allow part of an API without allowing all of it.

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

Network rules use `connect:tcp` for TCP and `connect:udp` for UDP. Resources are
hostnames, CIDR ranges, ports, or hostnames with ports. UDP requires
[experimental outbound UDP](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/#allow-outbound-udp). ICMP is blocked.

Examples:

- `api.example.com`
- `*.example.com`
- `**.example.com`
- `example.com:443`
- `10.0.0.0/8`

For exact wildcard behavior and CIDR support, see
[Network rules](https://docs.docker.com/ai/sandboxes/governance/concepts/#network-rules).

## HTTP method and path rules

A network rule matches a destination, so it allows or blocks everything a
sandbox sends there. An HTTP rule narrows the match to specific HTTP methods
and URL paths on that destination, which lets a policy allow reads from an API
without allowing writes to it.

HTTP rules layer on top of network rules. A network allow is the baseline for
a destination and HTTP rules carve into it, while a network deny blocks the
destination outright and no HTTP allow can reopen it. For the pattern syntax
and the full matching table, see
[HTTP rules](https://docs.docker.com/ai/sandboxes/governance/concepts/#http-method-and-path).

Add them to a local policy with `--method` and `--path` on `sbx policy`. See
[HTTP method and path rules](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/#http-method-and-path-rules).

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
