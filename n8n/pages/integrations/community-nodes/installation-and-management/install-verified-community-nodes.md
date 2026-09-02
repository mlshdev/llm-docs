> Commit-pinned source for n8n main: [docs/integrations/community-nodes/installation-and-management/install-verified-community-nodes.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/community-nodes/installation-and-management/install-verified-community-nodes.md)

# Install verified community nodes

> **Info**
> **Limited to n8n instance owners and admins**
>
> The n8n instance owner and admin accounts can install and manage verified community nodes. The instance owner is the person who sets up and manages user management. All members of an n8n instance can use already installed community nodes in their workflows.

## Install a community node <a id="install-a-community-node"></a>

To install a [verified community node](https://docs.n8n.io/connect/create-nodes/deploy-your-node/submit-community-nodes#submit-your-node-for-verification-by-n8n):

1. Go to the **Canvas** and open the **nodes panel** (either by selecting '+' or pressing ++n++).
2. **Search** for the node that you're looking for. If there is a matching verified community node, you will see a **More from the community** section at the bottom of the nodes panel.
3. Select the node you want to install. This takes you to a detailed view of the node, showing all the supported actions.
4. Select **install**. This will install the node for your instance and enable all members to use it in their workflows.
5. You can now add the node to your workflows.

> **Info**
> **Enable installation of verified community nodes**
>
> Some users may not want to show verified community nodes in the nodes panel of their instances. On n8n cloud, instance owners can toggle this in the [Cloud Admin Panel](https://docs.n8n.io/deploy/use-n8n-cloud/use-the-admin-dashboard). Self-hosted users can use [environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes) to control the availability of this feature.

## Uninstall a community node <a id="uninstall-a-community-node"></a>

To uninstall a community node:

1. Go to **Settings** > **Community nodes**.
2. On the node you want to install, select **Options** !\[Three dots options menu]\(../../.gitbook/assets/three-dot-options-menu (2).png).
3. Select **Uninstall package**.
4. Select **Uninstall Package** in the confirmation modal.
