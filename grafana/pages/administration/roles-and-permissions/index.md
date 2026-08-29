> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/roles-and-permissions/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/roles-and-permissions/_index.md)

# Roles and permissions

A *user* is any individual who can log in to Grafana. Each user is associated with a *role* that includes *permissions*. Permissions determine the tasks a user can perform in the system. For example, the **Admin** role includes permissions for an administrator to create and delete users.

You can assign a user one of three types of permission sets:

- **Grafana server administrator permissions** to manage Grafana server-wide settings and resources.
- **Organization permissions** to manage access to dashboards, alerts, plugins, teams, playlists, and other resources for an entire organization. The available roles are Viewer, Editor, and Admin.
- **Dashboard and folder permissions** to manage access to dashboards and folders. For a detailed explanation of how folders work as the primary permission boundary, refer to [Folder access control](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/folder-access-control/).

> **Note**
>
> If you're using Grafana Enterprise or Grafana Cloud, you can also control access to data sources and use role-based access control to grant user access to read and write permissions to specific Grafana resources.
>
> For more information about access control options available with Grafana Enterprise, refer to [Grafana Enterprise user permissions features](#grafana-enterprise-user-permissions-features).

## Grafana server administrators

A Grafana server administrator (sometimes referred to as a **Grafana Admin**) manages server-wide settings and access to resources such as organizations, users, and licenses. Grafana includes a default server administrator that you can use to manage all of Grafana, or you can divide that responsibility among other server administrators that you create.

> **Caution**
>
> The server administrator role is distinct from the [organization administrator](#organization-roles) role.

A server administrator can perform the following tasks:

- Manage users and permissions
- Create, edit, and delete organizations
- View server-wide settings defined in the [Configuration](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/) file
- View Grafana server statistics, including total users and active sessions
- Upgrade the server to Grafana Enterprise.

> **Note**
>
> The server administrator (Grafana Admin) role does not exist in Grafana Cloud.

To assign or remove server administrator privileges, see [Server user management](https://grafana.com/docs/grafana/v13.2/administration/user-management/server-user-management/assign-remove-server-admin-privileges/).

## Organization users and permissions

All Grafana users belong to at least one organization. An organization is an entity that exists within your instance of Grafana.

Permissions assigned to a user within an organization control the extent to which the user has access to and can update the following organization resources:

- Dashboards and folders
- Alerts
- Playlists
- Users within that organization
- Data sources
- Teams
- Organization and team settings
- Plugins
- Annotations
- Library panels
- Service accounts

For more information about managing organization users, refer to [User management](https://grafana.com/docs/grafana/v13.2/administration/user-management/manage-org-users/).

### Organization roles

> **Caution**
>
> If you're using Grafana Cloud, Grafana Support is not authorised to make any organization role changes. Instead, contact your org administrator.

Organization role-based permissions are global, which means that each permission level applies to all Grafana resources within an given organization. For example, an editor can see and update *all* dashboards in an organization, unless those dashboards have been specifically restricted using [dashboard permissions](https://grafana.com/docs/grafana/v13.2/administration/user-management/manage-dashboard-permissions/).

Grafana uses the following roles to control user access:

- **Organization administrator**: Has access to all organization resources, including dashboards, users, and teams.
- **Editor**: Can view and edit dashboards, folders, and playlists.
- **Viewer**: Can view dashboards, playlists, and query data sources.
- **Basic Role**: Has no permissions. Add permissions with RBAC as needed.

The following table lists permissions for each role.

| Permission                     | Organization administrator | Editor | Viewer | No Basic Role |
| :----------------------------- | :------------------------: | :----: | :----: | :-----------: |
| View dashboards                |             yes            |   yes  |   yes  |               |
| Add, edit, delete dashboards   |             yes            |   yes  |        |               |
| Add, edit, delete folders      |             yes            |   yes  |        |               |
| View playlists                 |             yes            |   yes  |   yes  |               |
| Add, edit, delete playlists    |             yes            |   yes  |        |               |
| Create library panels          |             yes            |   yes  |        |               |
| View annotations               |             yes            |   yes  |   yes  |               |
| Add, edit, delete annotations  |             yes            |   yes  |        |               |
| Access Explore                 |             yes            |   yes  |        |               |
| Query data sources directly    |             yes            |   yes  |   yes  |               |
| Add, edit, delete data sources |             yes            |        |        |               |
| Add and edit users             |             yes            |        |        |               |
| Add and edit teams             |             yes            |        |        |               |
| Change organizations settings  |             yes            |        |        |               |
| Change team settings           |             yes            |        |        |               |
| Configure application plugins  |             yes            |        |        |               |

## Dashboard permissions

When you want to extend a viewer's ability to edit and save dashboard changes or limit an editor's permission to modify a dashboard, you can assign permissions to dashboards and folders. For example, you might want a certain viewer to be able to edit a dashboard. While that user can *see* all dashboards, you can grant them access to *update* only one of them.

> Important: The dashboard permissions you specify override the organization permissions you assign to the user for the selected entity.

You can specify the following permissions to dashboards and folders.

- **Admin**: Can create, edit, or delete a dashboard. Can edit or delete a folder, and create dashboards and subfolders in a folder. Administrators can also change dashboard and folder permissions.
- **Edit**: Can create, edit, or delete a dashboard. Can edit or delete a folder, and create dashboards and subfolders in a folder. Editors *cannot* change folder or dashboard permissions.
- **View**: Can only view dashboards and folders.

> Important: When a user creates a dashboard or folder at the top level, they are automatically granted Admin permissions for it. This does not apply to dashboards within a folder or to subfolders.

For more information about assigning dashboard folder permissions, refer to [Grant dashboard folder permissions](https://grafana.com/docs/grafana/v13.2/administration/user-management/manage-dashboard-permissions/#grant-dashboard-folder-permissions).

For more information about assigning dashboard permissions, refer to [Grant dashboard permissions](https://grafana.com/docs/grafana/v13.2/administration/user-management/manage-dashboard-permissions/#grant-dashboard-permissions).

## Teams and permissions

A team is a group of users within an organization that have common dashboard and data source permission needs. For example, instead of assigning five users access to the same dashboard, you can create a team that consists of those users and assign dashboard permissions to the team. A user can belong to multiple teams.

You can assign a team member one of the following permissions:

- **Member**: Includes the user as a member of the team. Members do not have team administrator privileges.
- **Admin**: Administrators have permission to manage various aspects of the team, including team membership, permissions, and settings.

Because teams exist inside an organization, the organization administrator can manage all teams.

For details on managing teams, see [Team management](https://grafana.com/docs/grafana/v13.2/administration/team-management/).

## Grafana Enterprise user permissions features

While Grafana OSS includes a robust set of permissions and settings that you can use to manage user access to server and organization resources, you might find that you require additional capabilities.

[Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/) provides the following permissions-related features:

- Data source permissions
- Role-based access control (RBAC)

### Data source permissions

By default, a user can query any data source in an organization, even if the data source is not linked to the user's dashboards.

Data source permissions enable you to restrict data source query permissions to specific **Users**, **Service Accounts**, and **Teams**. For more information about assigning data source permissions, refer to [Data source permissions](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#data-source-permissions/).

### Role-based access control

RBAC provides you a way of granting, changing, and revoking user read and write access to Grafana resources, such as users, reports, and authentication.

For more information about RBAC, refer to [Role-based access control](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/).

### Learn more

Want to know more? Complete the [Create users and teams](https://grafana.com/tutorials/create-users-and-teams) tutorial to learn how to set up users and teams.
