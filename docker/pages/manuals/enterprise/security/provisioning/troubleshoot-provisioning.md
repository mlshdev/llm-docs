> Commit-pinned source for Docker main: [content/manuals/enterprise/security/provisioning/troubleshoot-provisioning.md](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/content/manuals/enterprise/security/provisioning/troubleshoot-provisioning.md)

# Troubleshoot provisioning

This page helps troubleshoot common user provisioning issues including user roles, attributes, and unexpected account behavior with SCIM and Just-in-Time (JIT) provisioning.

## SCIM attribute values are overwritten or ignored

### Error message

Typically, this scenario does not produce an error message in Docker or your
IdP. This issue usually surfaces as incorrect role or team assignment.

### Causes

- JIT provisioning is enabled, and Docker is using values from your IdP's
  SSO sign in flow to provision the user, which overrides
  SCIM-provided attributes.
- SCIM was enabled after the user was already provisioned via JIT, so SCIM
  updates don't take effect.

### Affected environments

- Docker organizations using SCIM with SSO
- Users provisioned via JIT prior to SCIM setup

### Steps to replicate

1. Enable JIT and SSO for your Docker organization.
2. Sign in to Docker as a user via SSO.
3. Enable SCIM and set role/team attributes for that user.
4. SCIM attempts to update the user's attributes, but the role or team
   assignment does not reflect changes.

### Solutions

#### Disable JIT provisioning (recommended)

1. Sign in to [Docker Home](https://app.docker.com/).
2. Select **Identity & auth**, then **SSO and SCIM**.
3. Find the relevant SSO connection.
4. Select the **actions menu** and choose **Edit**.
5. Disable **Just-in-Time provisioning**.
6. Save your changes.

With JIT disabled, Docker uses SCIM as the source of truth for user creation
and role assignment.

**Keep JIT enabled and match attributes**

If you prefer to keep JIT enabled:

- Make sure your IdP's SSO attribute mappings match the values being sent
  by SCIM.
- Avoid configuring SCIM to override attributes already set via JIT.

This option requires strict coordination between SSO and SCIM attributes
in your IdP configuration.

## SCIM updates don't apply to existing users

### Causes

User accounts were originally created manually or via JIT, and SCIM is not
linked to manage them.

### Solution

SCIM only manages users that it provisions. To allow SCIM to manage an
existing user:

1. Remove the user manually from [Docker Home](https://app.docker.com) under **Members**.
2. Trigger provisioning from your IdP.
3. SCIM will re-create the user with correct attributes.

> \[!WARNING]
>
> Deleting a user removes their resource ownership (e.g., repositories).
> Transfer ownership before removing the user.
