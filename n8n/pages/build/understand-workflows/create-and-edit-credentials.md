> Commit-pinned source for n8n main: [docs/build/understand-workflows/create-and-edit-credentials.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/build/understand-workflows/create-and-edit-credentials.md)

# Create and edit credentials

Credentials are securely stored authentication information used to connect n8n workflows to external services such as APIs, or databases.

> **Info**
> On n8n Cloud, supported AI models and services don't need a credential at all: select **Use Gateway credits** on the node to run it with [Gateway credits](https://docs.n8n.io/build/understand-workflows/use-gateway-credits) instead of your own API key.

## Create a credential <a id="create-a-credential"></a>

1. Select the !\[universal create resource icon]\(../.gitbook/assets/universal-resource-button (1).png) **Create** button in the upper-left corner of the side menu. Select credential.
2. If your n8n instance supports projects[^1], you'll also need to choose whether to create the credential inside your personal space or a specific project you have access to. If you're using the community version, you'll create the credential inside your personal space.
3. Select the app or service you wish to connect to.

Or:

1. Using the !\[universal create resource icon]\(../.gitbook/assets/universal-resource-button (1).png) **Create** button in the upper-right corner from either the **Overview** page or a specific project. Select Credential.
2. If you're doing this from the **Overview** page, you'll create the credential inside your personal space. If you're doing this from inside a project, you'll create the credential inside that specific project.
3. Select the app or service you wish to connect to.

You can also create new credential in the credential drop down when editing a node on the workflow editor.

Once in the credential modal, enter the details required by your service. Refer to your service's page in the [credentials library](https://docs.n8n.io/integrations/builtin/credentials) for guidance.

When you save a credential, n8n tests it to confirm it works.

> **Info**
> **Credentials naming**
>
> n8n names new credentials "*node name* account" by default. You can rename the credentials by clicking on the name, similarly to renaming nodes. It's good practice to give them names that identify the app or service, type, and purpose of the credential. A naming convention makes it easier to keep track of and identify your credentials.

## Choose a credential type <a id="choose-a-credential-type"></a>

When you create or edit an OAuth credential, you choose a **Credential type**:

- **Fixed credential**: the same credential is used regardless of who runs the workflow. This is the default credential behaviour.
- **End-user credential**: each user's credential is used at runtime, and can only be seen and used by that user.

End-user credentials let a workflow run with the credentials of the person who triggers it, and keep each user's data private to them. The choice between **Fixed credential** and **End-user credential** types appears for OAuth credentials on n8n Cloud Enterprise and self-hosted Enterprise. To learn how to set them up, see [End-user credentials](https://docs.n8n.io/administer/manage-credentials/end-user-credentials).

## Allowed HTTP request domains <a id="allowed-http-request-domains"></a>

The **Allowed HTTP Request Domains** field appears on many n8n credentials for web-based APIs and services. It controls which domains the credential is permitted to be used against when the credential is selected in an **HTTP Request** node. It has no effect when the credential is used in its own dedicated node.

The field has three options:

- **All**: The credential can be used against any URL.
- **Specific Domains**: Restrict to specific domains (provide a comma-separated list like `httpbin.org, api.github.com`)
- **None**: The credential is blocked entirely from use in the **HTTP Request** node.

This field prevents credential misuse, for example sending the credential to URLs outside the intended domain.

## Expressions in credentials <a id="expressions-in-credentials"></a>

You can use expressions[^2] to set credentials dynamically as your workflow runs:

1. In your workflow, find the data path containing the credential. This varies depending on the exact parameter names in your data. Make sure that the data containing the credential is available in the workflow when you get to the node that needs it.
2. When creating your credential, hover over the field where you want to use an expression.
3. Toggle **Expression** on.
4. Enter your expression.

### Example workflow <a id="example-workflow"></a>

**Workflow example**

```json
{
  "name": "Dynamic credentials using expressions",
  "nodes": [
    {
      "parameters": {
        "path": "da4071f2-7550-4dae-aa48-8bced4291643",
        "formTitle": "Test dynamic credentials",
        "formDescription": "This form is for testing an n8n workflow that demonstrates setting credentials with expressions.",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Enter your NASA API key",
              "requiredField": true
            }
          ]
        },
        "responseMode": "responseNode"
      },
      "id": "cc6f2b1e-0ed0-4d22-8a44-d7223ba283b4",
      "name": "n8n Form Trigger",
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2,
      "position": [
        560,
        520
      ],
      "webhookId": "da4071f2-7550-4dae-aa48-8bced4291643"
    },
    {
      "parameters": {
        "additionalFields": {}
      },
      "id": "ef336bae-3d4f-419c-ab5c-b9f0de89f170",
      "name": "NASA",
      "type": "n8n-nodes-base.nasa",
      "typeVersion": 1,
      "position": [
        900,
        520
      ],
      "credentials": {
        "nasaApi": {
          "id": "QDDBOZOD6k3ijL5t",
          "name": "NASA account"
        }
      }
    },
    {
      "parameters": {
        "respondWith": "redirect",
        "redirectURL": "={{ $json.url }}",
        "options": {}
      },
      "id": "143bcdb6-aca0-4dd8-9204-9777271cd230",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [
        1220,
        520
      ]
    },
    {
      "parameters": {
        "content": "This workflow shows how to set credentials dynamically using expressions.\n\n\nFirst, set up your NASA credential: \n\n1. Create a new NASA credential.\n1. Hover over **API Key**.\n1. Toggle **Expression** on.\n1. In the **API Key** field, enter `{{ $json[\"Enter your NASA API key\"] }}`.\n\n\nThen, test the workflow:\n\n1. Get an [API key from NASA](https://api.nasa.gov/)\n2. Select **Execute workflow**\n3. Enter your key using the form.\n4. The workflow runs and sends you to the NASA picture of the day.\n\n\nFor more information on expressions, refer to [n8n documentation | Expressions](https://docs.n8n.io/code/expressions/).",
        "height": 564,
        "width": 322,
        "color": 4
      },
      "id": "0a0dee23-fa16-4f09-b5e0-856f47fb53d0",
      "name": "Sticky Note",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        120,
        140
      ]
    },
    {
      "parameters": {
        "content": "User submits an API key using the form",
        "height": 319
      },
      "id": "dd766e32-334d-4e46-9daa-7800b134a3a5",
      "name": "Sticky Note1",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        500,
        380
      ]
    },
    {
      "parameters": {
        "content": "The workflow passes the key to the NASA node. You can reference the value using the expression `$json[\"Enter your NASA API key\"]`. This is also available to the node credential. ",
        "height": 319,
        "color": 5
      },
      "id": "3d8f02e6-e029-41dc-89ad-0f5cffe09348",
      "name": "Sticky Note2",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        820,
        380
      ]
    },
    {
      "parameters": {
        "content": "The Respond to Webhook node controls the form response (in this example, redirecting the user to an image)",
        "height": 319
      },
      "id": "096eb6ab-c276-4687-9dc0-50e16a8f709a",
      "name": "Sticky Note3",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1140,
        380
      ]
    }
  ],
  "pinData": {},
  "connections": {
    "n8n Form Trigger": {
      "main": [
        [
          {
            "node": "NASA",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "NASA": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

#### Using the example <a id="using-the-example"></a>

To load the template into your n8n instance:

1. Download the workflow JSON file.
2. Open a new workflow in your n8n instance.
3. Copy in the JSON, or select **Workflow menu** ![Workflow menu icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/32d4c1af45711af43703671a66f502ef7bd2b932/docs/reusable-content/.gitbook/assets/three-dots-horizontal.png) > **Import from file...**.

The example workflows use Sticky Notes to guide you:

- Yellow: notes and information.
- Green: instructions to run the workflow.
- Orange: you need to change something to make the workflow work.
- Blue: draws attention to a key feature of the example.

[^1]: n8n projects allow you to separate workflows, variables, and credentials into separate groups for easier management. Projects make it easier for teams to collaborate by sharing and compartmentalizing related resources.

[^2]: In n8n, expressions allow you to populate node parameters dynamically by executing JavaScript code. Instead of providing a static value, you can use the n8n expression syntax to define the value using data from previous nodes, other workflows, or your n8n environment.
