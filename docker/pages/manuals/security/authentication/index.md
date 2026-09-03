> Commit-pinned source for Docker main: [content/manuals/security/authentication/_index.md](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/content/manuals/security/authentication/_index.md)

# Authentication

Authentication in Docker Home is how users and workloads prove who they are
before they access Docker products.

Two-factor authentication (2FA) protects an individual account. Single
sign-on (SSO) federates sign-in for an organization or company. OpenID
Connect (OIDC) connections authenticate CI workloads such as GitHub Actions.

## Choose an authentication method

| Method                          | Who it covers                        | Who configures it                | How authentication works                                                      |
| ------------------------------- | ------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------- |
| Two-factor authentication (2FA) | An individual Docker account         | The account holder               | Password plus a time-based one-time password (TOTP) from an authenticator app |
| Single sign-on (SSO)            | An organization or company           | An organization or company owner | Users sign in through the organization's identity provider (IdP)              |
| OIDC connections                | GitHub Actions and similar workloads | An organization owner or editor  | Docker exchanges short-lived tokens issued per workflow run                   |

SSO requires a Docker Business subscription. OIDC connections require a
Docker Team or Business subscription.

To require Docker Desktop users to sign in as organization members, see
[Enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/).
Enforce sign-in is configured in Enterprise, not in this section.

## Next steps

- [Single sign-on](https://docs.docker.com/security/authentication/single-sign-on/): Authenticate users through your identity provider.
- [Two-factor authentication](https://docs.docker.com/security/authentication/2fa/): Add a TOTP security code to an individual Docker account.
- [OIDC connections](https://docs.docker.com/security/authentication/oidc-connections/): Authenticate GitHub Actions with short-lived tokens.
