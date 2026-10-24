> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/manage/control-center/index.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/manage/control-center/index.mdx)

# Visualize Remote Access with Control Center

Control Center is a topological view in the NetBird dashboard that visualizes who can access what across your environment. It maps **Peers**, **Users**, **Groups**, and **Networks** to the resources they can reach and shows the access control policies that permit those connections.

> **Note**
>
> **Availability**: NetBird Cloud (all plans) and self-hosted.

> **Note**
>
> **Permissions:** The Admin and Network Admin user roles can make changes from Control Center, in the live view and
> in Draft Mode. The exception is installing placeholder peers in a draft, which creates a setup key and is therefore
> not available to Network Admins. Learn more about [user roles](https://docs.netbird.io/manage/team/user-roles).

## How It Helps

- **Faster audits:** Confirm a device, group, or network's effective access at a glance.
- **Quicker troubleshooting:** Follow the policy path that grants access to a resource.
- **Safer changes:** Click through to the exact policy to refine sources, destinations, or ports without hunting across pages.

## Views

### Peers View

Use this to understand what a specific machine can reach.

![Control Center Peer View](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/control-center/control-center-peer-view.png)

- Click the peer node, then search or choose another peer from the dropdown to switch focus.
- The graph shows the peer's access control policy nodes and the reachable resources.
- Click a policy chip to open the standard policy editor. Changes you save are reflected in the graph immediately.

### Users View

Use this view to see what resources a specific user can access.

![Control Center User View](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/control-center/control-center-user-view.png)

- Click the user node, then search or choose another user from the dropdown to switch focus.
- The graph shows the users peers, access control policy nodes and the reachable resources.
- Click a peer to switch focus only to that specific peer.
- Click a policy chip to open the standard policy editor. Changes you save are reflected in the graph immediately.

### Groups View

Use this to validate team-level access.

![Control Center Groups View](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/control-center/control-center-groups-view.png)

- Click a group node, then search or choose from the dropdown to switch groups.
- The layout shows which resources that group can reach and via which policies.
- View-only for topology here; create or delete groups in the Groups section outside Control Center. Group-based access is the recommended way to manage permissions.

Common checks:

- Confirm that "DevOps" can reach RDS on TCP 5432, or that "Support" only reaches SSH on TCP 22.

### Networks View

Use this to see who can access resources in your routed [networks](https://docs.netbird.io/manage/networks).

![Control Center Network View](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/control-center/control-center-network-view.png)

- Toggle **All Networks** or select a specific network.
- The network node shows its resources. Connecting lines display the port allowed by the policy and which groups have access.
- Click any policy chip to edit it in the standard editor. NetBird Networks and routing peers enable access to private subnets and IP resources.

### Agent Network

When [Agent Network](https://docs.netbird.io/agent-network) is enabled for your account, the **Peers**, **Users**, and **Groups** views also show its providers and agent policies, so you can see which groups can reach which AI providers. You can edit providers and agent policies from the canvas and build new ones in Draft Mode. See [Agent Network in Control Center](https://docs.netbird.io/agent-network/control-center).

## Focus Mode

When the graph gets busy, focus a single node to see only what is connected to it. Right-click a node and choose **Focus**, or press `F` and then select the node.

![The right-click menu on a policy node with the Focus option highlighted](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/control-center/control-center-focus-context-menu.png)

Everything unrelated dims, leaving only the focused node and its connections highlighted. A "Focusing on" pill at the top of the canvas shows what is in focus; close it to return to the full view.

![Focus Mode active on a group node, with unrelated nodes dimmed and the Focusing on pill shown at the top of the canvas](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/control-center/control-center-focus-active.png)

## Edit Nodes

Control Center is not just a viewer. In the live view you can make changes in place, like editing a policy or changing a peer's group assignments:

- **Edit a policy:** Click an access control policy chip in any view to open the standard policy editor. You can change the usual policy fields as documented in [Access Control](https://docs.netbird.io/manage/access-control/manage-network-access), including sources, destinations, protocols, ports, and posture checks. The dashboard asks you to confirm a live change; once confirmed, it applies immediately.
- **Create new components:** Creating policies, groups, and other components happens in **Draft Mode** or on their regular dashboard pages, not in the live view.

For changes that span several components, **Draft Mode** lets you stage the whole set on a working copy of the canvas, review the exact API requests, and deploy everything as one batch. See [Plan and Deploy Changes with Draft Mode](https://docs.netbird.io/manage/control-center/draft-mode).

## Quick Start

1. Open **Control Center** in the NetBird dashboard.
2. Pick a tab: **Peers**, **Users**, **Groups**, or **Networks**.
3. Click a node to focus, then follow the policy chips to the target resource.
4. Click a policy chip to edit it, then save. The graph updates right away.

## Use Cases

- **Sanity-check a team:** In **Groups** view, select a group and verify the resources and ports granted by its policies match your intent. Adjust policies in place if needed.
- **Prepare a change:** In **Networks** view, review which groups reach a sensitive subnet before tightening ports or destinations.
- **Investigate access:** In **Peers** view, confirm why a host can reach a database by following the policy path and port labels, then narrow the rule if required.
- **MSPs:** Switch tenants in the MSP portal to repeat the same checks per customer environment.

## Related Docs

- [Manage network access with Groups and Access Policies](https://docs.netbird.io/manage/access-control/manage-network-access)
- [Apply posture checks to policies](https://docs.netbird.io/manage/access-control/posture-checks)
- [Networks and routing peers](https://docs.netbird.io/manage/networks)
- [MSP portal overview](https://docs.netbird.io/manage/for-partners/msp-portal)
- [Agent Network in Control Center](https://docs.netbird.io/agent-network/control-center)
