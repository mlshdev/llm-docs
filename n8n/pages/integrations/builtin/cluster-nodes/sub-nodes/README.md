> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/README.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/integrations/builtin/cluster-nodes/sub-nodes/README.md)

# Sub nodes <a id="sub-nodes"></a>

Sub nodes attach to root nodes within a group of cluster nodes. They configure the overall functionality of the cluster.

[Cluster nodes](https://docs.n8n.io/get-started/key-concept-glossary#cluster-node-n8n) are node groups that work together to provide functionality in an n8n workflow. Instead of using a single node, you use a [root node](https://docs.n8n.io/get-started/key-concept-glossary#root-node-n8n) and one or more [sub-nodes](https://docs.n8n.io/get-started/key-concept-glossary#sub-node-n8n) that extend the functionality of the node.

![A workflow diagram with one root node connected to two sub-nodes](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/reusable-content/.gitbook/assets/root-sub-nodes.png)
