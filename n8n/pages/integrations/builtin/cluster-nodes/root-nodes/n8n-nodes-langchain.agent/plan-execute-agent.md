> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/plan-execute-agent.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/plan-execute-agent.md)

# Plan and Execute Agent node <a id="plan-and-execute-agent-node"></a>

> **Warning**
> **Feature availability**
>
> The Plan and Execute Agent is deprecated from n8n 1.82.0. New or updated AI Agent nodes use the [Tools Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent) instead. Only workflows still using node version 1 of the AI Agent node can select the Plan and Execute Agent.
>
> Node version 1 of the AI Agent node is removed from n8n 3.0, so the Plan and Execute Agent stops working for all workflows. See [n8n 3.0 breaking changes](https://docs.n8n.io/changelog/v30-breaking-changes) for details.

The Plan and Execute Agent is like the [ReAct agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/react-agent) but with a focus on planning. It first creates a high-level plan to solve the given task and then executes the plan step by step. This agent is most useful for tasks that require a structured approach and careful planning.

Refer to [AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) for more information on the AI Agent node itself.

## Node parameters <a id="node-parameters"></a>

Configure the Plan and Execute Agent using the following parameters.

### Prompt <a id="prompt"></a>

Select how you want the node to construct the prompt (also known as the user's query or input from the chat).

Choose from:

- **Take from previous node automatically**: If you select this option, the node expects an input from a previous node called `chatInput`.
- **Define below**: If you select this option, provide either static text or an expression for dynamic content to serve as the prompt in the **Prompt (User Message)** field.

### Require Specific Output Format <a id="require-specific-output-format"></a>

This parameter controls whether you want the node to require a specific output format. When turned on, n8n prompts you to connect one of these output parsers to the node:

- [Auto-fixing Output Parser](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing)
- [Item List Output Parser](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparseritemlist)
- [Structured Output Parser](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured)

## Node options <a id="node-options"></a>

Refine the Plan and Execute Agent node's behavior using these options:

### Human Message Template <a id="human-message-template"></a>

Enter a message that n8n will send to the agent during each step execution.

Available LangChain expressions:

- `{previous_steps}`: Contains information about the previous steps the agent's already completed.
- `{current_step}`: Contains information about the current step.
- `{agent_scratchpad}`: Information to remember for the next iteration.

### Tracing Metadata <a id="tracing-metadata"></a>

Add custom key-value metadata to tracing events for this agent. This is useful for filtering and debugging runs in tracing tools like [LangSmith](https://github.com/n8n-io/n8n-docs/blob/main/advanced-ai/langchain/langsmith.md).

Entries with empty keys or values are ignored.

## Templates and examples <a id="templates-and-examples"></a>

Refer to the main AI Agent node's [Templates and examples](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent#templates-and-examples) section.

## Common issues <a id="common-issues"></a>

For common questions or issues and suggested solutions, refer to [Common issues](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/common-issues).
