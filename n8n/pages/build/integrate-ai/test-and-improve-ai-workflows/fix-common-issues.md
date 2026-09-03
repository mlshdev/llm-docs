> Commit-pinned source for n8n main: [docs/build/integrate-ai/test-and-improve-ai-workflows/fix-common-issues.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/integrate-ai/test-and-improve-ai-workflows/fix-common-issues.md)

# Tips and common issues <a id="tips-and-common-issues"></a>

## Combining multiple triggers <a id="combining-multiple-triggers"></a>

If you have another trigger in the workflow already, you have two potential starting points: that trigger and the [evaluation trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.evaluationtrigger). To make sure your workflow works as expected no matter which trigger executes, you will need to merge these branches together.

![](https://raw.githubusercontent.com/n8n-io/n8n-docs/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/.gitbook/assets/merging-trigger-branches.png)
*Logic to merge two trigger branches together so that they have the same data format and can be referenced from a single node.*

To do so:

1. **Get the data format of the other trigger**:
   - Execute the other trigger.
   - Open it and navigate to the JSON view of its output pane.
   - Click the **copy** button on the right.
2. **Re-shape the evaluation trigger data to match**:
   - Insert an [Edit Fields (Set) node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set) after the evaluation trigger and connect them together.
   - Change its mode to **JSON**.
   - Paste your data into the 'JSON' field, removing the `[` and `]` on the first and last lines.
   - Switch the field type to **Expression**.
   - Map in the data from the trigger by dragging it from the input pane.
   - For strings, make sure to replace the entire value (including the quotes) and add `.toJsonString()` to the end of the expression.
3. **Merge the branches using a 'No-op' node**: Insert a [No-op node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.noop) and wire both the other trigger and the Set node up to it. The 'No-op' node just outputs whatever input it receives.
4. **Reference the 'No-op' node outputs in the rest of the workflow**: Since both paths will flow through this node with the same format, you can be sure that your input data will always be there.

## Avoiding evaluation breaking the chat <a id="avoiding-evaluation-breaking-the-chat"></a>

n8n's internal chat reads the output data of the last executed node in the workflow. After adding an evaluation node with the ['set outputs' operation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.evaluation#set-outputs), this data may not be in the expected format, or even contain the chat response.

![Agent node with a second output branch wired to a No-op node, positioned to execute last](https://raw.githubusercontent.com/n8n-io/n8n-docs/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/.gitbook/assets/add-second-output-branch.png)

The solution is to add an extra branch coming out of your agent. [Lower branches execute later](https://docs.n8n.io/build/flow-logic/understand-execution-order) in n8n, which means any node you attach to this branch will execute last. You can use a no-op node here since it only needs to pass the agent output through.

## Accessing tool data when calculating metrics <a id="accessing-tool-data-when-calculating-metrics"></a>

Sometimes you need to know what happened in executed sub-nodes of an agent, for example to check whether it executed a tool. You can't reference these nodes directly with expressions, but you can enable the **Return intermediate steps** option in the agent. This will add an extra output field called `intermediateSteps` which you can use in later nodes:

![Enable return intermediate steps](https://raw.githubusercontent.com/n8n-io/n8n-docs/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/.gitbook/assets/enable-return-intermediate-steps.png)

## Multiple evaluations in the same workflow <a id="multiple-evaluations-in-the-same-workflow"></a>

You can only have one evaluation set up per workflow. In other words, you can only have one evaluation trigger per workflow.

Even so, you can still test different parts of your workflow with different evaluations by putting those parts in [sub-workflows](https://docs.n8n.io/build/flow-logic/break-workflows-into-smaller-parts) and evaluating each sub-workflow.

## Dealing with inconsistent results <a id="dealing-with-inconsistent-results"></a>

Metrics can often have noise: they may be different across evaluation runs of the exact same workflow. This is because the workflow itself may return different results, or any LLM-based metrics might have natural variation in them.

You can compensate for this by duplicating the rows of your dataset, so that each row appears more than once in the dataset. Since this means that each input will effectively be running multiple times, it will smooth out any variations.
