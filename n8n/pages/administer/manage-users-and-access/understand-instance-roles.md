> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/understand-instance-roles.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/administer/manage-users-and-access/understand-instance-roles.md)

# Instance roles <a id="instance-roles"></a>

Every user has one instance role. The instance role determines the user's permissions and access across the n8n instance.

There are three built-in instance roles: Owner, Admin, and Member. If these don't meet your needs, you can create [custom instance roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-instance-roles) with granular permissions.

> **Info**
> **Feature availability**
>
> The **Admin** role is available on:
>
> - **n8n Cloud:** Pro, Enterprise
> - **Self-hosted:** Enterprise

> **Info**
> **Instance roles and project roles**
>
> n8n has two levels of roles. Instance roles control what a user can do across the entire instance. Project roles (part of [RBAC](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac)) control what a user can do within a specific project, and a user can have different project roles in different projects.

> **Info**
> **Create a Member role account for the owner**
>
> n8n recommends that owners create a second account with the **Member** role for themselves. Owners can see and edit all workflows, credentials, and projects. However, there is no way to see who created a particular workflow, so there is a risk of overriding other people's work if you build and edit workflows as an owner.

| Permission                                                                                                                         | Owner | Admin | Member |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----- | ----- | ------ |
| Manage own email and password                                                                                                      | ✅     | ✅     | ✅      |
| Manage own workflows                                                                                                               | ✅     | ✅     | ✅      |
| View, create, and use tags                                                                                                         | ✅     | ✅     | ✅      |
| Delete tags                                                                                                                        | ✅     | ✅     | ❌      |
| View and share all workflows                                                                                                       | ✅     | ✅     | ❌      |
| View, edit, and share all credentials                                                                                              | ✅     | ✅     | ❌      |
| Set up and use [Source control](https://docs.n8n.io/administer/use-source-control-and-environments)                                | ✅     | ✅     | ❌      |
| Create [projects](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects) | ✅     | ✅     | ❌      |
| View all projects                                                                                                                  | ✅     | ✅     | ❌      |
| Add and remove users                                                                                                               | ✅     | ✅     | ❌      |
| Access the Cloud dashboard                                                                                                         | ✅     | ❌     | ❌      |

## Custom instance roles <a id="custom-instance-roles"></a>

If the built-in roles don't match your access needs, you can create custom instance roles with granular permissions. Custom instance roles let you grant specific instance-level capabilities (such as managing users, tags, or API keys) without giving full Admin access.

Refer to [Create custom instance roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-instance-roles) for instructions on creating and managing them.
