> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-project-roles.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-project-roles.md)

# Custom project roles <a id="custom-project-roles"></a>

> **Info**
> **Feature availability**
>
> Custom project roles are available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Enterprise
>
> Available from n8n 1.122.0.

> **Info**
> **Instance roles vs project roles**
>
> n8n has two types of custom roles:
>
> **Custom instance roles**: Roles that relate to the administrative capabilities a user needs at the instance level. Refer to [Create custom instance roles](https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-instance-roles).
>
> **Custom project roles**: Roles that apply within a specific project.

Custom project roles allow you to create roles with specific permissions tailored to your team's needs. Unlike the built-in project roles (Admin, Editor, Viewer), custom roles let you define granular access to workflows, credentials, and other project resources.

## Create a custom role <a id="create-a-custom-role"></a>

Instance owners and instance admins can create custom roles.

To create a custom role:

1. Go to **Settings** > **Roles** > **Project roles**.
2. Select **Create role**.
3. Enter a role name and optional description.
4. Select the permissions (scopes) for this role:
   - **Workflow permissions**: View, execute, edit, create, publish, transfer, delete, or manage data redaction for workflows
   - **Credential permissions**: View, edit, create, share, unshare, transfer, or delete credentials
   - **Project permissions**: View, edit, or delete projects
   - **Folder permissions**: View, edit, create, transfer, or delete folders
   - **Execution permission**: Reveal redacted execution data
   - **Secret vault permissions**: View, create, edit, delete, or sync secret vaults of a project
   - **Secrets permission**: Use secrets in credentials
   - **Data table permissions**: View tables, view rows, edit tables, edit rows, create, or delete tables
   - **Project variable permissions**: View, edit, create, or delete project variables
   - **Source control**: Push to source control
5. Select **Create role**.

## Assign a custom role to users <a id="assign-a-custom-role-to-users"></a>

Project admins can assign custom roles to project members. Custom roles apply only within the specific project where they're assigned. A user can have different roles in different projects.

To assign a custom role:

1. Select the project.
2. Select **Project settings**.
3. Under **Project members**, browse or search for users.
4. Select the user and choose the custom role from the dropdown.
5. Select **Save**.

> **Info**
> **Project-level permissions**
>
> Custom role permissions only apply within the project where the role is in use. To grant the same permissions across multiple projects, assign the custom role in each project individually.

## Edit a custom role <a id="edit-a-custom-role"></a>

To update an existing custom role:

1. Go to **Settings** > **Roles** > **Project roles**.
2. Find the custom role you want to edit.
3. Select the **three-dot menu** > **Edit**.
4. Update the role name, description, or permissions.
5. Select **Save changes**.

> **Warning**
> **Editing affects all assigned users**
>
> Changes to a custom role take effect for all users with that role in any project. If the role is in use across multiple projects, the permission changes apply everywhere the role is assigned.

## Duplicate a custom role <a id="duplicate-a-custom-role"></a>

To create a new role based on an existing one:

1. Go to **Settings** > **Roles** > **Project roles**.
2. Find the role you want to duplicate.
3. Select the **three-dot menu** > **Duplicate**.
4. Update the role name and permissions as needed.
5. Select **Create role**.

## Delete a custom role <a id="delete-a-custom-role"></a>

To delete a custom role:

1. Go to **Settings** > **Roles** > **Project roles**.
2. Find the role you want to delete.
3. Select the **three-dot menu** > **Delete**.
4. Confirm the deletion.

> **Info**
> **Reassign users before deletion**
>
> If users are assigned to this role, you must first reassign them to a different role before deleting it.

## Permission scopes reference <a id="permission-scopes-reference"></a>

Custom roles use permission scopes to define what users can do within a project. Each scope below matches a checkbox in the **Project roles** editor. The section headings match the editor's section names; the scope codes are what you'll see in API responses and audit logs.

> **Info**
> **Automatically granted scopes**
>
> n8n pairs some scopes together, so they don't appear as separate checkboxes:
>
> - Granting `<resource>:read` also grants the matching list scope for that resource (for example, `workflow:read` grants `workflow:list`).
> - Granting `workflow:publish` also grants `workflow:unpublish`.

### Workflow scopes <a id="workflow-scopes"></a>

- `workflow:create` - Create new workflows
- `workflow:read` - View workflow details
- `workflow:update` - Edit workflows
- `workflow:execute` - Execute workflows
- `workflow:publish` - Publish workflows (also grants `workflow:unpublish`)
- `workflow:delete` - Delete workflows
- `workflow:move` - Transfer workflows between projects
- `workflow:enableRedaction` - Turn on data redaction for a workflow (refer to [Execution data redaction](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/redact-execution-data))
- `workflow:disableRedaction` - Turn off data redaction for a workflow (refer to [Execution data redaction](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/redact-execution-data))

### Credential scopes <a id="credential-scopes"></a>

- `credential:create` - Create new credentials
- `credential:read` - View credential details
- `credential:update` - Edit credentials
- `credential:delete` - Delete credentials
- `credential:move` - Transfer credentials between projects
- `credential:share` - Share credentials with other users
- `credential:unshare` - Remove credential sharing

### Project scopes <a id="project-scopes"></a>

- `project:read` - View project details
- `project:update` - Edit project settings
- `project:delete` - Delete projects

### Folder scopes <a id="folder-scopes"></a>

- `folder:create` - Create new folders
- `folder:read` - View folder contents
- `folder:update` - Rename folders
- `folder:delete` - Delete folders
- `folder:move` - Transfer folders

### Execution scopes <a id="execution-scopes"></a>

- `execution:reveal` - Reveal redacted execution data (refer to [Execution data redaction](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/redact-execution-data))

### Secret vault scopes <a id="secret-vault-scopes"></a>

> **Info**
> **Feature availability**
>
> Secret vault scopes are available from n8n 2.13.0.

The scope codes use the `externalSecretsProvider` prefix. The role editor lists this section as **Secrets vaults**.

- `externalSecretsProvider:create` - Create new secret vaults in a project
- `externalSecretsProvider:read` - View secret vaults in a project
- `externalSecretsProvider:update` - Edit secret vault configuration
- `externalSecretsProvider:delete` - Delete secret vaults from a project
- `externalSecretsProvider:sync` - Reload a vault's secrets

### Secrets scope <a id="secrets-scope"></a>

The scope code uses the `externalSecret` prefix. The role editor lists this section as **Secrets**.

- `externalSecret:list` - Use secrets in credentials

### Data table scopes <a id="data-table-scopes"></a>

- `dataTable:create` - Create new data tables
- `dataTable:read` - View data table schema
- `dataTable:update` - Edit data table schema
- `dataTable:delete` - Delete data tables
- `dataTable:readRow` - Read rows from data tables
- `dataTable:writeRow` - Insert or update rows in data tables

### Project variable scopes <a id="project-variable-scopes"></a>

- `projectVariable:create` - Create new variables
- `projectVariable:read` - View variable values
- `projectVariable:update` - Edit variable values
- `projectVariable:delete` - Delete variables

### Source control scopes <a id="source-control-scopes"></a>

- `sourceControl:push` - Push changes to source control

## Common custom role examples <a id="common-custom-role-examples"></a>

These are example custom project roles you can create for common use cases. Remember that these roles apply within individual projects, not across your entire n8n instance.

### Workflow developer <a id="workflow-developer"></a>

A role for users who work only with workflows:

- `workflow:create`, `workflow:read`, `workflow:update`, `workflow:execute`, `workflow:delete`
- `credential:read` (view credentials but not edit them)
- `project:read`

### Credential manager <a id="credential-manager"></a>

A role for users who manage credentials:

- `credential:create`, `credential:read`, `credential:update`, `credential:delete`, `credential:share`
- `workflow:read` (view workflows to understand credential usage)
- `project:read`

### Secrets user <a id="secrets-user"></a>

A role for users who use external secrets in credentials but don't manage vaults:

- `externalSecret:list` (use secrets in credential expressions)
- `credential:create`, `credential:read`, `credential:update` (manage credentials with secrets)
- `workflow:read`
- `project:read`

### Workflow publisher <a id="workflow-publisher"></a>

A role for users who can publish workflows without full edit access:

- `workflow:read`, `workflow:publish`
- `credential:read`
- `project:read`

> **Info**
> **Combining scopes**
>
> You can combine any scopes to create roles that match your specific needs. Consider the principle of least privilege: grant only the permissions users need to perform their tasks.
