> Commit-pinned source for n8n main: [docs/integrations/community-nodes/installation-and-management/manual-installation.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/community-nodes/installation-and-management/manual-installation.md)

# Manually install community nodes from npm <a id="manually-install-community-nodes-from-npm"></a>

You can manually install community nodes from the npm registry on self-hosted n8n.

You need to manually install community nodes in the following circumstances:

- Your n8n instance runs in queue mode.
- You want to install [private packages](https://docs.npmjs.com/creating-and-publishing-private-packages).

## Install a community node <a id="install-a-community-node"></a>

Access your Docker shell:

```sh
docker exec -it n8n sh
```

Create `~/.n8n/nodes` if it doesn't already exist, and navigate into it:

```sh
mkdir ~/.n8n/nodes
cd ~/.n8n/nodes
```

Install the node:

```sh
npm i n8n-nodes-nodeName
```

Then restart n8n.

## Uninstall a community node <a id="uninstall-a-community-node"></a>

Access your Docker shell:

```sh
docker exec -it n8n sh
```

Run npm uninstall:

```sh
npm uninstall n8n-nodes-nodeName
```

## Upgrade a community node <a id="upgrade-a-community-node"></a>

> **Warning**
> **Breaking changes in versions**
>
> Node developers may introduce breaking changes in new versions of their nodes. A breaking change is an update that breaks previous functionality. Depending on the node versioning approach that a node developer chooses, upgrading to a version with a breaking change could cause all workflows using the node to break. Be careful when upgrading your nodes. If you find that an upgrade causes issues, you can [downgrade](#upgrade-or-downgrade-to-a-specific-version).

### Upgrade to the latest version <a id="upgrade-to-the-latest-version"></a>

Access your Docker shell:

```sh
docker exec -it n8n sh
```

Run npm update:

```sh
npm update n8n-nodes-nodeName
```

### Upgrade or downgrade to a specific version <a id="upgrade-or-downgrade-to-a-specific-version"></a>

Access your Docker shell:

```sh
docker exec -it n8n sh
```

Run npm uninstall to remove the current version:

```sh
npm uninstall n8n-nodes-nodeName
```

Run npm install with the version specified:

```sh
# Replace 2.1.0 with your version number <a id="replace-210-with-your-version-number"></a>
npm install n8n-nodes-nodeName@2.1.0
```
