> Commit-pinned source for Docker main: [content/manuals/admin/organization/_index.md](https://github.com/docker/docs/blob/0dd94985910d2b70122891c8cf9173087f7460a8/content/manuals/admin/organization/_index.md)

# Docker organization overview

A Docker organization is a collection of teams and repositories under
centralized management. Organization administrators group members and
assign repository access at scale.

## Organization structure

The following diagram shows how organizations relate to teams and members.

![Diagram showing how teams and members relate within a Docker
organization](https://docs.docker.com/admin/images/org-structure.webp)

For how organizations fit into the broader company hierarchy, see
[Administration
overview](https://docs.docker.com/admin/#company-and-organization-hierarchy).

## Individual and organization accounts

Docker has two primary account types:

- Individual accounts that are identified by a Docker ID.
- Organization accounts that are shared workspaces for teams and
  repositories.

Every organization is created and administered by one or more individual
accounts. You always sign in with your individual account, then work in the
organizations you own or belong to. Organization owners and members are
individual accounts that hold a role in that organization. For individual
accounts, see [Accounts](https://docs.docker.com/accounts/).

## Organization roles

An organization includes owners, members, and optional teams. Organization
owners have full administrator access to manage members, roles, and teams. A
team is an optional grouping of members that share the same repository
permissions.

For details about each role and its permissions, see
[Roles and
permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/).

## Next steps

Learn how to create and manage your organization in the following sections.

- [Onboard your organization](https://docs.docker.com/admin/organization/setup/onboard/): Learn how to onboard and secure your organization.
- [Manage members](https://docs.docker.com/admin/organization/manage/members/): Learn how to manage members.
- [Activity logs](https://docs.docker.com/admin/activity-logs/): Learn how to audit the activities of your members.
- [Security](https://docs.docker.com/enterprise/security/): Start here to manage security and access for your organization, including single sign-on, provisioning, and image and registry access management.
