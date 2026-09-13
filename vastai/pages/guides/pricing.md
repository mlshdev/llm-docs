> Commit-pinned source for Vast.ai main: [guides/pricing.mdx](https://docs.vast.ai/guides/pricing)

# Pricing overview

How Vast.ai pricing works across instances, reserved, interruptible, and serverless, and how to choose between them.

Vast.ai is a **marketplace**, not a fixed-price provider. Hosts set their own rates and compete for your business, so prices vary with supply, demand, GPU model, location, and host reliability. You pay by the second for compute and continuously for storage.

This page summarizes every way you can pay for GPUs on Vast and helps you pick the right one. For the deep dives, see [Instance pricing](https://docs.vast.ai/guides/instances/pricing) and [Serverless pricing](https://docs.vast.ai/guides/serverless/pricing).

## Rental models at a glance

| Model                                                                          | Priority     | Best for                                           | How you save                                                 |
| ------------------------------------------------------------------------------ | ------------ | -------------------------------------------------- | ------------------------------------------------------------ |
| [On-demand](https://docs.vast.ai/guides/instances/choosing/instance-types)     | High         | Production, time-sensitive jobs, guaranteed uptime | Shop the marketplace for the best host price                 |
| [Reserved](https://docs.vast.ai/guides/instances/choosing/reserved-instances)  | High         | Long-running projects with predictable usage       | Up to 50% off by pre-paying                                  |
| [Interruptible](https://docs.vast.ai/guides/instances/choosing/instance-types) | Low (bidded) | Fault-tolerant or checkpointed workloads           | Often 50%+ cheaper than on-demand; may be paused when outbid |
| [Serverless](https://docs.vast.ai/guides/serverless/pricing)                   | Managed      | Bursty inference, variable demand                  | Autoscaler recruits the best price-performance workers       |

All four models rent the same underlying marketplace capacity, the difference is *how* you pay for it and *what guarantees* come with each.

## What you're billed for

Every rental, regardless of model, has three cost components:

- **GPU compute**, per-second while the instance is in a billable state. Varies by GPU model, count, reliability, and region.
- **Storage**, continuous while the instance exists, including when it is stopped. Delete the instance to stop storage billing.
- **Bandwidth**, per byte for both ingress and egress. Rates are host-set; check before picking data-intensive offers.

Serverless adds no surcharge on top of these, you pay the underlying worker costs directly. Workers that are inactive or still being recruited are only billed for storage and bandwidth, not compute. See [Billing for workers](https://docs.vast.ai/guides/serverless/pricing#billing-for-workers) for the full state table.

## Choosing a model

- **I need guaranteed uptime**

  Use **on-demand**. Convert to **reserved** once you know you'll run it for days or weeks, the discount is automatic from the instance card.
- **I can handle interruptions**

  Use **interruptible**. Checkpoint your work, save outputs to a volume or cloud storage, and set your bid based on how much priority you need.
- **My traffic is bursty**

  Use **serverless**. Define an endpoint with `min_workers: 0` and let the autoscaler recruit capacity only when requests arrive.
- **I want to benchmark first**

  Spin up a short on-demand rental, record your throughput, then decide between reserved (steady workload) or serverless (variable workload).

## Checking live prices

Prices move continuously. Always query current rates rather than relying on a quote:

- **Web**, [cloud.vast.ai/create](https://cloud.vast.ai/create/) shows real-time marketplace offers with filters for GPU, price, reliability, and location.
- **CLI**, `vastai search offers` returns matching offers as JSON. See the [search-offers reference](https://docs.vast.ai/cli/reference/search-offers).
- **API**, the [search offers endpoint](https://docs.vast.ai/api-reference/hello-world) for programmatic access.

## See also

- [Instance pricing](https://docs.vast.ai/guides/instances/pricing), full breakdown of on-demand, reserved, and interruptible
- [Serverless pricing](https://docs.vast.ai/guides/serverless/pricing), worker and endpoint state billing tables
- [Billing](https://docs.vast.ai/guides/reference/billing), credits, auto-billing, and payment methods
- [Reserved instances](https://docs.vast.ai/guides/instances/choosing/reserved-instances), how to convert on-demand to reserved
