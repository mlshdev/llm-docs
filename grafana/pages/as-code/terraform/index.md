> Pinned source for Grafana v13.3.1: [docs/sources/as-code/terraform/_index.md](https://github.com/grafana/grafana/blob/5db6ba887630c7fa12e5bfd063f2fa854025468c/docs/sources/as-code/terraform/_index.md)

# Grafana Terraform provider

The [Grafana Terraform provider](https://registry.terraform.io/providers/grafana/grafana/latest) provisions configuration management resources for Grafana. Grafana administrators can manage dashboards, data sources, plugins, alerts and collectors, add synthetic monitoring probes and checks, manage identity and access, and more, using the Terraform provider.

To manage the entire Grafana ecosystem of resources on either Grafana Cloud or OSS deployments of Grafana, it’s best to use the Terraform Grafana provider because it supports the most Grafana resources compared to Grafana’s other as-code solutions.

The following guides help you get started using Terraform to manage your Grafana Cloud stack:

- [Create and manage a Grafana Cloud stack using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/terraform-cloud-stack/): Learn how to create a Grafana Cloud stack and add a data source and dashboard using Terraform.
- [Create and manage dashboards using Terraform and GitHub Actions](https://grafana.com/docs/grafana/v13.3/as-code/terraform/dashboards-github-action/): Learn how to create and manage multiple dashboards represented as JSON source code for Grafana using Terraform and GitHub Actions.
- [Managing IRM on Grafana Cloud using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/terraform-oncall/): Learn how to connect an integration to Grafana IRM, configure escalation policies, and add your on-call schedule using Terraform.
- [Managing Fleet Management in Grafana Cloud using Terraform](https://grafana.com/docs/grafana-cloud/as-code/terraform/terraform-fleet-management/): Learn how to create collectors and pipelines in Grafana Fleet Management using Terraform. For Grafana Fleet Management users, the Grafana Terraform provider is best used to preregister new collectors before they are operational or add remote attributes to collectors already registered with the service.
- [Managing Frontend Observability in Grafana Cloud using Terraform](https://grafana.com/docs/grafana-cloud/as-code/terraform/terraform-frontend-observability/): Learn how to manage resources in Frontend Observability using Terraform.
- [Manage Cloud Provider Observability in Grafana Cloud using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/terraform-cloud-provider-o11y/): Learn how to manage Amazon CloudWatch and Microsoft Azure resources in Cloud Provider Observability using Terraform.
- [Manage Knowledge Graph in Grafana Cloud using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/terraform-knowledge-graph/): Learn how to create and manage notification alerts, suppressed assertions, custom model rules, log, trace, and profile configurations, threshold configurations, and Prometheus rules in Grafana Cloud Knowledge Graph using Terraform.
- [Install plugins in Grafana Cloud using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/terraform-plugins/): Learn how to install plugins in Grafana Cloud using Terraform.
- [Manage saved queries using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/manage-saved-queries/): Learn how to create and import saved queries, also known as the query library, using Terraform.
- [Manage secrets in Grafana Cloud using Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/terraform-secrets-management/): Learn how to create, rotate, and manage secure values in Grafana Secrets Management using Terraform.
