> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/manage/settings/clients.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/manage/settings/clients.mdx)

# Client Settings

The `Clients` tab under [Settings](https://app.netbird.io/settings) holds account-wide settings that control how NetBird clients behave. Changing these settings requires a role with permission to update settings, such as `Owner` or `Admin`. Roles with read-only access to settings can view the tab, but the controls are disabled.

![Client settings tab showing Automatic Updates, Expose Services from CLI, and Lazy Connections](https://raw.githubusercontent.com/netbirdio/docs/d905fda2a3f04a2066746875d09e51a3fe62dfed/public/docs-static/img/manage/settings/client-settings-tab.png)

## Automatic Updates

Choose an update method for your clients: keep them on the latest stable release, pin them to a specific version, or disable updates. The `Force Automatic Updates` toggle installs updates in the background without user interaction.

See [Client Automatic Updates](https://docs.netbird.io/manage/peers/auto-update) for the full behavior, platform support, and version requirements.

## Expose Services from CLI

The `Enable Peer Expose` toggle allows peers to expose local HTTP services through the NetBird reverse proxy using the `netbird expose` command. This requires NetBird v0.66.0 or later.

When enabled, you must select at least one peer group under `Allowed peer groups`. Only peers in the selected groups can expose services.

See [Expose Services from the CLI](https://docs.netbird.io/manage/reverse-proxy/expose-from-cli) for command usage and examples.

## Lazy Connections

Instead of maintaining always-on connections, NetBird can activate peer connections on demand based on activity or signaling. Enable the `Enable Lazy Connections` toggle to turn this on for compatible clients. This requires NetBird client v0.50.1 or higher.

See [Lazy Connections](https://docs.netbird.io/manage/peers/lazy-connection) for how activation works, inactivity thresholds, and per-client overrides.

## Agent Network-focused view

Accounts using [Agent Network](https://docs.netbird.io/agent-network) see an additional `Agent Network focused view` toggle. When enabled, the dashboard shows only the Agent Network-related sections and hides parts that are not relevant for it, such as Networks, DNS, and Reverse Proxy. Disable it to bring back the full dashboard.
