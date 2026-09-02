> Release-pinned source for Grafana v13.2.1: [docs/sources/setup-grafana/configure-access/multi-team-access.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/setup-grafana/configure-access/multi-team-access.md)

# Manage multi-team access in a single Grafana instance

If your organization has multiple teams using Grafana, you can use a single Grafana Enterprise deployment or a single Grafana Cloud stack to manage access across teams using roles and folders. This approach reduces complexity, simplifies identity and access management, and facilitates cross-team collaboration.

## Benefits

By using a single Grafana instance to manage access, you can:

- Implement a unified SSO, establishing clear permissions.
- Reduce setup and maintenance work, avoiding multi-stack complexity.
- Centralize plugin configuration and management.
- Ensure teams can access the right dashboards and data, avoiding stepping on or overwriting each other’s work.
- Enable collaboration across teams. Teams are not isolated in silos and can discover and collaborate with each other’s work.
- Optimize resource management. With shared spaces, like an “Everyone” folder, you can publish executive dashboards or cross-team metrics that all groups can benefit from, without duplicating it across stacks.

## Example: Three teams, one stack

Consider the following setup of three teams:

- Team A builds product features and needs autonomy with their own dashboards and data sources.
- Team B handles data engineering and needs autonomy with their own dashboards.
- Team C is the observability team and the admins of the Grafana stack.

Follow these suggested steps to structure, configure, and set permissions to access data in your Grafana instance:

1. [Before you begin](#before-you-begin)
2. [Create teams and configure user access](#create-teams-and-configure-user-access)
3. [Design a folder structure to match your access needs](#design-a-folder-structure-to-match-your-access-needs)
4. [Configure data access based on each team’s requirements](#configure-data-access-based-on-team-requirements)
5. [Scale access management with Terraform and SSO](#scale-access-management-with-terraform-and-sso)

### Before you begin

For more information on how to install a Grafana instance:

- If you’re using self-managed Grafana Enterprise, refer to [Configure Grafana](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/).
- If you’re using Grafana Cloud, refer to [Your Grafana Cloud stack](https://grafana.com/docs/grafana-cloud/security-and-account-management/cloud-stacks).

> **Note**
>
> For guidance on when to use one stack versus multiple, refer to [Stack architecture guidance](https://grafana.com/docs/grafana-cloud/security-and-account-management/cloud-stacks/stack-architecture-guidance/).

### Create teams and configure user access

After you’ve deployed your Grafana instance:

- To follow the example in this doc, create three [Grafana Teams](https://grafana.com/docs/grafana/v13.2/administration/team-management/configure-grafana-teams/#create-a-grafana-team) and add them to the Grafana instance.
- Determine the [RBAC](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control) strategy for your organization. RBAC extends default Grafana roles, provides more granular access rights, and simplifies how to grant, modify, or revoke user access to Grafana resources, such as users and reports.
- Assign each user to the [relevant team](https://grafana.com/docs/grafana/v13.2/administration/user-management/manage-org-users/). By default [new users](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#auto_assign_org) are granted the **Viewer** role.
- Assign the [**Admin** role](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/assign-rbac-roles) to Team C so that they can manage all resources in the instance.

### Design a folder structure to match your access needs

To design a [folder](https://grafana.com/docs/grafana/v13.2/dashboards/manage-dashboards/#create-a-dashboard-folder) setup that helps users quickly understand where to go, what they can access, and what they can manage:

- Create an “Everyone” folder for shared items that all teams can manage, and grant teams Admin access to that folder.
- For each team, create a folder that they can manage and grant them the `fixed:teams:read` [fixed role](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/assign-rbac-roles). This means they can share items in their team folder with other teams, to encourage collaboration and learning from each other.
- For Team C, create an “Admins” folder for sensitive content only Admins can access.
- Optionally, create a personal folder for each team member so that they can work on draft content before moving it into their team folder when ready.

![Teams and folders in the stack, and the related admin permissions Team A and Team B have been granted](https://grafana.com/media/docs/grafana/oac/AccessTeams01.png)

### Configure data access based on team requirements

Next, focus on how teams interact with data to decide further access needs.

#### Shared baseline data access

Grant the `datasources:explorer` fixed role to all teams so they can use the [Drilldown apps](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/) for easily exploring data sources.

However, you may need to protect data in shared resources. For example, all teams can be forwarding metrics to a shared [data source](https://grafana.com/docs/grafana/v13.2/datasources/#add-a-data-source), but not everyone needs to see all of the data. In this case, grant each team query access to the data relevant for them, based on [label based access controls (LBAC) per team](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/teamlbac). This way, you’ll maintain a central observability pipeline but still preserve data separation.

#### Autonomous team data management

If any of your teams, Team A for example, need to build and manage their own data sources for product-specific use cases, grant the `datasources:creator` fixed role so they can create and manage their own data sources independently.

![Teams and data sources in the stack, and the related permissions Team A and Team B have been granted](https://grafana.com/media/docs/grafana/oac/AccessTeams02.png)

#### Resources at an instance level

Some Grafana resources, such as service accounts, alert contact points, [Fleet Management collectors](https://grafana.com/docs/grafana-cloud/send-data/fleet-management/), and other feature resources, are not linked to teams but are managed at the stack level. For these type of resources, assign fixed roles to teams carefully.

For example, users working in [Frontend Observability](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/) need a writer fixed role so that they can create and manage services.

![Grafana Cloud Frontend Observability resources in the stack, and the related permissions Team A have been granted](https://grafana.com/media/docs/grafana/oac/AccessTeams03.png)

### Scale access management with Terraform and SSO

After you've made sure the model is working, you can codify it.

You can add any new users to your Grafana instance with an Identity Provider through [SCIM](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/). Use [role sync](https://grafana.com/docs/grafana/v13.2/configure-access/configure-authentication/saml/configure-saml-team-role-mapping/#configure-role-sync-for-saml) to automatically assign users the correct basic role (Viewer, Editor, or Admin) based on their mapped attributes in the IdP..

You can also use Terraform to provision teams their folders, fixed roles, and shared data source LBAC rules. For example, if you need to add a new team (Team D), you only need to add the new team to Grafana and run the Terraform script, which will automatically set them up to start using Grafana.

![Add new Team D from Okta and automate the rest of their IAM setup using Terraform](https://grafana.com/media/docs/grafana/oac/AccessTeams04.png)

## Other resources

Read on to learn more about access management:

- The [Least privilege custom role explainer](https://grafana.com/blog/2024/09/10/grafana-access-management-how-to-use-teams-for-seamless-user-and-permission-management/) blog walks through how to design roles that keep things simple and safe, so your users have just the access they need.
- See the [LBAC for metrics data sources](https://www.youtube.com/watch?v=gj27qKPSVsM) demo to learn how you can give every team a clear view of their own data while still benefiting from a shared pipeline.
- The [Introducing SCIM](https://grafana.com/blog/2025/05/14/introducing-scim-provisioning-in-grafana-enterprise-grade-user-management-made-simple/) post covers how to connect Grafana to your identity provider, making it easy to bring new users on board and keep permissions in sync as your organization grows.
