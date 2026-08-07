> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/peers/auto-update.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/peers/auto-update.mdx)

# Client Automatic Updates

The Automatic Updates feature allows the NetBird client to notify users when a new version is available and prompt them to install it. This ensures that users always have the latest features and security patches without needing to manually download and install updates.

> **Note**
>
> Minimum supported agent version: v0.61.0.
> This or higher version must also be installed on the peers you need to Automatically Update.

> **Note**
>
> This feature also requires an upgraded NetBird Management server.
> If you're self-hosting NetBird, ensure your server is updated to version v0.61.0, which adds support for Automatic Updates.

> **Note**
>
> This feature is currently under active development and will continue to evolve. Future releases will add Linux support, and handling for long-running peers.

## Enable Automatic Updates

![Automatic Updates](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/peers/auto-update/dashboard.png)

To enable client auto updates, navigate to [Settings » Clients](https://app.netbird.io/settings) and enable 'Automatic Updates'.

You can either:

- Update to latest stable version.
- Update to a specific version.

> **Note**
>
> Once enabled, NetBird clients will prompt the user to install the specified version when connecting via the UI, if the current version is older than the specified version.

### Force Automatic Updates

When you need updates to be installed without user interaction, enable the **Force Automatic Updates** toggle. With this option, updates are installed automatically in the background without prompting the user.

> **Warning**
>
> Enabling Force Automatic Updates will restart the NetBird client during updates, which can temporarily disrupt active connections. Use with caution in production environments.

## How it works

1. **User-Initiated Connection**: When a Peer connects to Management, it will receive the current Automatic Updates settings.
2. **Version Check**: The Peer will compare its current version with the version specified in the Automatic Updates settings.
3. **Update Process**:
   1. If the Peer is running an older version than specified, it will prompt the user to install the update.
   2. Client will then download the update package from the official NetBird repository.
   3. The Peer will then install the update and restart itself to apply the changes.

When **Force Automatic Updates** is enabled, step 3.1 is skipped, the update is installed automatically in the background without user interaction.

## Supported Platforms

Automatic Updates are supported on the following platforms only:

- Windows
- macOS (with PKG installer)

Linux support is not available at this time due to the variety of distributions and package managers. A future release may include support for popular distributions.

## Backward and Forward Compatibility

- If Management server version < v0.61.0, clients will **not** automatically update.
- If Management server version >= v0.61.0, NetBird clients with version >= v0.61.0 will automatically update according to the Automatic Updates settings.

## Notes

1. Automatic Updates will be set to "disabled" by default.
2. If the Peer is unable to download or install the update (e.g., due to network issues), it will show an error notification but will not retry until the next restart.
3. For long-running Peers, a future release may include support for periodic update checks during runtime.
4. All notifications related to Automatic Updates will be shown only if NetBird UI is running and Notifications are enabled.

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
