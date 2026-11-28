> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/agent-network/policies/guardrails.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/agent-network/policies/guardrails.mdx)

# Guardrails

Guardrails are checks you configure on a policy to constrain what its callers can
do. They are defined per policy and apply only to that policy.

![agent network guardrails on a policy](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/agent-network/policies/agent-network-guardrails.png)

## Model Allowlist

Restrict a policy to a specific set of models. Requests for any other model are
denied.

## Prompt Capture

Optionally store request prompts and response completions on logged requests.
Prompt capture only runs when **both** the account-level prompt collection
setting and a policy guardrail enable it. See
[Log Collection & Retention](https://docs.netbird.io/agent-network/usage-and-logs/log-collection).

### PII Redaction

When capture is enabled, you can strip personally identifiable information from
prompts and completions before they're stored. Effective redaction is the OR of
the account setting and the guardrail setting.

## Configuring Guardrails

Open the policy's **Guardrails** tab when creating or editing a policy and enable
the checks you want. They take effect for that policy only.
