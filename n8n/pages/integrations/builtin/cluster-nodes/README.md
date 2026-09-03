> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/README.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/cluster-nodes/README.md)

# Cluster nodes <a id="cluster-nodes"></a>

[Cluster nodes](https://docs.n8n.io/get-started/key-concept-glossary#cluster-node-n8n) are node groups that work together to provide functionality in an n8n workflow. Instead of using a single node, you use a [root node](https://docs.n8n.io/get-started/key-concept-glossary#root-node-n8n) and one or more [sub-nodes](https://docs.n8n.io/get-started/key-concept-glossary#sub-node-n8n) that extend the functionality of the node.

![A workflow diagram with one root node connected to two sub-nodes](https://raw.githubusercontent.com/n8n-io/n8n-docs/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/reusable-content/.gitbook/assets/root-sub-nodes.png)

## Root nodes <a id="root-nodes"></a>

Each cluster starts with one root node[^1].

## Sub-nodes <a id="sub-nodes"></a>

Each root node can have one or more sub-nodes[^2] attached to it.

[^1]: Each n8n cluster node contains a single root nodes that defines the main functionality of the cluster. One or more sub nodes attach to the root node to extend its functionality.

[^2]: n8n cluster nodes consist of one or more sub nodes connected to a root node. Sub nodes extend the functionality of the root node, providing access to specific services or resources or offering specific types of dedicated processing, like calculator functionality, for example.
