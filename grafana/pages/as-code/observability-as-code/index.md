> Release-pinned source for Grafana v13.2.0: [docs/sources/as-code/observability-as-code/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/as-code/observability-as-code/_index.md)

# Observability as Code

Using Observability as Code, you can version, automate, and scale Grafana configurations, including dashboards and observability workflows.

***

## Overview

Grafana provides a suite of tools for **Observability as code** to help you manage your Grafana resources programmatically and at scale. This approach lets you define dashboards, data sources, and other configurations in code, enabling version control, automated testing, and reliable deployments through CI/CD pipelines. You can apply code management best practices to your observability resources, and integrate them into existing infrastructure-as-code workflows.

Historically, managing Grafana as code involved various community and Grafana Labs tools, but lacked a single, cohesive story. Grafana 12 introduces foundational improvements, including new versioned APIs and official tooling, to provide a clearer path forward:

- This approach requires handling HTTP requests and responses but provides complete control over resource management.
- `gcx`, Git Sync, and the Foundation SDK are all built on top of these APIs.
- To understand Dashboard Schemas accepted by the APIs, refer to the [JSON models documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/view-dashboard-json-model/).

## Explore

- [Grafana CLI](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/grafana-cli/): Grafana CLI (`gcx`) is a command-line tool designed to simplify interaction with Grafana instances using the new REST APIs. You can authenticate, manage multiple environments, and perform administrative tasks from the terminal. It's suitable for CI/CD pipelines, local development, or free-form tasks.
- [Foundation SDK](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/foundation-sdk/): The Grafana Foundation SDK is a set of tools, types, and libraries that let you define Grafana dashboards and resources using familiar programming languages like Go, TypeScript, Python, Java, and PHP. Use it in conjunction with `gcx` to push your programmatically generated resources.
- [Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/): Git Sync lets you store your dashboard files in a GitHub repository and synchronize those changes with your Grafana instance, enabling version control, branching, and pull requests directly from Grafana.
- [On-prem file provisioning](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/provision-resources/): File provisioning in Grafana lets you include resources, including folders and dashboard JSON files, that are stored in a local file system.

## Additional Observability as code tools

If you're already using established [Infrastructure as code](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/) or other configuration management tools, Grafana offers integrations to manage resources within your existing workflows.

- [Terraform](https://grafana.com/docs/grafana-cloud/as-code/infrastructure-as-code/terraform/)
  - Use the Grafana Terraform provider to manage dashboards, alerts, and more.
  - Understand how to define and deploy resources using HCL/JSON configurations.
- [Ansible](https://grafana.com/docs/grafana-cloud/as-code/infrastructure-as-code/ansible/)
  - Learn to use the Grafana Ansible collection to manage Grafana Cloud resources, including folders and cloud stacks.
  - Write playbooks to automate resource provisioning through the Grafana API.
- [Grafana Operator](https://grafana.com/docs/grafana-cloud/as-code/infrastructure-as-code/grafana-operator/)
  - Utilize Kubernetes-native management with the Grafana Operator.
  - Manage dashboards, folders, and data sources via Kubernetes Custom Resources.
  - Integrate with GitOps workflows for seamless version control and deployment.
- [Crossplane](https://github.com/grafana/crossplane-provider-grafana) lets you manage Grafana resources using Kubernetes manifests with the Grafana Crossplane provider.
- [Grafonnet](https://github.com/grafana/grafonnet) is a Jsonnet library for generating Grafana dashboard JSON definitions programmatically. **Grafonnet is not officially supported by Grafana. Instead, use the [Foundation SDK](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/foundation-sdk/)** to create dashboards as code.
