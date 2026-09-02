> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/azurecosmosdb.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/azurecosmosdb.md)

# Azure Cosmos DB credentials <a id="azure-cosmos-db-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Azure Cosmos DB](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.azurecosmosdb)

## Prerequisites <a id="prerequisites"></a>

- Create an [Azure](https://azure.microsoft.com) subscription.
- Create an [Azure Cosmos DB account](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API Key

## Related resources <a id="related-resources"></a>

Refer to [Azure Cosmos DB's API documentation](https://learn.microsoft.com/en-us/rest/api/cosmos-db/) for more information about the service.

## Using API Key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **Account**: The name of your Azure Cosmos DB account.
- A **Key**: A key for your Azure Cosmos DB account. Select **Overview** > **Keys** in the Azure portal for your Azure Cosmos DB. You can use either of the two account keys for this purpose.
- A **Database**: The name of the Azure Cosmos DB database to connect to.

Refer to [Get your primary key | Microsoft](https://learn.microsoft.com/en-us/previous-versions/azure/cosmos-db/how-to-obtain-keys?tabs=azure-portal) for more detailed steps.

## Common issues <a id="common-issues"></a>

Here are the known common errors and issues with Azure Cosmos DB credentials.

### Need admin approval <a id="need-admin-approval"></a>

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).
