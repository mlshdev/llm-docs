> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/agent-network/usage-and-logs/usage-overview.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/agent-network/usage-and-logs/usage-overview.mdx)

# Usage Overview

The Usage tab shows account consumption over time as a per-day chart with a
Tokens / Cost switch, plus a breakdown table.

![agent network usage overview chart and table](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/agent-network/usage-and-logs/agent-network-usage-overview.png)

## Filters

Filter the view by:

- **Date**: defaults to the last 14 days.
- **User**
- **Group**
- **Provider**
- **Model**

Filters apply to both the chart and the table.

## Who can see what

`Owner`, `Admin`, `Auditor`, `Agent Network Admin`, and `Usage Viewer` see usage for the whole account. Every other user sees only their own usage. See [User Roles](https://docs.netbird.io/manage/team/user-roles#agent-network-permissions).

## Tokens vs. Cost

Switch between input/output token totals and estimated USD spend. Cost is
derived from the per-model pricing configured on each
[provider](https://docs.netbird.io/agent-network/providers).

Hovering a day, in the chart or in the breakdown table, also shows its
prompt-cache token buckets (cache reads and writes) and the cache share of the
day's cost.

## Always Collected

Usage is recorded on every request independently of access-log collection, so
this view stays complete even when logs are disabled.
