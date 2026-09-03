> Commit-pinned source for Docker main: [content/manuals/enterprise/security/roles-and-permissions/_index.md](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/content/manuals/enterprise/security/roles-and-permissions/_index.md)

# Docker organization roles and permissions

**General admin requirements**

- For: Administrators

Roles determine what members can do in your Docker organization. When you
invite a user or create a team, you assign a role that grants permissions
for repositories, teams, and organization settings.

Docker provides two role types. Users and teams get either a core role or a
custom role, but not both.

## Core roles

Core roles are Docker's built-in Member, Editor, and Owner roles. Their
permissions are predefined. Use core roles when Docker's permission sets match
your organization's needs.

## Custom roles

Custom roles are permission sets you build by selecting individual
permissions, such as billing or team management. Use custom roles when you
need a combination that core roles don't offer. For example, you may create a custom role for a billing
administrator or a security auditor, or when you want to grant
least-privilege access.

Custom roles require a Docker Business subscription.

## Roles and team permissions

Roles apply organization-wide. Team permissions apply to specific
repositories. The two systems work together: a user's role sets their
organization-wide access and team membership can extend their access to
individual repositories.

## Next steps

- [Core roles](https://docs.docker.com/enterprise/security/roles-and-permissions/core-roles/): Compare permissions for the built-in Member, Editor, and Owner roles.
- [Custom roles](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/): Build permission sets that match your organization's access control needs.
- [Custom roles permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/permissions-reference/): Review every permission you can assign to a custom role.
