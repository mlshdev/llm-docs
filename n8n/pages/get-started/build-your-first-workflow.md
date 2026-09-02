> Commit-pinned source for n8n main: [docs/get-started/build-your-first-workflow.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/build-your-first-workflow.md)

# Build your first workflow

This guide will show you how to construct a workflow[^1] in n8n, explaining key concepts along the way. You will:

- Create a workflow from scratch.
- Understand key concepts and skills, including:
  - Starting workflows with trigger nodes
  - Configuring credentials[^2]
  - Processing data
  - Representing logic in an n8n workflow
  - Using expressions[^3]

![The completed workflow: Schedule Trigger connected to NASA, then an If node branching into two PostBin nodes](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/tutorial-first.png)

This quickstart uses [n8n Cloud](https://docs.n8n.io/deploy/use-n8n-cloud), which is recommended for new users. A free trial is available. If you haven't already, [sign up](https://app.n8n.cloud/register) for an account now.

## Step one: Create a new workflow <a id="step-one-create-a-new-workflow"></a>

When you open n8n, you'll see either:

- A window with a welcome message and two large buttons: Choose **Start from Scratch** to create a new workflow.
- The **Workflows** list on the **Overview** page. Select the **Create Workflow** to create a new workflow.

## Step two: Add a trigger node <a id="step-two-add-a-trigger-node"></a>

n8n provides two ways to start a workflow:

- Manually, by selecting **Execute Workflow**.
- Automatically, using a trigger node as the first node. The trigger node runs the workflow in response to an external event, or based on your settings.

This tutorial uses the [Schedule trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger), which lets you run the workflow on a schedule:

1. Select **Add first step**.
2. Search for **Schedule**. n8n shows a list of nodes that match the search.
3. Select **Schedule Trigger** to add the node to the canvas. n8n opens the node.
4. For **Trigger Interval**, select **Weeks**.
5. For **Weeks Between Triggers**, enter `1`.
6. Enter a time and day. For this example, select **Monday** in **Trigger on Weekdays**, select **9am** in **Trigger at Hour**, and enter `0` in **Trigger at Minute**.
7. Close the **node details view** to return to the canvas.

## Step three: Add the NASA node and set up credentials <a id="step-three-add-the-nasa-node-and-set-up-credentials"></a>

The [NASA node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nasa) interacts with NASA's [public APIs](https://api.nasa.gov/) to fetch useful data. This tutorial uses the real-time data from the API to find solar events.

<details>

<summary>Credentials</summary>

Credentials are private pieces of information issued by apps and services to authenticate you as a user and allow you to connect and share information between the app or service and the n8n node. The required information varies by app or service. You should be careful about sharing or revealing the credentials outside of n8n.

</details>

1. Select the **Add node** ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/add-node-small.png) connector on the Schedule Trigger node.
2. Search for **NASA**. n8n shows a list of nodes that match the search.
3. Select **NASA** to view a list of operations.
4. Search for and select **Get a DONKI solar flare**. This operation returns a report about recent solar flares. When you select the operation, n8n adds the node to the canvas and opens it.
5. To access the NASA APIs, you need to set up credentials:
   1. Select the **Credential for NASA API** dropdown.
   2. Select **Create new credential**. n8n opens the credentials view.
   3. Go to [NASA APIs](https://api.nasa.gov/) and fill out the form from the **Generate API Key** link. The NASA site generates the key and emails it to the address you entered.
   4. Check your email account for the API key. If you don’t see it, check your junk or spam folder. Copy the key, and paste it into **API Key** in n8n.
   5. Select **Save**.
   6. Close the credentials screen. n8n returns to the node. The new credentials should be automatically selected in **Credential for NASA API**.
6. By default, DONKI Solar Flare provides data for the past 30 days. To limit it to just the last week, use **Additional Fields**:<br>

   1. Select **Add field**.
   2. Select **Start date**.
   3. To get a report starting from a week ago, you can use an expression: next to **Start date**, select the **Expression** tab, then select the expand button ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/open-expression-editor.png) to open the full expressions editor.
   4. In the **Expression** field, enter the following expression:

   ```js
   {{ $today.minus(7, 'days') }}
   ```

   This generates a date in the correct format, seven days before the current date.

![Start Date expression editor, with the Result panel showing a resolved date one week before today](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/tutorial-date.png)
7\. Close the **Edit Expression** modal to return to the NASA node.
8\. You can now check that the node is working and returning the expected date: select **Execute step** to run the node manually. n8n calls the NASA API and displays details of solar flares in the past seven days in the **OUTPUT** section.
9\. Close the NASA node to return to the workflow canvas.

## Step four: Add logic with the If node <a id="step-four-add-logic-with-the-if-node"></a>

n8n supports complex logic in workflows. This tutorial uses the [If node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) to create two branches that each generate a report from the NASA data. Solar flares have five possible classifications. The If node sends a report with the lower classifications to one output, and the higher classifications to another.

Add the If node:

1. Select the **Add node** ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/add-node-small.png) connector on the NASA node.
2. Search for **If**. n8n shows a list of nodes that match the search.
3. Select **If** to add the node to the canvas. n8n opens the node.
4. You need to check the value of the `classType` property in the NASA data. To do this:
   1. Drag **classType** into **Value 1**.<br>

      > **Info**
      > **Make sure you ran the NASA node in the previous section**
      >
      > If you didn't follow the step in the previous section to run the NASA node, you won't see any data to work with in this step.
   2. Change the comparison operation to **String > Contains**.
   3. In **Value 2**, enter **X**. This is the highest classification of solar flare. In the next step, you will create two reports: one for X class solar flares, and one for all the smaller solar flares.
5. You can now check that the node is working and returning the expected date: select **Execute step** to run the node manually. n8n tests the data against the condition, and shows which results match true or false in the **OUTPUT** panel.<br>

   > **Info**
   > **Weeks without large solar flares**
   >
   > In this tutorial, you are working with live data. If you find there aren't any X class solar flares when you run the workflow, try replacing **X** in **Value 2** with either **A**, **B**, **C**, or **M**.
6. Once you are happy the node will return some events, you can close the node to return to the canvas.

## Step five: Output data from your workflow <a id="step-five-output-data-from-your-workflow"></a>

The last step of the workflow is to send the two reports about solar flares. For this example, you'll send data to [Postbin](https://www.toptal.com/developers/postbin/). Postbin is a service that receives data and displays it on a temporary web page.

1. On the If node, select the **Add node** ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/add-node-small.png) connector labeled **true**.
2. Search for **PostBin**. n8n shows a list of nodes that match the search.
3. Select **PostBin**.
4. Select **Send a request**. n8n adds the node to the canvas and opens it.
5. Go to [Postbin](https://www.toptal.com/developers/postbin/) and select **Create Bin**. Leave the tab open so you can come back to it when testing the workflow.
6. Copy the bin ID. It looks like `1651063625300-2016451240051`.
7. In n8n, paste your Postbin ID into **Bin ID**.
8. Now, configure the data to send to Postbin. Next to **Bin Content**, select the **Expression** tab (you will need to mouse-over the **Bin Content** for the tab to appear), then select the expand button ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/open-expression-editor.png) to open the full expressions editor.
9. You can now click and drag the correct field from the If node output into the expressions editor to automatically create a reference for this label. In this case, the field you want is `classType`.
10. Once dropped into the expressions editor it will transform into this reference: `{{$json["classType"]}}`. Add a message to it, so that the full expression is:

    ```js
    There was a solar flare of class {{$json["classType"]}}
    ```

![Expression editor for Bin Content, with the Result panel showing the rendered message text](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/tutorial-expression.png)
11\. Close the expressions editor to return to the node.
12\. Close the Postbin node to return to the canvas.
13\. Add another Postbin node, to handle the **false** output path from the If node:
1\. Hover over the Postbin node, then select **Node context menu** ![Node context menu icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/get-started/.gitbook/assets/node-context-menu.png) > **Duplicate node** to duplicate the first Postbin node.
2\. Drag the **false** connector from the If node to the left side of the new Postbin node.

## Step six: Test the workflow <a id="step-six-test-the-workflow"></a>

1. You can now test the entire workflow. Select **Execute Workflow**. n8n runs the workflow, showing each stage in progress.
2. Go back to your Postbin bin. Refresh the page to see the output.
3. If you want to use this workflow (in other words, if you want it to run once a week automatically), you need to publish it by clicking **Publish**.

> **Info**
> **Time limit**
>
> Postbin's bins exist for 30 minutes after creation. You may need to create a new bin and update the ID in the Postbin nodes, if you exceed this time limit.

## Congratulations <a id="congratulations"></a>

You now have a fully functioning workflow that does something useful! It should look something like this:

**Workflow example**

```json
{
  "name": "Tutorial-workflow",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "weeks",
              "triggerAtDay": [
                1
              ],
              "triggerAtHour": 9
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [
        -680,
        100
      ],
      "id": "ef14445c-2f5f-4c78-96c8-66732feb7a8f",
      "name": "Schedule Trigger"
    },
    {
      "parameters": {
        "resource": "donkiSolarFlare",
        "additionalFields": {
          "startDate": "={{ $today.minus(7, 'days') }}"
        }
      },
      "type": "n8n-nodes-base.nasa",
      "typeVersion": 1,
      "position": [
        -460,
        100
      ],
      "id": "52c58b93-c780-4aff-a216-d67b28195a45",
      "name": "NASA",
      "credentials": {
        "nasaApi": {
          "id": "sSVnxV9AcBmBOYn8",
          "name": "NASA account"
        }
      }
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 2
          },
          "conditions": [
            {
              "id": "2f469c8e-12b3-4ee5-95fc-ff81508d0b43",
              "leftValue": "={{ $json.classType }}",
              "rightValue": "C",
              "operator": {
                "type": "string",
                "operation": "contains"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.2,
      "position": [
        -240,
        100
      ],
      "id": "b54e3289-9ebb-451f-8bac-87edeeeced13",
      "name": "If"
    },
    {
      "parameters": {
        "resource": "request",
        "operation": "send",
        "binId": "1741914338605-0907339996192",
        "binContent": "=There was a solar flare of class {{$json[\"classType\"]}}",
        "requestOptions": {}
      },
      "type": "n8n-nodes-base.postBin",
      "typeVersion": 1,
      "position": [
        -20,
        0
      ],
      "id": "a8b602b6-17b1-4274-8d33-73344b6bb8fb",
      "name": "PostBin(true)"
    },
    {
      "parameters": {
        "resource": "request",
        "operation": "send",
        "binId": "1741914338605-0907339996192",
        "binContent": "=There was a solar flare of class {{$json[\"classType\"]}}",
        "requestOptions": {}
      },
      "type": "n8n-nodes-base.postBin",
      "typeVersion": 1,
      "position": [
        -20,
        200
      ],
      "id": "09c2c7a4-c229-430d-a5b0-8d7491515d9f",
      "name": "PostBin(false)"
    },
    {
      "parameters": {
        "content": "## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
        "height": 120,
        "width": 600
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        -720,
        -60
      ],
      "id": "08e0b8f9-c90e-4c9c-a663-01aca805b9be",
      "name": "Sticky Note"
    }
  ],
  "pinData": {},
  "connections": {
    "Schedule Trigger": {
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
            "node": "If",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If": {
      "main": [
        [
          {
            "node": "PostBin(true)",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "PostBin(false)",
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
  "versionId": "37de4877-e4f6-4b9a-b6f0-9b7e7aea0163",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7"
  },
  "id": "DPzMzTIyDrYohiw4",
  "tags": [
    {
      "createdAt": "2021-06-25T07:47:07.640Z",
      "updatedAt": "2021-06-25T07:47:07.640Z",
      "id": "1",
      "name": "docs"
    }
  ]
}
```

Along the way you have discovered:

- How to find the nodes you want and join them together
- How to use expressions to manipulate data
- How to create credentials and attach them to nodes
- How to use logic in your workflows

There are plenty of things you could add to this (perhaps add some more credentials and a node to send you an email of the results), or maybe you have a specific project in mind. Whatever your next steps, the resources linked below should help.

## Next steps <a id="next-steps"></a>

- Interested in what you could do with AI? Find out [how to build an AI chat agent with n8n](https://docs.n8n.io/build/integrate-ai).
- Take [courses at n8n Academy](https://learn.n8n.io).
- Explore more examples in [workflow templates](https://n8n.io/workflows/).

[^1]: An n8n workflow is a collection of nodes that automate a process. Workflows begin execution when a trigger condition occurs and execute sequentially to achieve complex tasks.

[^2]: In n8n, credentials store authentication information to connect with specific apps and services. After creating credentials with your authentication information (username and password, API key, OAuth secrets, etc.), you can use the associated app node to interact with the service.

[^3]: In n8n, expressions allow you to populate node parameters dynamically by executing JavaScript code. Instead of providing a static value, you can use the n8n expression syntax to define the value using data from previous nodes, other workflows, or your n8n environment.
