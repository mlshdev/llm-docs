> Commit-pinned source for Docker main: [content/manuals/enterprise/security/provisioning/auto-provisioning.md](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/content/manuals/enterprise/security/provisioning/auto-provisioning.md)

# Auto-provisioning

Auto-provisioning automatically adds users to your organization when they sign in with email addresses that match your verified domains. You must verify a domain before enabling auto-provisioning.

> \[!IMPORTANT]
>
> For domains that are part of an SSO connection, Just-in-Time (JIT) provisioning takes precedence over auto-provisioning when adding users to an organization.

### Overview

When auto-provisioning is enabled for a verified domain:

- Users who sign in to Docker with matching email addresses are automatically added to your organization.
- Auto-provisioning only adds existing Docker users to your organization, it doesn't create new accounts.
- Users experience no changes to their sign-in process.
- Company and organization owners receive email notifications when new users are added.
- You may need to [manage seats](https://docs.docker.com/admin/organization/manage/manage-seats/) to accommodate new users.

### Enable auto-provisioning

Auto-provisioning is configured per domain. To enable it:

1. Sign in to [Docker Home](https://app.docker.com) and select
   your company or organization.
2. Select **Identity & auth**, then **Domain management**.
3. Select the **Actions menu** next to the domain you want to enable
   auto-provisioning for.
4. Select **Enable auto-provisioning**.
5. Optional. If enabling auto-provisioning at the company level, select an
   organization.
6. Select **Enable** to confirm.

The **Auto-provisioning** column will update to **Enabled** for the domain.

### Disable auto-provisioning

To disable auto-provisioning for a user:

1. Sign in to [Docker Home](https://app.docker.com) and select
   your organization. If your organization is part of a company, select the company
   and configure the domain for the organization at the company level.
2. Select **Identity & auth**, then **Domain management**.
3. Select the **Actions menu** next to your domain.
4. Select **Disable auto-provisioning**.
5. Select **Disable** to confirm.

## Next steps

To choose a different method to provision users, you can set up:

- [SCIM provisioning](https://docs.docker.com/enterprise/security/provisioning/scim/) for advanced user management.
- [Group mapping](https://docs.docker.com/enterprise/security/provisioning/scim/group-mapping/) to assign users to teams automatically.
