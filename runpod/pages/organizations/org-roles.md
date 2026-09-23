> Pinned source for Runpod main: [organizations/org-roles.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/organizations/org-roles.mdx)
> Canonical documentation: https://docs.runpod.io/organizations/org-roles

# Roles

Control what organization members can do with four built-in roles. Learn which actions each role can perform.

Every member of an organization is assigned one of four built-in roles: admin, billing, dev, or basic. There is no owner role; admin is the highest level. Only org admins can assign or change member roles.

## Role overview

| Action                                   | Admin | Dev | Billing | Basic |
| ---------------------------------------- | ----- | --- | ------- | ----- |
| Manage members, groups, and org settings | ✓     | —   | —       | —     |
| View member roster                       | ✓     | ✓   | ✓       | ✓     |
| Create and manage compute resources      | ✓     | ✓   | —       | —     |
| View and use existing compute resources  | ✓     | ✓   | —       | ✓     |
| Manage billing and cost centers          | ✓     | —   | ✓       | —     |
| View all members' usage                  | ✓     | —   | ✓       | —     |
| View own usage                           | ✓     | ✓   | ✓       | ✓     |

## Role descriptions

**Admin.** Full organization management. Admins can invite and remove members, manage groups and roles, update org settings, and create, update, or delete any org resource. Assign this role to team leads who need full control.

**Dev.** Full compute access with no billing or member management. Devs can deploy Pods, create Serverless endpoints, manage network volumes, Instant Clusters, and templates. They cannot view billing, manage cost centers, or manage members or groups. Assign this role to engineers and researchers who build and run workloads.

**Billing.** Financial management only, with no access to compute resources. The billing role can view all members' usage in Billing Explorer and manage cost centers. They cannot view, create, or interact with any compute resource. Assign this role to finance staff who need billing visibility without operational access.

**Basic.** Read and use access to existing resources. Basic members can view and connect to existing Pods, endpoints, volumes, and clusters, but cannot create new resources. Assign this role to members who need access to existing workloads without deployment permissions.

## Assign a role

Only admins can assign or change member roles. Role changes take effect immediately.

1. Go to **User management** in the console and select the **Users** tab.
2. Locate the member whose role you want to change.
3. Click the role dropdown next to their name and select the new role.
4. Confirm the change. The new role takes effect immediately.
