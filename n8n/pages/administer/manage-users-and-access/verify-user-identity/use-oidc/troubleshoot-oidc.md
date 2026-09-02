> Commit-pinned source for n8n main: [docs/administer/manage-users-and-access/verify-user-identity/use-oidc/troubleshoot-oidc.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/administer/manage-users-and-access/verify-user-identity/use-oidc/troubleshoot-oidc.md)

# Troubleshooting OIDC SSO <a id="troubleshooting-oidc-sso"></a>

## Known issues <a id="known-issues"></a>

### State parameter not supported <a id="state-parameter-not-supported"></a>

When using OIDC providers that enforce the use of the `state` CSRF token parameter, authentication fails with the error:

```json
{"code":0,"message":"authorization response from the server is an error"}
```

n8n's current OIDC implementation doesn't handle the `state` parameter that some OIDC providers send as a security measure against CSRF attacks.

For now, the only work around is to configure your OIDC provider to disable the `state` parameter if possible.

n8n is working on adding full support for the OIDC `state` parameter in a future release.

### PKCE not supported <a id="pkce-not-supported"></a>

OIDC providers that require PKCE (Proof Key for Code Exchange) may fail authentication or reject n8n's authorization requests. n8n's current OIDC implementation doesn't support PKCE.

The only work around is to configure your OIDC provider to not require PKCE for the n8n client if this option is available in your providers settings.

n8n plans on adding PKCE support in a future release
