> Commit-pinned source for Docker main: [content/manuals/enterprise/security/roles-and-permissions/custom-roles/manage.md](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/content/manuals/enterprise/security/roles-and-permissions/custom-roles/manage.md)

# Manage custom roles in Docker Home

**Custom roles requirements**

- Subscription: Business
- For: Administrators

Create custom roles, manage their permissions, and assign them to users
and teams. Use a custom role to grant only the permissions a user or
team needs. For a full list of permissions, see the
[custom roles permissions reference](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/permissions-reference/).

## Create a custom role

Before you can assign a custom role, create one:

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Roles**, then **Create role**.
3. Define the role:
   - Provide a **Label**
   - Enter a unique **Name** identifier. The identifier is permanent.
   - Add an optional **Description**
4. Set permissions for the role by expanding permission categories and
   selecting the checkboxes for permissions. For a full list of available
   permissions, see the
   [custom roles permissions reference](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/permissions-reference/).
5. Select **Review** to review the configuration and selected permissions.
6. Select **Create**.

After you create a custom role, you can
[assign it to users or teams](#assign-custom-roles).

## Edit a custom role

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Roles**.
3. Find your custom role in the list, then select the **Actions** menu.
4. Select **Edit**.
5. Edit any of the following settings:
   - **Label**
   - **Description**
   - **Permissions**
6. Select **Save**.

## Assign custom roles

**Individual users**

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Members**.
3. Locate the member you want to assign a custom role to, then select the
   **Actions** menu.
4. Select **Change role**.
5. From the **Select a role** drop-down list, select your custom role.
6. Select **Save**.

**Bulk users**

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Members**.
3. Use the checkboxes in the username column to select the users you want
   to assign a custom role to.
4. Select **Change role**.
5. From the **Select a role** drop-down list, select your custom role or
   a core role.
6. Select **Save**.

**Teams**

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Teams**.
3. Locate the team you want to assign a custom role to, then select the
   **Actions** menu.
4. Select **Assign role**.
5. Select your custom role, then select **Assign**.

The role column updates to the newly assigned role.

## View role assignments

To see which users and teams are assigned to roles:

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Roles**.
3. In the roles list, view the **Users** and **Teams** columns for
   assignment counts.
4. Select a role to view its permissions and assignments in detail.

## Reassign custom roles

**Individual users**

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Members**.
3. Locate the member you want to reassign, then select the **Actions**
   menu.
4. Select **Change role**.
5. From the **Select a role** drop-down list, select the new role.
6. Select **Save**.

**Bulk users**

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Members**.
3. Use the checkboxes in the username column to select the users you want
   to reassign.
4. Select **Change role**.
5. From the **Select a role** drop-down list, select the new role.
6. Select **Save**.

**Teams**

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Teams**.
3. Locate the team, then select the **Actions** menu.
4. Select **Change role**.
5. From the drop-down list, select a role, then select **Save**.

## Delete a custom role

> \[!IMPORTANT]
>
> Before you delete a custom role, reassign every user and team that uses
> it to a different role.

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Roles**.
3. Find your custom role in the list, then select the **Actions** menu.
4. If the role has assigned users or teams:
   - On the **Members** page, change the role for every user assigned to
     this custom role
   - On the **Teams** page, reassign every team that has this custom role
5. When no users or teams are assigned, return to **Roles**.
6. Find your custom role and select the **Actions** menu.
7. Select **Delete**.
8. In the confirmation window, select **Delete** to confirm.

## Next steps

- [Custom roles permissions reference](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/permissions-reference/): Review
  permissions you can grant to a custom role
- [Core roles and permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/core-roles/):
  Compare built-in Member, Editor, and Owner permissions
- [Manage organization members](https://docs.docker.com/admin/organization/manage/members/):
  Invite and manage users in your organization
