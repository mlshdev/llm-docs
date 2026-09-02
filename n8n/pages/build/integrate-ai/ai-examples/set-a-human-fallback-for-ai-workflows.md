> Commit-pinned source for n8n main: [docs/build/integrate-ai/ai-examples/set-a-human-fallback-for-ai-workflows.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/build/integrate-ai/ai-examples/set-a-human-fallback-for-ai-workflows.md)

# Set a human fallback for AI workflows

This is a workflow that tries to answer user queries using the standard GPT-4 model. If it can't answer, it sends a message to Slack to ask for human help. It prompts the user to supply an email address.

This workflow uses the [Chat Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger) to provide the chat interface, and the [Call n8n Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow) to call a second workflow that handles checking for email addresses and sending the Slack message.

**Workflow example**

```json
{
  "name": "Ask a human",
  "nodes": [
    {
      "parameters": {},
      "id": "a60c8572-56c1-4bf3-8352-a6419a475887",
      "name": "Simple Memory",
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.1,
      "position": [
        900,
        760
      ]
    },
    {
      "parameters": {
        "name": "dont_know_tool",
        "description": "Use this tool if you don't know the answer to the user's question, or if you're not very confident about your answer.",
        "workflowId": "={{ $workflow.id}}",
        "fields": {
          "values": [
            {
              "name": "chatInput",
              "stringValue": "={{ $('Chat Trigger').item.json.chatInput }}"
            }
          ]
        }
      },
      "id": "b4f2e26c-903b-46b8-bd8b-110fd64de9e4",
      "name": "Not sure?",
      "type": "@n8n/n8n-nodes-langchain.toolWorkflow",
      "typeVersion": 1,
      "position": [
        1120,
        760
      ]
    },
    {
      "parameters": {},
      "id": "951cc691-b422-4ce6-901f-b7feb3afd1ad",
      "name": "Execute Workflow Trigger",
      "type": "n8n-nodes-base.executeWorkflowTrigger",
      "typeVersion": 1,
      "position": [
        540,
        1360
      ]
    },
    {
      "parameters": {
        "content": "### Sub-workflow: Custom tool\nThe agent above can call this workflow. It checks if the user has supplied an email address. If they haven't it prompts them to provide one. If they have, it messages a customer support channel for help.",
        "height": 775.3931210698682,
        "width": 1118.3459011229047,
        "color": 7
      },
      "id": "194ba9c0-e256-449a-8da7-ac5339123a99",
      "name": "Sticky Note1",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        500,
        1020
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "### Main workflow: AI agent using custom tool",
        "height": 486.5625,
        "width": 927.5,
        "color": 7
      },
      "id": "38c6b363-45a7-4e72-9e40-8c0df3cc480f",
      "name": "Sticky Note2",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        500,
        460
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "**This tool calls the sub-workflow below**",
        "height": 179.21380662202682,
        "width": 197.45572294791873,
        "color": 5
      },
      "id": "0389315b-e48d-4b00-b9a1-899302b1b094",
      "name": "Sticky Note",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1060,
        700
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "**Set your credentials**",
        "height": 213.44323866265472,
        "width": 150,
        "color": 2
      },
      "id": "fb11064a-4cf5-4110-9e39-af24a3225164",
      "name": "Sticky Note5",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        700,
        680
      ]
    },
    {
      "parameters": {
        "content": "**Set your credentials and Slack details**",
        "height": 250.57252651663197,
        "width": 178.0499248677781,
        "color": 2
      },
      "id": "d689021d-0a46-4dff-a01a-0b01ecdd198b",
      "name": "Sticky Note4",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1020,
        1180
      ]
    },
    {
      "parameters": {
        "content": "## Try it out\n\nSelect **Chat** at the bottom and enter:\n\n_Hi! Please respond to this as if you don't know the answer to my query._",
        "height": 214.8397420554627,
        "width": 185.9375,
        "color": 4
      },
      "id": "0926cd61-c0b8-4bae-ae65-9afd130d17cd",
      "name": "Sticky Note3",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        340,
        520
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "## Next steps\n\nLearn more about [Advanced AI in n8n](https://docs.n8n.io/advanced-ai/)",
        "height": 144.50520156238127
      },
      "id": "cde69dfe-252e-4a05-8d56-fa79431df5d8",
      "name": "Sticky Note6",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1580,
        1600
      ]
    },
    {
      "parameters": {},
      "id": "927b775a-47f6-4067-a1a5-5f13dea28e45",
      "name": "Chat Trigger",
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1,
      "position": [
        600,
        520
      ],
      "webhookId": "785e0c0c-12e5-4249-9abe-47bb131975cb"
    },
    {
      "parameters": {
        "jsCode": "response = {\"response\":\"I'm sorry I don't know the answer. Please repeat your question and include your email address so I can request help.\"};\nreturn response;"
      },
      "id": "971e7b90-c2d8-4292-9da8-732d7d399f04",
      "name": "Prompt the user to provide an email",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1060,
        1520
      ]
    },
    {
      "parameters": {
        "jsCode": "response = {\"response\": \"Thank you for getting in touch. I've messaged a human to help.\"}\nreturn response;"
      },
      "id": "6f5a21b3-c145-46c8-8e69-660100c4a6fc",
      "name": "Confirm that we've messaged a human",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1300,
        1260
      ]
    },
    {
      "parameters": {
        "options": {
          "systemMessage": "Try to answer the user's question. When you can't answer, or you're not confident of the answer, use the appropriate tool. When you use the dont_know_tool, respond with the message from the tool."
        }
      },
      "id": "8b17da5e-e392-4028-91b0-bc02d34e46ed",
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 1.2,
      "position": [
        820,
        520
      ]
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict"
          },
          "conditions": [
            {
              "id": "5e21e7c5-db60-4111-bb17-c289ae0fc159",
              "leftValue": "={{ $('Execute Workflow Trigger').item.json.chatInput }}",
              "rightValue": "/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)/gi",
              "operator": {
                "type": "string",
                "operation": "regex"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "id": "990ecd3b-6aa0-4b17-8d01-d606b9164fa8",
      "name": "Check if user has provided email",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [
        760,
        1360
      ]
    },
    {
      "parameters": {
        "select": "channel",
        "channelId": {
          "__rl": true,
          "value": "",
          "mode": "name"
        },
        "text": "={{ \"A user had a question the bot couldn't answer. Here's their message: \" + $('Execute Workflow Trigger').item.json.chatInput }}",
        "otherOptions": {}
      },
      "id": "d14da0ae-06ca-422b-b5b6-e7759e74c787",
      "name": "Message Slack for help",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2.1,
      "position": [
        1060,
        1260
      ]
    },
    {
      "parameters": {
        "model": "gpt-4",
        "options": {
          "temperature": 0.2
        }
      },
      "id": "278391c7-6945-495e-a4f1-74fb8fcc3549",
      "name": "GPT4",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [
        740,
        740
      ]
    }
  ],
  "pinData": {},
  "connections": {
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Not sure?": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Execute Workflow Trigger": {
      "main": [
        [
          {
            "node": "Check if user has provided email",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Chat Trigger": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Check if user has provided email": {
      "main": [
        [
          {
            "node": "Message Slack for help",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Prompt the user to provide an email",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Message Slack for help": {
      "main": [
        [
          {
            "node": "Confirm that we've messaged a human",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "GPT4": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

## Key features <a id="key-features"></a>

This workflow uses:

- [Chat Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger): start your workflow and respond to user chat interactions. The node provides a customizable chat interface.
- [Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent): the key piece of the AI workflow. The Agent interacts with other components of the workflow and makes decisions about what tools to use.
- [Call n8n Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow): plug in n8n workflows as custom tools. In AI, a tool is an interface the AI can use to interact with the world (in this case, the data provided by your workflow). It allows the AI model to access information beyond its built-in dataset.

## Using the example <a id="using-the-example"></a>

To load the template into your n8n instance:

1. Download the workflow JSON file.
2. Open a new workflow in your n8n instance.
3. Copy in the JSON, or select **Workflow menu** ![Workflow menu icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/reusable-content/.gitbook/assets/three-dots-horizontal.png) > **Import from file...**.

The example workflows use Sticky Notes to guide you:

- Yellow: notes and information.
- Green: instructions to run the workflow.
- Orange: you need to change something to make the workflow work.
- Blue: draws attention to a key feature of the example.
