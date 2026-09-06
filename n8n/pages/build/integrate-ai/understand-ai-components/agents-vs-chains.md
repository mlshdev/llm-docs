> Commit-pinned source for n8n main: [docs/build/integrate-ai/understand-ai-components/agents-vs-chains.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/build/integrate-ai/understand-ai-components/agents-vs-chains.md)

# Agents vs chains

In this workflow you can choose whether your chat query goes to an agent[^1] or chain[^2]. It shows some of the ways that agents are more powerful than chains.

**Workflow example**

```json
{
  "name": "Agents vs chains",
  "nodes": [
    {
      "parameters": {},
      "id": "9e1d8f35-e1ba-4600-977d-e54a919c2c62",
      "name": "Chat Trigger",
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1,
      "position": [
        520,
        420
      ],
      "webhookId": "84bfdbd0-e2ce-4bfa-b746-985e64a14484"
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "4b89df4b-4f78-4f52-a51d-eeb66a7948e5",
      "name": "OpenAI Chat Model",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [
        1020,
        420
      ],
      "credentials": {
        "openAiApi": {
          "id": "tW3bkXa0SAK0OzvR",
          "name": "OpenAi account Debs"
        }
      }
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "a0045df2-d212-4e6a-a2d4-722136dcb8b5",
      "name": "OpenAI Chat Model1",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [
        980,
        880
      ],
      "credentials": {
        "openAiApi": {
          "id": "tW3bkXa0SAK0OzvR",
          "name": "OpenAi account Debs"
        }
      }
    },
    {
      "parameters": {},
      "id": "d702f647-1fa7-4b4f-91b1-e0152326ea11",
      "name": "Simple Memory",
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.2,
      "position": [
        1280,
        460
      ]
    },
    {
      "parameters": {},
      "id": "76cc359a-5ec8-446a-a8e0-9035d18247cb",
      "name": "Wikipedia",
      "type": "@n8n/n8n-nodes-langchain.toolWikipedia",
      "typeVersion": 1,
      "position": [
        1540,
        340
      ]
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "01d1785f-f7c4-47d2-97b7-76eeff68002d",
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 1.5,
      "position": [
        1060,
        140
      ]
    },
    {
      "parameters": {
        "messages": {
          "messageValues": [
            {
              "message": "Every time you respond, start your response with the sentence: \"This message came from the chain\"."
            }
          ]
        }
      },
      "id": "bcdcd704-13f5-4906-b337-7ec4629b9781",
      "name": "Basic LLM Chain",
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.4,
      "position": [
        1040,
        680
      ]
    },
    {
      "parameters": {
        "content": "## Try it out\n\nSelect **Chat**, and try out these queries:\n\n- Please show me a Wikipedia article about cats (agent)\n- Please show me a Wikipedia article about cats (chain)\n- What was my last question? (chain)\n- What was my last question? (agent)\n",
        "height": 343.8587887368956,
        "color": 4
      },
      "id": "f08e231b-739a-4b9d-b738-139b7e3bd60b",
      "name": "Sticky Note",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        240,
        420
      ]
    },
    {
      "parameters": {
        "content": "**Set your credentials**",
        "height": 193,
        "width": 167,
        "color": 2
      },
      "id": "5421fd4d-c82f-483a-8238-869b9a10000d",
      "name": "Sticky Note1",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        980,
        360
      ]
    },
    {
      "parameters": {
        "content": "**Set your credentials**",
        "height": 193,
        "width": 167,
        "color": 2
      },
      "id": "23fac3a8-a220-40a5-8d3d-4a3013b0f1da",
      "name": "Sticky Note2",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        940,
        820
      ]
    },
    {
      "parameters": {
        "content": "**Memory allows the agent to access previous parts of the chat**\n",
        "height": 244,
        "color": 5
      },
      "id": "08397bde-06e4-4bff-b130-cbc4408a0ecc",
      "name": "Sticky Note3",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1200,
        360
      ]
    },
    {
      "parameters": {
        "content": "**The agent can use the Wikipedia tool to access articles from Wikipedia**",
        "height": 238,
        "color": 5
      },
      "id": "a53ff4f2-9d06-4166-9ad6-760cd8fe4a54",
      "name": "Sticky Note4",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1460,
        240
      ]
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": false,
                  "leftValue": "",
                  "typeValidation": "strict"
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.chatInput }}",
                    "rightValue": "agent",
                    "operator": {
                      "type": "string",
                      "operation": "contains"
                    }
                  }
                ],
                "combinator": "and"
              }
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": false,
                  "leftValue": "",
                  "typeValidation": "strict"
                },
                "conditions": [
                  {
                    "id": "248f4a34-89c1-4d1e-867a-daa024c8635a",
                    "leftValue": "={{ $json.chatInput }}",
                    "rightValue": "chain",
                    "operator": {
                      "type": "string",
                      "operation": "contains"
                    }
                  }
                ],
                "combinator": "and"
              }
            }
          ]
        },
        "options": {
          "ignoreCase": true
        }
      },
      "id": "ab2bff8d-e914-421d-9aa3-9d0ad815cea6",
      "name": "Check user input for \"chain\" or \"agent\"",
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3,
      "position": [
        740,
        420
      ]
    },
    {
      "parameters": {
        "content": "## Next steps\n\nLearn more about [Advanced AI in n8n](https://docs.n8n.io/advanced-ai/)"
      },
      "id": "f077f8e6-789a-4db1-8402-fb173c296017",
      "name": "Sticky Note5",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1560,
        840
      ]
    }
  ],
  "pinData": {},
  "connections": {
    "Chat Trigger": {
      "main": [
        [
          {
            "node": "Check user input for \"chain\" or \"agent\"",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model1": {
      "ai_languageModel": [
        [
          {
            "node": "Basic LLM Chain",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
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
    "Wikipedia": {
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
    "Check user input for \"chain\" or \"agent\"": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Basic LLM Chain",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "59784a0f-0601-4456-b48d-9a191e203461",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7"
  },
  "id": "qK43vJw6dRZkXo6h",
  "tags": [
    {
      "createdAt": "2021-06-25T07:47:07.640Z",
      "updatedAt": "2021-06-25T07:47:07.640Z",
      "id": "1",
      "name": "docs"
    },
    {
      "createdAt": "2023-02-22T12:06:03.372Z",
      "updatedAt": "2023-02-22T12:06:03.372Z",
      "id": "63",
      "name": "createdBy:Debs"
    }
  ]
}
```

## Key features <a id="key-features"></a>

This workflow uses:

- [Chat Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger): start your workflow and respond to user chat interactions. The node provides a customizable chat interface.
- [Switch node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch): directs your query to either the agent or chain, depending on which you specify in your query. If you say "agent" it sends it to the agent. If you say "chain" it sends it to the chain.
- [Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent): the Agent node interacts with other components of the workflow and makes decisions about what tools[^3] to use.
- [Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm): the Basic LLM Chain node supports chatting with a connected LLM, but doesn't support memory[^4] or tools.

## Using the example <a id="using-the-example"></a>

To load the template into your n8n instance:

1. Download the workflow JSON file.
2. Open a new workflow in your n8n instance.
3. Copy in the JSON, or select **Workflow menu** ![Workflow menu icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/reusable-content/.gitbook/assets/three-dots-horizontal.png) > **Import from file...**.

The example workflows use Sticky Notes to guide you:

- Yellow: notes and information.
- Green: instructions to run the workflow.
- Orange: you need to change something to make the workflow work.
- Blue: draws attention to a key feature of the example.

[^1]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

[^2]: AI chains allow you to interact with large language models (LLMs) and other resources in sequences of calls to components. AI chains in n8n don't use persistent memory, so you can't use them to reference previous context (use AI agents for this).

[^3]: In an AI context, a tool is an add-on resource that the AI can refer to for specific information or functionality when responding to a request. The AI model can use a tool to interact with external systems or complete specific, focused tasks.

[^4]: In an AI context, memory allows AI tools to persist message context across interactions. This allows you to have a continuing conversations with AI agents, for example, without submitting ongoing context with each message. In n8n, AI agent nodes can use memory, but AI chains can't.
