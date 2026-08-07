> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/agent-network/usage-and-logs/usage-overview.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/agent-network/usage-and-logs/usage-overview.mdx)

# Usage Overview

The Usage tab shows account consumption over time as a per-day chart with a
Tokens / Cost switch, plus a breakdown table.

![agent network usage overview chart and table](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/agent-network/usage-and-logs/agent-network-usage-overview.png)

## Filters

Filter the view by:

- **Date**: defaults to the last 14 days.
- **User**
- **Group**
- **Provider**
- **Model**

Filters apply to both the chart and the table.

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
