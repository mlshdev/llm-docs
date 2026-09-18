> Pinned source for Qdrant master: [qdrant-landing/content/documentation/ops-monitoring/monitoring.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/ops-monitoring/monitoring.md)
> Canonical documentation: https://qdrant.tech/documentation/ops-monitoring/monitoring/

# Monitoring & Telemetry

Qdrant exposes its metrics in [Prometheus](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format)/[OpenMetrics](https://github.com/OpenObservability/OpenMetrics) format, so you can integrate them easily
with the compatible tools and monitor Qdrant with your own monitoring system. You can
use the `/metrics` endpoint and configure it as a scrape target.

Metrics endpoint: <http://localhost:6333/metrics>

The integration with Qdrant is easy to
[configure](https://prometheus.io/docs/prometheus/latest/getting_started/#configure-prometheus-to-monitor-the-sample-targets)
with Prometheus and Grafana.

## Metrics

Qdrant exposes various metrics in Prometheus/OpenMetrics format, commonly used together with Grafana for monitoring.

Two endpoints are available:

- `/metrics` for metrics of a Qdrant node/peer, see [all metrics](#node-metrics-metrics).

- `/sys_metrics` (Qdrant Cloud only) for metrics about your cluster, like CPU, memory, disk utilisation, collection metrics and load balancer telemetry. For more information, see [Qdrant Cloud Monitoring](https://qdrant.tech/documentation/cloud/cluster-monitoring/).

Note that `/metrics` only reports metrics for the peer connected to. It is therefore important to scrape from each peer individually, even if a load balancer is involved.

### Node Metrics `/metrics`

Each Qdrant node will expose the following metrics.

Counters - such as the number of created snapshots - are reset when the node is restarted.

**Application Metrics**

| Name                        | Type  | Meaning                                                                                       |
| --------------------------- | ----- | --------------------------------------------------------------------------------------------- |
| app\_info                   | gauge | Qdrant server name and version                                                                |
| app\_status\_recovery\_mode | gauge | If started in recovery mode                                                                   |
| quota\_exceeded             | gauge | If a configured resource quota is exceeded, per resource <sup>(v1.19+)</sup> [^metrics-quota] |

[^metrics-quota]: Only reported for resources that have a quota configured. See [Monitoring Quotas](https://qdrant.tech/documentation/ops-configuration/quotas/#monitoring-quotas).

**Collection Metrics**

| Name                                                    | Type    | Meaning                                                                                                                                                                |
| ------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collections\_total                                      | gauge   | Number of collections                                                                                                                                                  |
| collection\_points                                      | gauge   | Number of points, per collection <sup>(v1.16+)</sup>                                                                                                                   |
| collection\_vectors                                     | gauge   | Number of vectors, per collection and vector name <sup>(v1.16+)</sup>                                                                                                  |
| collections\_vector\_total                              | gauge   | Number of vectors in all collections                                                                                                                                   |
| collection\_indexed\_only\_excluded\_points             | gauge   | Number of points excluded in [`indexed_only`](https://qdrant.tech/documentation/search/search/#search-api)  search, per collection and vector name <sup>(v1.16+)</sup> |
| collection\_active\_replicas\_min                       | gauge   | Minimum number of active replicas across all collections and shards <sup>(v1.16+)</sup>                                                                                |
| collection\_active\_replicas\_max                       | gauge   | Maximum number of active replicas across all collections and shards <sup>(v1.16+)</sup>                                                                                |
| collection\_dead\_replicas                              | gauge   | Number of non-active replicas across all collections and shards <sup>(v1.16+)</sup>                                                                                    |
| collection\_running\_optimizations                      | gauge   | Number of running optimization tasks, per collection <sup>(v1.16+)</sup>                                                                                               |
| collection\_hardware\_metric\_cpu                       | counter | CPU measurements of a collection, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                            |
| collection\_hardware\_metric\_payload\_io\_read         | counter | Payload IO read operations measurement, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                      |
| collection\_hardware\_metric\_payload\_io\_write        | counter | Payload IO write operations measurement, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                     |
| collection\_hardware\_metric\_payload\_index\_io\_read  | counter | Payload index read operations measurement, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                   |
| collection\_hardware\_metric\_payload\_index\_io\_write | counter | Payload index write operations measurement, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                  |
| collection\_hardware\_metric\_vector\_io\_read          | counter | Vector IO read operations measurement, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                       |
| collection\_hardware\_metric\_vector\_io\_write         | counter | Vector IO write operations measurement, per collection <sup>(v1.13+)</sup> [^metrics-hwreporting]                                                                      |

[^metrics-hwreporting]: Only reported if hardware metrics are enabled in the configuration. See `service.hardware_reporting` in the [configuration](https://qdrant.tech/documentation/ops-configuration/configuration/).

**Snapshot Metrics**

| Name                        | Type    | Meaning                                                                     |
| --------------------------- | ------- | --------------------------------------------------------------------------- |
| snapshot\_creation\_running | gauge   | Number of snapshots being created, per collection <sup>(v1.16+)</sup>       |
| snapshot\_recovery\_running | gauge   | Number of snapshots being recovered, per collection <sup>(v1.16+)</sup>     |
| snapshot\_created\_total    | counter | Number of created snapshots since start, per collection <sup>(v1.16+)</sup> |

**API Response Metrics**

| Name                                    | Type      | Meaning                                                            |
| --------------------------------------- | --------- | ------------------------------------------------------------------ |
| rest\_responses\_total                  | counter   | Number of responses through REST API [^metrics-per-collection]     |
| rest\_responses\_fail\_total            | counter   | Number of failed responses through REST API                        |
| rest\_responses\_avg\_duration\_seconds | gauge     | Average response duration in REST API                              |
| rest\_responses\_min\_duration\_seconds | gauge     | Minimum response duration in REST API                              |
| rest\_responses\_max\_duration\_seconds | gauge     | Maximum response duration in REST API                              |
| rest\_responses\_duration\_seconds      | histogram | Histogram of response durations in the REST API <sup>(v1.8+)</sup> |
| grpc\_responses\_total                  | counter   | Number of responses through gRPC API [^metrics-per-collection]     |
| grpc\_responses\_fail\_total            | counter   | Number of failed responses through REST API                        |
| grpc\_responses\_avg\_duration\_seconds | gauge     | Average response duration in gRPC API                              |
| grpc\_responses\_min\_duration\_seconds | gauge     | Minimum response duration in gRPC API                              |
| grpc\_responses\_max\_duration\_seconds | gauge     | Maximum response duration in gRPC API                              |
| grpc\_responses\_duration\_seconds      | histogram | Histogram of response durations in the gRPC API <sup>(v1.8+)</sup> |

[^metrics-per-collection]: When `/metrics?per_collection=true` is used, these metrics include a `collection` label. See [Per-Collection API Metrics](#per-collection-api-metrics).

The output does not include metrics for the collection info, listing, and snapshot endpoints.

**Process Metrics**

| Name                                | Type    | Meaning                                                                                                                       |
| ----------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| memory\_active\_bytes               | gauge   | Total number of bytes in active pages allocated by the application ([ref](https://jemalloc.net/jemalloc.3.html#stats.active)) |
| memory\_allocated\_bytes            | gauge   | Total number of bytes allocated by the application ([ref](https://jemalloc.net/jemalloc.3.html#stats.allocated))              |
| memory\_metadata\_bytes             | gauge   | Total number of bytes dedicated to allocator metadata ([ref](https://jemalloc.net/jemalloc.3.html#stats.metadata))            |
| memory\_resident\_bytes             | gauge   | Maximum number of bytes in physically resident data pages mapped ([ref](https://jemalloc.net/jemalloc.3.html#stats.resident)) |
| memory\_retained\_bytes             | gauge   | Total number of bytes in virtual memory mappings ([ref](https://jemalloc.net/jemalloc.3.html#stats.retained))                 |
| process\_threads                    | gauge   | Number of used system threads <sup>(v1.16+)</sup>                                                                             |
| process\_open\_mmaps                | gauge   | Number of open memory maps <sup>(v1.16+)</sup>                                                                                |
| system\_max\_mmaps                  | gauge   | System wide maximum number of open memory maps <sup>(v1.16+)</sup>                                                            |
| process\_open\_fds                  | gauge   | Number of open file descriptors <sup>(v1.16+)</sup>                                                                           |
| process\_max\_fds                   | gauge   | Maximum number of open file descriptors <sup>(v1.16+)</sup>                                                                   |
| process\_minor\_page\_faults\_total | counter | Number of minor page faults encountered by the process <sup>(v1.16+)</sup>                                                    |
| process\_major\_page\_faults\_total | counter | Number of major page faults encountered by the process <sup>(v1.16+)</sup>                                                    |

**Cluster Metrics (Consensus)**

Metrics reporting the current cluster consensus state of the node. Exposed only
when distributed mode is enabled.

| Name                                | Type    | Meaning                                                                 |
| ----------------------------------- | ------- | ----------------------------------------------------------------------- |
| cluster\_enabled                    | gauge   | If distributed mode is enabled [^metrics-distributed]                   |
| cluster\_peers\_total               | gauge   | Number of cluster peers [^metrics-distributed]                          |
| cluster\_term                       | counter | Raft consensus term [^metrics-distributed]                              |
| cluster\_commit                     | counter | Raft consensus commit - last committed operation [^metrics-distributed] |
| cluster\_pending\_operations\_total | gauge   | Number of pending consensus operations [^metrics-distributed]           |
| cluster\_voter                      | gauge   | If a consensus voter (`1`) or learner (`0`) [^metrics-distributed]      |

[^metrics-distributed]: Only reported if distributed mode (cluster mode) is enabled. Enabled by default in all Qdrant Cloud environments. See `cluster.enabled` in the [configuration](https://qdrant.tech/documentation/ops-configuration/configuration/).

### Metrics Configuration

*Available as of v1.16.0*

In self-hosted environments you have further configuration options for metrics.

By default, all Qdrant metrics have no application namespace prefix. You may set
a prefix with `service.metrics_prefix` in the
[configuration](https://qdrant.tech/documentation/ops-configuration/configuration/).

To achieve this you may use the following environment variable for example:

```bash
QDRANT__SERVICE__METRICS_PREFIX="qdrant_"
```

### Per-Collection API Metrics

*Available as of v1.18.0*

By default, the API response metrics (`rest_responses_*`, `grpc_responses_*`) are global — they don't distinguish between collections. To request per-collection breakdowns, add `?per_collection=true` to the `/metrics` endpoint:

```bash
curl http://localhost:6333/metrics?per_collection=true
```

Enabling per-collection mode replaces the global metrics entirely. The unlabeled `rest_responses_total` and `grpc_responses_total` are not returned when per-collection data is enabled. Instead, `rest_responses_total` carries four labels (`method`, `endpoint`, `status`, `collection`) and `grpc_responses_total` carries three (`endpoint`, `status`, `collection`):

```text
rest_responses_total{method="POST",endpoint="/collections/{collection_name}/points/search",status="200",collection="my-collection"} 42
grpc_responses_total{endpoint="/qdrant.Points/Search",status="0",collection="my-collection"} 17
```

The `endpoint` label uses the route template, not the resolved path. The actual collection name is in the separate `collection` label.

> **Note**
>
> Per-collection metrics increase the cardinality of the <code>/metrics</code> output. In deployments with many collections, ensure that your monitoring infrastructure can handle the additional label values.

## Telemetry Endpoint

Qdrant also provides a `/telemetry` endpoint, which provides information about the current state of the database, including the number of vectors, shards, and other useful information. You can find the full documentation for this endpoint in the [API reference](https://api.qdrant.tech/api-reference/service/telemetry).

As of v1.19.0, telemetry includes a top-level `quota` field. See [Monitoring Quotas](https://qdrant.tech/documentation/ops-configuration/quotas/#monitoring-quotas).

## Cluster-Wide Telemetry

The `/telemetry` endpoint reports from the point of view of the peer being queried. Qdrant also provides a `/cluster/telemetry` endpoint, which aggregates telemetry from all peers.

This includes less information than `/telemetry`, but provides information like shard transfer progress more reliably.
You can find the full documentation for this endpoint in the [API reference](https://api.qdrant.tech/api-reference/service/cluster-telemetry).

## Kubernetes Health Endpoints

*Available as of v1.5.0*

Qdrant exposes three endpoints, namely
[`/healthz`](http://localhost:6333/healthz),
[`/livez`](http://localhost:6333/livez) and
[`/readyz`](http://localhost:6333/readyz), to indicate the current status of the
Qdrant server.

These currently provide the most basic status response, returning HTTP 200 if
Qdrant is started and ready to be used.

Regardless of whether an [API key](https://qdrant.tech/documentation/security/#authentication) is configured,
the endpoints are always accessible.

You can read more about Kubernetes health endpoints
[here](https://kubernetes.io/docs/reference/using-api/health-checks/).
