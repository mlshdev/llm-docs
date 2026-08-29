> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/apis/observability/metrics.mdx](https://zitadel.com/docs/apis/observability/metrics)

ZITADEL provides a `metrics` endpoint with the help of the [opentelemetry-go](https://github.com/open-telemetry/opentelemetry-go) package.

If you are self-hosting ZITADEL, you can access this endpoint with on the path `/debug/metrics`.
For example when running ZITADEL locally the endpoint is accessible on `http://localhost:8080/debug/metrics`.
The metrics endpoint can be scrubbed by any tool of choice that supports the `otel` format, e.g. an existing Prometheus.

For our [Kubernetes/Helm](https://zitadel.com/docs/self-hosting/deploy/kubernetes) users, we provide an out-of-the-box support for the [ServiceMonitor](https://github.com/zitadel/zitadel-charts/blob/main/charts/zitadel/templates/servicemonitor.yaml) custom resource.

By default, metrics are enabled but can be turned off through ZITADEL's [settings](https://zitadel.com/docs/self-hosting/manage/configure).
The (default) settings are located in the [defaults.yaml](https://github.com/zitadel/zitadel/blob/main/cmd/defaults.yaml).
