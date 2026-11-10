> Pinned source for Grafana v13.3.1: [docs/sources/as-code/_index.md](https://github.com/grafana/grafana/blob/5db6ba887630c7fa12e5bfd063f2fa854025468c/docs/sources/as-code/_index.md)

# Deploy, provision and manage Grafana with as code workflows

Manage resources, including folders and dashboards, and configurations with as code workflows.

***

> **Note**
>
> Looking for `gcx`? Have a look at the new [AI tools](https://grafana.com/docs/grafana/v13.3/ai-tools) section!

# Overview of as code and provisioning

**Provisioning and as code** let you apply code management best practices to your observability resources. By representing Grafana resources as code, you can integrate them into existing infrastructure-as-code workflows and apply standard development practices. Instead of manually configuring dashboards or settings through the Grafana UI, you can:

- Write configurations in code: Define dashboards in JSON or other supported formats.
- Sync your Grafana setup to GitHub: Track changes, collaborate, and roll back updates using Git and GitHub, or other remote sources.
- Automate with CI/CD: Integrate Grafana directly into your development and deployment pipelines.
- Standardize workflows: Ensure consistency across your teams by using repeatable, codified processes for managing Grafana resources.

> **Note**
>
> For basic configuration provisioning refer to [Provision Grafana](https://grafana.com/docs/grafana/v13.3/administration/provisioning).

## Explore

Explore the available as code tools. Most can be used with one another.

- [Git Sync](https://grafana.com/docs/grafana/v13.3/as-code/git-sync/): Store your dashboard files in a GitHub repository and synchronize those changes with your Grafana instance, enabling version control, branching, and pull requests directly from Grafana.
- [On-prem file provisioning](https://grafana.com/docs/grafana/v13.3/as-code/provision-resources/): Include resources, including folders and dashboard JSON files, that are stored in a local file system.
- [Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/): Use the Grafana Terraform provider to manage dashboards, alerts, and more.
- [Ansible](https://grafana.com/docs/grafana/v13.3/as-code/ansible/): Use the Grafana Ansible collection to manage Grafana Cloud resources, including folders and cloud stacks.
- [Grafana Operator](https://grafana.com/docs/grafana/v13.3/as-code/grafana-operator/): Manage dashboards, folders, and data sources through Kubernetes Custom Resources.
- [Foundation SDK](https://grafana.com/docs/grafana/v13.3/as-code/foundation-sdk/): Define Grafana dashboards and resources using familiar programming languages like Go, TypeScript, Python, Java, and PHP. Use it in conjunction with `gcx` to push your programmatically generated resources.

## A new approach

Historically, managing Grafana as code involved various community and Grafana Labs tools, but lacked a single, cohesive story. Grafana 12 introduces foundational improvements, including new versioned APIs and official tooling, to provide a clearer path forward:

- This approach requires handling HTTP requests and responses but provides complete control over resource management.
- `gcx`, Git Sync, and the Foundation SDK are all built on top of these APIs.
- To understand Dashboard Schemas accepted by the APIs, refer to the [JSON models documentation](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/build-dashboards/view-dashboard-json-model/).

In Grafana Cloud, you can create and manage dashboards via configuration files in source code, and incorporate them efficiently into your own use cases. This enables you to review code, reuse it, and create better workflows. Infrastructure as code tools include Terraform, Ansible, the Grafana Operator, and Grizzly.

## as code for Kubernetes: Grafana Operator and Grafana Crossplane provider

The **Grafana Operator** is a Kubernetes operator that can provision, manage, and operate Grafana instances and their associated resources within Kubernetes through Custom Resources. The Operator eases the administration of Grafana, including managing dashboards, data sources, and folders. To get started, refer to the [quickstart guides for the Grafana Operator](https://grafana.com/docs/grafana-cloud/as-code/grafana-operator) or check out the [Grafana Operator's documentation](https://grafana.github.io/grafana-operator/).

For Grafana Crossplane, refer to [Use the Grafana Crossplane provider](https://grafana.com/docs/grafana/v13.3/as-code/grafana-operator#use-the-grafana-crossplane-provider).

## Additional as code tools

[Grafonnet](https://github.com/grafana/grafonnet) is a Jsonnet library for generating Grafana dashboard JSON definitions programmatically. **Grafonnet is not officially supported by Grafana. Instead, use the [Foundation SDK](https://grafana.com/docs/grafana/v13.3/as-code/foundation-sdk/)** to create dashboards as code.

**Grizzly has been removed**, and is no longer deployed, enhanced, or supported. Use the [Grafana CLI](https://grafana.com/docs/grafana/v13.3/ai-tools/grafana-cli/) instead.
