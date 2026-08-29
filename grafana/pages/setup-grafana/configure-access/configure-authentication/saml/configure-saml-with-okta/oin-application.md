> Release-pinned source for Grafana v13.2.0: [docs/sources/setup-grafana/configure-access/configure-authentication/saml/configure-saml-with-okta/oin-application.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/setup-grafana/configure-access/configure-authentication/saml/configure-saml-with-okta/oin-application.md)

# Configure SAML with Okta catalog application

Grafana offers multiple ways to configure the SAML authentication flow. This guide focuses on configuring the authentication flow using the Okta Integration Network (OIN) application.

The Grafana Labs application can be found in the [Okta Integration Network catalog](https://www.okta.com/integrations/).

## Prerequisites

- Grafana Enterprise or a paid Grafana Cloud account.
- Admin privileges in both Grafana and Okta.

## Supported features

- SAML Single Sign-On (SSO)
- SAML Attribute Mapping
- SAML Group Mapping
- SAML External ID Mapping for SCIM provisioning

## Configure SAML using the OIN application

### At the Okta Integration Network catalog

1. Visit the [Okta Integration Network catalog](https://www.okta.com/integrations/) and search for **Grafana Labs**.
2. Within the **Grafana Labs** application page, click on **+Add Integration**.
3. Select the tenant to add the integration to.

### At the Grafana Labs application page

1. If needed, update the **Application label**.
2. Set the domain name. For example, `your-grafana-domain.grafana.net`.
3. Click on **Done**.

| Field                 | Description                              |
| --------------------- | ---------------------------------------- |
| **Application label** | The name of the application.             |
| **Domain name**       | The domain name of the Grafana instance. |

### At the Grafana Labs Integration page

1. At the **Assignments** tab, add the groups or users that should have access to the application.
2. At the **Sign On** tab, copy the *Metadata URL*.

## Update SAML configuration at Grafana

### At the Grafana Labs SAML settings page

1. Navigate to the **SAML settings** page within the **Authentication** section from the left-hand menu.
2. The only required step is pasting the *Metadata URL* in the **IdP Metadata URL** field, located at the **3. Connect Grafana with Identity Provider** tab.
3. Save and apply the changes.

With this configuration, the users will be able to access Grafana using their Okta credentials.
