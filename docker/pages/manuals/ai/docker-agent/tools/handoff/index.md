> Commit-pinned source for Docker main: [_vendor/github.com/docker/docker-agent/docs/tools/handoff/index.md](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/_vendor/github.com/docker/docker-agent/docs/tools/handoff/index.md)

# Handoff Tool

*Hand off the active conversation to another local agent defined in the same config.*

## Overview

The `handoff` tool lets an agent transfer control of the **current conversation** to another agent in the **same config file**. Unlike [`transfer_task`](https://docs.docker.com/ai/docker-agent/tools/transfer-task/), which delegates a sub-task and collects the result, `handoff` rewires the session so the receiving agent continues the conversation directly with the user.

This is the core mechanism for **handoffs routing** — a pattern where a router agent classifies the user's request and hands it off to a specialist, which then owns the rest of the session.

> \[!NOTE]
> **Local only**
>
> The `handoff` tool only targets agents declared in the **same** config file by their local name. It does **not** open network connections. To delegate to a remote agent over the network, use the [A2A toolset](https://docs.docker.com/ai/docker-agent/tools/a2a/) instead.

## Configuration

The tool is enabled implicitly when an agent declares a non-empty `handoffs:` list. You do **not** add `- type: handoff` under `toolsets:` — it is not a toolset type.

```yaml
agents:
  router:
    model: openai/gpt-4o
    description: Routes questions to the right specialist
    instruction: |
      Classify the user's question and hand off to the most appropriate
      specialist. If unsure, ask a clarifying question first.
    handoffs: [billing, support]

  billing:
    model: openai/gpt-4o
    description: Billing specialist
    instruction: Answer billing questions.

  support:
    model: openai/gpt-4o
    description: Technical support specialist
    instruction: Help with technical issues.
```

The router agent automatically gets a `handoff` tool it can call to switch the conversation to `billing` or `support`.

## Tool Interface

The `handoff` tool takes a single parameter:

| Parameter | Type   | Required | Description                                                  |
| --------- | ------ | -------- | ------------------------------------------------------------ |
| `agent`   | string | ✓        | The local name of the agent to hand off the conversation to. |

Only names listed in the current agent's `handoffs:` field are valid targets.

> \[!TIP]
> **See also**
>
> For sub-task delegation (caller stays in control, waits for the result), see [Transfer Task](https://docs.docker.com/ai/docker-agent/tools/transfer-task/). For remote agent connections over the network, see the [A2A toolset](https://docs.docker.com/ai/docker-agent/tools/a2a/). For the broader pattern, see [Handoffs Routing](https://docs.docker.com/ai/docker-agent/concepts/multi-agent/#handoffs-routing).
