> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/team/idp-sync/index.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/team/idp-sync/index.mdx)

# Provision Users and Groups From Your Identity Provider

![supported-identity-providers](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/idp-sync/supported-identity-providers.png)

Managing private network access in a business environment is a critical yet often cumbersome task.
As companies grow and evolve, the manual process of granting access for new employees and revoking it for
departing ones becomes increasingly time-consuming and error-prone. This challenge strains IT resources, poses significant
security risks, and impacts productivity.

NetBird's IdP-Sync automates user access management to private networks by integrating with your identity provider (IdP)
and automatically provisioning users and groups. This integration ensures that changes to groups and users are
synchronized from your identity provider to NetBird, granting appropriate network access to new users and immediately
revoking access for departing employees.

NetBird allows you to use synchronized groups to create [access control policies](https://docs.netbird.io/manage/access-control/manage-network-access#creating-policies),
or update network configurations like [DNS](https://docs.netbird.io/manage/dns#distribution-groups),
eliminating the need for manual grouping.

> **Note**
>
> This feature is only available in the cloud version of NetBird in the [Team plan](https://netbird.io/pricing) and above.

This video guide walks you through an example integration with Microsoft Entra ID, covering both user onboarding and
offboarding scenarios:

[YouTube video RxYWTpf7cgY](https://www.youtube.com/watch?v=RxYWTpf7cgY)

## Supported Identity Providers

NetBird provides native support for syncing with the most popular identity providers. Pick yours below for detailed setup and configuration steps.

### Entra ID (API)

Provision users and groups from Microsoft Entra ID through the Graph API. See [Entra ID (API) setup](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-sync).

### Entra ID (SCIM)

Provision users and groups from Microsoft Entra ID over SCIM. See [Entra ID (SCIM) setup](https://docs.netbird.io/manage/team/idp-sync/microsoft-entra-id-scim-sync).

### Okta

Provision users and groups from Okta. See [Okta setup](https://docs.netbird.io/manage/team/idp-sync/okta-sync).

### Google Workspace

Provision users and groups from Google Workspace. See [Google Workspace setup](https://docs.netbird.io/manage/team/idp-sync/google-workspace-sync).

### JumpCloud

Provision users and groups from JumpCloud. See [JumpCloud setup](https://docs.netbird.io/manage/team/idp-sync/jumpcloud-sync).

### Keycloak

Provision users and groups from Keycloak. See [Keycloak setup](https://docs.netbird.io/manage/team/idp-sync/keycloak-sync).

## Generic SCIM

NetBird provides a way to sync users and groups from any identity provider that supports the SCIM (System for Cross-domain Identity Management) protocol.
SCIM is a standardized protocol that works with most modern identity providers, although configuration varies between providers.

If your provider is not listed above, contact us at <support@netbird.io> for assistance with your specific IdP setup.

![generic-scim](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/idp-sync/generic-scim.png)
