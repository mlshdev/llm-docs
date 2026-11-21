> Pinned source for Runpod main: [migrate/overview.mdx](https://github.com/runpod/docs/blob/e4b64f14b14cea0c05ab6977e1843b891202d4b9/migrate/overview.mdx)
> Canonical documentation: https://docs.runpod.io/migrate/overview

# Migrate to Runpod

Move GPU workloads to Runpod from another cloud or AI platform, with a step-by-step guide for each one and a coding agent skill that does the work.

These guides take a workload that runs on another platform and land it on Runpod. Each one maps the other platform's concepts to Runpod's, lists what works differently, and walks through the move with before and after code, CLI commands, and API calls. Every guide was written against the other platform's current documentation.

> **Tip**
>
> Want an agent to do it? Install the [Runpod skills](https://docs.runpod.io/get-started/agent-skills) and ask your coding agent to migrate the project. See [Migrate with a coding agent](#migrate-with-a-coding-agent).

## Choose your guide

### GPU clouds

- [Vast.ai](https://docs.runpod.io/migrate/vast-ai)

  Instances, templates, and Vast Serverless to Pods and Serverless.
- [Lambda](https://docs.runpod.io/migrate/lambda)

  On-demand instances, filesystems, and 1-Click Clusters.
- [CoreWeave](https://docs.runpod.io/migrate/coreweave)

  Kubernetes workloads, Slurm, and object storage.
- [Paperspace and DigitalOcean](https://docs.runpod.io/migrate/paperspace)

  Machines, Notebooks, Deployments, and GPU Droplets.

### Serverless and inference platforms

- [Modal](https://docs.runpod.io/migrate/modal)

  Modal apps, functions, classes, and volumes to the Runpod SDK.
- [Replicate](https://docs.runpod.io/migrate/replicate)

  Hosted models, Cog models, and deployments.
- [Baseten](https://docs.runpod.io/migrate/baseten)

  Truss models, Model APIs, and autoscaling settings.
- [fal](https://docs.runpod.io/migrate/fal)

  Model APIs, the queue API, and fal Serverless apps.
- [Together AI](https://docs.runpod.io/migrate/together-ai)

  Serverless inference, dedicated endpoints, and fine-tuned models.
- [Fireworks AI](https://docs.runpod.io/migrate/fireworks-ai)

  Serverless inference, on-demand deployments, and custom models.
- [Hugging Face](https://docs.runpod.io/migrate/hugging-face)

  Inference Endpoints, custom handlers, and GPU Spaces.

### Hyperscalers

- [AWS](https://docs.runpod.io/migrate/aws)

  EC2 GPU instances, SageMaker, and Bedrock.
- [Google Cloud](https://docs.runpod.io/migrate/google-cloud)

  Compute Engine, Vertex AI, and Cloud Run.
- [Azure](https://docs.runpod.io/migrate/azure)

  GPU VMs, Azure Machine Learning, and Azure OpenAI.

The hyperscaler guides include a Terraform path that uses the [Runpod Terraform provider](https://docs.runpod.io/integrations/terraform/overview), so you can run both providers in one configuration while you move.

### Frameworks and API versions

- [Cog](https://docs.runpod.io/tutorials/migrations/cog/overview)

  Run an existing Cog image on Runpod Serverless.
- [OpenAI](https://docs.runpod.io/tutorials/migrations/openai/overview)

  Point OpenAI client code at a vLLM endpoint on Runpod.
- [Runpod REST v1 and GraphQL](https://docs.runpod.io/api-reference-v2/migrate-from-v1)

  Move existing Runpod integrations to REST API v2.
- [Flash](https://docs.runpod.io/sdk/migrate-from-flash)

  Move a `runpod-flash` project to the Runpod SDK.

If your platform isn't listed, the process below still applies. Match each workload to a Runpod product by its shape, then follow that product's docs.

## Where workloads land

The other platform's product name matters less than what the workload does. Sort each one by its shape.

| Workload                                                        | Runpod product                                                                                      | Start here                                                                           |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Calls a model someone else hosts.                               | [Public Endpoints](https://docs.runpod.io/public-endpoints/overview), when Runpod hosts that model. | [Quickstart](https://docs.runpod.io/public-endpoints/quickstart)                     |
| Takes a request, returns a response, and sits idle in between.  | [Serverless](https://docs.runpod.io/serverless/overview) queue-based endpoint.                      | [Serverless quickstart](https://docs.runpod.io/serverless/quickstart)                |
| Runs your own HTTP server with custom routes and low latency.   | Serverless [load-balancing endpoint](https://docs.runpod.io/serverless/load-balancing/overview).    | [Load balancing overview](https://docs.runpod.io/serverless/load-balancing/overview) |
| Serves an LLM behind an OpenAI-compatible API.                  | Serverless endpoint running the [vLLM worker](https://docs.runpod.io/serverless/vllm/overview).     | [vLLM quickstart](https://docs.runpod.io/serverless/vllm/get-started)                |
| Python functions you'd rather not containerize yourself.        | The [Runpod SDK](https://docs.runpod.io/sdk/overview).                                              | [SDK quickstart](https://docs.runpod.io/sdk/quickstart)                              |
| A job that runs to completion, such as training or a batch run. | A [Pod](https://docs.runpod.io/pods/overview), or one Pod per call from the Runpod SDK.             | [Choose a Pod](https://docs.runpod.io/pods/choose-a-pod)                             |
| An interactive machine for notebooks, SSH, or an IDE.           | A Pod.                                                                                              | [Connect to a Pod](https://docs.runpod.io/pods/connect-to-a-pod)                     |
| An always-on service with a stable address.                     | A Pod.                                                                                              | [Expose ports](https://docs.runpod.io/pods/configuration/expose-ports)               |
| Multi-node training or HPC.                                     | [Instant Clusters](https://docs.runpod.io/instant-clusters).                                        | [Slurm clusters](https://docs.runpod.io/instant-clusters/slurm-clusters)             |

## How a migration goes

Every guide follows the same eight steps, so you can run them in order or jump to the one you need.

1. List what runs on the other platform and find the code that calls it. Consoles often hold resources that no file in your repo mentions.
2. Create an account, get an [API key](https://docs.runpod.io/get-started/credentials), and install the tools you'll use: [runpodctl](https://docs.runpod.io/runpodctl/overview), the [Runpod SDK](https://docs.runpod.io/sdk/overview), the [MCP server](https://docs.runpod.io/get-started/mcp-servers), or [Terraform](https://docs.runpod.io/integrations/terraform/overview).
3. Use the table above, then pick a GPU that fits the model. GPU stock varies by data center, so check what's available before you commit to a type.
4. Most container images run on Runpod unchanged if they're built for `linux/amd64`. Platform-specific contracts, such as a handler signature or a health route, need a small port.
5. Copy datasets and checkpoints to a [network volume](https://docs.runpod.io/storage/network-volumes). For models on Hugging Face, [cached models](https://docs.runpod.io/serverless/endpoints/model-caching) skip the copy.
6. Create the Pod or endpoint from the console, runpodctl, the REST API, the SDK, or Terraform.
7. Change the URL, the auth header, and the request shape in the code that calls the workload. Put the new values behind configuration so you can switch back.
8. Send real requests to both deployments and compare. Shift traffic, then stop what's still billing on the other platform.

## Migrate with a coding agent

The Runpod plugin for coding agents includes a migration skill, `runpod-cloud-migrate`. It scans your repository for the platforms it depends on, opens the matching playbook, and proposes a plan before it changes anything. It migrates one workload at a time and verifies each with a real request.

1. The plugin installs the skills and connects the hosted MCP server:

   ```bash
   claude plugin marketplace add runpod/runpod-plugins-official
   claude plugin install runpod@runpod
   ```

   Install the skills for your agent, then connect the hosted MCP server:

   ```bash
   npx skills add runpod/runpod-plugins-official --skill '*' --agent AGENT_ID --global
   npx @runpod/mcp-server@latest add --client CLIENT_ID
   ```

   Replace `AGENT_ID` and `CLIENT_ID` with your agent's ID, for example `cursor` or `codex`.

   The MCP server signs you in with your Runpod account, so you don't need an API key to start. See [Agent skills](https://docs.runpod.io/get-started/agent-skills) and [MCP servers](https://docs.runpod.io/get-started/mcp-servers) for details.
2. Open your project and paste this prompt. In Claude Code, you can run `/runpod:migrate-cloud` instead.

   ```text
   Use the runpod-cloud-migrate skill to move this project to Runpod.

   1. Inventory the repository first and show me which platforms it uses and where.
   2. For each workload, propose where it lands on Runpod, what changes in the code,
      what data has to move, and anything that has no direct equivalent.
   3. Show me the plan and an hourly cost estimate. Wait for my approval before you
      create anything on Runpod.
   4. Migrate one workload at a time, starting with the smallest. Verify each one with
      a real request and show me the result.
   5. Keep the current deployment callable behind a config switch so I can roll back.
   6. Don't stop, change, or delete anything on the platform we're leaving unless I
      name the resource and approve it.
   ```
3. The agent stops after the inventory and plan. Check the targets, the GPU choice, and the list of gaps, then approve it. Nothing billable is created before that point.

## Get help

If a guide is wrong or a step fails, [open an issue on GitHub](https://github.com/runpod/docs/issues). For large or committed workloads, [talk to the Runpod sales team](https://ecykq.share.hsforms.com/2MZdZATC3Rb62Dgci7knjbA) about capacity planning and pricing.
