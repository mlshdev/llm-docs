> Release-pinned source for Grafana v13.2.0: [docs/sources/as-code/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/as-code/_index.md)

# Configure and provision Grafana with as-code workflows

Manage resources, including folders and dashboards, and configurations with as-code workflows.

***

## Overview

**Observability as code** lets you apply code management best practices to your observability resources. By representing Grafana resources as code, you can integrate them into existing infrastructure-as-code workflows and apply standard development practices. Instead of manually configuring dashboards or settings through the Grafana UI, you can:

- Write configurations in code: Define dashboards in JSON or other supported formats.
- Sync your Grafana setup to GitHub: Track changes, collaborate, and roll back updates using Git and GitHub, or other remote sources.
- Automate with CI/CD: Integrate Grafana directly into your development and deployment pipelines.
- Standardize workflows: Ensure consistency across your teams by using repeatable, codified processes for managing Grafana resources.

In Grafana Cloud, you can use **Infrastructure as code** to declaratively create and manage dashboards via configuration files in source code, and incorporate them efficiently into your own use cases. This enables you to review code, reuse it, and create better workflows. Infrastructure as code tools include Terraform, Ansible, the Grafana Operator, and Grizzly.

> **Note**
>
> For basic configuration provisioning refer to [Provision Grafana](https://grafana.com/docs/grafana/v13.2/administration/provisioning).

## Explore

- [Observability as code](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/): Using Observability as code, you can version, automate, and scale Grafana configurations, including dashboards and observability workflows.
- [Infrastructure as code](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/): Using Infrastructure as code, you can declaratively manage what Grafana resources to use.
