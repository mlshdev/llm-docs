> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/selfhosted/observability/signal.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/selfhosted/observability/signal.mdx)

# Signal metrics

The Signal service brokers WireGuard handshake messages between peers. Its metrics describe peer connectivity, message forwarding, and the gRPC server itself.

## Endpoint

| Setting | Default          |
| ------- | ---------------- |
| Address | `0.0.0.0`        |
| Port    | `9090`           |
| Path    | `/metrics`       |
| Flag    | `--metrics-port` |

```bash
netbird-signal run --metrics-port 9090
```

In the combined container, the metrics port is set with `server.metricsPort` in `config.yaml` and is shared with Management and Relay. See [Combined](https://docs.netbird.io/selfhosted/observability/combined).

> **Note**
>
> Signal metric names are **unprefixed** when Signal runs as a standalone service. The combined container injects a `signal_` prefix on every metric name to avoid collisions on the shared `/metrics` endpoint — for example, `active_peers` becomes `signal_active_peers`. The tables below show the standalone names.

> **Note**
>
> The Signal gRPC server is also instrumented with the OpenTelemetry gRPC stats handler. Standard gRPC instrumentation series — including `rpc_server_call_duration_seconds_bucket`, `rpc_server_request_size_bytes_bucket`, and `rpc_server_response_size_bytes_bucket` — appear alongside the application metrics below.

## Peer connectivity

| Metric                                | Type      | Description                                                                |
| ------------------------------------- | --------- | -------------------------------------------------------------------------- |
| `active_peers`                        | Gauge     | Currently connected peers.                                                 |
| `peer_connection_duration_seconds`    | Histogram | Duration of a peer's stream connection. Unit: seconds.                     |
| `registrations_total`                 | Counter   | Peer registrations on the Signal stream.                                   |
| `deregistrations_total`               | Counter   | Peer deregistrations.                                                      |
| `registration_failures_total`         | Counter   | Peer registration failures.                                                |
| `registration_delay_milliseconds`     | Histogram | Delay between stream open and successful registration. Unit: milliseconds. |
| `get_registration_delay_milliseconds` | Histogram | Lookup time for a registered peer. Unit: milliseconds.                     |

## Message forwarding

| Metric                                 | Type      | Description                                                    |
| -------------------------------------- | --------- | -------------------------------------------------------------- |
| `messages_forwarded_total`             | Counter   | Messages successfully relayed between peers.                   |
| `message_forward_failures_total`       | Counter   | Forward attempts that failed (peer offline, send error, etc.). |
| `message_forward_latency_milliseconds` | Histogram | End-to-end forward latency. Unit: milliseconds.                |
| `message_size_bytes`                   | Histogram | Size of forwarded messages. Unit: bytes.                       |

## Grafana dashboard

A ready-made Signal dashboard is available under [Dashboards](https://docs.netbird.io/selfhosted/observability/dashboards).
