> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/configure-sso.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/deploy/host-n8n/configure-n8n/security/configure-sso.md)

# Set up Single Sign-On (SSO) <a id="set-up-single-sign-on-sso"></a>

> **Info**
> **Feature availability**
>
> Single sign-on is available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Business, Enterprise
>
> You need to be an instance owner or admin to enable and configure SAML or OIDC.

n8n supports the SAML and OIDC authentication protocols for single sign-on (SSO). See [OIDC vs SAML](https://www.onelogin.com/learn/oidc-vs-saml) for more general information on the two protocols, the differences between them, and their respective benefits.

- [Set up SAML](https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml/set-up-saml): a general guide to setting up SAML in n8n, and links to resources for common identity providers (IdPs).
- [Set up OIDC](https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-oidc/set-up-oidc): a general guide to setting up OpenID Connect (OIDC) SSO in n8n.

## Configure SSO with environment variables <a id="configure-sso-with-environment-variables"></a>

> **Info**
> **Feature availability**
>
> Configuring SSO with environment variables is available from n8n 2.18.0.

You can also configure SSO from environment variables instead of through the UI. See [SSO environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/sso) for the full list of variables, and [Manage instance settings using environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/manage-settings-using-environment-variables) for how the activation pattern works.
