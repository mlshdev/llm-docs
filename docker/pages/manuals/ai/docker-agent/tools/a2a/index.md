> Commit-pinned source for Docker main: [_vendor/github.com/docker/docker-agent/docs/tools/a2a/index.md](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/_vendor/github.com/docker/docker-agent/docs/tools/a2a/index.md)

# A2A Tool

*Connect to remote agents via the Agent-to-Agent protocol.*

## Overview

The A2A tool connects to a remote agent exposed over the A2A (Agent-to-Agent) protocol. Unlike [`handoff`](https://docs.docker.com/ai/docker-agent/tools/handoff/), which only targets local agents declared in the same config, `a2a` reaches out to an agent running on the network.

## Configuration

```yaml
toolsets:
  - type: a2a
    url: "http://localhost:8080/a2a"
    # Optional: custom tool name (defaults to a sanitized form of the URL / agent card name)
    name: research_agent
    # Optional: custom HTTP headers (typically for auth)
    headers:
      Authorization: "Bearer ${env.A2A_TOKEN}"
      X-Tenant: "acme"
```

The `Authorization` header shown above authenticates to endpoints served with `docker agent serve a2a --auth-token`.

## Properties

| Property  | Type               | Required | Description                                                                                                 |
| --------- | ------------------ | -------- | ----------------------------------------------------------------------------------------------------------- |
| `url`     | string             | ✓        | A2A server endpoint URL (must include scheme).                                                              |
| `name`    | string             | ✗        | Tool name registered for the remote agent. Defaults to a name derived from the server's agent card.         |
| `headers` | map\[string]string | ✗        | Extra HTTP headers sent with every request (useful for `Authorization`, tenant selection, tracing, \u2026). |

> \[!TIP]
> **See also**
>
> For full details on the A2A protocol and serving agents as A2A endpoints, see [A2A Protocol](https://docs.docker.com/ai/docker-agent/features/a2a/).
