> Commit-pinned source for n8n main: [docs/connect/n8n-api/README.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/connect/n8n-api/README.md)

# n8n public REST API <a id="n8n-public-rest-api"></a>

> **Info**
> **Feature availability**
>
> The n8n API isn't available during the free trial. Please upgrade to access this feature.

Using n8n's public API[^1], you can programmatically perform many of the same tasks as you can in the GUI. This section introduces n8n's REST API, including:

- How to [authenticate](https://docs.n8n.io/connect/n8n-api/authentication)
- [Paginating](https://docs.n8n.io/connect/n8n-api/pagination) results
- Using the [built-in API playground](https://docs.n8n.io/connect/n8n-api/use-an-api-playground) (self-hosted n8n only)
- The [endpoint reference](https://docs.n8n.io/connect/n8n-api/api-reference)

n8n provides an [n8n API node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n) to access the API in your workflows.

## Choose your interaction method <a id="choose-your-interaction-method"></a>

### REST API (this section) <a id="rest-api-this-section"></a>

Interact with n8n directly using HTTP requests. Ideal for:

- Custom integrations and applications
- Language-agnostic HTTP calls
- Direct REST API usage in workflows

### n8n CLI (recommended for developers) <a id="n8n-cli-recommended-for-developers"></a>

Use [n8n CLI](https://docs.n8n.io/connect/n8n-cli) for a command-line experience. It wraps the public API and is a good fit for:

- Command-line automation and scripting
- CI/CD pipeline integration
- AI agent integration (Claude Code, Cursor, etc.)
- Developers who prefer CLI tools

## Learn about REST APIs <a id="learn-about-rest-apis"></a>

The API documentation assumes you are familiar with REST APIs. If you're not, these resources may be helpful:

- [KnowledgeOwl's guide to working with APIs](https://support.knowledgeowl.com/help/working-with-apis): a basic introduction, including examples of how to call REST APIs.
- [IBM Cloud Learn Hub - What is an Application Programming Interface (API)](https://www.ibm.com/cloud/learn/api): this gives a general, but technical, introduction to APIs.
- [IBM Cloud Learn Hub - What is a REST API?](https://www.ibm.com/cloud/learn/rest-apis): more detailed information about REST APIs.
- [MDN web docs - An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview): REST APIs work over HTTP and use HTTP verbs, or methods, to specify the action to perform.

> **Info**
> **Use the API playground**
>
> Trying out the API in the [playground](https://docs.n8n.io/connect/n8n-api/use-an-api-playground) can help you understand how APIs work. If you're worried about changing live data, consider setting up a test workflow, or test n8n instance, to explore safely.

[^1]: APIs, or application programming interfaces, offer programmatic access to a service's data and functionality. APIs make it easier for software to interact with external systems. They're often offered as an alternative to traditional user-focused interfaces accessed through web browsers or UI.
