> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/manage/team/user-roles.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/manage/team/user-roles.mdx)

# User Roles

NetBird has six user roles - `Owner`, `Admin`, `Network Admin`, `Billing Admin`, `Auditor`, and `User`. A user's role controls the level of access they have to your account, both in the dashboard and through the management API.

## Permissions at a glance

Rows are grouped by what a `Network Admin` can do, from full access down to no access.

|            Area | Owner | Admin | Network Admin | Billing Admin | Auditor | User |
| --------------: | :---: | :---: | :-----------: | :-----------: | :-----: | :--: |
|  Control Center |   ✅   |   ✅   |       ✅       |       ❌       |    📖   |   ❌  |
|  Access Control |   ✅   |   ✅   |       ✅       |       ❌       |    📖   |   ❌  |
| Network Routing |   ✅   |   ✅   |       ✅       |       ❌       |    📖   |   ❌  |
|             DNS |   ✅   |   ✅   |       ✅       |       ❌       |    📖   |   ❌  |
|           Peers |   ✅   |   ✅   |       📖      |       ❌       |    📖   |  📖1 |
|      Setup Keys |   ✅   |   ✅   |       📖      |       ❌       |    📖   |   ❌  |
|            Team |   ✅   |   ✅   |       📖      |       ❌       |    📖   |   ❌  |
|        Activity |   ✅   |   ✅   |       📖      |       ❌       |    📖   |   ❌  |
|        Settings |   ✅   |   ✅   |       📖      |       ✅2      |    📖   |   ❌  |
|   Reverse Proxy |   ✅   |   ✅   |       ❌       |       ❌       |    📖   |   ❌  |
|         Tenants |   ✅   |   ✅   |       ❌       |       ❌       |    📖   |   ❌  |
|    Integrations |   ✅   |   ✅   |       ❌       |       ❌       |    📖   |   ❌  |

**Legend:** ✅ = Full access · 📖 = Read only · ❌ = No access

1 A `User` can only see the peers they own and peers they're allowed to connect to.

2 A `Billing Admin`'s Settings access is limited to **Plans & Billing** and **Invoices**.

## Owner

The `Owner` has full access to the account and can manage every aspect of it. There can be only one account owner in NetBird. Owners are the only users who can delete the organization account - see [Delete NetBird account](https://docs.netbird.io/manage/settings/delete-account) for more.

## Admin

An `Admin` has full access to the account, with two exceptions: administrators can't delete or change the role of the `Owner`, and they can't delete the organization account.

## Network Admin

A `Network Admin` fully manages network configuration - Control Center, Access Control, Network Routing, and DNS. They have read-only access to Peers, Setup Keys, Team, Activity, and Settings, and no access to Reverse Proxy, Tenants, or Integrations. A `Network Admin` can view setup keys but not create them, and can't invite users or create service users.

## Billing Admin

A `Billing Admin` manages billing only. They can access `Settings` → `Plans & Billing` and `Settings` → `Invoices`, and have no access to any other part of the account.

## Auditor

An `Auditor` can read every configuration in the account but can't modify anything.

## User

A `User` has limited access: they can view the peers they own and other peers they're allowed to connect to.

## Roles and the API

Roles apply the same way whether a user works in the dashboard or through the NetBird management API - a user's permissions over API resources match their role. Every role except `User` can create a personal access token that carries the same permissions as that user's role, so they can interact with the API programmatically.

## Roles and identity provider sync

> **Note**
>
> Roles are managed inside NetBird. When you provision users and groups from your identity provider, synced groups are only used for group membership and will not change a user's NetBird role.

## Assign a role

To change a user's role, go to the `Team` tab, select the `Users` tab, and click the user you want to update:

![user list in the Team tab](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/team/user-tab-list.png)

Select the desired role from the dropdown:

![user role dropdown](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/team/user-update-role.png)

Click the `Save` button to apply the change.

> **Note**
>
> Only users with the `Owner` role can assign another user as `Owner`; this action transfers the `Owner` role to the other user, making the current user an `Admin`.

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
