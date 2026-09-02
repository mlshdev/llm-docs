> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles.md)

# Custom roles <a id="custom-roles"></a>

> **Info**
> **Feature availability**
>
> Custom roles are available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Enterprise

Custom roles let you define granular permissions beyond the built-in roles. Instead of giving users full Admin access, you can create a role with only the capabilities they need.

n8n has two types of custom roles:

- **Custom project roles**: Define permissions within a specific project, including access to workflows, credentials, folders, and other project resources. Assign them to project members to control what they can do inside that project.

  Refer to [Create custom project roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-project-roles).

- **Custom instance roles**: Define permissions that apply across the entire n8n instance, such as managing users, tags, API keys, or custom roles themselves. Assign them to users who need specific instance-level capabilities without full Admin access.

  Refer to [Create custom instance roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-instance-roles).
