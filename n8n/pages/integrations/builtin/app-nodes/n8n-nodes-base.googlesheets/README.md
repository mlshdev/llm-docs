> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/README.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/README.md)

# Google Sheets <a id="google-sheets"></a>

Use the Google Sheets node to automate work in Google Sheets, and integrate Google Sheets with other applications. n8n has built-in support for a wide range of Google Sheets features, including creating, updating, deleting, appending, removing and getting documents.

On this page, you'll find a list of operations the Google Sheets node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Google Sheets credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- **Document**
  - [**Create**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/document-operations#create-a-spreadsheet) a spreadsheet.
  - [**Delete**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/document-operations#delete-a-spreadsheet) a spreadsheet.
- **Sheet Within Document**
  - [**Append or Update Row**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#append-or-update-row): Append a new row, or update the current one if it already exists.
  - [**Append Row**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#append-row): Create a new row.
  - [**Clear**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#clear-a-sheet) all data from a sheet.
  - [**Create**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#create-a-new-sheet) a new sheet.
  - [**Delete**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#delete-a-sheet) a sheet.
  - [**Delete Rows or Columns**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#delete-rows-or-columns): Delete columns and rows from a sheet.
  - [**Get Row(s)**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#get-rows): Read all rows in a sheet.
  - [**Update Row**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/sheet-operations#update-row): Update a row in a sheet.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Google Sheets integration templates](https://n8n.io/integrations/google-sheets) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Google Sheet's API documentation](https://developers.google.com/sheets/api) for more information about the service.

## Common issues <a id="common-issues"></a>

For common questions or issues and suggested solutions, refer to [Common issues](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/common-issues).

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
