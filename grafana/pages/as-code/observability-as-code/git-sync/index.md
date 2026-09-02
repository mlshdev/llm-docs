> Release-pinned source for Grafana v13.2.1: [docs/sources/as-code/observability-as-code/git-sync/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/as-code/observability-as-code/git-sync/_index.md)

# Introduction to Git Sync

Git Sync in Grafana lets you synchronize your resources so you can store your dashboards as JSON files in any Git provider and manage them as code. You and your team can version control, collaborate, and automate deployments efficiently.

> **Note**
>
> Git Sync functionalities are constantly evolving. [Contact Grafana](https://grafana.com/help/) for support or to report any issues you encounter and help us improve this feature.

## How it works

Git Sync allows you to connect external resources with your Grafana instance. After setup, all synchronized resources live in Git under the provisioned folder, and you can continue to have non-provisioned resources outside that folder.

Git Sync is bidirectional. You can modify provisioned resources both from the Grafana UI or from the synced repository, and changes will be reflected in both places.

Git Sync is available for any Git provider through a Pure Git repository type, and has specific enhanced integrations for GitHub, GitHub Enterprise, GitLab and Bitbucket. Refer to [Usage and performance limitations](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/usage-limits) for further details, including usage tiers.

Refer to [key concepts](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/key-concepts) for more information on how Git Sync works.

### Make changes in the Grafana UI

Whenever you modify a dashboard directly from the UI, you can also commit those changes to your synchronized Git repositories upon saving. You can configure settings to either enforce PR approvals before merging in your repository, or allow direct commits.

### Make changes in your Git repositories

Your Grafana instance polls the provisioned Git resources to synchronize. If you made any changes in your synchronized Git repositories, they will be updated in the Grafana database as well. The Grafana UI reads from the database and updates the UI to reflect these changes.

- Without webhooks, Grafana polls for changes at the specified interval. The default polling interval is 60 seconds, and you can change this setting in the Grafana UI.
- If you enable the [webhooks feature](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/git-sync-setup/#configure-webhooks-and-image-rendering), repository notifications appear almost immediately.

## Common use cases

> **Note**
>
> Refer to [Git Sync deployment scenarios](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/provision-resources/git-sync-deployment-scenarios) for sample scenarios, including architecture and configuration details.

You can use Git Sync for the following use cases:

### Version control and auditing

Organizations can maintain a structured, version-controlled history of Grafana dashboards. The version control lets you revert to previous versions when necessary, compare modifications across commits, and ensure transparency in dashboard management.

Additionally, having a detailed history of changes enhances compliance efforts, as teams can generate audit logs that document who made changes, when they were made, and why.

### Automated deployment and CI/CD integration

Teams can streamline their workflow by integrating dashboard updates into their CI/CD pipelines. By pushing changes to GitHub, automated processes can trigger validation checks, test dashboard configurations, and deploy updates programmatically using the `gcx` CLI and Foundation SDK.

This reduces the risk of human errors, ensures consistency across environments, and enables a faster, more reliable release cycle for dashboards used in production monitoring and analytics.

### Collaborative dashboard development

With Git Sync, multiple users can work on dashboards simultaneously without overwriting each other’s modifications.
By leveraging pull requests and branch-based workflows, teams can submit changes for review before merging them into the main branch. This process not only improves quality control but also ensures that dashboards adhere to best practices and organizational standards.

Additionally, GitHub’s built-in discussion and review tools facilitate effective collaboration, making it easier to address feedback before changes go live.

### Multi-environment synchronization

Enterprises managing multiple Grafana instances, such as development, staging, and production environments, can seamlessly sync dashboards across these instances. This ensures consistency in visualization and monitoring configurations, reducing discrepancies that might arise from manually managing dashboards in different environments.

By using Git Sync, teams can automate deployments across environments, eliminating repetitive setup tasks and maintaining a standardized monitoring infrastructure across the organization.

### Disaster recovery and backup

By continuously syncing dashboards to GitHub, organizations can create an always-updated backup, ensuring dashboards are never lost due to accidental deletion or system failures.

If an issue arises, such as a corrupted dashboard, unintended modification, or a system crash, teams can quickly restore the latest functional version from the Git repository. This not only minimizes downtime but also adds a layer of resilience to Grafana monitoring setups, ensuring critical dashboards remain available when needed.

## Build dashboards as code

Because dashboards are defined in JSON files, you can enable as-code workflows where the JSON file is an output from Go, TypeScript, or another coding language in the format of a dashboard schema.

To learn more about creating dashboards in a coding language to provision them for Git Sync, refer to the [Foundation SDK](https://grafana.com/docs/grafana/v13.2/observability-as-code/foundation-sdk) documentation.

## Explore Git Sync

Refer to the following documents to learn about Git Sync in depth:

- [Git Sync Key concepts](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/key-concepts/): Key concepts to understand how Git Sync works.
- [Usage and performance limitations](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/usage-limits/): Git Sync usage tiers, compatible Git providers, and known limitations.
- [Set up Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/git-sync-setup/): Instructions for setting up Git Sync, so you can provision GitHub repositories for use with Grafana.
  - [Setup prerequisites](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/git-sync-setup/set-up-before/): Prerequisites for Git Sync, so you can provision GitHub repositories for use with Grafana.
  - [Set up Git Sync as code](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/git-sync-setup/set-up-code/): Instructions for setting up Git Sync as code, so you can provision Git repositories for use with Grafana.
  - [Set up Git Sync with Terraform](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/git-sync-setup/set-up-terraform/): Instructions for setting up Git Sync as code, so you can provision Git repositories for use with Grafana.
  - [Instantaneous pulling and dashboard previews](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/git-sync-setup/set-up-extend/): Instructions for extending Git Sync for real-time notification and image rendering.
- [Add non-provisioned resources from Grafana](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/export-resources/): Export non-provisioned resources from Grafana.
- [Work with provisioned repositories in Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/use-git-sync/): Instructions for working with Git Sync to perform common tasks, such as saving dashboards to GitHub and synchronizing changes with Grafana.
- [Work with provisioned dashboards in Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/provisioned-dashboards/): Update, save, and modify provisioned resources in Grafana using Git Sync.
- [Git Sync permissions and access control](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/permissions-grafana/): Learn about permissions and access control for Git Sync, including required Grafana roles and repository permissions.
- [Configure Git repository protection](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/permissions-git/): Learn how to protect your Git repository and control who can read or write dashboard source code when using Git Sync.
- [Git Sync deployment scenarios](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/): Learn about common Git Sync deployment patterns and configurations for different organizational needs
  - [Single instance Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/single-instance/): Synchronize a single Grafana instance with a Git repository
  - [Git Sync for development and production environments](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/dev-prod/): Use separate Grafana instances for development and production with Git-controlled promotion
  - [Git Sync with regional replication](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/multi-region/): Synchronize multiple regional Grafana instances from a shared Git location
  - [Testing sandboxes Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/testing-sandboxes/): Use a shared sandbox branch for short-lived projects and experimentation before promoting changes to the main branch
  - [Git Sync for high availability environments](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/high-availability/): Run multiple Grafana instances serving traffic simultaneously, synchronized via Git Sync
  - [Multiple team Git Sync](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/scenarios/multi-team/): Use multiple Git repositories with one Grafana instance, one repository per team
