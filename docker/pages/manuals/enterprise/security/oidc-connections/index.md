> Commit-pinned source for Docker main: [content/manuals/enterprise/security/oidc-connections/_index.md](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/content/manuals/enterprise/security/oidc-connections/_index.md)

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

## OIDC connections and OATs

[Organization access tokens (OATs)](https://docs.docker.com/enterprise/security/access-tokens/)
provide programmatic access to your Docker resources at the organization
level. Unlike personal access tokens, OATs aren't tied to individual
members, so access continues when membership changes.

OIDC connections don't replace OATs. OIDC connections authenticate a
workflow as if it were a user, then authorize access after authentication.

While OATs govern access to your Docker resources through organization
membership, OIDC connections authenticate GitHub Actions workflows when
they request a change to your Docker resources.

## Next steps

- [Create an OIDC connection](https://docs.docker.com/enterprise/security/oidc-connections/create-manage/)
- [OIDC rulesets and subject claims](https://docs.docker.com/enterprise/security/oidc-connections/rulesets-claims/)
