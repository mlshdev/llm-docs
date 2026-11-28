> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/manage/team/entra-id-app-enablement.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/manage/team/entra-id-app-enablement.mdx)

# Enable NetBird for Microsoft Entra ID

This guide explains how to grant tenant-wide admin consent to the NetBird enterprise application in your Microsoft Entra ID tenant. API-based user and group provisioning uses a separate app registration, covered in the [Entra ID (API) setup guide](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-sync).

## Prerequisites

- A Microsoft Entra ID tenant
- An account with the **Cloud Application Administrator**, **Application Administrator**, **Privileged Role Administrator**, or **Global Administrator** role

> **Note**
>
> The required role depends on the permissions requested. **Cloud Application Administrator** and **Application Administrator** can consent to delegated permissions, including Microsoft Graph delegated permissions. If the application requests Microsoft Graph **application permissions**, use a **Privileged Role Administrator** or **Global Administrator** for the consent step. Review the requested permissions and Microsoft's [admin consent requirements](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent#prerequisites).

## Step 1: Find the NetBird Enterprise Application

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com)
2. Navigate to **Entra ID** → **Enterprise apps** → **All applications**
3. Search for the application with Application ID: `7a7538de-b7ed-4e49-befe-edbe74d5e0a1`
4. Select the **NetBird** application from the results

You can reach the same blade from the [Azure portal](https://portal.azure.com) under
**Microsoft Entra ID** → **Enterprise applications**.

![Find NetBird in Enterprise Applications](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/entra-id-app-enablement/enterprise-applications.png)

## Step 2: Grant Admin Consent

1. In the NetBird application overview, select **Permissions** under **Security**
2. Review the requested permissions carefully, then click **Grant admin consent for `<your tenant name>`**
3. Confirm the consent prompt

![Grant admin consent for NetBird](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/entra-id-app-enablement/grant-admin-consent.png)

> **Note**
>
> Granting admin consent allows NetBird to access the necessary directory data for your organization. This is a one-time setup step.

## Next Steps

To configure user and group provisioning, follow the guide for your integration:

- [Provision Users & Groups via API](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-sync)
- [Provision Users & Groups via SCIM](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-scim-sync)
