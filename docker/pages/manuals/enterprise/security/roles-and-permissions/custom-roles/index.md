> Commit-pinned source for Docker main: [content/manuals/enterprise/security/roles-and-permissions/custom-roles/_index.md](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/content/manuals/enterprise/security/roles-and-permissions/custom-roles/_index.md)

# Custom roles and permissions overview

**Custom roles requirements**

- Subscription: Business
- For: Administrators

Custom roles are permission sets that you choose to grant access to users or teams based on specific use cases. Use custom roles when you need:

- Specialized roles such as billing administrators, security auditors, or
  repository managers
- Department-specific access control
- Least-privilege access with precise permission grants

If Docker's predefined
permission sets meet your needs, use
[core roles](https://docs.docker.com/enterprise/security/roles-and-permissions/core-roles/)
instead.

## Prerequisites

- A Docker Business subscription
- Owner permissions in your Docker organization

## Creating custom roles

To create a custom role, you select permissions from organization management,
Docker Hub, billing, AI Governance, Docker Hardened Images, and Docker
Offload. You then assign custom roles you created to individual users or to teams.

Users and teams get either a core role or a custom role, but not both.

## Next steps

- [Manage custom roles](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/manage/): Create, edit, assign, and delete custom roles for users and teams.
- [Permissions reference](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/permissions-reference/): Review every permission you can assign when building a custom role.
