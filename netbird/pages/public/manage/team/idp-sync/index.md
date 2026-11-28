> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/manage/team/idp-sync/index.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/manage/team/idp-sync/index.mdx)

# Provision Users and Groups From Your Identity Provider

![The Identity Provider Sync tab showing a card for each supported provider](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/idp-sync/supported-identity-providers.png)

Managing private network access in a business environment is a critical yet often cumbersome task.
As companies grow and evolve, the manual process of granting access for new employees and revoking it for
departing ones becomes increasingly time-consuming and error-prone. This challenge strains IT resources, poses significant
security risks, and impacts productivity.

NetBird's IdP-Sync automates user access management to private networks by integrating with your identity provider (IdP)
and automatically provisioning users and groups. This integration ensures that changes to groups and users are
synchronized from your identity provider to NetBird, granting appropriate network access to new users and
revoking access for departing employees after the changes synchronize.

NetBird allows you to use synchronized groups to create [access control policies](https://docs.netbird.io/manage/access-control/manage-network-access#creating-policies),
or update network configurations like [DNS](https://docs.netbird.io/manage/dns#distribution-groups),
eliminating the need for manual grouping.

> **Note**
>
> This feature is available in NetBird Cloud on the [Team plan](https://netbird.io/pricing) and above, and in self-hosted deployments with an [Enterprise Commercial License](https://docs.netbird.io/selfhosted/enterprise). The open source Community Edition does not include it.

> **Note**
>
> **Before you roll out on NetBird Cloud**: IdP sync can't add a user who already belongs to another NetBird account, for example because they signed in early with an email domain your account doesn't know yet. Add every domain your users sign in with as a [sign-in domain](https://docs.netbird.io/manage/team/sign-in-domains) first. If a user still doesn't sync, see [User already belongs to another NetBird account](https://docs.netbird.io/help/troubleshooting-user-in-another-account).

This video guide walks you through an example integration with Microsoft Entra ID, covering both user onboarding and
offboarding scenarios:

[YouTube video RxYWTpf7cgY](https://www.youtube.com/watch?v=RxYWTpf7cgY)

## How syncing works

NetBird receives users and groups from your identity provider in one of two ways, depending on the integration.

**Pull, over the provider's API.** NetBird holds credentials for your IdP and reads users and groups from it on a schedule. You can also trigger a sync by hand from the dashboard. Google Workspace and Entra ID (API) work this way.

**Push, over SCIM.** SCIM, the System for Cross-domain Identity Management, is a standard protocol for provisioning users and groups between systems. Your IdP sends changes to a SCIM endpoint using a token that NetBird issues. Entra ID (SCIM), Okta, JumpCloud, and any generic SCIM provider work this way. NetBird has no manual sync button for these integrations; your IdP may provide an on-demand provisioning option.

Sync timing depends on the provider's schedule and successful delivery of the changes. For example, [Entra ID (SCIM)](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-scim-sync#start-provisioning) normally runs provisioning cycles approximately every 40 minutes after the initial sync. Entra also offers [Provisioning on demand](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/provision-on-demand?pivots=app-provisioning) for individual users or groups. If changes are delayed, check the integration status in NetBird and your IdP's provisioning logs.

## Supported Identity Providers

In the dashboard, open **Integrations** and select the **Identity Provider Sync** tab. NetBird supports the most common identity providers directly. Pick yours from the table for the full setup guide.

| Provider                                                                                     | Direction   | Set up in NetBird with     |
| -------------------------------------------------------------------------------------------- | ----------- | -------------------------- |
| [Google Workspace](https://docs.netbird.io/manage/team/idp-sync/google-workspace-sync)       | Pull (API)  | `Connect Google Workspace` |
| [Entra ID (API)](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-sync)       | Pull (API)  | `Connect Entra ID (API)`   |
| [Entra ID (SCIM)](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-scim-sync) | Push (SCIM) | `Connect Entra ID (SCIM)`  |
| [Okta](https://docs.netbird.io/manage/team/idp-sync/okta-sync)                               | Push (SCIM) | `Connect Okta`             |
| [JumpCloud](https://docs.netbird.io/manage/team/idp-sync/jumpcloud-sync)                     | Push (SCIM) | `Connect Jumpcloud`        |
| [Keycloak](https://docs.netbird.io/manage/team/idp-sync/keycloak-sync)                       | Push (SCIM) | `Connect Generic SCIM`     |
| [IIJ ID](https://docs.netbird.io/manage/team/idp-sync/iij-id-sync)                           | Push (SCIM) | `Connect Generic SCIM`     |

Keycloak and IIJ ID have no dedicated card on the `Identity Provider Sync` tab. Both are set up through `Connect Generic SCIM`, and their linked guides walk through that path.

> **Note**
>
> The dashboard configures one IdP-Sync integration at a time. While one is enabled, the setup buttons on every other card are disabled, so switching providers means disabling the current integration first.

## What IdP-Sync does not do

IdP-Sync manages users and group membership:

- **Roles stay in NetBird.** A synced group never sets a user's NetBird role. If you move someone into an `Administrators` group in your IdP, they do not become a NetBird `Admin`. You assign roles in NetBird, as described in [User Roles](https://docs.netbird.io/manage/team/user-roles).
- **Access still comes from policies.** Syncing a group grants no access on its own. A group is only useful once a [policy](https://docs.netbird.io/manage/access-control/manage-network-access#creating-policies) references it.

## Generic SCIM

If your provider is not in the table, it can still work as long as it speaks SCIM. Set it up with `Connect Generic SCIM`, which is the same path the Keycloak and IIJ ID guides follow. Configuration details vary between providers, so contact us at <support@netbird.io> if you get stuck on yours.

![The Generic SCIM setup dialog in the NetBird dashboard](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/idp-sync/generic-scim.png)
