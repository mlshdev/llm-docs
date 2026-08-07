> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/dns/dns-settings.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/dns/dns-settings.mdx)

# DNS Settings

DNS Settings control whether NetBird manages DNS configuration for specific peer groups. This is useful when certain peers need to maintain their existing DNS setup.

## DNS Management Modes

NetBird supports two DNS management modes per peer:

### Managed Mode (Default)

NetBird configures the system's DNS settings. All DNS queries route through NetBird's local resolver, and configured nameservers apply to this peer.

### Unmanaged Mode

NetBird does not modify system DNS settings. The peer uses its pre-existing DNS configuration and all configured nameservers are ignored.

Use unmanaged mode when a peer has conflicting VPN or DNS requirements, corporate policy requires specific DNS settings, or you're troubleshooting DNS issues.

> **Note**
>
> Even in unmanaged mode, peers can still communicate over the NetBird network. DNS management only affects name resolution, not connectivity.

### Client-Side DNS Control

You can also disable DNS management directly on a peer using the `--disable-dns` flag:

```bash
# Disable DNS management on this peer
netbird up --disable-dns

# Enable DNS management on this peer
netbird up --disable-dns=false
```

> **Note**
>
> The `--disable-dns` flag takes precedence over server-side DNS settings. Even if the management server configures nameservers for this peer's group, the peer will ignore them when this flag is set.

## Configuring DNS Settings

### Disable DNS Management for a Group

1. Go to **DNS** → **DNS Settings**
2. Click the groups selection box and select existing groups, or type a new group name and press enter to create one inline
3. Click **Save Changes**

![DNS settings](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/dns/netbird-dns-settings.png)

> **Note**
>
> Changes take effect within 10-30 seconds. Peers in disabled groups will revert to their original DNS settings.

### Re-enable DNS Management

1. Go to **DNS** → **DNS Settings**
2. Remove the group from the disabled list
3. Click **Save Changes**

### Domain Controllers

For guidance on running NetBird alongside Domain Controllers, including disabling DNS management for DC groups, see [Internal DNS Servers](https://docs.netbird.io/manage/dns/internal-dns-servers#active-directory--domain-controllers).

***

## API Configuration

You can manage DNS settings programmatically:

```bash
# Get current settings
curl -X GET https://api.netbird.io/api/dns/settings \
  -H "Authorization: Token <TOKEN>"

# Update settings
curl -X PUT https://api.netbird.io/api/dns/settings \
  -H "Authorization: Token <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "disabled_management_groups": [
      "ch8i4ug6lnn4g9hqv7m0",
      "ch8i4ug6lnn4g9hqv7m1"
    ]
  }'
```

See the full [API Reference](https://docs.netbird.io/ipa/resources/dns) for more details.

***

## Next Steps

- **[Internal DNS Servers](https://docs.netbird.io/manage/dns/internal-dns-servers)** — Configure nameservers and internal DNS
- **[Internal DNS Servers](https://docs.netbird.io/manage/dns/internal-dns-servers)** — Work with AD, BIND, and other internal DNS
- **[Troubleshooting](https://docs.netbird.io/manage/dns/troubleshooting)** — Diagnose DNS issues
