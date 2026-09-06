> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches.md)

# Loop Over Items <a id="loop-over-items"></a>

The Loop Over Items node helps you loop through data when needed.

The node saves the original incoming data, and with each iteration, returns a predefined amount of data through the **loop** output.

When the node execution completes, it combines all of the processed data and returns it through the **done** output.

## When to use the Loop Over Items node <a id="when-to-use-the-loop-over-items-node"></a>

By default, n8n nodes are designed to process a list of input items (with some exceptions, detailed below). Depending on what you're trying to achieve, you often don't need the Loop Over Items node in your workflow. You can learn more about how n8n processes multiple items on the [looping in n8n](https://docs.n8n.io/build/flow-logic/loop) page.

These links highlight some of the cases where the Loop Over Items node can be useful:

- [Loop until all items are processed](https://docs.n8n.io/build/flow-logic/loop#loop-until-all-items-are-processed): describes how the Loop Over Items node differs from normal item processing and when you might want to incorporate this node.
- [Node exceptions](https://docs.n8n.io/build/flow-logic/loop#node-exceptions): outlines specific cases and nodes where you may need to use the Loop Over Items node to manually build looping logic.
- [Avoiding rate limiting](https://docs.n8n.io/integrations/builtin/handle-rate-limits): demonstrates how to batch API requests to avoid rate limits from other services.

## Node parameters <a id="node-parameters"></a>

### Batch Size <a id="batch-size"></a>

Enter the number of items to return with each call.

## Node options <a id="node-options"></a>

### Reset <a id="reset"></a>

If turned on, the node will reset with the current input-data newly initialized with each loop. Use this when you want the Loop Over Items node to treat incoming data as a new set of data instead of a continuation of previous items.

For example, you can use the Loop Over Items node with the reset option and an [If node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) to query a paginated service when you don't know how many pages you need in advance. The loop queries pages one at a time, performs any processing, and increments the page number. The loop reset ensures the loop recognizes each iteration as a new set of data. The If node evaluates an exit condition to decide whether to perform another iteration or not.

> **Warning**
> **Include a valid termination condition**
>
> For workflows like the example described above, it's critical to include a valid termination condition for the loop. If your termination condition never matches, your workflow execution will get stuck in an infinite loop.

When enabled, you can adjust the reset conditions by switching the parameter representation from **Fixed** to **Expression**. The results of your expression evaluation determine when the node will reset item processing.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Loop Over Items (Split in Batches) integration templates](https://n8n.io/integrations/split-in-batches) or [search all templates](https://n8n.io/workflows/)

### Read RSS feed from two different sources <a id="read-rss-feed-from-two-different-sources"></a>

This workflow allows you to read an RSS feed from two different sources using the Loop Over Items node. You need the Loop Over Items node in the workflow as the RSS Feed Read node only processes the first item it receives. You can also find the [workflow](https://n8n.io/workflows/687-read-rss-feed-from-two-different-sources/) on n8n.io.

The example walks through building the workflow, but assumes you are already familiar with n8n. To build your first workflow, including learning how to add nodes to a workflow, refer to [Try it out](https://docs.n8n.io/get-started/build-your-first-workflow).

The final workflow looks like this:

**Workflow example**

```json
{
  "nodes": [
    {
      "parameters": {},
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [
        0,
        0
      ],
      "id": "e6e1cfe6-eff1-48bd-b21c-6ba83d4244d9",
      "name": "When clicking ‘Execute workflow’"
    },
    {
      "parameters": {
        "jsCode": "return [\n\t{\n\t\tjson: {\n\t\t\turl: 'https://medium.com/feed/n8n-io',\n\t\t}\n\t},\n\t{\n\t\tjson: {\n\t\t\turl: 'https://dev.to/feed/n8n',\n\t\t}\n\t}\n];"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        220,
        0
      ],
      "id": "137f1128-45b6-4bc4-a9fb-8660baa652a9",
      "name": "Code"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "n8n-nodes-base.splitInBatches",
      "typeVersion": 3,
      "position": [
        440,
        0
      ],
      "id": "3449a953-49c2-4a36-ba3d-cbc0573f3f6c",
      "name": "Loop Over Items"
    },
    {
      "parameters": {
        "url": "={{ $json.url }}",
        "options": {}
      },
      "type": "n8n-nodes-base.rssFeedRead",
      "typeVersion": 1.1,
      "position": [
        660,
        100
      ],
      "id": "cc2e59d7-0a9b-4640-8052-d8f7f8d8c9fe",
      "name": "RSS Read"
    }
  ],
  "connections": {
    "When clicking ‘Execute workflow’": {
      "main": [
        [
          {
            "node": "Code",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Code": {
      "main": [
        [
          {
            "node": "Loop Over Items",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Loop Over Items": {
      "main": [
        [],
        [
          {
            "node": "RSS Read",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "RSS Read": {
      "main": [
        [
          {
            "node": "Loop Over Items",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "instanceId": "cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7"
  }
}
```

Copy the workflow file above and paste into your instance, or manually build it by following these steps:

1. Add the manual trigger.
2. Add the Code node.
3. Copy this code into the Code node:
   ```js
   return [
       {
           json: {
               url: 'https://medium.com/feed/n8n-io',
           }
       },
       {
           json: {
               url: 'https://dev.to/feed/n8n',
           }
       }
   ];
   ```
4. Add the Loop Over Items node.
5. Configure Loop Over Items: set the batch size to `1` in the **Batch Size** field.
6. Add the RSS Feed Read node.
7. Select **Execute Workflow**. This runs the workflow to load data into the RSS Feed Read node.
8. Configure RSS Feed Read: map `url` from the input to the **URL** field. You can do this by dragging and dropping from the **INPUT** panel, or using this expression: `{{ $json.url }}`.
9. Select **Execute Workflow** to run the workflow and see the resulting data.

### Check that the node has processed all items <a id="check-that-the-node-has-processed-all-items"></a>

To check if the node still has items to process, use the following expression: `{{$("Loop Over Items").context["noItemsLeft"]}}`. This expression returns a boolean value. If the node still has data to process, the expression returns `false`, otherwise it returns `true`.

### Get the current running index of the node <a id="get-the-current-running-index-of-the-node"></a>

To get the current running index of the node, use the following expression: `{{$("Loop Over Items").context["currentRunIndex"];}}`.
