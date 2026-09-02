> Release-pinned source for Grafana v13.2.1: [docs/sources/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/_index.md)

# Manage Knowledge Graph using Terraform

Use Terraform to manage Grafana Cloud Knowledge Graph resources as code. Configure the Knowledge Graph stack, notification alerts, suppressed assertions, custom model rules, log configurations, and threshold configurations using infrastructure as code best practices.

***

## Overview

Terraform enables you to manage [Grafana Cloud Knowledge Graph](https://grafana.com/docs/grafana-cloud/knowledge-graph/) resources using infrastructure as code. With Terraform, you can define, version control, and deploy Knowledge Graph configurations including stack onboarding, alert rules, suppression policies, entity models, log, trace, and profile correlations, and thresholds.

## Explore

- [Get started with Terraform](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/getting-started/): Learn how to set up Terraform provider and configure your environment for managing Knowledge Graph resources.
- [Knowledge Graph stack](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/knowledge-graph-stack/): Configure the Knowledge Graph stack with token provisioning, dataset configuration, and stack enablement.
- [Notification alerts](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/notification-alerts/): Configure notification alerts to manage how alerts are processed and routed in your Knowledge Graph.
- [Suppressed assertions](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/suppressed-assertions/): Define suppression rules to temporarily disable specific alerts during maintenance windows or testing.
- [Custom model rules](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/custom-model-rules/): Create custom entity models and define how entities are discovered based on Prometheus queries.
- [Log configurations](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/log-configurations/): Configure log data correlation with entities using data source mappings and filtering options.
- [Trace configurations](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/trace-configurations/): Configure trace data correlation with entities using data source mappings and filtering options.
- [Profile configurations](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/profile-configurations/): Set up profile data correlation with entities using data source mappings and filtering options.
- [Thresholds](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/thresholds/): Set custom thresholds for request, resource, and health assertions to monitor your services.
- [Prometheus rules](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/terraform-knowledge-graph/prometheus-rules/): Define custom Prometheus recording and alerting rules that are evaluated against your metrics data.

***

## Related resources

- [Grafana Terraform Provider Documentation](https://registry.terraform.io/providers/grafana/grafana/latest/docs)
- [Knowledge Graph Documentation](https://grafana.com/docs/grafana-cloud/knowledge-graph/)
- [Terraform Best Practices](https://www.terraform.io/docs/cloud/guides/recommended-practices/index.html)
