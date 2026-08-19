> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/install-configuration/observability/tracing.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/install-configuration/observability/tracing.md)

# Tracing

Visualize the Requests Flow

The tracing system allows developers to visualize call flows in their infrastructure.

Traefik uses [OpenTelemetry](https://opentelemetry.io/ "Link to website of OTel"), an open standard designed for distributed tracing.

## Configuration Example

To enable the tracing:

**File (YAML)**

```yaml
tracing: {}
```

**File (TOML)**

```toml
[tracing]
```

**CLI**

```bash
--tracing=true
```

**Helm Chart Values**

```yaml
  tracing:
    otlp:
        enabled: true
```

## Configuration Options

| Field                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                     | Default                    | Required |
| :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------- | :------- |
| <a id="opt-tracing-addInternals"></a>`tracing.addInternals`                                         | Enables tracing for internal resources (e.g.: `ping@internal`).                                                                                                                                                                                                                                                                                                                 | false                      | No       |
| <a id="opt-tracing-serviceName"></a>`tracing.serviceName`                                           | Defines the service name resource attribute.                                                                                                                                                                                                                                                                                                                                    | "traefik"                  | No       |
| <a id="opt-tracing-resourceAttributes"></a>`tracing.resourceAttributes`                             | Defines additional resource attributes to be sent to the collector. See [resourceAttributes](#resourceattributes) for details.                                                                                                                                                                                                                                                  | {}                         | No       |
| <a id="opt-tracing-sampleRate"></a>`tracing.sampleRate`                                             | The proportion of requests to trace, specified between 0.0 and 1.0.<br /> Since Traefik supports parent-based sampling ratios, root spans (i.e., spans initiated by Traefik) are sampled according to this rate, while child spans inherit the sampling decision of their parent (i.e., the tracing context from incoming requests). See [sampleRate](#samplerate) for details. | 1.0                        | No       |
| <a id="opt-tracing-capturedRequestHeaders"></a>`tracing.capturedRequestHeaders`                     | Defines the list of request headers to add as attributes.<br />It applies to client and server kind spans.                                                                                                                                                                                                                                                                      | \[]                        | No       |
| <a id="opt-tracing-capturedResponseHeaders"></a>`tracing.capturedResponseHeaders`                   | Defines the list of response headers to add as attributes.<br />It applies to client and server kind spans.                                                                                                                                                                                                                                                                     | \[]                        | False    |
| <a id="opt-tracing-safeQueryParams"></a>`tracing.safeQueryParams`                                   | By default, all query parameters are redacted.<br />Defines the list of query parameters to not redact.                                                                                                                                                                                                                                                                         | \[]                        | No       |
| <a id="opt-tracing-otlp-http"></a>`tracing.otlp.http`                                               | This instructs the exporter to send the tracing to the OpenTelemetry Collector using HTTP.<br /> Setting the sub-options with their default values.                                                                                                                                                                                                                             | null/false                 | No       |
| <a id="opt-tracing-otlp-http-endpoint"></a>`tracing.otlp.http.endpoint`                             | URL of the OpenTelemetry Collector to send tracing to.<br /> Format="`<scheme>://<host>:<port><path>`"                                                                                                                                                                                                                                                                          | "<https://localhost:4318>" | Yes      |
| <a id="opt-tracing-otlp-http-headers"></a>`tracing.otlp.http.headers`                               | Additional headers sent with tracing by the exporter to the OpenTelemetry Collector.                                                                                                                                                                                                                                                                                            |                            | No       |
| <a id="opt-tracing-otlp-http-tls-ca"></a>`tracing.otlp.http.tls.ca`                                 | Path to the certificate authority used for the secure connection to the OpenTelemetry Collector, it defaults to the system bundle.                                                                                                                                                                                                                                              | ""                         | No       |
| <a id="opt-tracing-otlp-http-tls-cert"></a>`tracing.otlp.http.tls.cert`                             | Path to the public certificate used for the secure connection to the OpenTelemetry Collector. When using this option, setting the `key` option is required.                                                                                                                                                                                                                     | ""                         | No       |
| <a id="opt-tracing-otlp-http-tls-key"></a>`tracing.otlp.http.tls.key`                               | Defines the path to the private key used for the TLS connection.                                                                                                                                                                                                                                                                                                                | ""                         | No       |
| <a id="opt-tracing-otlp-http-tls-insecureskipverify"></a>`tracing.otlp.http.tls.insecureskipverify` | If `insecureSkipVerify` is `true`, the TLS connection to the OpenTelemetry Collector accepts any certificate presented by the server regardless of the hostnames it covers.                                                                                                                                                                                                     | false                      | Yes      |
| <a id="opt-tracing-otlp-grpc"></a>`tracing.otlp.grpc`                                               | This instructs the exporter to send tracing to the OpenTelemetry Collector using gRPC.                                                                                                                                                                                                                                                                                          | false                      | No       |
| <a id="opt-tracing-otlp-grpc-endpoint"></a>`tracing.otlp.grpc.endpoint`                             | Address of the OpenTelemetry Collector to send tracing to.<br /> Format="`<host>:<port>`"                                                                                                                                                                                                                                                                                       | "localhost:4317"           | Yes      |
| <a id="opt-tracing-otlp-grpc-headers"></a>`tracing.otlp.grpc.headers`                               | Additional headers sent with tracing by the exporter to the OpenTelemetry Collector.                                                                                                                                                                                                                                                                                            | \[]                        | No       |
| <a id="opt-tracing-otlp-grpc-insecure"></a>`tracing.otlp.grpc.insecure`                             | Allows exporter to send tracing to the OpenTelemetry Collector without using a secured protocol.                                                                                                                                                                                                                                                                                | false                      | Yes      |
| <a id="opt-tracing-otlp-grpc-tls-ca"></a>`tracing.otlp.grpc.tls.ca`                                 | Path to the certificate authority used for the secure connection to the OpenTelemetry Collector, it defaults to the system bundle.                                                                                                                                                                                                                                              | ""                         | No       |
| <a id="opt-tracing-otlp-grpc-tls-cert"></a>`tracing.otlp.grpc.tls.cert`                             | Path to the public certificate used for the secure connection to the OpenTelemetry Collector. When using this option, setting the `key` option is required.                                                                                                                                                                                                                     | ""                         | No       |
| <a id="opt-tracing-otlp-grpc-tls-key"></a>`tracing.otlp.grpc.tls.key`                               | Defines the path to the private key used for the TLS connection.                                                                                                                                                                                                                                                                                                                | ""                         | No       |
| <a id="opt-tracing-otlp-grpc-tls-insecureskipverify"></a>`tracing.otlp.grpc.tls.insecureskipverify` | If `insecureSkipVerify` is `true`, the TLS connection to the OpenTelemetry Collector accepts any certificate presented by the server regardless of the hostnames it covers.                                                                                                                                                                                                     | false                      | Yes      |

## sampleRate

The `sampleRate` option controls trace sampling using a `ParentBased(TraceIDRatioBased)` strategy.

> **Sampling Strategy Behavior**
>
> - **Root spans** (trace originating at Traefik): Sampled according to the configured `sampleRate` using trace ID ratio-based sampling.
> - **Child spans** (requests with existing trace context): Inherit the sampling decision from the parent span, regardless of the local `sampleRate`.
>
> This ensures consistent sampling decisions across distributed traces: once a trace is sampled, all spans in that trace are sampled, providing complete end-to-end visibility.

## resourceAttributes

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
