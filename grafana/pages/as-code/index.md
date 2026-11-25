> Pinned source for Grafana v13.3.2: [docs/sources/as-code/_index.md](https://github.com/grafana/grafana/blob/b8e90ef2a99c8629339e7233a7a813456d87c075/docs/sources/as-code/_index.md)

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

### Choose a tool

Use the following table to find the tool that fits your workflow. You can combine tools, but give each resource a single owner so that one tool doesn't overwrite changes made by another.

| I want to                                                                                | Use                                                                                                                         | Why                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Manage Grafana Cloud stacks and resources across Grafana products from one configuration | [Terraform](https://grafana.com/docs/grafana/v13.3/as-code/terraform/)                                                      | The Grafana Terraform provider supports the most Grafana resources, and fits Terraform workflows such as reviewing changes with `terraform plan` and applying them from CI/CD. |
| Edit dashboards in the Grafana UI and store them in Git                                  | [Git Sync](https://grafana.com/docs/grafana/v13.3/as-code/git-sync/)                                                        | Git Sync synchronizes dashboard files between a GitHub repository and Grafana, with version control, branching, and pull requests directly from Grafana.                       |
| Load dashboards and folders from files on the server that runs Grafana                   | [On-prem file provisioning](https://grafana.com/docs/grafana/v13.3/as-code/provision-resources/)                            | Grafana reads the resources from a local file system, so you don't need external tooling.                                                                                      |
| Manage Grafana Cloud resources from Ansible playbooks                                    | [Ansible](https://grafana.com/docs/grafana/v13.3/as-code/ansible/)                                                          | The Grafana Ansible collection manages Grafana Cloud resources, including folders and cloud stacks, alongside the rest of your Ansible automation.                             |
| Run Grafana in Kubernetes and manage its resources as custom resources                   | [Grafana Operator](https://grafana.com/docs/grafana/v13.3/as-code/grafana-operator/)                                        | The Grafana Operator provisions and operates Grafana instances and manages their dashboards, folders, and data sources through Kubernetes custom resources.                    |
| Define any Terraform-supported resource as a Kubernetes manifest                         | [Grafana Crossplane provider](https://grafana.com/docs/grafana/v13.3/as-code/grafana-operator/#grafana-crossplane-provider) | The Crossplane provider is built from the Terraform provider and supports all of its resources, so it fits GitOps pipelines built on tools like Argo CD.                       |
| Generate dashboards from code                                                            | [Foundation SDK](https://grafana.com/docs/grafana/v13.3/as-code/foundation-sdk/)                                            | You define dashboards in Go, TypeScript, Python, Java, or PHP, and push the generated resources with `gcx`.                                                                    |
| Inspect, pull, and push resources from the command line or with an AI agent              | [Grafana CLI](https://grafana.com/docs/grafana/v13.3/ai-tools/grafana-cli/)                                                 | `gcx` manages resources across Grafana and Grafana Cloud with one set of commands, and works for both people and agents.                                                       |

## Additional as code tools

[`gcx`](https://grafana.com/docs/grafana/v13.3/ai-tools/grafana-cli/) is the Grafana command-line tool for provisioning Grafana and Grafana Cloud resources. You can also provision resources with other [AI tools](https://grafana.com/docs/grafana/v13.3/ai-tools/):

- **Grafana Assistant:** Create and update dashboards in plain language, directly in the Grafana UI. Refer to [Grafana Assistant](https://grafana.com/docs/grafana/v13.3/ai-tools/grafana-assistant/).
- **MCP servers:** Let an external AI client, such as Claude, Cursor, or VS Code with Copilot, manage dashboards, folders, alerting, and other resources through the Model Context Protocol. Refer to [MCP server](https://grafana.com/docs/grafana/v13.3/ai-tools/mcp/).

These tools work well for exploring and drafting changes. To keep changes durable, move them into version-controlled files and apply them with `gcx` or another as-code tool. For a comparison of the AI tools, refer to [AI tools](https://grafana.com/docs/grafana/v13.3/ai-tools/#side-by-side-comparison).

[Grafonnet](https://github.com/grafana/grafonnet) is a Jsonnet library for generating Grafana dashboard JSON definitions programmatically. **Grafonnet is not officially supported by Grafana. Instead, use the [Foundation SDK](https://grafana.com/docs/grafana/v13.3/as-code/foundation-sdk/)** to create dashboards as code.

**Grizzly has been removed**, and is no longer deployed, enhanced, or supported. Use [`gcx`](https://grafana.com/docs/grafana/v13.3/ai-tools/grafana-cli/) instead.
