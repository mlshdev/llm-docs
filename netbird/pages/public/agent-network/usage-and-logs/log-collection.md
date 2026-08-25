> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/agent-network/usage-and-logs/log-collection.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/agent-network/usage-and-logs/log-collection.mdx)

# Log Collection & Retention

Found under **Agent Network → Configuration → Log Collection**, these
account-level controls govern how much request detail is stored.

![agent network log collection and retention configuration](https://raw.githubusercontent.com/netbirdio/docs/d905fda2a3f04a2066746875d09e51a3fe62dfed/public/docs-static/img/agent-network/usage-and-logs/agent-network-log-collection.png)

## Enable Log Collection

Persist a per-request [access log](https://docs.netbird.io/agent-network/usage-and-logs/access-logs)
for every agent-network request. On by default.

> **Note**
>
> Token and cost usage is recorded regardless of this setting, so
> [Usage Overview](https://docs.netbird.io/agent-network/usage-and-logs/usage-overview) and limits stay
> accurate even when log collection is off.

## Retention Period

Choose how long access logs are kept before they're automatically deleted
(7–90 days, or indefinite). A periodic sweep removes older entries. Usage
history is kept separately and isn't affected.

## Enable Prompt Collection

Capture prompt and completion bodies on logged requests. Prompt capture only
runs when this is on **and** a policy [guardrail](https://docs.netbird.io/agent-network/policies/guardrails)
also enables it. PII redaction can strip sensitive data before storage.
