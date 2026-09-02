> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles.md)

# RBAC role types <a id="rbac-role-types"></a>

> **Info**
> **Feature availability**
>
> The **Project Editor** role is available on:
>
> - **n8n Cloud:** Pro
> - **Self-hosted:** Enterprise
>
> The **Project Viewer** role is available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Enterprise

Within projects, there are three user roles: Admin, Editor, and Viewer. These roles control what the user can do in a project. A user can have different roles within different projects.

## Project Admin <a id="project-admin"></a>

A Project Admin role has the highest level of permissions. Project admins can:

- Manage project settings: Change name, delete project.
- Manage project members: Invite members and remove members, change members' roles.
- View, create, update, and delete any workflows, credentials, or executions within a project.
- Create [end-user credentials](https://docs.n8n.io/administer/manage-credentials/end-user-credentials). By default, only project admins can create this credential type, but you can grant it to other users through custom roles.

## Project Editor <a id="project-editor"></a>

A Project Editor can view, create, update, and delete any workflows, credentials, or executions within a project. The **Project Editor** role is available on n8n Cloud Pro and self-hosted Enterprise.

## Project Viewer <a id="project-viewer"></a>

A Project Viewer is effectively a `read-only` role with access to all workflows, credentials, and executions within a project.

Viewers aren't able to manually execute any workflows that exist in a project.

The **Project Viewer** role is available on n8n Cloud Enterprise and self-hosted Enterprise.

> **Info**
> **Project roles and instance roles**
>
> n8n has two levels of roles. [Instance roles](https://docs.n8n.io/administer/manage-users-and-access/understand-instance-roles) control what a user can do across the entire instance. Project roles control what a user can do within a specific [project](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects), and a user can have different project roles in different projects.

| Permission                          | Admin | Editor | Viewer |
| ----------------------------------- | ----- | ------ | ------ |
| View workflows in the project       | ✅     | ✅      | ✅      |
| View credentials in the project     | ✅     | ✅      | ✅      |
| View executions                     | ✅     | ✅      | ✅      |
| Edit credentials and workflows      | ✅     | ✅      | ❌      |
| Add workflows and credentials       | ✅     | ✅      | ❌      |
| Execute workflows                   | ✅     | ✅      | ❌      |
| Manage members                      | ✅     | ❌      | ❌      |
| Modify the project                  | ✅     | ❌      | ❌      |
| Use external secrets in credentials | ✅\*   | ✅\*    | ❌      |
| Manage project secret vaults        | ✅\*   | ❌      | ❌      |

\* Requires **Enable external secrets for project roles** to be enabled by an instance owner or admin. Refer to [Access for project roles](https://docs.n8n.io/administer/manage-credentials/use-external-secret-stores#access-for-project-roles). The **Enable external secrets for project roles** setting is available from n8n 2.13.0.

[Variables](https://docs.n8n.io/build/code-in-n8n/define-custom-variables) and [tags](https://docs.n8n.io/build/manage-workflows/tag-workflows) aren't affected by RBAC: they're global across the n8n instance.
