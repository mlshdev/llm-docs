> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.airtable/README.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.airtable/README.md)

# Airtable node <a id="airtable-node"></a>

Use the Airtable node to automate work in Airtable, and integrate Airtable with other applications. n8n has built-in support for a wide range of Airtable features, including creating, reading, listing, updating and deleting tables.

On this page, you'll find a list of operations the Airtable node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Airtable credentials](https://docs.n8n.io/integrations/builtin/credentials/airtable) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Append the data to a table
- Delete data from a table
- List data from a table
- Read data from a table
- Update data in a table

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n-nodes-base.airtable integration templates](https://n8n.io/integrations/airtable) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

n8n provides a trigger node for Airtable. You can find the trigger node docs [here](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.airtabletrigger).

Refer to [Airtable's documentation](https://airtable.com/developers/web/api/introduction) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.

## Node reference <a id="node-reference"></a>

### Get the Record ID <a id="get-the-record-id"></a>

To fetch data for a particular record, you need the Record ID. There are two ways to get the Record ID.

### Create a Record ID column in Airtable <a id="create-a-record-id-column-in-airtable"></a>

To create a `Record ID` column in your table, refer to this [article](https://support.airtable.com/docs/finding-airtable-ids). You can then use this Record ID in your Airtable node.

### Use the List operation <a id="use-the-list-operation"></a>

To get the Record ID of your record, you can use the **List** operation of the Airtable node. This operation will return the Record ID along with the fields. You can then use this Record ID in your Airtable node.

### Filter records when using the List operation <a id="filter-records-when-using-the-list-operation"></a>

To filter records from your Airtable base, use the **Filter By Formula** option. For example, if you want to return all the users that belong to the organization `n8n`, follow the steps mentioned below:

1. Select 'List' from the **Operation** dropdown list.
2. Enter the base ID and the table name in the **Base ID** and **Table** field, respectively.
3. Click on **Add Option** and select 'Filter By Formula' from the dropdown list.
4. Enter the following formula in the **Filter By Formula** field: `{Organization}='n8n'`.

Similarly, if you want to return all the users that don't belong to the organization `n8n`, use the following formula: `NOT({Organization}='n8n')`.

Refer to the Airtable [documentation](https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference) to learn more about the formulas.

## Common issues <a id="common-issues"></a>

For common errors or issues and suggested resolution steps, refer to [Common Issues](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/common-issues).
