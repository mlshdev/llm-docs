> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/install-configuration/observability/metrics.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/install-configuration/observability/metrics.md)

# Metrics

Traefik provides metrics in the [OpenTelemetry](#open-telemetry) format as well as the following vendor specific backends:

- [Datadog](#datadog)
- [InfluxDB2](#influxdb-v2)
- [Prometheus](#prometheus)
- [StatsD](#statsd)

Traefik Proxy has an official Grafana dashboard for both [on-premises](https://grafana.com/grafana/dashboards/17346)
and [Kubernetes](https://grafana.com/grafana/dashboards/17347) deployments.

***

## Open Telemetry

> **Default protocol**
> The OpenTelemetry exporter will export metrics to the collector using HTTP by default to <https://localhost:4318>.

### Configuration Example

To enable the OpenTelemetry metrics:

**File (YAML)**

```yaml
metrics:
  otlp: {}
```

**File (TOML)**

```toml
[metrics]
  [metrics.otlp]
```

**CLI**

```bash
--metrics.otlp=true
```

**Helm Chart Values**

```yaml
# values.yaml
metrics:
  # Disable Prometheus (enabled by default)
  prometheus: null
  # Enable providing OTel metrics
  otlp:
    enabled: true
    http:
      enabled: true
```

> **Helm Chart Configuration**
> Traefik can be configured to provide metrics in the OpenTelemetry format using the Helm Chart values.
> To know more about the Helm Chart options, refer to the [Helm Chart](https://github.com/traefik/traefik-helm-chart/blob/master/traefik/VALUES.md) (Find options `metrics.otlp`).

### Configuration Options

| Field                                                                                               | Description                                                                                                                                                      | Default                                                            | Required |
| :-------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- | :------- |
| <a id="opt-metrics-addInternals"></a>`metrics.addInternals`                                         | Enables metrics for internal resources (e.g.: `ping@internal`).                                                                                                  | false                                                              | No       |
| <a id="opt-metrics-otlp-serviceName"></a>`metrics.otlp.serviceName`                                 | Defines the service name resource attribute.                                                                                                                     | "traefik"                                                          | No       |
| <a id="opt-metrics-otlp-resourceAttributes"></a>`metrics.otlp.resourceAttributes`                   | Defines additional resource attributes to be sent to the collector. See [resourceAttributes](#resourceattributes) for details.                                   | \[]                                                                | No       |
| <a id="opt-metrics-otlp-addEntryPointsLabels"></a>`metrics.otlp.addEntryPointsLabels`               | Enable metrics on entry points.                                                                                                                                  | true                                                               | No       |
| <a id="opt-metrics-otlp-addRoutersLabels"></a>`metrics.otlp.addRoutersLabels`                       | Enable metrics on routers.                                                                                                                                       | false                                                              | No       |
| <a id="opt-metrics-otlp-addServicesLabels"></a>`metrics.otlp.addServicesLabels`                     | Enable metrics on services.                                                                                                                                      | true                                                               | No       |
| <a id="opt-metrics-otlp-explicitBoundaries"></a>`metrics.otlp.explicitBoundaries`                   | Explicit boundaries for Histogram data points.                                                                                                                   | ".005, .01, .025, .05, .075, .1, .25, .5, .75, 1, 2.5, 5, 7.5, 10" | No       |
| <a id="opt-metrics-otlp-pushInterval"></a>`metrics.otlp.pushInterval`                               | Interval at which metrics are sent to the OpenTelemetry Collector.                                                                                               | 10s                                                                | No       |
| <a id="opt-metrics-otlp-http"></a>`metrics.otlp.http`                                               | This instructs the exporter to send the metrics to the OpenTelemetry Collector using HTTP.<br /> Setting the sub-options with their default values.              | null/false                                                         | No       |
| <a id="opt-metrics-otlp-http-endpoint"></a>`metrics.otlp.http.endpoint`                             | URL of the OpenTelemetry Collector to send metrics to.<br /> Format="`<scheme>://<host>:<port><path>`"                                                           | "<https://localhost:4318>"                                         | Yes      |
| <a id="opt-metrics-otlp-http-headers"></a>`metrics.otlp.http.headers`                               | Additional headers sent with metrics by the exporter to the OpenTelemetry Collector.                                                                             | -                                                                  | No       |
| <a id="opt-metrics-otlp-http-tls-ca"></a>`metrics.otlp.http.tls.ca`                                 | Path to the certificate authority used for the secure connection to the OpenTelemetry Collector,<br />it defaults to the system bundle.                          | ""                                                                 | No       |
| <a id="opt-metrics-otlp-http-tls-cert"></a>`metrics.otlp.http.tls.cert`                             | Path to the public certificate used for the secure connection to the OpenTelemetry Collector.<br />When using this option, setting the `key` option is required. | ""                                                                 | No       |
| <a id="opt-metrics-otlp-http-tls-key"></a>`metrics.otlp.http.tls.key`                               | Defines the path to the private key used for the TLS connection.                                                                                                 | ""                                                                 | No       |
| <a id="opt-metrics-otlp-http-tls-insecureskipverify"></a>`metrics.otlp.http.tls.insecureskipverify` | Allow the TLS connection to the OpenTelemetry Collector accepts any certificate presented by the server regardless of the hostnames it covers.                   | false                                                              | Yes      |
| <a id="opt-metrics-otlp-grpc"></a>`metrics.otlp.grpc`                                               | This instructs the exporter to send metrics to the OpenTelemetry Collector using gRPC.                                                                           | null/false                                                         | No       |
| <a id="opt-metrics-otlp-grpc-endpoint"></a>`metrics.otlp.grpc.endpoint`                             | Address of the OpenTelemetry Collector to send metrics to.<br /> Format="`<host>:<port>`"                                                                        | "localhost:4317"                                                   | Yes      |
| <a id="opt-metrics-otlp-grpc-headers"></a>`metrics.otlp.grpc.headers`                               | Additional headers sent with metrics by the exporter to the OpenTelemetry Collector.                                                                             | -                                                                  | No       |
| <a id="opt-metrics-otlp-grpc-insecure"></a>`metrics.otlp.grpc.insecure`                             | Allows exporter to send metrics to the OpenTelemetry Collector without using a secured protocol.                                                                 | false                                                              | Yes      |
| <a id="opt-metrics-otlp-grpc-tls-ca"></a>`metrics.otlp.grpc.tls.ca`                                 | Path to the certificate authority used for the secure connection to the OpenTelemetry Collector,<br />it defaults to the system bundle.                          | -                                                                  | No       |
| <a id="opt-metrics-otlp-grpc-tls-cert"></a>`metrics.otlp.grpc.tls.cert`                             | Path to the public certificate used for the secure connection to the OpenTelemetry Collector.<br />When using this option, setting the `key` option is required. | -                                                                  | No       |
| <a id="opt-metrics-otlp-grpc-tls-key"></a>`metrics.otlp.grpc.tls.key`                               | Defines the path to the private key used for the TLS connection.                                                                                                 | -                                                                  | No       |
| <a id="opt-metrics-otlp-grpc-tls-insecureskipverify"></a>`metrics.otlp.grpc.tls.insecureskipverify` | Allow the TLS connection to the OpenTelemetry Collector accepts any certificate presented by the server regardless of the hostnames it covers.                   | false                                                              | Yes      |

### resourceAttributes

The `resourceAttributes` option allows setting the resource attributes sent along the traces.
Traefik also supports the `OTEL_RESOURCE_ATTRIBUTES` env variable to set up the resource attributes.

> **Kubernetes Resource Attributes Detection**
> Additionally, Traefik automatically discovers the following [Kubernetes resource attributes](https://opentelemetry.io/docs/specs/semconv/non-normative/k8s-attributes/) when running in a Kubernetes cluster:
>
> - `k8s.namespace.name`
> - `k8s.pod.uid`
> - `k8s.pod.name`
>
> Note that this automatic detection can fail, like if the Traefik pod is running in host network mode.
> In this case, you should provide the attributes with the option or the env variable.

## Vendors

### Datadog

#### Configuration Example

To enable the Datadog:

**File (YAML)**

```yaml
metrics:
  datadog: {}
```

**File (TOML)**

```toml
[metrics]
  [metrics.datadog]
```

**CLI**

```bash
--metrics.datadog=true
```

#### Configuration Options

| Field                                                                       | Description                                                                                              | Default          | Required |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :--------------- | :------- |
| <a id="opt-metrics-addInternals-2"></a>`metrics.addInternals`               | Enables metrics for internal resources (e.g.: `ping@internal`).                                          | false            | No       |
| <a id="opt-datadog-address"></a>`datadog.address`                           | Defines the address for the exporter to send metrics to datadog-agent. More information [here](#address) | `localhost:8125` | Yes      |
| <a id="opt-datadog-addEntryPointsLabels"></a>`datadog.addEntryPointsLabels` | Enable metrics on entry points.                                                                          | true             | No       |
| <a id="opt-datadog-addRoutersLabels"></a>`datadog.addRoutersLabels`         | Enable metrics on routers.                                                                               | false            | No       |
| <a id="opt-datadog-addServicesLabels"></a>`datadog.addServicesLabels`       | Enable metrics on services.                                                                              | true             | No       |
| <a id="opt-datadog-pushInterval"></a>`datadog.pushInterval`                 | Defines the interval used by the exporter to push metrics to datadog-agent.                              | 10s              | No       |
| <a id="opt-datadog-prefix"></a>`datadog.prefix`                             | Defines the prefix to use for metrics collection.                                                        | "traefik"        | No       |

##### `address`

Address instructs exporter to send metrics to datadog-agent at this address.

This address can be a Unix Domain Socket (UDS) in the following format: `unix:///path/to/datadog.socket`.
When the prefix is set to `unix`, the socket type will be automatically determined.
To explicitly define the socket type and avoid automatic detection, you can use the prefixes `unixgram` for `SOCK_DGRAM` (datagram sockets) and `unixstream` for `SOCK_STREAM` (stream sockets), respectively.

**File (YAML)**

```yaml
metrics:
  datadog:
    address: localhost:8125
```

**File (TOML)**

```toml
[metrics]
  [metrics.datadog]
    address = "localhost:8125"
```

**CLI**

```bash
--metrics.datadog.address=localhost:8125
```

### InfluxDB v2

#### Configuration Example

To enable the InfluxDB2:

**File (YAML)**

```yaml
metrics:
  influxDB2:
    address: http://localhost:8086
```

**File (TOML)**

```toml
[metrics]
  [metrics.influxDB2]
    address: http://localhost:8086
```

**CLI**

```bash
--metrics.influxdb2=true
```

#### Configuration Options

| Field                                                                                           | Description                                                           | Default                   | Required |
| :---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | :------------------------ | :------- |
| <a id="opt-metrics-addInternals-3"></a>`metrics.addInternals`                                   | Enables metrics for internal resources (e.g.: `ping@internal`).       | false                     | No       |
| <a id="opt-metrics-influxDB2-addEntryPointsLabels"></a>`metrics.influxDB2.addEntryPointsLabels` | Enable metrics on entry points.                                       | true                      | No       |
| <a id="opt-metrics-influxDB2-addRoutersLabels"></a>`metrics.influxDB2.addRoutersLabels`         | Enable metrics on routers.                                            | false                     | No       |
| <a id="opt-metrics-influxDB2-addServicesLabels"></a>`metrics.influxDB2.addServicesLabels`       | Enable metrics on services.                                           | true                      | No       |
| <a id="opt-metrics-influxDB2-additionalLabels"></a>`metrics.influxDB2.additionalLabels`         | Additional labels (InfluxDB tags) on all metrics.                     | -                         | No       |
| <a id="opt-metrics-influxDB2-pushInterval"></a>`metrics.influxDB2.pushInterval`                 | The interval used by the exporter to push metrics to InfluxDB server. | 10s                       | No       |
| <a id="opt-metrics-influxDB2-address"></a>`metrics.influxDB2.address`                           | Address of the InfluxDB v2 instance.                                  | "<http://localhost:8086>" | Yes      |
| <a id="opt-metrics-influxDB2-token"></a>`metrics.influxDB2.token`                               | Token with which to connect to InfluxDB v2.                           | -                         | Yes      |
| <a id="opt-metrics-influxDB2-org"></a>`metrics.influxDB2.org`                                   | Organisation where metrics will be stored.                            | -                         | Yes      |
| <a id="opt-metrics-influxDB2-bucket"></a>`metrics.influxDB2.bucket`                             | Bucket where metrics will be stored.                                  | -                         | Yes      |

### Prometheus

#### Configuration Example

To enable the Prometheus:

**File (YAML)**

```yaml
metrics:
  prometheus:
    buckets:
      - 0.1
      - 0.3
      - 1.2
      - 5.0
```

**File (TOML)**

```toml
[metrics]
  [metrics.prometheus]
    [metrics.prometheus.buckets]
      - 0.1
      - 0.3
      - 1.2
      - 5.0
```

**CLI**

```bash
--metrics.prometheus=true
```

#### Configuration Options

| Field                                                                                             | Description                                                                                                                              | Default                                  | Required |
| :------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------- |
| <a id="opt-metrics-addInternals-4"></a>`metrics.addInternals`                                     | Enables metrics for internal resources (e.g.: `ping@internals`).                                                                         | false                                    | No       |
| <a id="opt-metrics-prometheus-addEntryPointsLabels"></a>`metrics.prometheus.addEntryPointsLabels` | Enable metrics on entry points.                                                                                                          | true                                     | No       |
| <a id="opt-metrics-prometheus-addRoutersLabels"></a>`metrics.prometheus.addRoutersLabels`         | Enable metrics on routers.                                                                                                               | false                                    | No       |
| <a id="opt-metrics-prometheus-addServicesLabels"></a>`metrics.prometheus.addServicesLabels`       | Enable metrics on services.                                                                                                              | true                                     | No       |
| <a id="opt-metrics-prometheus-buckets"></a>`metrics.prometheus.buckets`                           | Buckets for latency metrics.                                                                                                             | "0.100000, 0.300000, 1.200000, 5.000000" | No       |
| <a id="opt-metrics-prometheus-manualRouting"></a>`metrics.prometheus.manualRouting`               | Set to *true*, it disables the default internal router in order to allow creating a custom router for the `prometheus@internal` service. | false                                    | No       |
| <a id="opt-metrics-prometheus-entryPoint"></a>`metrics.prometheus.entryPoint`                     | Traefik Entrypoint name used to expose metrics.                                                                                          | "traefik"                                | No       |
| <a id="opt-metrics-prometheus-headerLabels"></a>`metrics.prometheus.headerLabels`                 | Defines extra labels extracted from request headers for the `requests_total` metrics.<br />More information [here](#headerlabels).       |                                          | Yes      |

##### headerLabels

Defines the extra labels for the `requests_total` metrics, and for each of them, the request header containing the value for this label.
If the header is not present in the request it will be added nonetheless with an empty value.
The label must be a valid label name for Prometheus metrics, otherwise, the Prometheus metrics provider will fail to serve any Traefik-related metric.

> **How to provide the `Host` header value**
> The `Host` header is never present in the Header map of a request, as per go documentation says:
>
> ```Golang
> // For incoming requests, the Host header is promoted to the
> // Request.Host field and removed from the Header map.
> ```
>
> As a workaround, to obtain the Host of a request as a label, use instead the `X-Forwarded-Host` header.

###### Configuration Example

Here is an example of the entryPoint `requests_total` metric with an additional "useragent" label.

When configuring the label in Static Configuration:

**Configuration**

```yaml
# static_configuration.yaml
metrics:
  prometheus:
    headerLabels:
      useragent: User-Agent
```

**Request**

```bash
curl -H "User-Agent: foobar" http://localhost
```

**Metric**

```bash
traefik_entrypoint_requests_total\{code="200",entrypoint="web",method="GET",protocol="http",useragent="foobar"\} 1
```

### StatsD

#### Configuration Example

To enable the Statsd:

**File (YAML)**

```yaml
metrics:
  statsD:
    address: localhost:8125
```

**File (TOML)**

```toml
[metrics]
  [metrics.statsD]
    address: localhost:8125
```

**CLI**

```bash
--metrics.statsd=true
```

#### Configuration Options

| Field                                                                                     | Description                                                           | Default          | Required |
| :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :--------------- | :------- |
| <a id="opt-metrics-addInternals-5"></a>`metrics.addInternals`                             | Enables metrics for internal resources (e.g.: `ping@internals`).      | false            | No       |
| <a id="opt-metrics-statsD-addEntryPointsLabels"></a>`metrics.statsD.addEntryPointsLabels` | Enable metrics on entry points.                                       | true             | No       |
| <a id="opt-metrics-statsD-addRoutersLabels"></a>`metrics.statsD.addRoutersLabels`         | Enable metrics on routers.                                            | false            | No       |
| <a id="opt-metrics-statsD-addServicesLabels"></a>`metrics.statsD.addServicesLabels`       | Enable metrics on services.                                           | true             | No       |
| <a id="opt-metrics-statsD-pushInterval"></a>`metrics.statsD.pushInterval`                 | The interval used by the exporter to push metrics to DataDog server.  | 10s              | No       |
| <a id="opt-metrics-statsD-address"></a>`metrics.statsD.address`                           | Address instructs exporter to send metrics to statsd at this address. | "127.0.0.1:8125" | Yes      |
| <a id="opt-metrics-statsD-prefix"></a>`metrics.statsD.prefix`                             | The prefix to use for metrics collection.                             | "traefik"        | No       |

## Metrics Provided

### Global Metrics

\=== "OpenTelemetry"
\| Metric                     | Type  | [Labels](#labels)        | Description                                                        |
\|----------------------------|-------|--------------------------|--------------------------------------------------------------------|
\| <a id="opt-traefik-config-reloads-total"></a>`traefik_config_reloads_total` | Count |                          | The total count of configuration reloads.                          |
\| <a id="opt-traefik-config-last-reload-success"></a>`traefik_config_last_reload_success` | Gauge |                          | The timestamp of the last configuration reload success.            |
\| <a id="opt-traefik-open-connections"></a>`traefik_open_connections` | Gauge | `entrypoint`, `protocol` | The current count of open connections, by entrypoint and protocol. |
\| <a id="opt-traefik-tls-certs-not-after"></a>`traefik_tls_certs_not_after` | Gauge |                          | The expiration date of certificates.                               |

\=== "Prometheus"
\| Metric                     | Type  | [Labels](#labels)        | Description                                                        |
\|----------------------------|-------|--------------------------|--------------------------------------------------------------------|
\| <a id="opt-traefik-config-reloads-total-2"></a>`traefik_config_reloads_total` | Count |                          | The total count of configuration reloads.                          |
\| <a id="opt-traefik-config-last-reload-success-2"></a>`traefik_config_last_reload_success` | Gauge |                          | The timestamp of the last configuration reload success.            |
\| <a id="opt-traefik-open-connections-2"></a>`traefik_open_connections` | Gauge | `entrypoint`, `protocol` | The current count of open connections, by entrypoint and protocol. |
\| <a id="opt-traefik-tls-certs-not-after-2"></a>`traefik_tls_certs_not_after` | Gauge |      | The expiration date of certificates. |

\=== "Datadog"
\| Metric                     | Type  | [Labels](#labels)        | Description                                                        |
\|----------------------------|-------|--------------------------|--------------------------------------------------------------------|
\| <a id="opt-config-reload-total"></a>`config.reload.total` | Count |                          | The total count of configuration reloads.                          |
\| <a id="opt-config-reload-lastSuccessTimestamp"></a>`config.reload.lastSuccessTimestamp` | Gauge |                          | The timestamp of the last configuration reload success.            |
\| <a id="opt-open-connections"></a>`open.connections` | Gauge | `entrypoint`, `protocol` | The current count of open connections, by entrypoint and protocol. |
\| <a id="opt-tls-certs-notAfterTimestamp"></a>`tls.certs.notAfterTimestamp` | Gauge |                          | The expiration date of certificates.                               |

\=== "InfluxDB2"
\| Metric                     | Type  | [Labels](#labels)        | Description                                                        |
\|----------------------------|-------|--------------------------|--------------------------------------------------------------------|
\| <a id="opt-traefik-config-reload-total"></a>`traefik.config.reload.total` | Count |                          | The total count of configuration reloads.                          |
\| <a id="opt-traefik-config-reload-lastSuccessTimestamp"></a>`traefik.config.reload.lastSuccessTimestamp` | Gauge |                          | The timestamp of the last configuration reload success.            |
\| <a id="opt-traefik-open-connections-3"></a>`traefik.open.connections` | Gauge | `entrypoint`, `protocol` | The current count of open connections, by entrypoint and protocol. |
\| <a id="opt-traefik-tls-certs-notAfterTimestamp"></a>`traefik.tls.certs.notAfterTimestamp` | Gauge |                          | The expiration date of certificates.                               |

\=== "StatsD"
\| Metric       | Type  | [Labels](#labels)        | Description                                                        |
\|----------------------------|-------|--------------------------|--------------------------------------------------------------------|
\| <a id="opt-prefix-config-reload-total"></a>`{prefix}.config.reload.total` | Count |     | The total count of configuration reloads. |
\| <a id="opt-prefix-config-reload-lastSuccessTimestamp"></a>`{prefix}.config.reload.lastSuccessTimestamp` | Gauge |          | The timestamp of the last configuration reload success.            |
\| <a id="opt-prefix-open-connections"></a>`{prefix}.open.connections` | Gauge | `entrypoint`, `protocol` | The current count of open connections, by entrypoint and protocol. |
\| <a id="opt-prefix-tls-certs-notAfterTimestamp"></a>`{prefix}.tls.certs.notAfterTimestamp` | Gauge |    | The expiration date of certificates.   |

> **{prefix} Default Value**
> By default, {prefix} value is `traefik`.

#### Labels

Here is a comprehensive list of labels that are provided by the global metrics:

| Label                                   | Description                            | example               |
| --------------------------------------- | -------------------------------------- | --------------------- |
| <a id="opt-entrypoint"></a>`entrypoint` | Entrypoint that handled the connection | "example\_entrypoint" |
| <a id="opt-protocol"></a>`protocol`     | Connection protocol                    | "TCP"                 |

### OpenTelemetry Semantic Conventions

Traefik Proxy follows [official OpenTelemetry semantic conventions v1.23.1](https://github.com/open-telemetry/semantic-conventions/blob/v1.23.1/docs/http/http-metrics.md).

#### HTTP Server

| Metric                                                                      | Type      | [Labels](#labels)                                                                                                                        | Description                      |
| --------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| <a id="opt-http-server-request-duration"></a>`http.server.request.duration` | Histogram | `error.type`, `http.request.method`, `http.response.status_code`, `network.protocol.name`, `server.address`, `server.port`, `url.scheme` | Duration of HTTP server requests |

##### Labels

Here is a comprehensive list of labels that are provided by the metrics:

| Label                                                                 | Description                                                  | example       |
| --------------------------------------------------------------------- | ------------------------------------------------------------ | ------------- |
| <a id="opt-error-type"></a>`error.type`                               | Describes a class of error the operation ended with          | "500"         |
| <a id="opt-http-request-method"></a>`http.request.method`             | HTTP request method                                          | "GET"         |
| <a id="opt-http-response-status-code"></a>`http.response.status_code` | HTTP response status code                                    | "200"         |
| <a id="opt-network-protocol-name"></a>`network.protocol.name`         | OSI application layer or non-OSI equivalent                  | "http/1.1"    |
| <a id="opt-network-protocol-version"></a>`network.protocol.version`   | Version of the protocol specified in `network.protocol.name` | "1.1"         |
| <a id="opt-server-address"></a>`server.address`                       | Name of the local HTTP server that received the request      | "example.com" |
| <a id="opt-server-port"></a>`server.port`                             | Port of the local HTTP server that received the request      | "80"          |
| <a id="opt-url-scheme"></a>`url.scheme`                               | The URI scheme component identifying the used protocol       | "http"        |

#### HTTP Client

| Metric                                                                      | Type      | [Labels](#labels)                                                                                                                        | Description                      |
| --------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| <a id="opt-http-client-request-duration"></a>`http.client.request.duration` | Histogram | `error.type`, `http.request.method`, `http.response.status_code`, `network.protocol.name`, `server.address`, `server.port`, `url.scheme` | Duration of HTTP client requests |

##### Labels

Here is a comprehensive list of labels that are provided by the metrics:

| Label                                                                   | Description                                                  | example       |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ | ------------- |
| <a id="opt-error-type-2"></a>`error.type`                               | Describes a class of error the operation ended with          | "500"         |
| <a id="opt-http-request-method-2"></a>`http.request.method`             | HTTP request method                                          | "GET"         |
| <a id="opt-http-response-status-code-2"></a>`http.response.status_code` | HTTP response status code                                    | "200"         |
| <a id="opt-network-protocol-name-2"></a>`network.protocol.name`         | OSI application layer or non-OSI equivalent                  | "http/1.1"    |
| <a id="opt-network-protocol-version-2"></a>`network.protocol.version`   | Version of the protocol specified in `network.protocol.name` | "1.1"         |
| <a id="opt-server-address-2"></a>`server.address`                       | Name of the local HTTP server that received the request      | "example.com" |
| <a id="opt-server-port-2"></a>`server.port`                             | Port of the local HTTP server that received the request      | "80"          |
| <a id="opt-url-scheme-2"></a>`url.scheme`                               | The URI scheme component identifying the used protocol       | "http"        |

### HTTP Metrics

On top of the official OpenTelemetry semantic conventions, Traefik provides its own metrics to monitor the incoming traffic.

#### EntryPoint Metrics

\=== "OpenTelemetry"

```
| Metric   | Type      | [Labels](#labels)         | Description   |
|-----------------------|-----------|--------------------|--------------------------|
| <a id="opt-traefik-entrypoint-requests-total"></a>`traefik_entrypoint_requests_total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total count of HTTP requests received by an entrypoint.         |
| <a id="opt-traefik-entrypoint-requests-tls-total"></a>`traefik_entrypoint_requests_tls_total` | Count     | `tls_version`, `tls_cipher`, `entrypoint`  | The total count of HTTPS requests received by an entrypoint.        |
| <a id="opt-traefik-entrypoint-request-duration-seconds"></a>`traefik_entrypoint_request_duration_seconds` | Histogram | `code`, `method`, `protocol`, `entrypoint` | Request processing duration histogram on an entrypoint.             |
| <a id="opt-traefik-entrypoint-requests-bytes-total"></a>`traefik_entrypoint_requests_bytes_total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP requests in bytes handled by an entrypoint.  |
| <a id="opt-traefik-entrypoint-responses-bytes-total"></a>`traefik_entrypoint_responses_bytes_total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP responses in bytes handled by an entrypoint. |
```

\=== "Prometheus"

```
| Metric     | Type      | [Labels](#labels)      | Description      |
|-----------------------|-----------|------------------------|-------------------------|
| <a id="opt-traefik-entrypoint-requests-total-2"></a>`traefik_entrypoint_requests_total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total count of HTTP requests received by an entrypoint.         |
| <a id="opt-traefik-entrypoint-requests-tls-total-2"></a>`traefik_entrypoint_requests_tls_total` | Count     | `tls_version`, `tls_cipher`, `entrypoint`  | The total count of HTTPS requests received by an entrypoint.        |
| <a id="opt-traefik-entrypoint-request-duration-seconds-2"></a>`traefik_entrypoint_request_duration_seconds` | Histogram | `code`, `method`, `protocol`, `entrypoint` | Request processing duration histogram on an entrypoint.             |
| <a id="opt-traefik-entrypoint-requests-bytes-total-2"></a>`traefik_entrypoint_requests_bytes_total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP requests in bytes handled by an entrypoint.  |
| <a id="opt-traefik-entrypoint-responses-bytes-total-2"></a>`traefik_entrypoint_responses_bytes_total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP responses in bytes handled by an entrypoint. |
```

\=== "Datadog"

```
| Metric   | Type      | [Labels](#labels)     | Description     |
|-----------------------|-----------|------------------|---------------------------|
| <a id="opt-entrypoint-requests-total"></a>`entrypoint.requests.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total count of HTTP requests received by an entrypoint.         |
| <a id="opt-entrypoint-requests-tls-total"></a>`entrypoint.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `entrypoint`  | The total count of HTTPS requests received by an entrypoint.        |
| <a id="opt-entrypoint-request-duration-seconds"></a>`entrypoint.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `entrypoint` | Request processing duration histogram on an entrypoint.             |
| <a id="opt-entrypoint-requests-bytes-total"></a>`entrypoint.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP requests in bytes handled by an entrypoint.  |
| <a id="opt-entrypoint-responses-bytes-total"></a>`entrypoint.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP responses in bytes handled by an entrypoint. |
```

\=== "InfluxDB2"

```
| Metric    | Type      | [Labels](#labels)   | Description     |
|------------|-----------|-------------------|-----------------|
| <a id="opt-traefik-entrypoint-requests-total-3"></a>`traefik.entrypoint.requests.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total count of HTTP requests received by an entrypoint.         |
| <a id="opt-traefik-entrypoint-requests-tls-total-3"></a>`traefik.entrypoint.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `entrypoint`  | The total count of HTTPS requests received by an entrypoint.        |
| <a id="opt-traefik-entrypoint-request-duration-seconds-3"></a>`traefik.entrypoint.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `entrypoint` | Request processing duration histogram on an entrypoint.             |
| <a id="opt-traefik-entrypoint-requests-bytes-total-3"></a>`traefik.entrypoint.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP requests in bytes handled by an entrypoint.  |
| <a id="opt-traefik-entrypoint-responses-bytes-total-3"></a>`traefik.entrypoint.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP responses in bytes handled by an entrypoint. |
```

\=== "StatsD"

```
| Metric                     | Type  | [Labels](#labels)        | Description                                                        |
|----------------------------|-------|--------------------------|--------------------------------------------------------------------|
| <a id="opt-prefix-entrypoint-requests-total"></a>`{prefix}.entrypoint.requests.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total count of HTTP requests received by an entrypoint.         |
| <a id="opt-prefix-entrypoint-requests-tls-total"></a>`{prefix}.entrypoint.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `entrypoint`  | The total count of HTTPS requests received by an entrypoint.        |
| <a id="opt-prefix-entrypoint-request-duration-seconds"></a>`{prefix}.entrypoint.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `entrypoint` | Request processing duration histogram on an entrypoint.             |
| <a id="opt-prefix-entrypoint-requests-bytes-total"></a>`{prefix}.entrypoint.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP requests in bytes handled by an entrypoint.  |
| <a id="opt-prefix-entrypoint-responses-bytes-total"></a>`{prefix}.entrypoint.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `entrypoint` | The total size of HTTP responses in bytes handled by an entrypoint. |
```

> **{prefix} Default Value**
> By default, {prefix} value is `traefik`.

#### Router Metrics

\=== "OpenTelemetry"

```
| Metric    | Type      | [Labels](#labels)         | Description           |
|-----------------------|-----------|----------------------|--------------------------------|
| <a id="opt-traefik-router-requests-total"></a>`traefik_router_requests_total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total count of HTTP requests handled by a router.          |
| <a id="opt-traefik-router-requests-tls-total"></a>`traefik_router_requests_tls_total` | Count     | `tls_version`, `tls_cipher`, `router`, `service`  | The total count of HTTPS requests handled by a router.         |
| <a id="opt-traefik-router-request-duration-seconds"></a>`traefik_router_request_duration_seconds` | Histogram | `code`, `method`, `protocol`, `router`, `service` | Request processing duration histogram on a router.             |
| <a id="opt-traefik-router-requests-bytes-total"></a>`traefik_router_requests_bytes_total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP requests in bytes handled by a router.  |
| <a id="opt-traefik-router-responses-bytes-total"></a>`traefik_router_responses_bytes_total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP responses in bytes handled by a router. |
```

\=== "Prometheus"

```
| Metric                | Type      | [Labels](#labels)                                 | Description                                                    |
|-----------------------|-----------|---------------------------------------------------|----------------------------------------------------------------|
| <a id="opt-traefik-router-requests-total-2"></a>`traefik_router_requests_total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total count of HTTP requests handled by a router.          |
| <a id="opt-traefik-router-requests-tls-total-2"></a>`traefik_router_requests_tls_total` | Count     | `tls_version`, `tls_cipher`, `router`, `service`  | The total count of HTTPS requests handled by a router.         |
| <a id="opt-traefik-router-request-duration-seconds-2"></a>`traefik_router_request_duration_seconds` | Histogram | `code`, `method`, `protocol`, `router`, `service` | Request processing duration histogram on a router.             |
| <a id="opt-traefik-router-requests-bytes-total-2"></a>`traefik_router_requests_bytes_total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP requests in bytes handled by a router.  |
| <a id="opt-traefik-router-responses-bytes-total-2"></a>`traefik_router_responses_bytes_total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP responses in bytes handled by a router. |
```

\=== "Datadog"

```
| Metric    | Type      | [Labels](#labels)   | Description   |
|-------------|-----------|---------------|---------------------|
| <a id="opt-router-requests-total"></a>`router.requests.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total count of HTTP requests handled by a router.          |
| <a id="opt-router-requests-tls-total"></a>`router.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `router`, `service`  | The total count of HTTPS requests handled by a router.         |
| <a id="opt-router-request-duration-seconds"></a>`router.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `router`, `service` | Request processing duration histogram on a router.             |
| <a id="opt-router-requests-bytes-total"></a>`router.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP requests in bytes handled by a router.  |
| <a id="opt-router-responses-bytes-total"></a>`router.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP responses in bytes handled by a router. |
```

\=== "InfluxDB2"

```
| Metric                | Type      | [Labels](#labels)                                 | Description                                                    |
|-----------------------|-----------|---------------------------------------------------|----------------------------------------------------------------|
| <a id="opt-traefik-router-requests-total-3"></a>`traefik.router.requests.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total count of HTTP requests handled by a router.          |
| <a id="opt-traefik-router-requests-tls-total-3"></a>`traefik.router.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `router`, `service`  | The total count of HTTPS requests handled by a router.         |
| <a id="opt-traefik-router-request-duration-seconds-3"></a>`traefik.router.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `router`, `service` | Request processing duration histogram on a router.             |
| <a id="opt-traefik-router-requests-bytes-total-3"></a>`traefik.router.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP requests in bytes handled by a router.  |
| <a id="opt-traefik-router-responses-bytes-total-3"></a>`traefik.router.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP responses in bytes handled by a router. |
```

\=== "StatsD"

```
| Metric     | Type      | [Labels](#labels)      | Description   |
|-----------------------|-----------|---------------|-------------|
| <a id="opt-prefix-router-requests-total"></a>`{prefix}.router.requests.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total count of HTTP requests handled by a router.          |
| <a id="opt-prefix-router-requests-tls-total"></a>`{prefix}.router.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `router`, `service`  | The total count of HTTPS requests handled by a router.         |
| <a id="opt-prefix-router-request-duration-seconds"></a>`{prefix}.router.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `router`, `service` | Request processing duration histogram on a router.             |
| <a id="opt-prefix-router-requests-bytes-total"></a>`{prefix}.router.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP requests in bytes handled by a router.  |
| <a id="opt-prefix-router-responses-bytes-total"></a>`{prefix}.router.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `router`, `service` | The total size of HTTP responses in bytes handled by a router. |
```

> **{prefix} Default Value**
> By default, {prefix} value is `traefik`.

#### Service Metrics

\=== "OpenTelemetry"

```
| Metric    | Type      | Labels      | Description     |
|-----------------------|-----------|------------|------------|
| <a id="opt-traefik-service-requests-total"></a>`traefik_service_requests_total` | Count     | `code`, `method`, `protocol`, `service` | The total count of HTTP requests processed on a service.    |
| <a id="opt-traefik-service-requests-tls-total"></a>`traefik_service_requests_tls_total` | Count     | `tls_version`, `tls_cipher`, `service`  | The total count of HTTPS requests processed on a service.   |
| <a id="opt-traefik-service-request-duration-seconds"></a>`traefik_service_request_duration_seconds` | Histogram | `code`, `method`, `protocol`, `service` | Request processing duration histogram on a service.         |
| <a id="opt-traefik-service-retries-total"></a>`traefik_service_retries_total` | Count     | `service`                               | The count of requests retries on a service.                 |
| <a id="opt-traefik-service-server-up"></a>`traefik_service_server_up` | Gauge     | `service`, `url`                        | Current service's server status, 0 for a down or 1 for up. Only for services configured with healthcheck. |
| <a id="opt-traefik-service-requests-bytes-total"></a>`traefik_service_requests_bytes_total` | Count     | `code`, `method`, `protocol`, `service` | The total size of requests in bytes received by a service.  |
| <a id="opt-traefik-service-responses-bytes-total"></a>`traefik_service_responses_bytes_total` | Count     | `code`, `method`, `protocol`, `service` | The total size of responses in bytes returned by a service. |
```

\=== "Prometheus"

```
| Metric    | Type      | Labels    | Description    |
|-----------------------|-----------|-------|------------|
| <a id="opt-traefik-service-requests-total-2"></a>`traefik_service_requests_total` | Count     | `code`, `method`, `protocol`, `service` | The total count of HTTP requests processed on a service.    |
| <a id="opt-traefik-service-requests-tls-total-2"></a>`traefik_service_requests_tls_total` | Count     | `tls_version`, `tls_cipher`, `service`  | The total count of HTTPS requests processed on a service.   |
| <a id="opt-traefik-service-request-duration-seconds-2"></a>`traefik_service_request_duration_seconds` | Histogram | `code`, `method`, `protocol`, `service` | Request processing duration histogram on a service.         |
| <a id="opt-traefik-service-retries-total-2"></a>`traefik_service_retries_total` | Count     | `service`                               | The count of requests retries on a service.                 |
| <a id="opt-traefik-service-server-up-2"></a>`traefik_service_server_up` | Gauge     | `service`, `url`                        | Current service's server status, 0 for a down or 1 for up. Only for services configured with healthcheck. |
| <a id="opt-traefik-service-requests-bytes-total-2"></a>`traefik_service_requests_bytes_total` | Count     | `code`, `method`, `protocol`, `service` | The total size of requests in bytes received by a service.  |
| <a id="opt-traefik-service-responses-bytes-total-2"></a>`traefik_service_responses_bytes_total` | Count     | `code`, `method`, `protocol`, `service` | The total size of responses in bytes returned by a service. |
```

\=== "Datadog"

```
| Metric    | Type      | Labels    | Description |
|-----------------------|-----------|--------|------------------|
| <a id="opt-service-requests-total"></a>`service.requests.total` | Count     | `code`, `method`, `protocol`, `service` | The total count of HTTP requests processed on a service.    |
| <a id="opt-router-service-tls-total"></a>`router.service.tls.total` | Count     | `tls_version`, `tls_cipher`, `service`  | The total count of HTTPS requests processed on a service.   |
| <a id="opt-service-request-duration-seconds"></a>`service.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `service` | Request processing duration histogram on a service.         |
| <a id="opt-service-retries-total"></a>`service.retries.total` | Count     | `service`                               | The count of requests retries on a service.                 |
| <a id="opt-service-server-up"></a>`service.server.up` | Gauge     | `service`, `url`                        | Current service's server status, 0 for a down or 1 for up. Only for services configured with healthcheck. |
| <a id="opt-service-requests-bytes-total"></a>`service.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `service` | The total size of requests in bytes received by a service.  |
| <a id="opt-service-responses-bytes-total"></a>`service.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `service` | The total size of responses in bytes returned by a service. |
```

\=== "InfluxDB2"

```
| Metric                | Type      | Labels                                  | Description                                                 |
|-----------------------|-----------|-----------------------------------------|-------------------------------------------------------------|
| <a id="opt-traefik-service-requests-total-3"></a>`traefik.service.requests.total` | Count     | `code`, `method`, `protocol`, `service` | The total count of HTTP requests processed on a service.    |
| <a id="opt-traefik-service-requests-tls-total-3"></a>`traefik.service.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `service`  | The total count of HTTPS requests processed on a service.   |
| <a id="opt-traefik-service-request-duration-seconds-3"></a>`traefik.service.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `service` | Request processing duration histogram on a service.         |
| <a id="opt-traefik-service-retries-total-3"></a>`traefik.service.retries.total` | Count     | `service`                               | The count of requests retries on a service.                 |
| <a id="opt-traefik-service-server-up-3"></a>`traefik.service.server.up` | Gauge     | `service`, `url`                        | Current service's server status, 0 for a down or 1 for up. Only for services configured with healthcheck. |
| <a id="opt-traefik-service-requests-bytes-total-3"></a>`traefik.service.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `service` | The total size of requests in bytes received by a service.  |
| <a id="opt-traefik-service-responses-bytes-total-3"></a>`traefik.service.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `service` | The total size of responses in bytes returned by a service. |
```

\=== "StatsD"

```
| Metric                | Type      | Labels   | Description    |
|-----------------------|-----------|-----|---------|
| <a id="opt-prefix-service-requests-total"></a>`{prefix}.service.requests.total` | Count     | `code`, `method`, `protocol`, `service` | The total count of HTTP requests processed on a service.    |
| <a id="opt-prefix-service-requests-tls-total"></a>`{prefix}.service.requests.tls.total` | Count     | `tls_version`, `tls_cipher`, `service`  | The total count of HTTPS requests processed on a service.   |
| <a id="opt-prefix-service-request-duration-seconds"></a>`{prefix}.service.request.duration.seconds` | Histogram | `code`, `method`, `protocol`, `service` | Request processing duration histogram on a service.         |
| <a id="opt-prefix-service-retries-total"></a>`{prefix}.service.retries.total` | Count     | `service`                               | The count of requests retries on a service.                 |
| <a id="opt-prefix-service-server-up"></a>`{prefix}.service.server.up` | Gauge     | `service`, `url`                        | Current service's server status, 0 for a down or 1 for up. Only for services configured with healthcheck. |
| <a id="opt-prefix-service-requests-bytes-total"></a>`{prefix}.service.requests.bytes.total` | Count     | `code`, `method`, `protocol`, `service` | The total size of requests in bytes received by a service.  |
| <a id="opt-prefix-service-responses-bytes-total"></a>`{prefix}.service.responses.bytes.total` | Count     | `code`, `method`, `protocol`, `service` | The total size of responses in bytes returned by a service. |
```

> **{prefix} Default Value**
> By default, {prefix} value is `traefik`.

##### Labels

Here is a comprehensive list of labels that are provided by the metrics:

| Label                                     | Description                           | example                      |
| ----------------------------------------- | ------------------------------------- | ---------------------------- |
| <a id="opt-cn"></a>`cn`                   | Certificate Common Name               | "example.com"                |
| <a id="opt-code"></a>`code`               | Request code                          | "200"                        |
| <a id="opt-entrypoint-2"></a>`entrypoint` | Entrypoint that handled the request   | "example\_entrypoint"        |
| <a id="opt-method"></a>`method`           | Request Method                        | "GET"                        |
| <a id="opt-protocol-2"></a>`protocol`     | Request protocol                      | "http"                       |
| <a id="opt-router"></a>`router`           | Router that handled the request       | "example\_router"            |
| <a id="opt-sans"></a>`sans`               | Certificate Subject Alternative NameS | "example.com"                |
| <a id="opt-serial"></a>`serial`           | Certificate Serial Number             | "123..."                     |
| <a id="opt-service"></a>`service`         | Service that handled the request      | "example\_service\@provider" |
| <a id="opt-tls-cipher"></a>`tls_cipher`   | TLS cipher used for the request       | "TLS\_FALLBACK\_SCSV"        |
| <a id="opt-tls-version"></a>`tls_version` | TLS version used for the request      | "1.0"                        |
| <a id="opt-url"></a>`url`                 | Service server url                    | "<http://example.com>"       |

> **`method` label value**
> If the HTTP method verb on a request is not one defined in the set of common methods for [`HTTP/1.1`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
> or the [`PRI`](https://datatracker.ietf.org/doc/html/rfc7540#section-11.6) verb (for `HTTP/2`),
> then the value for the method label becomes `EXTENSION_METHOD`.
