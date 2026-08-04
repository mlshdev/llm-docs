> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/manage/team/add-users-to-your-network.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/manage/team/add-users-to-your-network.mdx)

# Add users to your network

Whether you have a network for personal use or manage your company's corporate network, you'd probably want to invite
people to your account and join your NetBird network.

There are three ways of adding users to a NetBird account - indirect, direct, and via IdP (Identity Provider) sync.

## Indirect user invites

This way of adding users is managed by the NetBird system and doesn't require administrator input.
It works only for organizations with private domains.

Whenever a new user signs up with a private domain (e.g., @netbird.io),
NetBird creates a new account and associates it with the netbird.io organization (domain) automatically.
Every consequent user signup with the same @netbird.io domain in their email address will end up under the same organization.

> **Note**
>
> This feature isn't available in the self-hosted setup. By default, all users are joining the same network instead.

How does it work? Every time a previously unknown user registers at [app.netbird.io](https://app.netbird.io/),
the system classifies the domain part of the email.
The domain can fall into one of the following categories - `public`, `private`, or `unclassified`.
The domains of the private category are the ones that are automatically grouped under the same account.
Public domains are the ones of the public email providers like Gmail.

> **Note**
>
> It might happen (unlikely) that the domain classification system didn't classify your company's domain as private.
> Our system was unsure about your domain and assigned an unclassified or public category to be on the safe side.
> Just email us at <hello@netbird.io> or ping us on Slack to fix this.

## Direct user invites

As the name stands, this way of inviting users is straightforward and works through the web UI.
To invite a new user, proceed to `Team` then select the `Users` tab and click the Invite User button.
A window will appear, allowing you to specify the name and email address of the user you want to invite. Optionally, you could select a set of groups with which you want this user to be associated.

The invited users will receive an email invitation that they have to confirm.
After logging in to the system, they will join your network automatically.

![high-level-dia](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/team/user-invites.png)

> **Note**
>
> If a user already has a NetBird account, you can't invite them.
> This is a limitation that is likely to be removed in future versions.

## Identity Provider (IdP) Sync

NetBird's IdP-Sync automates user access management by integrating with your IdP and automatically
provisioning users and groups. You can enable this feature from the `Users` tab by clicking the `Identity Provider Sync`
button.

![idp-sync-reference](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/team/idp-sync-reference.png)

See the [Provision Users and Groups From Your Identity Provider](https://docs.netbird.io/manage/team/idp-sync) section for more details.

## Manage user roles

NetBird user roles control the level of access each person has to your account. See [User Roles](https://docs.netbird.io/manage/team/user-roles) for what each role can access and how to assign them.

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
