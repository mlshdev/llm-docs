> Release-pinned source for Grafana v13.2.1: [docs/sources/setup-grafana/configure-access/configure-scim-provisioning/configure-scim-with-entraid/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/setup-grafana/configure-access/configure-scim-provisioning/configure-scim-with-entraid/_index.md)

# Configure SCIM with Entra ID

> **Note**
>
> Available in [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/) and [Grafana Cloud](https://grafana.com/docs/grafana-cloud/).

This guide explains how to configure SCIM provisioning with Entra ID to automate user and team management in Grafana.

> **Note**
>
> **Important SAML and SCIM Configuration:**
> When using SAML for authentication alongside SCIM provisioning with Entra ID, it is crucial to correctly align user identifiers.
> For detailed information on why this is critical for security and how to configure it, refer to the main [SCIM provisioning documentation](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-scim-provisioning/).
>
> Refer to the [SAML authentication with Entra ID documentation](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/saml/configure-saml-with-azuread/) for specific instructions on how to configure SAML claims and Grafana SAML settings for your Entra ID SCIM setup.

## Prerequisites

Before configuring SCIM with Entra ID, ensure you have:

- Grafana Enterprise or a paid Grafana Cloud account with SCIM provisioning enabled.
- Admin access to both Grafana and Entra ID
- SCIM feature enabled in Grafana

## Configure SCIM in Grafana

To enable SCIM provisioning in Grafana, create a service account and generate a service account token that will be used to authenticate SCIM requests from Entra ID.

### Create a service account

1. Navigate to **Administration > Users and access > Service accounts**
2. Click **Add service account**
3. Create the service account with a name (for example, "SCIM provisioning")
4. In the **Roles** dropdown, select the following roles for the service account:
   - **User administration** — required for user sync (create, read, update, and remove users in the organization)
   - **Teams** — required for group sync (create, read, update, and delete teams, and manage team memberships)
5. Create a new token for the service account and save it securely. This token will be used in the Entra ID configuration

## Configure SCIM in Entra ID

Configure the enterprise application in Entra ID to enable automated user and team synchronization with Grafana. This involves creating a new application and setting up both authentication and provisioning.

### Create the enterprise application

1. Open Azure Portal Entra ID (Entra ID)
2. Click **+ Add** dropdown
3. Click **Add Enterprise Application**
4. Click **+ Create Your Own Application**
5. Name the application and select **non-gallery**

### Configure provisioning

1. In the application overview, select **Provisioning**
2. Click **+ New Configuration**
3. Configure the following settings:

- **Tenant URL:**

  You can copy the tenant URL directly from the SCIM UI at **Administration > Authentication > SCIM**. Your stack domain and stack ID can also be found in the SCIM UI.

  Alternatively, you can construct the URL manually:

  - For Grafana Cloud instances:
    ```
    https://{stack-name}.grafana.net/apis/scim.grafana.app/v0alpha1/namespaces/stacks-{stack-id}
    ```
    Replace `{stack-name}` and `{stack-id}` with your Grafana Cloud stack name and ID.
  - For self-hosted instances:
    ```
    https://{your-grafana-domain}/apis/scim.grafana.app/v0alpha1/namespaces/default
    ```
    Replace `{your-grafana-domain}` with your Grafana instance's domain (e.g., `grafana.yourcompany.com`).

- **Secret Token:** Enter the service account token from Grafana

4. Click **Test connection** to verify the configuration
5. Click **Create** to save the settings

### Configure attribute mappings

After setting the Tenant URL and Secret Token, navigate to the **Mappings** section within the same **Provisioning** settings in your Entra ID enterprise application and then click **Provision Microsoft Entra ID Users**. This is where you will define how Entra ID attributes correspond to the SCIM attributes for Grafana, including the mandatory `externalId`.

> **Note**
>
> - Only work email addresses are supported. Entra ID must be configured to use `emails[type eq "work"].value` for email mapping.
> - The `externalId` attribute in Grafana is mandatory. Entra ID uses this to uniquely identify users and groups. You must map an attribute from Entra ID to the `externalId` attribute in Grafana. This Entra ID attribute must be **a stable and a unique identifier for each individual user** (for example, the `objectId` attribute in Entra ID is commonly used for this purpose).

Configure the following required attributes:

| Entra ID Attribute                                            | Grafana Attribute              |
| ------------------------------------------------------------- | ------------------------------ |
| `userPrincipalName`                                           | `userName`                     |
| `mail`                                                        | `emails[type eq "work"].value` |
| `displayName`                                                 | `displayName`                  |
| `objectId`                                                    | `externalId`                   |
| `Switch([IsSoftDeleted], , "False", "True", "True", "False")` | `active`                       |

> **Note**
>
> During provisioning, if the identity provider sends user attributes that has no use in Grafana, those attributes will be gracefully ignored.

### Enable provisioning

Click **Start provisioning** from the top action bar in the **Overview** page from your Entra ID enterprise application.

### Configure group provisioning

To enable group synchronization:

1. Navigate to the **Groups** tab in provisioning
2. Enable **Group provisioning**
3. Select the groups to synchronize with Grafana
4. Save the changes

## Test the integration

After completing the configuration:

1. Test the SCIM connector in Entra ID
2. Assign a test user to the application
3. Verify the user is provisioned in Grafana
4. Test group synchronization if configured
