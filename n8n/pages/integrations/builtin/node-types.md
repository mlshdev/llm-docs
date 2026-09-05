> Commit-pinned source for n8n main: [docs/integrations/builtin/node-types.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/node-types.md)

# Built-in integrations <a id="built-in-integrations"></a>

This section contains the node[^1] library: reference documentation for every built-in node in n8n, and their credentials.

## Node operations: Triggers and Actions <a id="node-operations-triggers-and-actions"></a>

When you add a node to a workflow, n8n displays a list of available operations. An operation is something a node does, such as getting or sending data.

There are two types of operation:

- Triggers start a workflow in response to specific events or conditions in your services. When you select a Trigger, n8n adds a trigger node to your workflow, with the Trigger operation you chose pre-selected. When you search for a node in n8n, Trigger operations have a bolt icon ![Trigger icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/reusable-content/.gitbook/assets/trigger.png).
- Actions are operations that represent specific tasks within a workflow, which you can use to manipulate data, perform operations on external systems, and trigger events in other systems as part of your workflows. When you select an Action, n8n adds a node to your workflow, with the Action operation you chose pre-selected.

## Core nodes <a id="core-nodes"></a>

Core nodes can be actions or triggers[^2]. Whereas most nodes connect to a specific external service, core nodes provide functionality such as logic, scheduling, or generic API calls.

## Cluster nodes <a id="cluster-nodes"></a>

[Cluster nodes](https://docs.n8n.io/get-started/key-concept-glossary#cluster-node-n8n) are node groups that work together to provide functionality in an n8n workflow. Instead of using a single node, you use a [root node](https://docs.n8n.io/get-started/key-concept-glossary#root-node-n8n) and one or more [sub-nodes](https://docs.n8n.io/get-started/key-concept-glossary#sub-node-n8n) that extend the functionality of the node.

![A workflow diagram with one root node connected to two sub-nodes](https://raw.githubusercontent.com/n8n-io/n8n-docs/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/reusable-content/.gitbook/assets/root-sub-nodes.png)

## Credentials <a id="credentials"></a>

External services need a way to identify and authenticate users. This data can range from an API key over an email/password combination to a long multi-line private key. You can save these in n8n as credentials[^3].

Nodes in n8n can then request that credential information. As another layer of security, only node types with specific access rights can access the credentials.

To make sure that the data is secure, it gets saved to the database encrypted. n8n uses a random personal encryption key, which it automatically generates on the first run of n8n and then saves under `~/.n8n/config`.

To learn more about creating, managing, and sharing credentials, refer to [Manage credentials](https://docs.n8n.io/build/understand-workflows/create-and-edit-credentials).

## Community nodes <a id="community-nodes"></a>

n8n supports community nodes. Refer to [Community nodes](https://docs.n8n.io/integrations/community-nodes/installation-and-management) for guidance on installing and using these nodes.

For help building and publishing your own community nodes to [npm](https://www.npmjs.com/), refer to [Create nodes](https://docs.n8n.io/connect/create-nodes/overview) for more information.

See [Built-in nodes](https://docs.n8n.io/integrations/builtin) for other integration topics.

[^1]: In n8n, nodes are individual components that you compose to create workflows. Nodes define when the workflow should run, allow you to fetch, send, and process data, can define flow control logic, and connect with external services.

[^2]: A trigger node is a special node responsible for executing the workflow in response to certain conditions. All production workflows need at least one trigger to determine when the workflow should run.

[^3]: In n8n, credentials store authentication information to connect with specific apps and services. After creating credentials with your authentication information (username and password, API key, OAuth secrets, etc.), you can use the associated app node to interact with the service.
