> Commit-pinned source for Docker main: [content/manuals/accounts/organization/_index.md](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/content/manuals/accounts/organization/_index.md)

# Organization accounts

Organization and company owners can manage members, control access, and enforce
security across their Docker environments. You perform these tasks in Docker
Home, which provides centralized observability, access management, and security
controls.

A Docker organization is a collection of teams and repositories under
centralized management. Organization administrators group members and
assign repository access at scale.

As an organization or company owner, you can:

- Create and manage companies and organizations
- Assign roles and permissions to members
- Group members into teams to manage access by project or role
- Set company-wide policies, including SCIM provisioning and security
  enforcement

For how individual, organization, and company accounts compare, see
[Accounts](https://docs.docker.com/accounts/). For individual accounts, see
[Docker individual accounts](https://docs.docker.com/accounts/individual/).

## Organization structure

The following diagram shows how organizations relate to teams and members.

![Diagram showing how teams and members relate within a Docker
organization](https://raw.githubusercontent.com/docker/docs/034d46977dac45d2a9493f2465b08108ac3cf87b/content/manuals/accounts/organization/images/org-structure.webp)

An organization includes owners, members, and optional teams. Organization
owners have full administrator access to manage members, roles, and teams.

### Team

Teams are optional and let you group members to assign repository permissions
collectively. Teams simplify permission management across projects
or functions.

### Member

A member is any Docker user added to an organization. Organization and company
owners can assign roles to members to define their level of access.

For details about each role and its permissions, see
[Roles and
permissions](https://docs.docker.com/security/roles-and-permissions/).

For how companies relate to organizations, see
[Company structure](https://docs.docker.com/accounts/company/#company-structure).

## Next steps

Learn how to manage organizations in the following sections.

- [Set up your organization](https://docs.docker.com/accounts/organization/setup/): Create, onboard, and configure your organization.
- [Manage your organization](https://docs.docker.com/accounts/organization/manage/): Manage members, teams, seats, and product access.
- [Activity logs](https://docs.docker.com/accounts/organization/activity-logs/): Review member activity across your organization and repositories.
- [Insights](https://docs.docker.com/accounts/organization/insights/): See how people in your organization use Docker.
- [Security](https://docs.docker.com/security/): Explore security features for administrators.
