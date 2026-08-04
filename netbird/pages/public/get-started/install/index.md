> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/get-started/install/index.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/get-started/install/index.mdx)

# Install NetBird

If you're a new user you should visit the [Quickstart Guide](https://docs.netbird.io/get-started). This will help you setup your management dashboard and connect your first client. For quick install instructions, including desktop applications, visit the [install prompt](https://app.netbird.io/install) through the management dashboard. To view all the client installation methods we've set up a variety of platform specific pages.

[Download NetBird](https://app.netbird.io/install)

The NetBird client (agent) allows a peer to join a pre-existing NetBird deployment. If a NetBird deployment is not yet available, there are both managed and [self-hosted](https://docs.netbird.io/selfhosted/selfhosted-quickstart) options available.

## Install and Update Instructions

- [Install on Linux](https://docs.netbird.io/get-started/install/linux)
- [Install on macOS](https://docs.netbird.io/get-started/install/macos)
- [Install on Windows](https://docs.netbird.io/get-started/install/windows)
- [Install on Android](https://docs.netbird.io/get-started/install/android)
- [Install on iOS](https://docs.netbird.io/get-started/install/ios)

## Additional Platforms

- [Install on Synology](https://docs.netbird.io/get-started/install/synology)
- [Install on TrueNAS](https://docs.netbird.io/get-started/install/truenas)
- [Install on pfSense](https://docs.netbird.io/get-started/install/pfsense)
- [Install on OPNSense](https://docs.netbird.io/get-started/install/opnsense)
- [Install on OpenWrt](https://docs.netbird.io/get-started/install/openwrt)
- [Install on MikroTik](https://docs.netbird.io/get-started/install/mikrotik)
- [Install on Raspberry Pi](https://docs.netbird.io/get-started/install/raspberrypi)
- [Install on Proxmox VE](https://docs.netbird.io/get-started/install/proxmox-ve)

## Running NetBird with SSO Login

### Desktop UI Application

Launch the desktop app and click **Connect** in the main window or tray/menu-bar menu. On first launch, choose NetBird Cloud or enter the URL of your self-hosted deployment. NetBird opens your browser to authenticate the device. See the [desktop app guide](https://docs.netbird.io/client/desktop-app) for the complete interface.

### CLI

Alternatively, you could use command line. Simply run

```bash
netbird up
```

> It will open your browser, and you will be prompt for email and password. Follow the instructions.

![high-level-dia](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/get-started/netbird-sso-login-cmd.gif)

Check connection status:

```bash
  netbird status
```

## Running NetBird with a Setup Key

In case you are activating a server peer, you can use a [setup key](https://docs.netbird.io/manage/peers/register-machines-using-setup-keys) as described in the steps below.

> This is especially helpful when you are running multiple server instances with infrastructure-as-code tools like ansible and terraform.

1. Login to the Management Service. You need to have a `setup key` in hand (see [setup keys](https://docs.netbird.io/manage/peers/register-machines-using-setup-keys)).

For all systems:

```bash
  netbird up --setup-key <SETUP KEY>
```

For **Docker**, you can run with the following command:

```bash
docker run --network host --privileged --rm -d -e NB_SETUP_KEY=<SETUP KEY> -v netbird-client:/var/lib/netbird netbirdio/netbird:<TAG>
```

> TAG > 0.6.0 version

Alternatively, if you are hosting your own Management Service provide `--management-url` property pointing to your Management Service:

```bash
  netbird up --setup-key <SETUP KEY> --management-url http://localhost:33073
```

> You could also omit the `--setup-key` property. In this case, the tool will prompt for the key.

2. Check connection status:

```bash
  netbird status
```

3. Check your IP:

On **macOS** :

```bash
  sudo ifconfig utun100
```

On **Linux**:

```bash
  ip addr show wt0
```

On **Windows**:

```bash
  netsh interface ip show config name="wt0"
```
