> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/manage/peers/approve-peers.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/manage/peers/approve-peers.mdx)

# Approve peers

The peer approval feature enhances network security by requiring manual administrator approval before a device can join the NetBird network.
This feature is handy when network administrators want to ensure access is restricted only to trusted, corporate-managed devices.

When enabled, devices connect to the management service without network access to other resources.
Administrators then can assess whether the peer is eligible to join the network.

> **Note**
>
> This feature is only available in the [NetBird cloud](https://app.netbird.io/) version.

## Related Video Content

For details on the peer approval feature, part of our "Getting started with NetBird" video covers this topic:

[YouTube video JRCZy4rLi-c](https://www.youtube.com/watch?v=JRCZy4rLi-c\&t=335s)

## Enable peer approval

To enable peer approval, navigate to [Settings » Authentication](https://app.netbird.io/settings) and enable 'Peer approval'.

![peer-approval-settings](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/peers/approve-peers/peer-approval-settings.png)

> **Note**
>
> When disabling the peer approval, all pending approval requests will automatically be approved.

## Approve peer

To approve a peer, navigate to the [Peers section](https://app.netbird.io/peers) and click the `Approve` button on the right side of the peers table.

![peer-needs-approval](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/peers/approve-peers/peer-needs-approval.png)

## Automate peer approval with EDR integrations

NetBird integrates with popular EDR solutions like [CrowdStrike](https://www.crowdstrike.com/) to automate peer approval
and allow only trusted devices to join the network.
Check the [EDR integrations](https://docs.netbird.io/manage/access-control/endpoint-detection-and-response) guide for more information on how to enable this feature.

## Get started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
