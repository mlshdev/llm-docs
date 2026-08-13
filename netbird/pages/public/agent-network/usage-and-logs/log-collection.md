> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/agent-network/usage-and-logs/log-collection.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/agent-network/usage-and-logs/log-collection.mdx)

# Log Collection & Retention

Found under **Agent Network → Configuration → Log Collection**, these
account-level controls govern how much request detail is stored.

![agent network log collection and retention configuration](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/agent-network/usage-and-logs/agent-network-log-collection.png)

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
