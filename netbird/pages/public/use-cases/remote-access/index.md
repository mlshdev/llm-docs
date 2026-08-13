> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/use-cases/remote-access/index.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/use-cases/remote-access/index.mdx)

# Remote Access

Remote access connects devices and entire networks across locations, without installing the NetBird client on every device.

> **Note**
>
> For the mental model — see [How Routing Peers Work — Networks vs Routes](https://docs.netbird.io/manage/networks/how-routing-peers-work#networks-vs-network-routes).

## Understanding Remote Access Scenarios

NetBird supports three distinct remote access scenarios. Understanding which one you need is the first step to a successful setup.

### VPN-to-Site

A NetBird peer (device running the NetBird client) accesses devices on a remote network that don't have NetBird installed.

```
Your Laptop ──────► NetBird Tunnel ──────► Routing Peer ──────► Office Printer
  (peer)                                    (peer)              (clientless)
```

**Common use cases:**

- Access your home NAS from anywhere
- Reach office servers while traveling
- Connect to IoT devices on a remote network

**Implementation:** Use [Networks](https://docs.netbird.io/manage/networks)

### Site-to-VPN

A device without NetBird initiates connections to NetBird peers. This is the reverse of VPN-to-Site—the clientless device starts the connection.

```
Office Server ──────► Routing Peer ──────► NetBird Tunnel ──────► Your Laptop
 (clientless)           (peer)                                      (peer)
```

**Common use cases:**

- Office monitoring systems pushing data to remote analysts
- On-premise servers initiating backups to cloud peers
- Legacy systems that must initiate outbound connections

**Implementation:** See the [Site-to-VPN guide](https://docs.netbird.io/use-cases/remote-access/site-to-vpn) for the full setup with [Networks](https://docs.netbird.io/manage/networks).

### Site-to-Site

Devices on separate networks communicate with each other, with neither running NetBird directly. Each network has a routing peer that handles traffic.

```
Home NAS ──► Routing Peer ──► NetBird Tunnel ──► Routing Peer ──► Office Server
(clientless)    (peer)                              (peer)         (clientless)
```

**Common use cases:**

- Connect branch office networks to headquarters
- Link home networks of family members
- Bridge on-premise data centers with cloud VPCs

**Implementation:** Use [Networks](https://docs.netbird.io/use-cases/remote-access/site-to-site)

### Exit Nodes

Exit nodes route all internet-bound traffic (`0.0.0.0/0`) through a designated peer, changing your apparent public IP address. Unlike the scenarios above, exit nodes handle internet egress rather than private network access.

```
Your Laptop ──────► NetBird Tunnel ──────► Exit Node ──────► Internet
  (peer)                                     (peer)
```

**Common use cases:**

- Access region-restricted content while traveling
- Route traffic through a trusted network for compliance
- Mask your location for privacy

**Implementation:** See the [Exit Nodes guide](https://docs.netbird.io/use-cases/remote-access/exit-nodes) (uses [Routes](https://docs.netbird.io/manage/network-routes))

## Which Scenario Do I Need?

| I want to...                                            | Scenario     | Feature to Use                                                                  |
| ------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------- |
| Access home devices from my laptop                      | VPN-to-Site  | [Networks](https://docs.netbird.io/use-cases/remote-access/access-home-devices) |
| Access office resources while traveling                 | VPN-to-Site  | [Networks](https://docs.netbird.io/manage/networks)                             |
| Reach Active Directory and Windows file shares remotely | VPN-to-Site  | [Networks](https://docs.netbird.io/use-cases/remote-access/active-directory)    |
| Let an office server connect to my laptop               | Site-to-VPN  | [Networks](https://docs.netbird.io/use-cases/remote-access/site-to-vpn)         |
| Connect two home networks together                      | Site-to-Site | [Networks](https://docs.netbird.io/use-cases/remote-access/site-to-site)        |
| Link branch offices                                     | Site-to-Site | [Networks](https://docs.netbird.io/use-cases/remote-access/site-to-site)        |
| Bridge cloud VPC with on-premise network                | Site-to-Site | [Networks](https://docs.netbird.io/use-cases/remote-access/cloud-to-on-premise) |
| Route all internet traffic through a specific peer      | Exit Node    | [Routes](https://docs.netbird.io/use-cases/remote-access/exit-nodes) only       |

## How It Works

All scenarios use a routing peer—a device running NetBird that forwards traffic for its local network:

1. **Deploy a routing peer** at each site (any device running NetBird with access to the local network)
2. **Configure routing** to advertise each site's subnet through NetBird
3. **Set access policies** to control which peers can reach which networks
4. **Configure clientless devices** to route traffic through the routing peer (for Site-to-VPN and Site-to-Site)

### VPN-to-Site Guides (Networks)

- **Items:** \[Access Home Devices]\(/use-cases/remote-access/access-home-devices) - Access your NAS, home automation, and media servers from anywhere; \[Cloud to On-Premise]\(/use-cases/remote-access/cloud-to-on-premise) - Connect cloud workloads to on-premise databases and services; \[Active Directory & Windows File Shares]\(/use-cases/remote-access/active-directory) - Reach domain controllers and SMB shares from remote peers; \[Reach Services on the Routing Peer]\(/use-cases/remote-access/reach-services-on-the-routing-peer) - Access services running on the routing peer itself

### Site-to-Site Guides (Networks)

- **Items:** \[Site-to-Site]\(/use-cases/remote-access/site-to-site) - Connect two networks (home, office, or cloud) through routing peers at each end; \[Masquerade & Persistent Routes]\(/manage/networks/masquerade) - Masquerade options and making routes survive reboots on clientless devices

## Key Concepts

| Term              | Description                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| Routing peer      | A device running NetBird that forwards traffic for its local network                                            |
| Clientless device | A device that doesn't run NetBird (printers, IoT, legacy systems)                                               |
| Masquerade        | NAT that hides source IPs behind the routing peer's IP (simplifies routing configuration on clientless devices) |

## Networks vs Routes

NetBird offers two ways to route traffic to private networks: [Networks](https://docs.netbird.io/manage/networks) (newer, recommended) and [Routes](https://docs.netbird.io/manage/network-routes) (original, now deprecated). Existing Routes configurations keep working, but every use case except [exit nodes](https://docs.netbird.io/use-cases/remote-access/exit-nodes) has moved to Networks — use Networks for new setups.

**Use Networks** for all routing scenarios — VPN-to-Site, Site-to-VPN, and Site-to-Site — with a guided setup and per-resource access policies.

**Use Routes** only for exit nodes, or to preserve source IPs by disabling masquerade. The legacy [Site-to-Site with Routes](https://docs.netbird.io/manage/network-routes/use-cases/site-to-site) recipe remains available for existing setups.

### Scenario Support

| Scenario     | Networks | Routes |
| ------------ | -------- | ------ |
| VPN-to-Site  | Yes      | Yes    |
| Site-to-VPN  | Yes      | Yes    |
| Site-to-Site | Yes      | Yes    |

### Detailed Comparison

| Capability                    | Networks                               | Routes                                                  |
| ----------------------------- | -------------------------------------- | ------------------------------------------------------- |
| Setup complexity              | Simpler, guided UI                     | More manual configuration                               |
| Distribution groups           | Automatic (from policy sources)        | Explicit configuration required                         |
| Extra routing peer policy     | No (implied by resource policies)      | Yes (must connect routing peers to distribution groups) |
| Per-route configuration       | No (routing peers serve all resources) | Yes (each route needs peer, groups, range)              |
| Edit resources after creation | Yes                                    | No                                                      |
| Wildcard domains              | Yes                                    | No                                                      |
| Masquerade control            | Always on                              | Configurable                                            |
| Exit node support             | No                                     | Yes                                                     |

### Future Direction

The goal is to migrate all routing functionality into Networks for a unified experience. **Routes are now deprecated** — every use case except [exit nodes](https://docs.netbird.io/use-cases/remote-access/exit-nodes) has moved to Networks, and existing Routes configurations continue to work. Use Networks for all new configurations.
