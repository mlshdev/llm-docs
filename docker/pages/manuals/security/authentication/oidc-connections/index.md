> Commit-pinned source for Docker main: [content/manuals/security/authentication/oidc-connections/_index.md](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/content/manuals/security/authentication/oidc-connections/_index.md)

# OIDC connections overview

**OIDC connections requirements**

- Subscription: Team, Business
- For: Administrators

OIDC connections create a trust relationship between Docker and a trusted
third party so you don't have to maintain long-lived credentials. When you
create an OIDC connection, Docker exchanges short-lived tokens with another
vendor that can grant fine-grained access to your Docker resources.

## How OIDC connections work

OIDC connections follow the OpenID Connect (OIDC) standard. Establishing a
trust relationship involves creating the connection, configuring a
workflow, and testing. For example, a trust relationship between Docker and
GitHub follows these steps:

- GitHub issues a JWT ID token for the workflow run.
- During authentication, Docker:
  - Verifies the token against GitHub's public key registry
  - Matches subject claims against rulesets created in
    [Docker Home](https://app.docker.com/)
- Docker returns an access token so the GitHub Action can sign in to Docker
  and access resources.

All tokens created and exchanged during an OIDC workflow are short-lived
and issued on a per-workflow basis.

For how OIDC connections compare to organization access tokens, see
[Access tokens](https://docs.docker.com/security/access-tokens/).

## Next steps

- [Create an OIDC connection](https://docs.docker.com/security/authentication/oidc-connections/create-manage/)
- [OIDC rulesets and subject claims](https://docs.docker.com/security/authentication/oidc-connections/rulesets-claims/)
