> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.trello.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.trello.md)

# Trello node <a id="trello-node"></a>

Use the Trello node to automate work in Trello, and integrate Trello with other applications. n8n has built-in support for a wide range of Trello features, including creating and updating cards, and adding and removing members.

On this page, you'll find a list of operations the Trello node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Trello credentials](https://docs.n8n.io/integrations/builtin/credentials/trello) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Attachment
  - Create a new attachment for a card
  - Delete an attachment
  - Get the data of an attachment
  - Returns all attachments for the card
- Board
  - Create a new board
  - Delete a board
  - Get the data of a board
  - Update a board
- Board Member
  - Add
  - Get All
  - Invite
  - Remove
- Card
  - Create a new card
  - Delete a card
  - Get the data of a card
  - Update a card
- Card Comment
  - Create a comment on a card
  - Delete a comment from a card
  - Update a comment on a card
- Checklist
  - Create a checklist item
  - Create a new checklist
  - Delete a checklist
  - Delete a checklist item
  - Get the data of a checklist
  - Returns all checklists for the card
  - Get a specific checklist on a card
  - Get the completed checklist items on a card
  - Update an item in a checklist on a card
- Label
  - Add a label to a card.
  - Create a new label
  - Delete a label
  - Get the data of a label
  - Returns all labels for the board
  - Remove a label from a card.
  - Update a label.
- List
  - Archive/Unarchive a list
  - Create a new list
  - Get the data of a list
  - Get all the lists
  - Get all the cards in a list
  - Update a list

## Templates and examples <a id="templates-and-examples"></a>

[Browse Trello node documentation integration templates](https://n8n.io/integrations/trello) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.

## Find the List ID <a id="find-the-list-id"></a>

1. Open the Trello board that contains the list.
2. If the list doesn't have any cards, add a card to the list.
3. Open the card, add `.json` at the end of the URL, and press enter.
4. In the JSON file, you will see a field called `idList`.
5. Copy the contents of the `idList`field and paste it in the \***List ID** field in n8n.
