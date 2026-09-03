> Commit-pinned source for Docker main: [content/manuals/security/access-tokens/_index.md](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/content/manuals/security/access-tokens/_index.md)

# Access tokens

Access tokens let you authenticate to Docker Hub without using your password.
Use a token for the Docker CLI, automation, and any account that has
two-factor authentication (2FA) or enforced single sign-on (SSO), because
password sign-in to the CLI is not supported in those cases.

## Choose a token type

| Token                           | Ownership                                                       | Use when                                                                                                                   | Limitations                                                                |
| ------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Personal access token (PAT)     | Tied to an individual Docker account                            | CLI access, local tools, and automation that should run as you. Required for CLI sign-in when 2FA is on or SSO is enforced | Access ends if the account leaves the organization or the token is revoked |
| Organization access token (OAT) | Owned by the organization. Any organization owner can manage it | CI/CD and other automation that must keep working when membership changes                                                  | Incompatible with Docker Desktop and Image Access Management               |

For GitHub Actions, [OIDC connections](https://docs.docker.com/security/authentication/oidc-connections/)
are an alternative to storing a long-lived organization access token.

## Next steps

- [Personal access tokens](https://docs.docker.com/security/access-tokens/personal-access-tokens/): Authenticate the Docker CLI and tools with a token tied to your account.
- [Organization access tokens](https://docs.docker.com/security/access-tokens/organization-access-tokens/): Grant org-owned Hub access to CI/CD and other automation.
