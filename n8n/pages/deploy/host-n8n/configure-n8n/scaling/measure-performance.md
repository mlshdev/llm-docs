> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/scaling/measure-performance.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/deploy/host-n8n/configure-n8n/scaling/measure-performance.md)

# Performance and benchmarking <a id="performance-and-benchmarking"></a>

n8n can handle up to 220 workflow executions per second on a single instance, with the ability to scale up further by adding more instances.

This document outlines n8n's performance benchmarking. It describes the factors that affect performance, and includes two example benchmarks.

## Performance factors <a id="performance-factors"></a>

The performance of n8n depends on factors including:

- The workflow type
- The resources available to n8n
- How you configure n8n's scaling options

## Run your own benchmarking <a id="run-your-own-benchmarking"></a>

To get an accurate estimate for your use case, run n8n's [benchmarking framework](https://github.com/n8n-io/n8n/tree/master/packages/%40n8n/benchmark). The repository contains more information about the benchmarking.

## Example: Single instance performance <a id="example-single-instance-performance"></a>

This test measures how response time increases as requests per second increase. It looks at the response time when calling the Webhook Trigger node.

Setup:

- Hardware: ECS c5a.large instance (4GB RAM)
- n8n setup: Single n8n instance (running in main mode, with Postgres database)
- Workflow: Webhook Trigger node, Edit Fields node

![](https://raw.githubusercontent.com/n8n-io/n8n-docs/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/deploy/.gitbook/assets/benchmarking-single-instance-100-250.png)
*This graph shows the percentage of requests to the Webhook Trigger node getting a response within 100 seconds, and how that varies with load. Under higher loads n8n usually still processes the data, but takes over 100s to respond.*

## Example: Multi-instance performance <a id="example-multi-instance-performance"></a>

This test measures how response time increases as requests per second increase. It looks at the response time when calling the Webhook Trigger node.

Setup:

- Hardware: seven ECS c5a.4xlarge instances (8GB RAM each)
- n8n setup: two webhook instances, four worker instances, one database instance (MySQL), one main instance running n8n and Redis
- Workflow: Webhook Trigger node, Edit Fields node
- Multi-instance setups use [Queue mode](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode)

![](https://raw.githubusercontent.com/n8n-io/n8n-docs/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/deploy/.gitbook/assets/benchmarking-multi-instance-500-2500.png)
*This graph shows the percentage of requests to the Webhook Trigger node getting a response within 100 seconds, and how that varies with load. Under higher loads n8n usually still processes the data, but takes over 100s to respond.*
