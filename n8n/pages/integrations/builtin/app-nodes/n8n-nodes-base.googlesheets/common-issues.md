> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/common-issues.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/common-issues.md)

# Common issues

Here are some common errors and issues with the [Google Sheets node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets) and steps to resolve or troubleshoot them.

## Append an array <a id="append-an-array"></a>

To insert an array of data into Google Sheets, you must convert the array into a valid JSON (key, value) format.

To do so, consider using:

1. The [Split Out](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout) node.
2. The [AI Transform](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aitransform) node. For example, try entering something like:

   ```
   Convert 'languages' array to JSON (key, value) pairs.
   ```
3. The [Code node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code).

## Column names were updated after the node's setup <a id="column-names-were-updated-after-the-nodes-setup"></a>

You'll receive this error if the Google Sheet's column names have changed since you set up the node.

To refresh the column names, re-select **Mapping Column Mode**. This should prompt the node to fetch the column names again.

Once the column names refresh, update the node parameters.
