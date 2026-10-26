> Pinned source for Runpod main: [serverless/pricing.mdx](https://github.com/runpod/docs/blob/25ec0e5ebf1cdc72fae35ed21b489444a68e9cad/serverless/pricing.mdx)
> Canonical documentation: https://docs.runpod.io/serverless/pricing

# Pricing

Learn how Serverless billing works to optimize your costs. Review setup, configuration, deployment, and operations guidance for Runpod Serverless.

> **Tip**
>
> Runpod offers custom pricing plans for large scale and enterprise workloads. [Contact our sales team](https://ecykq.share.hsforms.com/2MZdZATC3Rb62Dgci7knjbA) to learn more.

Serverless offers pay-per-second pricing with no upfront costs. You're billed from when a worker starts until it fully stops, rounded up to the nearest second.

## Worker types

|              | Flex workers                             | Active workers                               |
| ------------ | ---------------------------------------- | -------------------------------------------- |
| **Behavior** | Scale to zero when there are no requests | Always running (24/7)                        |
| **Pricing**  | Standard per-second rate                 | Discounts available through sales inquiry    |
| **Best for** | Variable workloads, cost optimization    | Consistent traffic, low-latency requirements |

## What you're billed for

Your total cost includes compute time and storage:

| Cost component     | Description                      | Rate                                                         |
| ------------------ | -------------------------------- | ------------------------------------------------------------ |
| **Compute**        | GPU time while workers run       | See the [Runpod pricing page](https://www.runpod.io/pricing) |
| **Container disk** | Worker storage (5-min intervals) | \~$0.10/GB/month                                             |
| **Network volume** | Shared persistent storage        | $0.07/GB/month (< 1TB), $0.05/GB/month (> 1TB)               |

### Compute cost breakdown

Workers incur charges during three phases:

1. **Cold start**: From when the worker starts until your handler is ready, mostly your handler loading models into GPU memory. Pulling the container image and downloading [cached models](https://docs.runpod.io/serverless/endpoints/model-caching) normally happen while the worker is scaled down and are not billed. Minimize with [FlashBoot](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#flashboot) or [model caching](https://docs.runpod.io/serverless/endpoints/model-caching).

2. **Execution time**: Processing requests. Set [execution timeouts](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#execution-timeout) to prevent runaway jobs.

3. **Waiting (idle timeout)**: After its last job, a worker keeps running and waits for new requests for up to the idle timeout (default: 5 seconds) before it scales down. Configure in [endpoint settings](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#idle-timeout).

A worker that has scaled down, shown as **Idle** in the console, is not billed. See [worker lifecycle](https://docs.runpod.io/serverless/workers/overview#worker-lifecycle).

> **Tip**
>
> For high-volume workloads with significant storage needs, use [network volumes](https://docs.runpod.io/storage/network-volumes) to share data across workers and reduce per-worker storage costs.

## Account limits

**Spend limit**: Default limit of $80/hour across all resources. [Contact support](https://www.runpod.io/contact) to increase.

## Billing support

If you believe you've been billed incorrectly, [contact support](https://www.runpod.io/contact), including the following information in your ticket:

- Endpoint ID
- Request ID (if applicable)
- Approximate time of the issue
