> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/README.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/README.md)

# Role-based access control (RBAC) <a id="role-based-access-control-rbac"></a>

> **Info**
> **Feature availability**
>
> Project roles are available on:
>
> - **n8n Cloud:** All plans
> - **Self-hosted:** Registered Community, Business, Enterprise
>
> Custom roles (instance and project) are available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Enterprise

RBAC in n8n lets you control access at two levels:

- **Instance roles**: determine what a user can do across the entire instance. Built-in instance roles are Owner, Admin, and Member. You can also create custom instance roles for more granular control. Refer to [Instance roles](https://docs.n8n.io/administer/manage-users-and-access/understand-instance-roles).
- **Project roles**: determine what a user can do within a specific project. You group workflows and credentials into projects, and a user can have different project roles in different projects. Refer to [See available roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles).

This section provides guidance on setting up and using RBAC in n8n.
