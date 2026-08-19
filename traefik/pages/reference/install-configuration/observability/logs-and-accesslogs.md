> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/install-configuration/observability/logs-and-accesslogs.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/install-configuration/observability/logs-and-accesslogs.md)

## Logs

Logs concern everything that happens to Traefik itself (startup, configuration, events, shutdown, and so on).

### Configuration Example

**File (YAML)**

```yaml
log:
  filePath: "/path/to/log-file.log"
  format: json
  level: INFO
```

**File (TOML)**

```toml
[log]
  filePath = "/path/to/log-file.log"
  format = "json"
  level = "INFO"
```

**CLI**

```sh
--log.filePath=/path/to/log-file.log
--log.format=json
--log.level=INFO
```

### Configuration Options

The section below describe how to configure Traefik logs using the static configuration.

| Field                                           | Description                                                                                                                                                                                                                                                                               | Default  | Required |
| :---------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- |
| <a id="opt-log-filePath"></a>`log.filePath`     | By default, the logs are written to the standard output.<br />You can configure a file path instead using the `filePath` option. When `filePath` is specified, Traefik will write logs only to that file (not to standard output).                                                        | -        | No       |
| <a id="opt-log-format"></a>`log.format`         | Log format (`common`or `json`).<br /> The fields displayed with the format `common` cannot be customized.                                                                                                                                                                                 | "common" | No       |
| <a id="opt-log-level"></a>`log.level`           | Log level (`TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL`, and `PANIC`)                                                                                                                                                                                                               | ERROR    | No       |
| <a id="opt-log-noColor"></a>`log.noColor`       | When using the format `common`, disables the colorized output.                                                                                                                                                                                                                            | false    | No       |
| <a id="opt-log-maxSize"></a>`log.maxSize`       | Maximum size in megabytes of the log file before it gets rotated.                                                                                                                                                                                                                         | 100MB    | No       |
| <a id="opt-log-maxAge"></a>`log.maxAge`         | Maximum number of days to retain old log files based on the timestamp encoded in their filename.<br /> A day is defined as 24 hours and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc.<br />By default files are not removed based on their age. | 0        | No       |
| <a id="opt-log-maxBackups"></a>`log.maxBackups` | Maximum number of old log files to retain.<br />The default is to retain all old log files.                                                                                                                                                                                               | 0        | No       |
| <a id="opt-log-compress"></a>`log.compress`     | Compress log files in gzip after rotation. Compression is always enabled when log rotation is active; this field has no effect.                                                                                                                                                           | false    | No       |

### OpenTelemetry

Traefik supports OpenTelemetry for logging. To enable OpenTelemetry, you need to set the following in the static configuration:

**File (YAML)**

```yaml
experimental:
  otlpLogs: true
```

**File (TOML)**

```toml
[experimental]
  otlpLogs = true
```

**CLI**

```sh
--experimental.otlpLogs=true
```

> **Warning**
> This is an experimental feature.
> **Stdio logs remain available**
> When OTLP logging is enabled, standard output (stdio) logs are still available and will continue to be written alongside OTLP exports.

#### Configuration Example

**File (YAML)**

```yaml
experimental:
  otlpLogs: true

log:
  otlp:
    http:
      endpoint: https://collector:4318/v1/logs
      headers:
        Authorization: Bearer auth_asKXRhIMplM7El1JENjrotGouS1LYRdL
```

**File (TOML)**

```toml
[experimental]
  otlpLogs = true

[log.otlp]
  http.endpoint = "https://collector:4318/v1/logs"
  http.headers.Authorization = "Bearer auth_asKXRhIMplM7El1JENjrotGouS1LYRdL"
```

**CLI**

```sh
--experimental.otlpLogs=true
--log.otlp.http.endpoint=https://collector:4318/v1/logs
--log.otlp.http.headers.Authorization=Bearer auth_asKXRhIMplM7El1JENjrotGouS1LYRdL
```

#### Configuration Options

| Field                                                                                       | Description                                                                                                                            | Default                  | Required |
| :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :------- |
| <a id="opt-log-otlp-serviceName"></a>`log.otlp.serviceName`                                 | Service name used in selected backend.                                                                                                 | "traefik"                | No       |
| <a id="opt-log-otlp-resourceAttributes"></a>`log.otlp.resourceAttributes`                   | Defines additional resource attributes to be sent to the collector.  See [resourceAttributes](#resourceattributes) for details.        | \[]                      | No       |
| <a id="opt-log-otlp-http"></a>`log.otlp.http`                                               | This instructs the exporter to send logs to the OpenTelemetry Collector using HTTP.                                                    |                          | No       |
| <a id="opt-log-otlp-http-endpoint"></a>`log.otlp.http.endpoint`                             | The endpoint of the OpenTelemetry Collector. (format=`<scheme>://<host>:<port><path>`)                                                 | `https://localhost:4318` | No       |
| <a id="opt-log-otlp-http-headers"></a>`log.otlp.http.headers`                               | Additional headers sent with logs by the exporter to the OpenTelemetry Collector.                                                      | \[ ]                     | No       |
| <a id="opt-log-otlp-http-tls"></a>`log.otlp.http.tls`                                       | Defines the Client TLS configuration used by the exporter to send logs to the OpenTelemetry Collector.                                 |                          | No       |
| <a id="opt-log-otlp-http-tls-ca"></a>`log.otlp.http.tls.ca`                                 | The path to the certificate authority used for the secure connection to the OpenTelemetry Collector, it defaults to the system bundle. |                          | No       |
| <a id="opt-log-otlp-http-tls-cert"></a>`log.otlp.http.tls.cert`                             | The path to the certificate to use for the OpenTelemetry Collector.                                                                    |                          | No       |
| <a id="opt-log-otlp-http-tls-key"></a>`log.otlp.http.tls.key`                               | The path to the key to use for the OpenTelemetry Collector.                                                                            |                          | No       |
| <a id="opt-log-otlp-http-tls-insecureSkipVerify"></a>`log.otlp.http.tls.insecureSkipVerify` | Instructs the OpenTelemetry Collector to accept any certificate presented by the server regardless of the hostname in the certificate. | false                    | No       |
| <a id="opt-log-otlp-grpc"></a>`log.otlp.grpc`                                               | This instructs the exporter to send logs to the OpenTelemetry Collector using gRPC.                                                    |                          | No       |
| <a id="opt-log-otlp-grpc-endpoint"></a>`log.otlp.grpc.endpoint`                             | The endpoint of the OpenTelemetry Collector. (format=`<host>:<port>`)                                                                  | `localhost:4317`         | No       |
| <a id="opt-log-otlp-grpc-headers"></a>`log.otlp.grpc.headers`                               | Additional headers sent with logs by the exporter to the OpenTelemetry Collector.                                                      | \[ ]                     | No       |
| <a id="opt-log-otlp-grpc-insecure"></a>`log.otlp.grpc.insecure`                             | Instructs the exporter to send logs to the OpenTelemetry Collector using an insecure protocol.                                         | false                    | No       |
| <a id="opt-log-otlp-grpc-tls"></a>`log.otlp.grpc.tls`                                       | Defines the Client TLS configuration used by the exporter to send logs to the OpenTelemetry Collector.                                 |                          | No       |
| <a id="opt-log-otlp-grpc-tls-ca"></a>`log.otlp.grpc.tls.ca`                                 | The path to the certificate authority used for the secure connection to the OpenTelemetry Collector, it defaults to the system bundle. |                          | No       |
| <a id="opt-log-otlp-grpc-tls-cert"></a>`log.otlp.grpc.tls.cert`                             | The path to the certificate to use for the OpenTelemetry Collector.                                                                    |                          | No       |
| <a id="opt-log-otlp-grpc-tls-key"></a>`log.otlp.grpc.tls.key`                               | The path to the key to use for the OpenTelemetry Collector.                                                                            |                          | No       |
| <a id="opt-log-otlp-grpc-tls-insecureSkipVerify"></a>`log.otlp.grpc.tls.insecureSkipVerify` | Instructs the OpenTelemetry Collector to accept any certificate presented by the server regardless of the hostname in the certificate. | false                    | No       |

#### resourceAttributes

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

## AccessLogs

Access logs concern everything that happens to the requests handled by Traefik.

> **Stdio logs are not enabled by default alongside OTLP exports**
> If you would like Stdio access logs to be available, use accessLog.dualOutput option.

### Configuration Example

**File (YAML)**

```yaml
accessLog:
  # JSON format
  format: json
  # Filter on status codes, retry attempts and minimal duration
  filters:
    statusCodes:
      - "200"
      - "300-302"
    retryAttempts: true
    minDuration: "10ms"
  fields:
    # Keep all the fields by default
    defaultMode: keep
    names:
      # Drop the Field ClientUserName
      ClientUsername: drop
    headers:
      # Keep all the headers by default
      defaultMode: keep
      names:
        # Redact the User-Agent header value
        User-Agent: redact
        # Drop the Authorization header value
        Authorization: drop
    queryParameters:
      # Drop all query parameters
      defaultMode: drop
```

**File (TOML)**

```toml
[accessLog]
  format = "json"

  [accessLog.filters]
    statusCodes = [ "200", "300-302" ]
    retryAttempts = true
    minDuration = "10ms"

  [accessLog.fields]
    defaultMode = "keep"

    [accessLog.fields.names]
      ClientUsername = "drop"

    [accessLog.fields.headers]
      defaultMode = "keep"

      [accessLog.fields.headers.names]
        User-Agent = "redact"
        Authorization = "drop"

    [accessLog.fields.queryParameters]
      defaultMode = "drop"
```

**CLI**

```sh
--accesslog=true
--accesslog.dualoutput=true
--accesslog.format=json
--accesslog.filters.statuscodes=200,300-302
--accesslog.filters.retryattempts
--accesslog.filters.minduration=10ms
--accesslog.fields.defaultmode=keep
--accesslog.fields.names.ClientUsername=drop
--accesslog.fields.headers.defaultmode=keep
--accesslog.fields.headers.names.User-Agent=redact
--accesslog.fields.headers.names.Authorization=drop
--accesslog.fields.queryparameters.defaultmode=drop
```

### Configuration Options

The section below describes how to configure Traefik access logs using the static configuration.

| Field                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                            | Default  | Required |
| :---------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- |
| <a id="opt-accesslog-filePath"></a>`accesslog.filePath`                                                     | By default, the access logs are written to the standard output.<br />You can configure a file path instead using the `filePath` option.                                                                                                                                                                                                                                |          | No       |
| <a id="opt-accesslog-dualOutput"></a>`accesslog.dualOutput`                                                 | Force Stdio logging, even if OTLP is configured. By default, Stdio logging is disabled when OTLP is enabled for performance reasons.                                                                                                                                                                                                                                   | false    | No       |
| <a id="opt-accesslog-format"></a>`accesslog.format`                                                         | By default, logs are written using the Traefik Common Log Format (CLF).<br />Available formats: [`common`](#traefik-clf-format-fields) (Traefik extended CLF), [`genericCLF`](#generic-clf-format-fields) (standard CLF compatible with analyzers), or [`json`](#json-format-fields).<br />If the given format is unsupported, the default (`common`) is used instead. | "common" | No       |
| <a id="opt-accesslog-bufferingSize"></a>`accesslog.bufferingSize`                                           | To write the logs in an asynchronous fashion, specify a  `bufferingSize` option.<br />This option represents the number of log lines Traefik will keep in memory before writing them to the selected output.<br />In some cases, this option can greatly help performances.                                                                                            | 0        | No       |
| <a id="opt-accesslog-addInternals"></a>`accesslog.addInternals`                                             | Enables access logs for internal resources (e.g.: `ping@internal`).                                                                                                                                                                                                                                                                                                    | false    | No       |
| <a id="opt-accesslog-filters-statusCodes"></a>`accesslog.filters.statusCodes`                               | Limit the access logs to requests with a status codes in the specified range.                                                                                                                                                                                                                                                                                          | \[ ]     | No       |
| <a id="opt-accesslog-filters-retryAttempts"></a>`accesslog.filters.retryAttempts`                           | Keep the access logs when at least one retry has happened.                                                                                                                                                                                                                                                                                                             | false    | No       |
| <a id="opt-accesslog-filters-minDuration"></a>`accesslog.filters.minDuration`                               | Keep access logs when requests take longer than the specified duration (provided in seconds or as a valid duration format, see [time.ParseDuration](https://golang.org/pkg/time/#ParseDuration)).                                                                                                                                                                      | 0        | No       |
| <a id="opt-accesslog-fields-defaultMode"></a>`accesslog.fields.defaultMode`                                 | Mode to apply by default to the access logs fields (`keep` or `drop`).                                                                                                                                                                                                                                                                                                 | keep     | No       |
| <a id="opt-accesslog-fields-names"></a>`accesslog.fields.names`                                             | Set the fields list to display in the access logs (format `name:mode`).<br /> Available fields list [here](#json-format-fields).                                                                                                                                                                                                                                       | \[ ]     | No       |
| <a id="opt-accesslog-fields-headers-defaultMode"></a>`accesslog.fields.headers.defaultMode`                 | Mode to apply by default to the access logs headers (`keep`, `redact` or `drop`).                                                                                                                                                                                                                                                                                      | drop     | No       |
| <a id="opt-accesslog-fields-headers-names"></a>`accesslog.fields.headers.names`                             | Set the headers list to display in the access logs (format `name:mode`).                                                                                                                                                                                                                                                                                               | \[ ]     | No       |
| <a id="opt-accesslog-fields-queryParameters-defaultMode"></a>`accesslog.fields.queryParameters.defaultMode` | Mode to apply by default to the access logs query parameters (`keep` or `drop`)                                                                                                                                                                                                                                                                                        | keep     | No       |

### OpenTelemetry

Traefik supports OpenTelemetry for access logs. To enable OpenTelemetry, you need to set the following in the static configuration:

**File (YAML)**

```yaml
experimental:
  otlpLogs: true
```

**File (TOML)**

```toml
[experimental]
  otlpLogs = true
```

**CLI**

```sh
--experimental.otlpLogs=true
```

> **Warning**
> This is an experimental feature.

#### Configuration Example

**File (YAML)**

```yaml
experimental:
  otlpLogs: true

accesslog:
  # Keep Stdio logs alongside OTEL logging
  dualOutput: true
  otlp:
    http:
      endpoint: https://collector:4318/v1/logs
      headers:
        Authorization: Bearer auth_asKXRhIMplM7El1JENjrotGouS1LYRdL
```

**File (TOML)**

```toml
[experimental]
  otlpLogs = true

[accessLog]
  dualOutput = true

[accesslog.otlp]
  http.endpoint = "https://collector:4318/v1/logs"
  http.headers.Authorization = "Bearer auth_asKXRhIMplM7El1JENjrotGouS1LYRdL"
```

**CLI**

```yaml
--experimental.otlpLogs=true
--accesslog.otlp.http.endpoint=https://collector:4318/v1/logs
--accesslog.otlp.http.headers.Authorization=Bearer auth_asKXRhIMplM7El1JENjrotGouS1LYRdL
```

#### Configuration Options

| Field                                                                                                   | Description                                                                                                                            | Default                  | Required |
| :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :------- |
| <a id="opt-accesslog-otlp-serviceName"></a>`accesslog.otlp.serviceName`                                 | Defines the service name resource attribute.                                                                                           | "traefik"                | No       |
| <a id="opt-accesslog-otlp-resourceAttributes"></a>`accesslog.otlp.resourceAttributes`                   | Defines additional resource attributes to be sent to the collector. See [resourceAttributes](#resourceattributes-1) for details.       | \[]                      | No       |
| <a id="opt-accesslog-otlp-http"></a>`accesslog.otlp.http`                                               | This instructs the exporter to send access logs to the OpenTelemetry Collector using HTTP.                                             |                          | No       |
| <a id="opt-accesslog-otlp-http-endpoint"></a>`accesslog.otlp.http.endpoint`                             | The endpoint of the OpenTelemetry Collector. (format=`<scheme>://<host>:<port><path>`)                                                 | `https://localhost:4318` | No       |
| <a id="opt-accesslog-otlp-http-headers"></a>`accesslog.otlp.http.headers`                               | Additional headers sent with access logs by the exporter to the OpenTelemetry Collector.                                               | \[ ]                     | No       |
| <a id="opt-accesslog-otlp-http-tls"></a>`accesslog.otlp.http.tls`                                       | Defines the Client TLS configuration used by the exporter to send access logs to the OpenTelemetry Collector.                          |                          | No       |
| <a id="opt-accesslog-otlp-http-tls-ca"></a>`accesslog.otlp.http.tls.ca`                                 | The path to the certificate authority used for the secure connection to the OpenTelemetry Collector, it defaults to the system bundle. |                          | No       |
| <a id="opt-accesslog-otlp-http-tls-cert"></a>`accesslog.otlp.http.tls.cert`                             | The path to the certificate to use for the OpenTelemetry Collector.                                                                    |                          | No       |
| <a id="opt-accesslog-otlp-http-tls-key"></a>`accesslog.otlp.http.tls.key`                               | The path to the key to use for the OpenTelemetry Collector.                                                                            |                          | No       |
| <a id="opt-accesslog-otlp-http-tls-insecureSkipVerify"></a>`accesslog.otlp.http.tls.insecureSkipVerify` | Instructs the OpenTelemetry Collector to accept any certificate presented by the server regardless of the hostname in the certificate. | false                    | No       |
| <a id="opt-accesslog-otlp-grpc"></a>`accesslog.otlp.grpc`                                               | This instructs the exporter to send access logs to the OpenTelemetry Collector using gRPC.                                             |                          | No       |
| <a id="opt-accesslog-otlp-grpc-endpoint"></a>`accesslog.otlp.grpc.endpoint`                             | The endpoint of the OpenTelemetry Collector. (format=`<host>:<port>`)                                                                  | `localhost:4317`         | No       |
| <a id="opt-accesslog-otlp-grpc-headers"></a>`accesslog.otlp.grpc.headers`                               | Additional headers sent with access logs by the exporter to the OpenTelemetry Collector.                                               | \[ ]                     | No       |
| <a id="opt-accesslog-otlp-grpc-insecure"></a>`accesslog.otlp.grpc.insecure`                             | Instructs the exporter to send access logs to the OpenTelemetry Collector using an insecure protocol.                                  | false                    | No       |
| <a id="opt-accesslog-otlp-grpc-tls"></a>`accesslog.otlp.grpc.tls`                                       | Defines the Client TLS configuration used by the exporter to send access logs to the OpenTelemetry Collector.                          |                          | No       |
| <a id="opt-accesslog-otlp-grpc-tls-ca"></a>`accesslog.otlp.grpc.tls.ca`                                 | The path to the certificate authority used for the secure connection to the OpenTelemetry Collector, it defaults to the system bundle. |                          | No       |
| <a id="opt-accesslog-otlp-grpc-tls-cert"></a>`accesslog.otlp.grpc.tls.cert`                             | The path to the certificate to use for the OpenTelemetry Collector.                                                                    |                          | No       |
| <a id="opt-accesslog-otlp-grpc-tls-key"></a>`accesslog.otlp.grpc.tls.key`                               | The path to the key to use for the OpenTelemetry Collector.                                                                            |                          | No       |
| <a id="opt-accesslog-otlp-grpc-tls-insecureSkipVerify"></a>`accesslog.otlp.grpc.tls.insecureSkipVerify` | Instructs the OpenTelemetry Collector to accept any certificate presented by the server regardless of the hostname in the certificate. | false                    | No       |

#### resourceAttributes

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

### Traefik CLF format fields

It's the default format provided by Traefik.
Below the fields displayed with the Traefik CLF format:

```html
<remote_IP_address> - <client_user_name_if_available> [<timestamp>]
"<request_method> <request_path> <request_protocol>" <HTTP_status> <content-length>
"<request_referrer>" "<request_user_agent>" <number_of_requests_received_since_Traefik_started>
"<Traefik_router_name>" "<Traefik_server_URL>" <request_duration_in_ms>ms
```

> **`<HTTP_status>` is the downstream status**
> In both CLF formats, `<HTTP_status>` is the `DownstreamStatus`, the status sent to the client.
> The backend status (`OriginStatus`) is only available with the `json` format.

### Generic CLF format fields

Below the fields displayed with the generic CLF format:

```html
<remote_IP_address> - <client_user_name_if_available> [<timestamp>]
"<request_method> <request_path> <request_protocol>" <HTTP_status> <content-length>
"<request_referrer>" "<request_user_agent>"
```

### JSON format fields

| Field                                                                   | Description                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-StartUTC"></a>`StartUTC`                                     | The time at which request processing started.                                                                                                                                                                                                                                                                                   |
| <a id="opt-StartLocal"></a>`StartLocal`                                 | The local time at which request processing started.                                                                                                                                                                                                                                                                             |
| <a id="opt-Duration"></a>`Duration`                                     | The total time taken (in nanoseconds) by processing the response, including the origin server's time but not the log writing time.                                                                                                                                                                                              |
| <a id="opt-RouterName"></a>`RouterName`                                 | The name of the Traefik  router.                                                                                                                                                                                                                                                                                                |
| <a id="opt-ServiceName"></a>`ServiceName`                               | The name of the Traefik backend.                                                                                                                                                                                                                                                                                                |
| <a id="opt-ServiceURL"></a>`ServiceURL`                                 | The URL of the Traefik backend.                                                                                                                                                                                                                                                                                                 |
| <a id="opt-ServiceAddr"></a>`ServiceAddr`                               | The IP:port of the Traefik backend (extracted from `ServiceURL`).                                                                                                                                                                                                                                                               |
| <a id="opt-ClientAddr"></a>`ClientAddr`                                 | The remote address in its original form (usually IP:port).                                                                                                                                                                                                                                                                      |
| <a id="opt-ClientHost"></a>`ClientHost`                                 | The remote IP address from which the client request was received.                                                                                                                                                                                                                                                               |
| <a id="opt-ClientPort"></a>`ClientPort`                                 | The remote TCP port from which the client request was received.                                                                                                                                                                                                                                                                 |
| <a id="opt-ClientUsername"></a>`ClientUsername`                         | The username provided in the URL, if present.                                                                                                                                                                                                                                                                                   |
| <a id="opt-RequestAddr"></a>`RequestAddr`                               | The HTTP Host header (usually IP:port). This is treated as not a header by the Go API.                                                                                                                                                                                                                                          |
| <a id="opt-RequestHost"></a>`RequestHost`                               | The HTTP Host server name (not including port).                                                                                                                                                                                                                                                                                 |
| <a id="opt-RequestPort"></a>`RequestPort`                               | The TCP port from the HTTP Host.                                                                                                                                                                                                                                                                                                |
| <a id="opt-RequestMethod"></a>`RequestMethod`                           | The HTTP method.                                                                                                                                                                                                                                                                                                                |
| <a id="opt-RequestPath"></a>`RequestPath`                               | The HTTP request URI, not including the scheme, host or port.                                                                                                                                                                                                                                                                   |
| <a id="opt-RequestProtocol"></a>`RequestProtocol`                       | The version of HTTP requested.                                                                                                                                                                                                                                                                                                  |
| <a id="opt-RequestScheme"></a>`RequestScheme`                           | The HTTP scheme requested `http` or `https`.                                                                                                                                                                                                                                                                                    |
| <a id="opt-RequestLine"></a>`RequestLine`                               | The `RequestMethod`, + `RequestPath` and `RequestProtocol`.                                                                                                                                                                                                                                                                     |
| <a id="opt-RequestContentSize"></a>`RequestContentSize`                 | The number of bytes in the request entity (a.k.a. body) sent by the client.                                                                                                                                                                                                                                                     |
| <a id="opt-OriginDuration"></a>`OriginDuration`                         | The time taken (in nanoseconds) by the origin server ('upstream') to return its response.                                                                                                                                                                                                                                       |
| <a id="opt-OriginContentSize"></a>`OriginContentSize`                   | The content length specified by the origin server, or 0 if unspecified.                                                                                                                                                                                                                                                         |
| <a id="opt-OriginStatus"></a>`OriginStatus`                             | The HTTP status code resulting from proxying the request to a backend: either the one returned by that backend, or the one computed when the server could not be reached (`502`, `504`, ...). See [Origin vs. Downstream Status](https://doc.traefik.io/traefik/v3.7/observe/logs-and-access-logs#origin-vs-downstream-status). |
| <a id="opt-OriginStatusLine"></a>`OriginStatusLine`                     | `OriginStatus` + Status code explanation                                                                                                                                                                                                                                                                                        |
| <a id="opt-DownstreamStatus"></a>`DownstreamStatus`                     | The HTTP status code sent **to the client**, after the middleware chain has run. See [Origin vs. Downstream Status](https://doc.traefik.io/traefik/v3.7/observe/logs-and-access-logs#origin-vs-downstream-status).                                                                                                              |
| <a id="opt-DownstreamStatusLine"></a>`DownstreamStatusLine`             | The `DownstreamStatus` and status code explanation.                                                                                                                                                                                                                                                                             |
| <a id="opt-DownstreamContentSize"></a>`DownstreamContentSize`           | The number of bytes in the response entity returned to the client. This is in addition to the "Content-Length" header, which may be present in the origin response.                                                                                                                                                             |
| <a id="opt-RequestCount"></a>`RequestCount`                             | The number of requests received since the Traefik instance started.                                                                                                                                                                                                                                                             |
| <a id="opt-GzipRatio"></a>`GzipRatio`                                   | The response body compression ratio achieved.                                                                                                                                                                                                                                                                                   |
| <a id="opt-Overhead"></a>`Overhead`                                     | The processing time overhead (in nanoseconds) caused by Traefik.                                                                                                                                                                                                                                                                |
| <a id="opt-RetryAttempts"></a>`RetryAttempts`                           | The amount of attempts the request was retried.                                                                                                                                                                                                                                                                                 |
| <a id="opt-TLSVersion"></a>`TLSVersion`                                 | The TLS version used by the connection (e.g. `1.2`) (if connection is TLS).                                                                                                                                                                                                                                                     |
| <a id="opt-TLSCipher"></a>`TLSCipher`                                   | The TLS cipher used by the connection (e.g. `TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA`) (if connection is TLS).                                                                                                                                                                                                                      |
| <a id="opt-TLSClientSubject"></a>`TLSClientSubject`                     | The string representation of the TLS client certificate's Subject (e.g. `CN=username,O=organization`).                                                                                                                                                                                                                          |
| <a id="opt-KubernetesIngressNamespace"></a>`KubernetesIngressNamespace` | The namespace of the Kubernetes Ingress resource the router handles. Only available with the Kubernetes Ingress and Kubernetes Ingress Nginx providers.                                                                                                                                                                         |
| <a id="opt-KubernetesIngressName"></a>`KubernetesIngressName`           | The name of the Kubernetes Ingress resource the router handles. Only available with the Kubernetes Ingress and Kubernetes Ingress Nginx providers.                                                                                                                                                                              |
| <a id="opt-KubernetesServiceName"></a>`KubernetesServiceName`           | The name of the Kubernetes Service associated with the Ingress the router handles. Only available with the Kubernetes Ingress and Kubernetes Ingress Nginx providers.                                                                                                                                                           |
| <a id="opt-KubernetesServicePort"></a>`KubernetesServicePort`           | The port of the Kubernetes Service associated with the Ingress the router handles. Only available with the Kubernetes Ingress and Kubernetes Ingress Nginx providers.                                                                                                                                                           |

### Log Rotation

Traefik close and reopen its log files, assuming they're configured, on receipt of a USR1 signal.
This allows the logs to be rotated and processed by an external program, such as `logrotate`.

> **Warning**
> This does not work on Windows due to the lack of USR signals.

### Time Zones

Traefik will timestamp each log line in UTC time by default.

It is possible to configure the Traefik to timestamp in a specific timezone by ensuring the following configuration has been made in your environment:

1. Provide time zone data to `/etc/localtime` or `/usr/share/zoneinfo` (based on your distribution) or set the environment variable TZ to the desired timezone.
2. Specify the field `StartLocal` by dropping the field named `StartUTC` (available on the default Common Log Format (CLF) as well as JSON): `accesslog.fields.names.StartUTC=drop`.

Example utilizing Docker Compose:

```yaml
services:
  traefik:
    image: traefik:v3.7
    environment:
      - TZ=US/Alaska
    command:
      - --accesslog.fields.names.StartUTC=drop
      - --providers.docker
    ports:
      - 80:80
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```
