> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/agent-network/usage-and-logs/index.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/agent-network/usage-and-logs/index.mdx)

# Usage & Logs

Once traffic flows, Agent Network gives you a per-request audit with real caller
identity, cost attribution, and token usage.

## In This Section

- [Usage Overview](https://docs.netbird.io/agent-network/usage-and-logs/usage-overview): token and
  cost trends over time.
- [Access Logs](https://docs.netbird.io/agent-network/usage-and-logs/access-logs): per-request log
  with server-side filtering.
- [Log Collection & Retention](https://docs.netbird.io/agent-network/usage-and-logs/log-collection):
  enable/disable logging, set retention, and control prompt capture.

## Usage vs. Logs

Token and cost **usage** is always collected, so dashboards and limits stay
accurate even if access-log collection is turned off. The full **access log**
(request detail and optional prompts) is retained according to your log
collection settings.

## Who Can See What

`Owner`, `Admin`, `Auditor`, `Agent Network Admin`, and `Usage Viewer` see usage and access logs for every caller. Every other user sees only their own. When prompt collection is enabled, access logs include captured prompts, so these roles can read other users' prompts. See [User Roles](https://docs.netbird.io/manage/team/user-roles#agent-network-permissions).
