> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/team/entra-id-app-enablement.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/team/entra-id-app-enablement.mdx)

# Enable NetBird for Microsoft Entra ID

Before your organization can use Microsoft Entra ID features with NetBird — such as user provisioning, group sync, or single sign-on — you need to enable the NetBird enterprise application in your Entra ID tenant and grant admin consent.

## Prerequisites

- A Microsoft Entra ID tenant
- An account with **Global Administrator** or **Cloud Application Administrator** role

## Step 1: Find the NetBird Enterprise Application

1. Sign in to the [Azure portal](https://portal.azure.com)
2. Navigate to **Home** → **Microsoft Entra ID** → **Enterprise Applications**
3. Search for the application with Application ID: `7a7538de-b7ed-4e49-befe-edbe74d5e0a1`
4. Select the **NetBird** application from the results

![Find NetBird in Enterprise Applications](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/entra-id-app-enablement/enterprise-applications.png)

## Step 2: Grant Admin Consent

1. In the NetBird application overview, click **Permissions** in the left menu
2. Click **Grant admin consent for Default Directory**
3. Review the requested permissions and confirm

![Grant admin consent for NetBird](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/entra-id-app-enablement/grant-admin-consent.png)

> **Note**
>
> Granting admin consent allows NetBird to access the necessary directory data for your organization. This is a one-time setup step.

## Next Steps

Once admin consent is granted, you can configure Entra ID integration with NetBird:

- [Provision Users & Groups via API](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-sync)
- [Provision Users & Groups via SCIM](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-scim-sync)
