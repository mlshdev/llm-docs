> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/use-cases/remote-access/access-home-devices.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/use-cases/remote-access/access-home-devices.mdx)

# Access Home Devices (VPN-to-Site)

This guide shows how to access your home network devices from anywhere using the Networks feature.

> **Note**
>
> For the mental model — see [How Routing Peers Work — Mental model](https://docs.netbird.io/manage/networks/how-routing-peers-work#mental-model-how-traffic-flows).

## What You'll Achieve

After following this guide, you'll be able to access your home NAS, media server, home automation, or any device on your home network from your laptop or phone—anywhere in the world.

```
Your Laptop ──────► NetBird Tunnel ──────► Routing Peer ──────► Home NAS
  (peer)                                    (at home)           (no NetBird)
```

## Prerequisites

- A [NetBird cloud account](https://app.netbird.io/) or [self-hosted instance](https://docs.netbird.io/selfhosted/selfhosted-quickstart)
- NetBird installed on your laptop or phone ([installation guide](https://docs.netbird.io/get-started/install))
- An always-on device at home to serve as the routing peer (Raspberry Pi, NAS with Docker, old laptop, etc.)

## Step 1: Connect Your Laptop to NetBird

If you haven't already, install NetBird on your laptop and connect:

1. Download NetBird from [app.netbird.io/install](https://app.netbird.io/install)
2. Run the application and click **Connect** in the system tray
3. Complete the sign-up process in your browser
4. Verify your device appears in the [NetBird dashboard](https://app.netbird.io/) under **Peers** → **User Devices**

## Step 2: Add Your Laptop to a User Group

1. In **Peers** → **User Devices**, select your laptop peer
2. Under **Assigned Groups**, add a new group: "Home Users"

![Add user group](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/networks/use-cases/access-home-devices/add-user-group.png)

## Step 3: Find Your Home Subnet

Before configuring NetBird, identify your home network's subnet.

**On your routing peer device, run:**

```bash
# Linux
ip route | grep -E "^[0-9]"

# macOS
netstat -rn | grep default
```

Look for your local subnet, typically something like `192.168.1.0/24` or `192.168.0.0/24`.

## Step 4: Create a Network for Your Home LAN

1. Go to **Network Routing** → **Networks** in the NetBird dashboard
2. Click **Add Network**
3. Name it "Home LAN" and click **Save**

![Add network](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/networks/use-cases/access-home-devices/add-network-home-lan.png)

## Step 5: Add Your Home Subnet as a Resource

1. In your new network, click **Add Resource**
2. In the **Resource** tab, enter a name like "Home Subnet"
3. Enter your home subnet (e.g., `192.168.1.0/24`)
4. Expand **Additional Options** and under **Resource Groups**, create a group called `home-lan`
5. Click **Continue** to proceed to the **Access Control** tab

![Add resource](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/networks/use-cases/access-home-devices/add-resource-home-network.png)

> **Note**
>
> For more granular access, add specific device IPs instead of the entire subnet. For example, add `192.168.1.50/32` to only allow access to your NAS.

## Step 6: Create an Access Policy

1. In the **Access Control** tab, click **Add Policy**
2. Set **Source** to "Home Users"
3. Set **Destination** to `home-lan`
4. Set **Protocol** to All
5. Name it "Home LAN Access" and click **Add Policy**
6. Click **Add Resource** to save the resource with its policy

![Add policy](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/networks/use-cases/access-home-devices/add-policy-home-lan.png)

## Step 7: Set Up the Routing Peer

The routing peer forwards traffic from NetBird to your local network. Use any always-on device:

- Raspberry Pi
- Synology NAS
- Apple TV/Android TV
- Home server

**Install NetBird on your routing peer:**

1. In the NetBird dashboard, go to **Settings** → **Setup Keys**
2. Create a new setup key (one-time use recommended). Add `home-lan` to **Auto-assigned groups** and click **Create Setup Key**.

> **Note**
>
> You can also add groups to peers manually after setup. Go to **Peers** → **Servers**, select the peer, and add groups under **Assigned Groups**.

3. On your routing peer, run:

```bash
curl -fsSL https://pkgs.netbird.io/install.sh | sh
sudo netbird up --setup-key YOUR_SETUP_KEY
```

4. In the Networks view, click **Add Routing Peer** on your Home LAN network

![Add routing peer button](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/networks/use-cases/access-home-devices/add-routing-peer.png)

5. Select your new peer and click **Add Routing Peer**

![Add routing peer](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/networks/use-cases/access-home-devices/add-routing-peer-home-network.png)

## Step 8: Test the Connection

From your laptop (connected to a different network like mobile data or coffee shop WiFi):

```bash
ping 192.168.1.1  # Your router
ping 192.168.1.50 # Your NAS or other device
```

You can now access your home devices from anywhere.

## Common Home Devices to Access

| Device            | Typical Access Method               |
| ----------------- | ----------------------------------- |
| Synology/QNAP NAS | Web UI (port 5000/5001), SMB shares |
| Home Assistant    | Web UI (port 8123)                  |
| Plex/Jellyfin     | Web UI (port 32400/8096)            |
| Pi-hole           | Web UI (port 80), DNS (port 53)     |
| Security cameras  | RTSP streams, web interfaces        |
| Printers          | IPP/AirPrint, web interfaces        |

## Troubleshooting

**Can't reach home devices:**

1. Verify the routing peer is online: check `netbird status` on the routing peer
2. Ensure the routing peer can reach local devices: `ping 192.168.1.1` from the routing peer
3. Check that your access policy includes your user/device

**Intermittent connectivity:**

1. Ensure the routing peer has a stable internet connection
2. Check if your ISP blocks VPN traffic (try a different port or protocol)

## Next Steps

- **Need Site-to-Site?** If you want to connect two home networks together, see [Site-to-Site](https://docs.netbird.io/use-cases/remote-access/site-to-site)
- **Advanced configuration:** See [Masquerade](https://docs.netbird.io/manage/networks/masquerade) for masquerade options and persistent return-route configuration
