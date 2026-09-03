> Commit-pinned source for Docker main: [content/manuals/security/_index.md](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/content/manuals/security/_index.md)

# Security

Security helps individual users and organization owners secure their
accounts, manage access, and control membership. You configure these
settings in [Docker Home](https://app.docker.com/).

## Individual accounts

You sign in with your individual account.

- [Two-factor authentication](https://docs.docker.com/security/authentication/2fa/)
  (2FA) adds a time-based one-time password (TOTP) from an authenticator
  app to your password.
- A [personal access token](https://docs.docker.com/security/access-tokens/personal-access-tokens/)
  (PAT) authenticates the Docker CLI and tools without your password, and
  is required for CLI sign-in when 2FA is on or single sign-on (SSO) is
  enforced.

## Organization accounts

Organization and company owners set up how members sign in, add them to
the organization, configure automation, and control what members can do.

- [Single sign-on](https://docs.docker.com/security/authentication/single-sign-on/)
  (SSO) federates sign-in through your identity provider, which can cover
  one organization or every organization in a company.
- [Provisioning](https://docs.docker.com/security/provisioning/) adds users with
  System for Cross-domain Identity Management (SCIM), Just-in-Time (JIT)
  provisioning, auto-provisioning, or domain matching.
- An [organization access token](https://docs.docker.com/security/access-tokens/organization-access-tokens/)
  (OAT) stays with the organization when membership changes.
- [OIDC connections](https://docs.docker.com/security/authentication/oidc-connections/)
  use OpenID Connect to authenticate GitHub Actions with short-lived
  tokens, as an alternative to a long-lived OAT.
- [Roles and permissions](https://docs.docker.com/security/roles-and-permissions/)
  control what members can do after they join.

## Next steps

- [Authentication](https://docs.docker.com/security/authentication/): Two-factor authentication, single sign-on, and OIDC connections.
- [Access tokens](https://docs.docker.com/security/access-tokens/): Personal and organization access tokens for the Docker CLI and automation.
- [Provisioning](https://docs.docker.com/security/provisioning/): Add users with SCIM, JIT, auto-provisioning, and domain management.
- [Roles and permissions](https://docs.docker.com/security/roles-and-permissions/): Assign core or custom roles to control access in your organization.
