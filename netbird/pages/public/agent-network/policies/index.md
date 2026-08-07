> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/agent-network/policies/index.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/agent-network/policies/index.mdx)

# Policies

Policies connect users and agents (source groups) to AI providers, controlling
which identities can reach which providers and models, with optional limits and
guardrails.

![agent network llm policy](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/agent-network/policies/agent-network-create-policy.png)

> **Note**
>
> This page explains how to create and manage access to AI providers and gateways. If you are
> looking for a guide on how to manage access to internal resources. See
> [Access Control](https://docs.netbird.io/manage/access-control).

## How Policies Work

- **Source groups**: the users/agents the policy applies to.
- **Destination providers**: the providers the policy grants access to.
- **Limits**: optional per-user and per-group token and budget caps.
- **Guardrails**: optional model allowlist and prompt capture.

A request is allowed when a policy connects the caller's groups to the resolved
provider and no applicable limit is exhausted.

## Create a Policy

1. Go to **Agent Network → Policies** and add a policy.
2. Choose the source groups and destination providers.
3. Optionally attach [limits](https://docs.netbird.io/agent-network/policies/limits) and
   [guardrails](https://docs.netbird.io/agent-network/policies/guardrails).

Try it out by calling your Agent Network endpoint. The access log will show the
policy in action:

```bash
curl -vk https://sailcloth.netbird.ai/v1/chat/completions \
  --header "Content-Type: application/json" \
  --data '{
    "model": "gpt-5.5",
    "messages": [
      {
        "role": "user",
        "content": "What is NetBird?"
      }
    ]
  }' | jq
```

![agent network log](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/agent-network/policies/agent-network-access-log.png)

## More

- [Token & Budget Limits](https://docs.netbird.io/agent-network/policies/limits)
- [Guardrails](https://docs.netbird.io/agent-network/policies/guardrails)
