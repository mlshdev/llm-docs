> Release-pinned source for Grafana v13.2.1: [docs/sources/administration/user-management/server-user-management/change-user-org-permissions/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/administration/user-management/server-user-management/change-user-org-permissions/index.md)

# Change a user's organization permissions

Update organization permissions when you want to enhance or restrict a user's access to organization resources. For more information about organization permissions, refer to [Organization roles](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/#organization-roles).

## Before you begin

- [Add a user to an organization](https://grafana.com/docs/grafana/v13.2/administration/user-management/server-user-management/add-remove-user-to-org/)
- Ensure you have Grafana server administrator privileges

**To change a user's organization permissions**:

1. Sign in to Grafana as a server administrator.
2. Click **Administration** in the left-side menu, **Users and access**, and then **Users**.
3. Click a user.
4. In the Organizations section, click **Change role** for the role you want to change
5. Select another role.
6. Click **Save**.

> **Note**
>
> In order for the change to take effect and be reflected within the instance, the account where permissions were altered will need to sign out fully and back in. Role assignment is evaluated during sign in, so if a user has not signed back in after their role was adjusted the instance will continue to reflect their previous role.
