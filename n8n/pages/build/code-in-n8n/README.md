> Commit-pinned source for n8n main: [docs/build/code-in-n8n/README.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/code-in-n8n/README.md)

# Code in n8n <a id="code-in-n8n"></a>

n8n is a low-code tool. This means you can do a lot without code, then add code when needed.

## Code in your workflows <a id="code-in-your-workflows"></a>

There are two places in your workflows where you can use code:

<div class="grid-cards-vertical cards" markdown>

- **Expressions**

  Use expressions[^1] to transform [data](https://docs.n8n.io/build/work-with-data/overview) in your nodes. You can use JavaScript in expressions, as well as n8n's [Built-in methods and variables](https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts).

  [→ Expressions](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes)

- **Code node**

  Use the Code node to add JavaScript or Python to your workflow.

  [→ Code node](https://docs.n8n.io/build/code-in-n8n/using-the-code-node)

</div>

## Other technical resources <a id="other-technical-resources"></a>

These are features that are relevant to technical users.

### Technical nodes <a id="technical-nodes"></a>

n8n provides core nodes, which simplify adding key functionality such as API requests, webhooks, scheduling, and file handling.

<div class="grid-cards-vertical cards" markdown>

- **Write a backend**

  The [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest), [Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook), and [Code](https://docs.n8n.io/build/code-in-n8n/using-the-code-node) nodes help you make API calls, respond to webhooks, and write any JavaScript in your workflow.

  Use this do things like [Create an API endpoint](https://n8n.io/workflows/1750-creating-an-api-endpoint/).

  [→ Core nodes](https://docs.n8n.io/integrations/builtin/core-nodes)

- **Represent complex logic**

  You can build complex flows, using nodes like [If](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if), [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch), and [Merge](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge) nodes.

  [→ Flow logic](https://docs.n8n.io/build/flow-logic)

</div>

### Other developer resources <a id="other-developer-resources"></a>

<div class="grid-cards-vertical cards" markdown>

- **The n8n API**

  n8n provides an API, where you can programmatically perform many of the same tasks as you can in the GUI. There's an [n8n API node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n) to access the API in your workflows.

  [→ API](https://docs.n8n.io/connect/n8n-api)

- **Self-host**

  You can self-host n8n. This keeps your data on your own infrastructure.

  [→ Hosting](https://docs.n8n.io/deploy/host-n8n)

- **Build your own nodes**

  You can build custom nodes, install them on your n8n instance, and publish them to [npm](https://www.npmjs.com/).

  [→ Creating nodes](https://docs.n8n.io/connect/create-nodes/overview)

</div>

[^1]: In n8n, expressions allow you to populate node parameters dynamically by executing JavaScript code. Instead of providing a static value, you can use the n8n expression syntax to define the value using data from previous nodes, other workflows, or your n8n environment.
