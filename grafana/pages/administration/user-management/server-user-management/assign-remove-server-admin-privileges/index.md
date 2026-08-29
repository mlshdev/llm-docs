> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/user-management/server-user-management/assign-remove-server-admin-privileges/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/user-management/server-user-management/assign-remove-server-admin-privileges/index.md)

# Assign or remove Grafana server administrator privileges

Grafana server administrators are responsible for creating users, organizations, and managing permissions. For more information about the server administration role, refer to [Grafana server administrators](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/#grafana-server-administrators).

> **Note**
>
> Server administrators are "super-admins" with full permissions to create, read, update, and delete all resources and users in all organizations, as well as update global settings such as licenses. Only grant this permission to trusted users.

## Before you begin

- [Add a user](https://grafana.com/docs/grafana/v13.2/administration/user-management/server-user-management/#add-a-user)
- Ensure you have Grafana server administrator privileges

**To assign or remove Grafana administrator privileges**:

1. Sign in to Grafana as a server administrator.
2. Click **Administration** in the left-side menu, **Users and access**, and then **Users**.
3. Click a user.
4. In the Permissions section, next to Grafana Admin, click **Change**.
5. Click **Yes** or **No**, depending on whether or not you want this user to have the Grafana server administrator role.
6. Click **Change**.

The system updates the user's permission the next time they load a page in Grafana.
