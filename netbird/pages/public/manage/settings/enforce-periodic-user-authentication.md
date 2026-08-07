> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/settings/enforce-periodic-user-authentication.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/settings/enforce-periodic-user-authentication.mdx)

# Enforce periodic user authentication

To ensure a high level of security, NetBird offers a peer login expiration feature that requires users to periodically reauthenticate their devices.
Every new network has this feature enabled, and the expiration period is set to 24 hours by default. You can disable this feature and configure the expiration period in the account settings in the web UI <https://app.netbird.io/settings>.

> **Note**
>
> This feature is only applied to peers added with the [interactive SSO login feature](https://docs.netbird.io/get-started/install#running-net-bird-with-sso-login). Peers, added with a setup key, won't be affected.

Expired peers will appear in the peers' view with the status `Login required`.

![peer-needs-login.png](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/peer-needs-login.png)

## Configure and disable expiration

The expiration period can be set to anything between one hour and 180 days.
Go to the Web UI `Settings` tab and set the desired period in the Authentication section.
You can also disable the expiration for the whole network in the same section.

![peer-login-expiration](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/peer-login-expiration.png)

> **Note**
>
> Enabling peer expiration or changing the expiration period will cause some peers added with the SSO login to disconnect,
> and re-authentication will be required.

## Disable expiration individually per peer

Sometimes, you might want to disable peer expiration for some peers.
With NetBird you can disable login expiration per peer without disabling expiration globally.
In `Peers` click on the peer you want to disable expiration for and use the Login Expiration switch. (Session expiration only applies to peers with a user behind them; peers enrolled with a setup key are already exempt.)
Peers with `Expiration disabled` will be marked with a corresponding label in the Peers table.

![peer-login-expiration](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/team/individual-peer-login-expiration.png)

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
