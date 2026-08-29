> Release-pinned source for Grafana v13.2.0: [docs/sources/setup-grafana/configure-access/configure-scim-provisioning/troubleshooting/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/setup-grafana/configure-access/configure-scim-provisioning/troubleshooting/_index.md)

# Troubleshoot SCIM provisioning

This page provides solutions for common issues you might encounter when configuring and using SCIM provisioning in Grafana.

## User provisioning issues

### Error: "invalid namespace"

**Cause:** The SCIM endpoint URL is incorrectly formatted.

**Solution:** Verify your URL follows the correct format:

```bash
https://{$GRAFANA_URL}/apis/scim.grafana.app/v0alpha1/namespaces/{$STACK_ID}/Users
```

Where:

- `{$GRAFANA_URL}` is your Grafana URL (subdomain format)
- `{$STACK_ID}` is your Grafana stack ID:
  - **Grafana Cloud:** Format like `stack-123` (found in your Grafana Cloud dashboard)
  - **On-premises:** Use `default` or the name of the organization

## Authentication issues

### Error: "HTTP 403 Forbidden"

**Cause:** Either incorrect token or insufficient permissions.

**Solution:**

1. **Check token:** Generate a new token from the Service Account details page
2. **Verify permissions:** Ensure the service account has `Editor` or `Admin` role in the Grafana instance

### Error: "HTTP 401 Unauthorized"

**Cause:** Invalid or expired authentication token.

**Solution:** Generate a new token from the Service Account details page in Grafana.

## Login issues

### Error: "User sync failed"

**Cause:** The user's unique identifier field is not correctly configured in SAML assertions.

**Solution:** Add the required SAML assertion based on your identity provider:

| SAML Assertion | Identity Provider | Value                            |
| -------------- | ----------------- | -------------------------------- |
| `userUID`      | Entra ID          | `objectId`                       |
| `userUID`      | Okta              | `user.getInternalProperty("id")` |

## Next steps

- [Manage users and teams with SCIM provisioning](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-scim-provisioning/manage-users-teams/)
- [Configure SCIM with Entra ID](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-scim-provisioning/configure-scim-with-entraid/)
- [Configure SCIM with Okta](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-scim-provisioning/configure-scim-with-okta/)
