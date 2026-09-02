> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/deploy/host-n8n/configure-n8n/security.md)

# Securing n8n <a id="securing-n8n"></a>

You can secure a self-hosted n8n instance to protect credentials and workflow data: run a security audit, set up SSL and SSO, restrict nodes and the public API, and redact execution data.

Securing your n8n instance can take several forms.

At a high level, you can:

- Conduct a [security audit](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/run-security-audits) to identify security risks.
- [Set up SSL](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/set-up-ssl) to enforce secure connections.
- [Set up Single Sign-On](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/configure-sso) for user account management.
- Use [token exchange](https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration/set-up-token-exchange) to log users in from your own identity provider when embedding n8n, or to call n8n APIs on their behalf.
- Use [two-factor authentication (2FA)](https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/require-two-factor-auth) for your users.
- Enable [encryption key rotation](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/rotate-encryption-keys) to periodically replace the key that encrypts credentials and other sensitive data.
- Enable [JWE token decryption for OAuth 2.0 credentials](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/decrypt-oauth-20-tokens-with-jwe) so your identity provider can encrypt access and ID tokens that only your instance can decrypt.

You can also protect sensitive data processed by your workflows:

- [Redact execution data](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/redact-execution-data) to hide input and output data from workflow executions.

More granularly, consider blocking or opting out of features or data collection you don't want:

- [Disable the public API](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/disable-the-public-api) if you aren't using it.
- [Opt out of data collection](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/control-telemetry) of the anonymous data n8n collects automatically.
- [Block certain nodes](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/block-specific-nodes) from being available to your users.
- [Protect against SSRF attacks](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/enable-ssrf-protection) to control which hosts and IP ranges workflow nodes can connect to.
- [Restrict account registration](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/verify-user-emails) to email-verified users.
