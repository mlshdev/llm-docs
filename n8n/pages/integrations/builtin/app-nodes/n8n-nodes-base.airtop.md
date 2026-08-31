> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.airtop.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.airtop.md)

# Airtop node <a id="airtop-node"></a>

Use the Airtop node to automate work in Airtop, and integrate Airtop with other applications. n8n has built-in support for a wide range of Airtop features, enabling you to control a cloud-based web browser for tasks like querying, scraping, and interacting with web pages.

On this page, you'll find a list of operations the Airtop node supports, and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Airtop credentials](https://docs.n8n.io/integrations/builtin/credentials/airtop) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Session
  - Create session
  - Save profile on termination
  - Terminate session
- Window
  - Create a new browser window
  - Load URL
  - Take screenshot
  - Close window
- Extraction
  - Query page
  - Query page with pagination
  - Smart scrape page
- Interaction
  - Click an element
  - Hover on an element
  - Type

## Templates and examples <a id="templates-and-examples"></a>

[Browse Airtop node documentation integration templates](https://n8n.io/integrations/airtop) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Airtop's documentation](https://docs.airtop.ai/api-reference/airtop-api) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.

Contact [Airtop's Support](https://docs.airtop.ai/guides/misc/support) for assistance or to create a feature request.

## Node reference <a id="node-reference"></a>

### Create a session and window <a id="create-a-session-and-window"></a>

Create an Airtop browser session to get a **Session ID**, then use it to create a new browser window. After this, you can use any extraction or interaction operation.

### Extract content <a id="extract-content"></a>

Extract content from a web browser using these operations:

- **Query page**: Extract information from the current window.
- **Query page with pagination**: Extract information from pages with pagination or infinite scrolling.
- **Smart scrape page**: Get the window content as markdown.

Get JSON responses by using the **JSON Output Schema** parameter in query operations.

### Interacting with pages <a id="interacting-with-pages"></a>

Click, hover, or type on elements by describing the element you want to interact with.

### Terminate a session <a id="terminate-a-session"></a>

End your session to save resources. Sessions are automatically terminated based on the **Idle Timeout** set in the **Create Session** operation or can be manually terminated using the **Terminate Session** operation.
