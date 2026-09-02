> Commit-pinned source for n8n main: [docs/build/ways-of-building-workflows/ai-workflow-builder.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/build/ways-of-building-workflows/ai-workflow-builder.md)

# Use AI Workflow Builder

AI Workflow Builder enables you to create, refine, and debug workflows using natural language descriptions of your goals.

It handles the entire workflow construction process, including node selection, placement, and configuration, thereby reducing the time required to build functional workflows.

For details of pricing and availability of AI Workflow Builder, see [n8n Plans and Pricing](https://n8n.io/pricing/).

## Working with the builder <a id="working-with-the-builder"></a>

1. **Describe your workflow:** Either select an example prompt or describe your requirements in natural language.
2. **Monitor the build:** The builder provides real-time feedback through several phases.
3. **Review and refine the generated workflow:** Review required credentials and other parameters. Refine the workflow using prompts.

![AI Workflow Builder panel showing a generated workflow with a chat box for refining it](https://raw.githubusercontent.com/n8n-io/n8n-docs/32d4c1af45711af43703671a66f502ef7bd2b932/docs/build/.gitbook/assets/ai-workflow-builder.png)

### Commands you can run in the builder <a id="commands-you-can-run-in-the-builder"></a>

- `/clear`: Clears the context for the LLM and lets you start from scratch

## Understanding credits <a id="understanding-credits"></a>

### How credits work <a id="how-credits-work"></a>

Each time you send a message to the builder asking it to create or modify a workflow, that counts as one **interaction**, which is worth one **credit**.

✅ **Counts as an interaction**

- Sending a message to create a new workflow
- Asking the builder to modify an existing workflow
- Clicking the **Execute and refine** button in the builder window after a workflow is built

❌ **Does NOT count as an interaction**

- Messages that fail or produce generation errors
- Requests you manually stop by clicking the stop button

### Getting more credits <a id="getting-more-credits"></a>

If you've used your monthly limit, you can upgrade to a higher plan.

For details on plans and pricing, see [n8n Plans and Pricing](https://n8n.io/pricing/).

## AI model and data handling <a id="ai-model-and-data-handling"></a>

The following data are sent to the LLM:

- Text prompts that you provide to create, refine, or debug the workflow
- Node definitions, parameters, and connections and the current workflow definition.
- Any mock execution data that is loaded when using the builder

The following data are not sent:

- Details of any credentials you use
- Past executions of the workflow
