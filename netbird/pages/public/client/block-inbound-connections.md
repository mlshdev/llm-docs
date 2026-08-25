> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/client/block-inbound-connections.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/client/block-inbound-connections.mdx)

# Block Inbound Connections

The Block Inbound Connections setting prevents all inbound connections to the local machine and any networks it routes. When enabled, the NetBird client will drop all incoming peer traffic — including peer-to-peer connections, routed network traffic, and SSH — regardless of access control policies configured in the management service.

This is a client-side override that takes precedence over any policies received from the management service.

> **Note**
>
> Available since NetBird v0.46.0.

## When to use it

- **Outbound-only peers**: A machine that only needs to access remote resources but should never be reachable by other peers.
- **Temporary lockdown**: Quickly block all inbound access to a machine without modifying server-side policies.
- **Defense-in-depth**: Add a client-side layer of protection alongside your access control policies.

## What it blocks

When Block Inbound Connections is enabled, the client will not add any inbound firewall rules. This means:

- **Peer connections**: Other peers cannot initiate connections to this machine.
- **Routed network traffic**: If this peer acts as a routing peer, inbound traffic to its routed networks is also blocked.
- **SSH access**: NetBird SSH connections to this peer are blocked.

> **Note**
>
> [`netbird expose`](https://docs.netbird.io/manage/reverse-proxy/expose-from-cli) requires inbound connections, so the command fails while this setting is enabled.

> **Note**
>
> This setting overrides all policies from the management service. Even if an access control policy explicitly allows traffic to this peer, inbound connections will still be blocked.

## Changing the setting in the desktop app

1. Open the NetBird desktop app.
2. Go to **Settings → Security**.
3. Toggle **Block Inbound Traffic**.

## Enabling via the CLI

You can enable Block Inbound Connections when starting the NetBird client:

```bash
netbird up --block-inbound
```

To disable it, run:

```bash
netbird up --block-inbound=false
```
