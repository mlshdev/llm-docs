> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/get-started/install/pfsense.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/get-started/install/pfsense.mdx)

# pfSense Installation

The NetBird client (agent) allows a peer to join a pre-existing NetBird deployment. If a NetBird deployment is not yet available,
there are both managed and [self-hosted](https://docs.netbird.io/selfhosted/selfhosted-quickstart) options available.

> **Note**
>
> This installation is intended for early adopters while the pfSense package is under review and not yet available in the pfSense package manager.

[YouTube video Kgrcquyeohc](https://www.youtube.com/watch?v=Kgrcquyeohc)

## Prerequisites

- Shell/SSH access to pfSense (via Web UI shell or remote SSH)
- A [setup key](https://docs.netbird.io/manage/peers/register-machines-using-setup-keys#types-of-setup-keys) to authenticate and register the pfSense device
- The latest NetBird `.pkg` binary from the [GitHub Releases](https://github.com/netbirdio/pfsense-netbird/releases)

## Installation

1. **SSH into your pfSense system**
   ```sh
   ssh admin@<pfsense-ip>
   ```
   If remote SSH is enabled or use the built-in shell via the pfSense Web UI (`Diagnostics` > `Command Prompt`).

2. **Download the NetBird packages**

   Go to the [latest pfSense NetBird release](https://github.com/netbirdio/pfsense-netbird/releases/latest). On the release page you will see:

   - The **release tag** at the top of the page (e.g. `v0.1.34`)
   - Two `.pkg` files for each architecture listed under **Assets** — the version numbers are embedded in the filenames

   Pick the files that match your system architecture:

   - `x86_64` — standard Intel/AMD-based pfSense installations
   - `aarch64` — ARM-based pfSense installations

   For example, a release with tag `v0.1.34` might list these assets:

   - `netbird-0.69.0-x86_64.pkg`
   - `pfSense-pkg-NetBird-0.2.2-x86_64.pkg`

   From a shell on your pfSense system, use `fetch` with the download URLs, replacing the tag, version, and architecture values with those from the release page:

   ```sh
   fetch https://github.com/netbirdio/pfsense-netbird/releases/download/<RELEASE_TAG>/netbird-<VERSION>-<ARCH>.pkg
   fetch https://github.com/netbirdio/pfsense-netbird/releases/download/<RELEASE_TAG>/pfSense-pkg-NetBird-<VERSION>-<ARCH>.pkg
   ```

3. **Install the packages**

   Install both packages using the filenames you downloaded:

   ```sh
   pkg add -f netbird-<VERSION>-<ARCH>.pkg
   pkg add -f pfSense-pkg-NetBird-<VERSION>-<ARCH>.pkg
   ```

4. **Verify the installation**

   The NetBird GUI should now appear under `VPN` > `NetBird` in the pfSense menu.

## Configuration

### Authenticate the machine

Fill out the authentication form with the following values and click `Save`:

- **Management URL**: Default is `https://app.netbird.io:443`. If self-hosting, enter your custom management server URL.
- **Setup Key**: Paste the setup key from your NetBird account. .

![authentication](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/pfSense/authentication.png)

### Verify Connection Status

The Status page shows detailed information about connected peers and control services, helping you monitor your deployment.
Access it via `Status` > `NetBird` in the pfSense menu.

Use this section for diagnostics and troubleshooting common connection or setup issues.

![connection status](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/pfSense/status.png)

### Assign NetBird interface

After authentication, a new interface named `wt0(wt0)` will be available but unassigned. To assign it go to
`Interfaces` > `Assignments`. Under `Available network ports`, select the NetBird interface `wt0(wt0)` and click `Add`.

![NewInterface](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/pfSense/new_interface.png)

### Enable the NetBird interface

Now that the NetBird interface has been added, you need to enable it. Go to `Interfaces` > `OPT1`, then configure
the following options and click `Save`, then `Apply changes` to activate the interface:

- **Enable**: `✓ Enable Interface`
- **Description**: `NetBird`

![enableInterface](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/pfSense/enable_interface.png)

### Configure Firewall Rules for the NetBird interface

To allow NetBird to handle all access control, permit all traffic on the NetBird interface in pfSense. This ensures traffic
flows freely, while NetBird’s own policies (ACLs) govern the access restrictions.

Create rules to control traffic coming from your NetBird network into pfSense and your local networks:

1. Go to `Firewall` > `Rules` and select the `NetBird` (interface) tab and click `Add` to create rules
2. Configure the rule:
   - **Action**: `Pass`
   - **Interface**: `NETBIRD`
   - **Address Family**: `in`
   - **Protocol**: `Any`
   - **Source**: `Any`
   - **Destination**: `Any`
   - **Description**: `Allow all on NetBird (managed by NetBird)`
3. Click `Save`, then `Apply Changes`

![firewallRules](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/pfSense/firewall_rules.png)

### Config for Troubleshooting Relayed Connections

By default, pfSense uses automatic outbound NAT which randomizes source ports. This can cause issues with NetBird's NAT traversal (hole punching). To ensure reliable direct connections, you must configure a Static Port mapping.

1. **Change Outbound NAT Mode**:
   - Navigate to `Firewall` > `NAT` > `Outbound`.
   - Select `Hybrid Outbound NAT rule generation`.
   - Click `Save`.

2. **Add Static Port Rule**:
   - Click `Add` (Up arrow) to create a new rule at the top of the list.
   - **Interface**: `WAN`
   - **Address Family**: `IPv4`
   - **Protocol**: `UDP`
   - **Source**: `Network` (enter the IP address of your NetBird host)
   - **Destination**: `Any`
   - **Translation / Static Port**: Check `Static Port` box
   - **Description**: `NetBird Static Port`
   - Click `Save` and then `Apply Changes`.

3. **Reset States**:
   - Go to `Diagnostics` > `States`.
   - Filter by the NetBird host IP.
   - Click `Kill`.

4. **Restart NetBird**:
   - Run `netbird service restart` on the device.
   - Run `netbird status -d` to verify the connection.

## Updating

To upgrade an existing install, fetch the latest packages and re-run `pkg add -f` over the current ones. There is no need to `pkg delete` first: the `-f` flag upgrades the packages in place.

1. **Download the latest packages**

   From the [latest pfSense NetBird release](https://github.com/netbirdio/pfsense-netbird/releases/latest), fetch both `.pkg` files for your architecture, replacing the tag, version, and architecture values with those from the release page (as in [Installation](#installation)):

   ```sh
   fetch https://github.com/netbirdio/pfsense-netbird/releases/download/<RELEASE_TAG>/netbird-<VERSION>-<ARCH>.pkg
   fetch https://github.com/netbirdio/pfsense-netbird/releases/download/<RELEASE_TAG>/pfSense-pkg-NetBird-<VERSION>-<ARCH>.pkg
   ```

2. **Upgrade both packages in place**

   Using the filenames you downloaded, run `pkg add -f` on both over the existing install:

   ```sh
   pkg add -f netbird-<VERSION>-<ARCH>.pkg
   pkg add -f pfSense-pkg-NetBird-<VERSION>-<ARCH>.pkg
   ```

3. **Restart and verify**

   ```sh
   netbird service restart
   netbird status -d
   ```

## Uninstallation

From a shell on your pfSense system, run:

```sh
pkg delete netbird pfSense-pkg-NetBird
```

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
