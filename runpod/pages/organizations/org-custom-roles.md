> Pinned source for Runpod main: [organizations/org-custom-roles.mdx](https://github.com/runpod/docs/blob/f2481a71841afde6db66b886a32d287d2e3ac0c9/organizations/org-custom-roles.mdx)
> Canonical documentation: https://docs.runpod.io/organizations/org-custom-roles

# Custom roles

Create custom roles that grant organization members exactly the permissions they need, per resource, beyond the four built-in roles.

Custom roles let org admins define their own roles when the [built-in roles](https://docs.runpod.io/organizations/org-roles) grant too much or too little. You choose which actions a role allows on each type of resource, then assign the role to members the same way you assign a built-in role.

For example, you can create a role that manages Serverless endpoints but can't deploy Pods, or a finance role that manages billing and views every resource without changing any of them.

> **Note**
>
> Custom roles are available to enterprise organizations. Self-serve accounts use the built-in roles only.

## How custom roles work

A custom role is a set of permissions. Each permission pairs a resource, such as Pods or secrets, with an action, such as **View** or **Create**. A member can do only what their role grants.

- **One role per member.** Assigning a custom role replaces the member's current role. A member never holds a built-in role and a custom role at the same time.
- **Allow-only.** A role lists what members can do. There are no deny rules, and anything not granted is not allowed.
- **Changes apply immediately.** When you edit a role, every member who holds it gets the new permissions right away.
- **Independent of its starting point.** A new role starts as a copy of a built-in or custom role, but it doesn't stay linked to it. Later changes to the original don't affect the copy.
- **Limit of 25.** An organization can have up to 25 custom roles. Built-in roles don't count toward the limit.

Built-in roles can't be edited or deleted. To change what a built-in role allows, use **Duplicate to new role** to copy it, then edit the copy.

## Permissions

Permissions are shown as a grid, with one row per resource and one column per action. The columns are:

| Action       | What it allows                                                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **View**     | See the resource in lists and open its details.                                                                                                                                                              |
| **Use**      | Work with an existing resource without changing it. For example, start and stop a Pod, run jobs on an endpoint, mount a network volume, inject a secret into a Pod, or deploy from an organization template. |
| **Terminal** | Open a shell on a Pod through SSH, the web terminal, or Jupyter. Applies to Pods only, and requires **Use**.                                                                                                 |
| **Create**   | Create new resources of this type.                                                                                                                                                                           |
| **Update**   | Change a resource's configuration.                                                                                                                                                                           |
| **Delete**   | Delete resources of this type.                                                                                                                                                                               |
| **Share**    | Make a credential available to the whole organization. Applies to container registry auth, ECR, and secrets.                                                                                                 |

Not every action applies to every resource. Cells that don't apply show a dash.

The grid has a row for each type of resource, such as Pods, Serverless endpoints, network volumes, templates, secrets, and API keys. A few rows are worth knowing about:

- **Users and groups** controls who can manage members, groups, invites, and roles.
- **Billing** controls access to billing and cost centers. See [Billing](https://docs.runpod.io/organizations/orgs-billing).
- **API keys**, **SSH keys**, and **S3 API keys** apply only to the member's own keys.

### Permissions that need extra care

A few combinations behave in ways that aren't obvious from the grid:

- **Calling endpoints from code needs an API key.** A member with **Use** on endpoints can run jobs from the console, but sending requests to `/run` or `/runsync` from code requires an API key. Grant **Create** on API keys if the member needs to call endpoints programmatically. An API key acts with its owner's current role, so it never grants more access than the role does.
- **Creating an endpoint from a Docker image also creates a template.** The template belongs to the endpoint, so the member doesn't need **Create** on templates for this to work.
- **Public templates are always available.** **Use** on templates only controls templates owned by your organization. Every member can deploy from public templates in the Hub, provided they can create the Pod or endpoint.
- **Revoking Terminal doesn't remove existing SSH access immediately.** SSH keys are added to a Pod when it deploys or starts. If you remove **Terminal** from a role, members keep SSH access to running Pods until those Pods restart.

## Create a custom role

To create, edit, or delete roles, you need the **Create**, **Update**, or **Delete** permission on **Users and groups**. The built-in admin role has all three.

1. Go to **User management → Roles** and click **Create a new role**.
2. Enter a **Role name**. Names must be unique within your organization.
3. Under **Start from**, choose the role whose permissions you want to copy. The default is **Contributor**, the built-in role with the least access.
4. Select or clear permissions in the grid. A role must grant at least one permission.
5. Click **Create role**.

To copy an existing role instead, expand it, click **Role actions**, and select **Duplicate to new role**.

An organization can have up to 25 custom roles. At 20, the **Roles** tab shows an **Approaching custom role limit** warning. At 25, it shows **Custom role limit reached** and disables **Create a new role** until you delete a role.

## Edit a custom role

1. Go to **User management → Roles** and expand the custom role.
2. Select or clear permissions in the grid.
3. Click **Save changes**. Members who hold the role get the new permissions immediately.

To rename the role, click **Role actions** and select **Rename role**.

## Delete a custom role

You can't delete a role while anyone holds it. Members are never moved to another role automatically.

1. On the **Users** tab, change the role of every member who holds the custom role, and revoke any pending invites that use it.
2. On the **Roles** tab, expand the custom role, click **Role actions**, and select **Delete this role**.

Expired invites don't block deletion and are removed along with the role.

## Assign a custom role

Custom roles appear under **Custom** in the role dropdown, below the built-in roles.

To change an existing member's role:

1. Go to **User management → Users**.
2. Click the **User actions** menu (⋮) next to the member and select **Edit role**.
3. Choose the custom role and click **Save**. The change takes effect immediately.

To invite a new member with a custom role:

1. Go to **User management → Users** and click **Add a user**.
2. Enter the member's **User email**.
3. Under **User role**, choose the custom role.
4. Click **Send invite**.

See [Access](https://docs.runpod.io/organizations/orgs-access#invite-a-member) for how invitations work.

## Guardrails

- You can only grant permissions you hold yourself.
- A role that includes permissions you don't hold opens read-only. You can still duplicate it, but the copy leaves out those permissions.
- You can't change your own role.
- An organization always keeps an admin. The last admin can't be moved to another role.
- Creating, editing, deleting, and assigning roles are recorded in the audit log.

## What members see

The console adapts to each member's role. Buttons and menu items for actions the role doesn't allow are hidden or grayed out. For example, a member without **Create** on Pods doesn't see **Deploy**, and a member without **Use** on endpoints sees **Run** grayed out on the endpoint's **Requests** tab.

Pages follow the same rules. **Billing** appears only for members with **View** on billing, **Audit logs** only for members with **View** on audit logs, and **User management** only for members with **View** on users and groups.

## Example roles

These examples show common ways to combine permissions. Use them as a starting point and adjust them to your organization.

| Role               | Grants                                                                                                                                        | Use it for                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Finance            | **View** on every resource. **View** and **Update** on billing. **View** on audit logs.                                                       | Finance staff who manage spend and cost centers and need to see what's running, without changing it. |
| Inference engineer | All actions on Serverless endpoints. **Use** on templates and secrets. **Create** on API keys. **View** on everything else.                   | Engineers who deploy and operate endpoints but don't run Pods.                                       |
| Platform engineer  | All actions on templates, Instant Clusters, secrets, and registry credentials, including **Share**. **View** on Pods, endpoints, and volumes. | Engineers who maintain shared building blocks for the rest of the organization.                      |
| Data manager       | All actions on network volumes and Global volumes. **Create** and **Delete** on S3 API keys. **View** on everything else.                     | Members who provision and manage storage that others use.                                            |
| Researcher         | **View** and **Use** on Pods, with **Terminal**. **Use** on network volumes and templates.                                                    | Members who work in existing Pods but don't deploy or delete them.                                   |

## Limitations

- Audit log entries for invites and membership changes show the member's underlying built-in role, not the custom role they were granted.
- Account-level permissions, such as updating a profile or linking a GitHub account, are the same for every custom role and can't be configured per role.
