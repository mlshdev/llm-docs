> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/use-cases/homelab/index.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/use-cases/homelab/index.mdx)

# Homelab Use Cases

NetBird helps homelabbers securely access their home infrastructure from anywhere and connect multiple home networks together.

## Common Scenarios

- **Remote NAS Access**: Access your Synology, QNAP, or TrueNAS from anywhere
- **Home Automation**: Reach Home Assistant, smart home devices, and IoT systems remotely
- **Media Servers**: Stream from Plex, Jellyfin, or Emby while traveling
- **Family Network Sharing**: Connect your home network with family members' networks
- **Self-hosted Services**: Access Pi-hole, Nextcloud, and other self-hosted applications

## Getting Started

For connecting entire home networks (accessing devices that don't have NetBird installed), see the [Remote Access overview](https://docs.netbird.io/use-cases/remote-access).

### Guides

- **Items:** \[NetBird on MikroTik Router]\(/get-started/install/mikrotik) - Run NetBird directly on your MikroTik router for whole-network connectivity; \[Access Home Devices]\(/use-cases/remote-access/access-home-devices) - Set up VPN-to-Site access to reach home network devices from anywhere; \[Connect Home Networks]\(/use-cases/remote-access/site-to-site) - Link multiple home networks together using Site-to-Site routing

## Recommended Setup

For most homelabbers, we recommend:

1. **Install NetBird on your devices** - Laptop, phone, and any servers you access directly
2. **Set up a routing peer** - Use a Raspberry Pi, NAS with Docker, or dedicated device
3. **Configure network access** - Use Networks (recommended) or Routes (legacy)

| Scenario                              | Recommended Feature                                                      |
| ------------------------------------- | ------------------------------------------------------------------------ |
| Access home devices from laptop/phone | [Networks](https://docs.netbird.io/manage/networks)                      |
| Connect two home networks             | [Networks](https://docs.netbird.io/use-cases/remote-access/site-to-site) |
| Run NetBird on router                 | [MikroTik Guide](https://docs.netbird.io/get-started/install/mikrotik)   |
