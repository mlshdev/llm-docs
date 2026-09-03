> Commit-pinned source for n8n main: [docs/deploy/host-n8n/keep-n8n-running/monitor-n8n.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/deploy/host-n8n/keep-n8n-running/monitor-n8n.md)

# Monitoring <a id="monitoring"></a>

There are three API endpoints you can call to check the status of your instance: `/healthz`, `healthz/readiness`, and `/metrics`.

## healthz and healthz/readiness <a id="healthz-and-healthzreadiness"></a>

The `/healthz` endpoint returns a standard HTTP status code. 200 indicates the instance is reachable. It doesn't indicate DB status. It's available for both self-hosted and Cloud users.

Access the endpoint:

```
<your-instance-url>/healthz
```

The `/healthz/readiness` endpoint is similar to the `/healthz` endpoint, but it returns a HTTP status code of 200 if the DB is connected and migrated and therefore the instance is ready to accept traffic.

Access the endpoint:

```
<your-instance-url>/healthz/readiness
```

> **Info**
> **Customizing health check endpoints**
>
> You can customize the health check endpoint path using the [`N8N_ENDPOINT_HEALTH`](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/endpoints) environment variable.

## metrics <a id="metrics"></a>

The `/metrics` endpoint provides more detailed information about the current status of the instance.

Access the endpoint:

```
<your-instance-url>/metrics
```

> **Info**
> **Feature availability**
>
> The `/metrics` endpoint is available on:
>
> - **Self-hosted:** All editions
>
> It isn't available on n8n Cloud.

## How do I enable metrics and health checks? <a id="enable-metrics-and-health-checks-for-self-hosted-n8n"></a>

The `/metrics` endpoint is disabled by default. The health endpoint is always enabled on the main n8n server. For worker servers in [queue mode](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode), the health endpoint is disabled by default.

To enable them, configure your n8n instance:

```shell
# metrics <a id="metrics"></a>
N8N_METRICS=true
# healthz <a id="healthz"></a>
QUEUE_HEALTH_CHECK_ACTIVE=true
```

Refer to [Configuration methods](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration) for more information on how to configure your instance using environment variables.
