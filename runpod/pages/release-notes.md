> Pinned source for Runpod main: [release-notes.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/release-notes.mdx)
> Canonical documentation: https://docs.runpod.io/release-notes

# Product updates

New features, fixes, and improvements for the Runpod platform. Review setup, configuration, workflows, and usage guidance in the Runpod documentation.

**September 15, 2026**

\*\*\*\* [Global Volumes - Beta](https://docs.runpod.io/storage/globalstore)  Elastic, region-independent storage you can attach to any Pod from any Runpod data center. Create a global volume once and mount it at startup across any region — no copying data between data centers required. Best suited for model serving and inference workloads that read large files and write infrequently.

**September 14, 2026**

\*\*\*\* [Nano Banana Edit](https://docs.runpod.io/public-endpoints/models/nano-banana-edit) The Nano Banana Edit public endpoint will be retired on **September 28, 2026**, because Google is discontinuing the underlying model. Migrate to [Nano Banana 2 Edit](https://docs.runpod.io/public-endpoints/models/nano-banana-2-edit) before that date.

**September 10, 2026**

\*\*\*\* [Sales tax and tax ID support](https://docs.runpod.io/accounts-billing/sales-tax) Runpod now collects sales tax on credit purchases in applicable jurisdictions. You can add a business tax ID at checkout or in your account settings to update how tax applies to your purchases. See [Adding your tax ID](https://docs.runpod.io/accounts-billing/add-tax-id) to get started.

**August 19, 2026**

\*\*\*\* [Batch Jobs (BETA)](https://docs.runpod.io/serverless/batch-jobs) Submit large sets of inference requests to a Serverless endpoint as a single managed unit. Create a batch, finalize it to start processing, and poll for status and progress using per-request counts. See [Batch Jobs](https://docs.runpod.io/serverless/batch-jobs) to get started.

**August 18, 2026**

\*\*\*\* [REST API v2](https://docs.runpod.io/api-reference-v2/overview) REST API v2 is now generally available. v2 moves to a new base URL (`https://api.runpod.io/v2`), reorganizes resource paths, standardizes request and response shapes, and adds new capabilities including catalog endpoints, pod log streaming, and Serverless observability. See the [migration guide](https://docs.runpod.io/api-reference-v2/migrate-from-v1) to move your existing integrations.

\*\*\*\* REST API v1 REST API v1 will be retired on **November 15, 2026**. Migrate your integrations to [REST API v2](https://docs.runpod.io/api-reference-v2/overview) before that date. See the [migration guide](https://docs.runpod.io/api-reference-v2/migrate-from-v1) to get started.

\*\*\*\* GraphQL API The GraphQL API will be retired in **early 2027**. For new integrations, use [REST API v2](https://docs.runpod.io/api-reference-v2/overview).

**August 11, 2026**

\*\*\*\* [ECR Integration (BETA)](https://docs.runpod.io/tutorials/pods/use-private-ecr-images)  You can now pull private container images from AWS ECR into [Pods and Serverless endpoints](https://docs.runpod.io/pods/overview) without migrating registries or managing credentials. ECR delegation is available in beta.

**July 23, 2026**

\*\*\*\* [Runpod API v2 (BETA)](https://docs.runpod.io/api-reference-v2/overview)  A new REST API is available in public beta. See the [API v2 reference](https://docs.runpod.io/api-reference-v2/overview) to get started. The [GraphQL API](https://docs.runpod.io/api-reference/overview) and REST API v1 continue to work for now, but will be deprecated in a future release, so new integrations should build on API v2.

**July 17, 2026**

\*\*\*\* [Scale Instant Clusters - BETA](https://docs.runpod.io/instant-clusters/scale-clusters)  You can now add pods to a running Instant Cluster to increase GPU capacity without recreating it. New pods join the cluster's private network automatically, matching the existing GPU type, template, and network storage. Currently in beta for eligible accounts.

**July 14, 2026**

\*\*\*\* [Worker affinity for Serverless load balancer endpoints](https://docs.runpod.io/serverless/load-balancing/worker-affinity)  You can now pin follow-up requests to the same worker using the `X-Runpod-Worker-Id` response header. Send the header back on subsequent requests to choose from three modes: soft (prefer the worker, fall back to normal selection if unavailable), strict (route only to that worker, wait if at capacity), or strict-resume (same as strict, but automatically resumes a scaled-down worker). Useful for stateful workloads where session state is held in worker memory and re-routing would require reloading it.

**July 1, 2026**

\*\*\*\* [Updated Serverless endpoint creation flow](https://docs.runpod.io/serverless/endpoints/overview)  The endpoint creation flow now offers six deployment paths — Hello World, Hugging Face LLM, Docker, GitHub, Flash, and Hub (which replaces the previous "Ready-to-Deploy Repos" option). Each path walks you through the   right setup for your use case.

\*\*\*\* [Deploy Pods with private AWS ECR images - BETA](https://docs.runpod.io/tutorials/pods/use-private-ecr-images)  New tutorial covering how to pull container images from private AWS ECR repositories into Runpod Pods using cross-account IAM delegation. Includes configuring ECR repository policies, adding ECR credentials in the Runpod\
console, and deploying a Pod with a private image, without managing credentials directly.

\*\*\*\* Lifecycle operations are now CLI-only

Flash SDK methods for endpoint and app lifecycle operations—deploy, undeploy, update, and creating or deleting apps and environments—now raise a `FlashUsageError` that points to the equivalent `flash` command. Run these operations through the [Flash CLI](https://docs.runpod.io/flash/cli/overview) instead, which keeps the build and manifest pipeline and local state tracking consistent.

\*\*\*\* High-Performance Network Volumes now available

You can now attach high-performance network volumes to [Pods, Serverless endpoints, and Instant Clusters](https://docs.runpod.io/storage/network-volumes) for significantly faster model load times. Look for the purple diamond icon to identify compatible datacenters.

\*\*\*\* Deploy When Available

You can now request a GPU that's currently out of capacity and get notified by email when it becomes available. Runpod saves your pod configuration so you can deploy immediately when capacity returns.

\*\*\*\* Sign in with Runpod for the MCP server

You can now connect AI coding agents to a hosted [Runpod MCP server](https://docs.runpod.io/get-started/mcp-servers) over HTTP and authenticate with the "Sign in with Runpod" OAuth flow, so you no longer need to store a Runpod API key on disk. Local connections that use an API key continue to work as before.

\*\*\*\* Expanded MCP server tools and REST API v2

The [Runpod MCP server](https://docs.runpod.io/get-started/mcp-servers) now covers more of the platform: you can run and manage Serverless jobs, discover GPU types and data centers, and manage tags, billing, and endpoint workers through natural language. List results are now paginated, and the server defaults to the Runpod REST API v2. Note that `create-endpoint` now takes an image name and GPU pool instead of a template ID; set `RUNPOD_REST_VERSION=v1` to keep the previous behavior.

\*\*\*\* Hub navigation consolidated

Hub navigation items are now consolidated into a single unified entry, making it easier to find templates and repos.

\*\*\*\* Guided install command for the MCP server

Running `npx @runpod/mcp-server add` now detects your installed agents — Claude Code, Claude Desktop, Cursor, Windsurf, and VS Code — and writes the [MCP configuration](https://docs.runpod.io/get-started/mcp-servers) for each one you select. Run `remove` to undo those changes.

\*\*\*\* Billing records now show correct data for deleted resources

SKU, region, and creation timestamps now appear correctly in [billing views and exports](https://docs.runpod.io/pods/pricing) for deleted Pods and network volumes.

\*\*\*\* Async Jobs for Serverless

You can now submit a job to a [Serverless endpoint](https://docs.runpod.io/serverless/overview) and retrieve the result asynchronously when capacity is available. Jobs queue and process automatically when a worker is free, with no always-on workers or polling loops required.

\*\*\*\* Serverless Worker Fitness Checks

Serverless workers now run automated health checks before accepting jobs. Runpod automatically removes unhealthy workers from rotation, reducing failed requests and improving endpoint reliability.

\*\*\*\* 24GB MiG instances now available

You can now partition H100 and RTX PRO 6000 GPUs into up to seven independent [24GB MiG instances](https://docs.runpod.io/references/gpu-types), giving you more granular, lower-cost access without reserving a full card.

\*\*\*\* Cost Centers now generally available

[Cost Centers](https://docs.runpod.io/accounts-billing/manage-accounts) let teams allocate and track GPU spend by project, team, or business unit. Detailed cost breakdowns are now available in billing, and all users receive itemized invoices as of May 1.

\*\*\*\* New Pod deploy flow with workload-first GPU selection

The Pod deployment experience has been redesigned. Instead of picking a GPU first, you now choose a template or workload type and get recommended GPUs ranked as recommended, compatible, or incompatible. The new flow includes Save as Template, AI-assisted GPU selection, and a Notify Me When Available option for out-of-capacity cards.

\*\*\*\* Flash is now generally available

[Flash](https://docs.runpod.io/flash/overview) is now generally available. You can run Python functions on cloud GPUs with a single `@Endpoint` decorator, with no containers or infrastructure setup required. Workers scale automatically, dependencies install on remote workers, and you can deploy production APIs with `flash deploy`.

\*\*\*\* Instant Cluster Expansion and Priority FlashBoot now live

[Instant Clusters](https://docs.runpod.io/instant-clusters) can now expand to more nodes faster. Priority FlashBoot reduces cold-start times for cluster workers. Both features are live with no configuration changes needed. Expanding an existing cluster is currently only available to Runpod admins. To add nodes to an existing cluster, reach out to the Runpod team.

\*\*\*\* FlashBoot for CPU Serverless now in public beta

CPU Serverless workers now support FlashBoot, dramatically reducing cold-start times for your CPU endpoints. GA is planned for later this quarter.

\*\*\*\* GPU price reductions across popular SKUs

GPU prices have been reduced across a range of SKUs, lowering the cost of your training and inference workloads. Updated pricing is reflected in the console and [pricing page](https://docs.runpod.io/pods/pricing).

\*\*\*\* Serverless GPU exclusions now correctly respected

GPU type exclusions set on Serverless endpoints were not being enforced, causing workloads to land on excluded GPU types and resulting in incorrect billing. The issue is now fixed, and new alerting has been added to detect recurrence.

> **Note**
>
> We've updated our release notes format for easier navigation. Updates from April 2026 onwards are listed above. Browse earlier releases by year and month in the archive below.

## Flash beta: Run Python functions on cloud GPUs

[Flash](https://docs.runpod.io/flash/overview) is now in public beta. Flash is a Python SDK that lets you run functions on Runpod Serverless GPUs with a single decorator:

```python
from runpod_flash import Endpoint, GpuType

@Endpoint(
    name="hello-gpu", 
    gpu=GpuType.NVIDIA_GEFORCE_RTX_4090,
    dependencies=["torch"]
) 
async def hello():  # This function runs on Runpod
    import torch
    gpu_name = torch.cuda.get_device_name(0)
    print(f"Hello from your GPU! ({gpu_name})")
    return {"gpu": gpu_name}

asyncio.run(hello())
print("Done!") # This runs locally
```

**Key features:**

- **Remote execution**: Mark functions with `@Endpoint` to run on GPUs/CPUs automatically.
- **Auto-scaling**: Workers scale from 0 to N based on demand.
- **Dependency management**: Packages install automatically on remote workers.
- **Two patterns**: Queue-based endpoints for batch work, load-balanced endpoints for REST APIs
- **Flash apps**: Build production-ready APIs with `flash init`, `flash dev`, and `flash deploy`

**Get started:**

- [Overview](https://docs.runpod.io/flash/overview)

  Learn more about Flash.
- [Quickstart](https://docs.runpod.io/flash/quickstart)

  Run your first GPU workload in 5 minutes.
- [Create endpoints](https://docs.runpod.io/flash/create-endpoints)

  Learn queue-based and load-balanced patterns.
- [Flash CLI](https://docs.runpod.io/flash/cli/overview)

  Development and deployment commands.

## Flash: Multi-datacenter deployments

Flash now supports deploying endpoints to [multiple datacenters](https://docs.runpod.io/flash/configuration/parameters#datacenter) simultaneously. Pass a list of datacenters to distribute your workload across regions for improved availability and reduced latency. You can also attach [network volumes per datacenter](https://docs.runpod.io/flash/configuration/storage#multi-datacenter-volumes) for region-specific data access.

## New Public Endpoints and expanded examples

**[New Public Endpoints](https://docs.runpod.io/public-endpoints/reference):** Expansion of available models across all categories.

- **Video:** [SORA 2](https://docs.runpod.io/public-endpoints/models/sora-2) and [SORA 2 Pro](https://docs.runpod.io/public-endpoints/models/sora-2-pro), [Kling v2.1](https://docs.runpod.io/public-endpoints/models/kling-v2-1) and [v2.6 Motion Control](https://docs.runpod.io/public-endpoints/models/kling-v2-6-motion-control), [WAN 2.6](https://docs.runpod.io/public-endpoints/models/wan-2-6-t2v).
- **Image:** [Seedream 4.0](https://docs.runpod.io/public-endpoints/models/seedream-4-t2i).
- **Text:** [Qwen3 32B](https://docs.runpod.io/public-endpoints/models/qwen3-32b), [IBM Granite 4.0](https://docs.runpod.io/public-endpoints/models/granite-4).
- **Audio:** [Chatterbox Turbo](https://docs.runpod.io/public-endpoints/models/chatterbox-turbo) for text-to-speech.

**New integrations and guides:**

- [Vercel AI SDK integration](https://docs.runpod.io/public-endpoints/ai-sdk): New `@runpod/ai-sdk-provider` package for TypeScript projects with streaming, text generation, and image generation support.
- [AI coding tools guide](https://docs.runpod.io/public-endpoints/ai-coding-tools): Configure OpenCode, Cursor, and Cline to use Runpod Public Endpoints as your model provider.

**[New tutorials](https://docs.runpod.io/tutorials/introduction/overview):**

- [Build a text-to-video pipeline](https://docs.runpod.io/tutorials/public-endpoints/text-to-video-pipeline): Chain multiple Public Endpoints to generate videos from text prompts.
- [Deploy cached models](https://docs.runpod.io/tutorials/serverless/model-caching-text): Reduce cold start times with model caching.
- [Integrate Serverless with web applications](https://docs.runpod.io/tutorials/serverless/generate-sdxl-turbo): Build a complete image generation app.
- [Build a chatbot with Gemma 3](https://docs.runpod.io/tutorials/serverless/run-gemma-7b): Deploy vLLM with OpenAI API compatibility.
- [Run Ollama on Pods](https://docs.runpod.io/tutorials/pods/run-ollama): Set up Ollama for LLM inference.
- [Build Docker images with Bazel](https://docs.runpod.io/tutorials/pods/build-docker-images): Containerize your applications.

## GitHub release rollback GA and load balancing Serverless repos in beta

- [GitHub release rollback](https://docs.runpod.io/serverless/workers/github-integration#roll-back-to-a-previous-build): Roll back your Serverless endpoint to any previous build from the console. Restore an earlier version when you encounter issues without waiting for a new GitHub release.
- [Load balancing Serverless repos (beta)](https://docs.runpod.io/hub/publishing-guide): Load balancing endpoints are now available in the Hub. Publish or convert any listing to load balancer type by setting `"endpointType": "LB"` in your hub.json file, then deploy as a Serverless endpoint or Pod from the Hub page. Maintain a single listing for your model and let users choose their deployment method—autoscaling Serverless or dedicated Pod resources.

## Pod migration in beta and Serverless development guides

- [Pod migration (beta)](https://docs.runpod.io/pods/troubleshooting/pod-migration): Migrate your Pod to a new machine when your stopped Pod's GPU is occupied. Provisions a new Pod with the same specifications and automatically transfers your data to an available machine.
- [New Serverless development guides](https://docs.runpod.io/serverless/overview): We've added a comprehensive new set of guides for developing, testing, and debugging Serverless endpoints.

## Slurm Clusters GA, cached models in beta, and new Public Endpoints available

- [Slurm Clusters are now generally available](https://docs.runpod.io/instant-clusters/slurm-clusters): Deploy production-ready HPC clusters in seconds. These clusters support multi-node performance for distributed training and large-scale simulations with pay-as-you-go billing and no idle costs.
- [Cached models are now in beta](https://docs.runpod.io/serverless/endpoints/model-caching): Eliminate model download times when starting workers. The system places cached models on host machines before workers start, prioritizing hosts with your model already available for instant startup.
- [New Public Endpoints available](https://docs.runpod.io/public-endpoints/overview): [WAN 2.5](https://docs.runpod.io/public-endpoints/models/wan-2-5) combines image and audio to create lifelike videos, while [Nano Banana](https://docs.runpod.io/public-endpoints/models/nano-banana-edit) merges multiple images for composite creations.

## Hub revenue sharing launches and Pods UI gets refreshed

- [Hub revenue share model](https://docs.runpod.io/hub/revenue-sharing): Publish to the Runpod Hub and earn credits when others deploy your repo. Earn up to 7% of compute revenue through monthly tiers with credits auto-deposited into your account.
- [Pods UI updated](https://docs.runpod.io/pods/overview): Refreshed modern interface for interacting with Runpod Pods.

## Public Endpoints arrive, Slurm Clusters in beta

- [Public Endpoints](https://docs.runpod.io/public-endpoints/overview): Access state-of-the-art AI models through simple API calls with an integrated playground. Available endpoints include [Qwen Image Edit](https://docs.runpod.io/public-endpoints/models/qwen-image-edit), [Flux Kontext](https://docs.runpod.io/public-endpoints/models/flux-kontext-dev), [Cogito 671B](https://docs.runpod.io/public-endpoints/models/cogito-671b), and [Minimax Speech](https://docs.runpod.io/public-endpoints/models/minimax-speech).
- [Slurm Clusters (beta)](https://docs.runpod.io/instant-clusters/slurm-clusters): Create on-demand multi-node clusters instantly with full Slurm scheduling support.

## S3-compatible storage and updated referral program

- [S3-compatible API for network volumes](https://docs.runpod.io/storage/s3-api): Upload and retrieve files from your network volumes without compute using AWS S3 CLI or Boto3. Integrate Runpod storage into any AI pipeline with zero-config ease and object-level control.
- [Referral program revamp](https://docs.runpod.io/accounts-billing/referrals): Updated rewards and tiers with clearer dashboards to track performance.

## Port labeling, price drops, Runpod Hub, and Tetra beta test

- [Port labeling](https://docs.runpod.io/pods/overview): Name exposed ports in the UI and API to help team members identify services like Jupyter or TensorBoard.
- [Price drops](https://docs.runpod.io/pods/pricing): Additional price reductions on popular GPU SKUs to lower training and inference costs.
- [Runpod Hub](https://docs.runpod.io/hub/overview): A curated catalog of one-click endpoints and templates for deploying community projects without starting from scratch.
- **Tetra beta test**: A Python library for running code on GPU with Runpod. Add a `@remote()` decorator to functions that need GPU power while the rest of your code runs locally.

## GitHub login, RTX 5090s, and global networking expansion

- **Login with GitHub**: OAuth sign-in and linking for faster onboarding and repo-driven workflows.
- **RTX 5090s on Runpod**: High-performance RTX 5090 availability for cost-efficient training and inference.
- [Global networking expansion](https://docs.runpod.io/pods/networking): Rollout to additional data centers approaching full global coverage.

## Enterprise features arrive, REST API goes GA, Instant Clusters in beta, and APAC expansion

- [CPU Pods get network storage access](https://docs.runpod.io/storage/network-volumes): GA support for network volumes on CPU Pods for persistent, shareable storage.
- **SOC 2 Type I certification**: Independent attestation of security controls for enterprise readiness.
- [REST API release](https://docs.runpod.io/api-reference/overview): REST API GA with broad resource coverage for full infrastructure-as-code workflows.
- [Instant Clusters](https://docs.runpod.io/instant-clusters): Spin up multi-node GPU clusters in minutes with private interconnect and per-second billing.
- **Bare metal**: Reserve dedicated GPU servers for maximum control, performance, and long-term savings.
- **AP-JP-1**: New Fukushima region for low-latency APAC access and in-country data residency.

## REST API enters beta with full-time community manager

- [REST API beta test](https://docs.runpod.io/api-reference/overview): RESTful endpoints for Pods, endpoints, and volumes for simpler automation than GraphQL.
- **Full-time community manager hire**: Dedicated programs, content, and faster community response.
- [Serverless GitHub integration release](https://docs.runpod.io/serverless/workers/github-integration): GA for GitHub-based Serverless deploys with production-ready stability.

## New silicon and LLM-focused Serverless upgrades

- **CPU Pods v2**: Docker runtime parity with GPU Pods for faster starts with network volume support.
- [H200s on Runpod](https://docs.runpod.io/references/gpu-types): NVIDIA H200 GPUs available for larger models and higher memory bandwidth.
- [Serverless upgrades](https://docs.runpod.io/serverless/overview): Higher GPU counts per worker, new quick-deploy runtimes, and simpler model selection.

## Global networking expands and GitHub deploys enter beta

- [Global networking expansion](https://docs.runpod.io/pods/networking): Added to CA-MTL-3, US-GA-1, US-GA-2, and US-KS-2 for expanded private mesh coverage.
- [Serverless GitHub integration beta test](https://docs.runpod.io/serverless/workers/github-integration): Deploy endpoints directly from GitHub repos with automatic builds.
- **Scoped API keys**: Least-privilege tokens with fine-grained scopes and expirations for safer automation.
- **Passkey auth**: Passwordless WebAuthn sign-in for phishing-resistant account access.

## Storage expansion and private cross-data-center connectivity

- [US-GA-2 added to network storage](https://docs.runpod.io/storage/network-volumes): Enable network volumes in US-GA-2.
- [Global networking](https://docs.runpod.io/pods/networking): Private cross-data-center networking with internal DNS for secure service-to-service traffic.

## Storage coverage grows with major price cuts and revamped referrals

- **US-TX-3 and EUR-IS-1 added to network storage**: Network volumes available in more regions for local persistence.
- **Runpod slashes GPU prices**: Broad GPU price reductions to lower training and inference total cost of ownership.
- [Referral program revamp](https://docs.runpod.io/accounts-billing/referrals): Updated commissions and bonuses with an affiliate tier and improved tracking.

## $20M seed round, community event, and broader Serverless options

- **$20M seed by Intel Capital and Dell Technologies Capital**: Funds infrastructure expansion and product acceleration.
- **First in-person hackathon**: Community projects, workshops, and real-world feedback.
- [Serverless CPU Pods](https://docs.runpod.io/references/cpu-types): Scale-to-zero CPU endpoints for services that don't need a GPU.
- [AMD GPUs](https://docs.runpod.io/references/gpu-types): AMD ROCm-compatible GPU SKUs as cost and performance alternatives to NVIDIA.

## CPU compute and first-class automation tooling

- **CPU Pods**: CPU-only instances with the same networking and storage primitives for cheaper non-GPU stages.
- [runpodctl](https://docs.runpod.io/runpodctl/overview): Official CLI for Pods, endpoints, and volumes to enable scripting and CI/CD workflows.

## Console navigation overhaul and documentation refresh

- **New navigational changes to Runpod UI**: Consolidated menus, consistent action placement, and fewer clicks for common tasks.
- **Docs revamp**: New information architecture, improved search, and more runnable examples and quickstarts.
- **Zhen AMA**: Roadmap Q\&A and community feedback session.

## New regions and investment in community support

- **US-OR-1**: Additional US region for lower latency and more capacity in the Pacific Northwest.
- **CA-MTL-1**: New Canadian region to improve latency and meet in-country data needs.
- **First community manager hire**: Dedicated community programs and faster feedback loops.
- **Building out the support team**: Expanded coverage and expertise for complex issues.

## Faster template starts and better multi-region hygiene

- **Serverless quick deploy**: One-click deploy of curated model templates with sensible defaults.
- **EU domain for Serverless**: EU-specific domain briefly offered for data residency, superseded by other region controls.
- **Data-center filter for Serverless**: Filter and manage endpoints by region for multi-region fleets.

## Self-service upgrades, clearer metrics, new pricing model, and cost visibility

- **Self-service worker upgrade**: Rebuild and roll workers from the dashboard without support tickets.
- **Edit template from endpoint page**: Inline edit and redeploy the underlying template directly from the endpoint view.
- **Improved Serverless metrics page**: Refinements to charts and filters for quicker root-cause analysis.
- [Flex and active workers](https://docs.runpod.io/serverless/pricing): Always-on "active" workers for baseline load with on-demand "flex" workers for bursts.
- **Billing explorer**: Inspect costs by resource, region, and time to identify optimization opportunities.

## Team governance, storage expansion, and better debugging

- [Teams](https://docs.runpod.io/accounts-billing/manage-accounts): Organization workspaces with role-based access control for Pods, endpoints, and billing.
- [Savings plans](https://docs.runpod.io/pods/pricing): Plans surfaced prominently in console with easier purchase and management for steady usage.
- **Network storage to US-KS-1**: Enable network volumes in US-KS-1 for local, persistent data workflows.
- [Serverless log view](https://docs.runpod.io/serverless/development/logs): Stream worker stdout and stderr in the UI and API for real-time debugging.
- **Serverless health endpoint**: Lightweight /health probe returning endpoint and worker status without creating a billable job.
- **SOC 2 Type II compliant**: Security and compliance certification for enterprise customers.

## Observability, top-tier GPUs, and commitment-based savings

- **Serverless metrics page**: Time-series charts for pXX latencies, queue delay, throughput, and worker states for faster debugging and tuning.
- [H100s on Runpod](https://docs.runpod.io/references/gpu-types): NVIDIA H100 instances for higher throughput and larger model footprints.
- [Savings plans](https://docs.runpod.io/pods/pricing): Commitment-based discounts for predictable workloads to lower effective hourly rates.

## Smoother auth and multi-region Serverless with persistent storage

- **The new and improved Runpod login experience**: Streamlined sign-in and team access for faster, more consistent auth flows.
- [Network volumes added to Serverless](https://docs.runpod.io/storage/network-volumes): Attach persistent storage to Serverless workers to retain models and artifacts across restarts and speed cold starts through caching.
- **Serverless region support**: Pin or allow specific regions for endpoints to reduce latency and meet data-residency needs.

## Deeper autoscaling controls, richer metrics, persistent storage, and job cancellation

- **Serverless scaling strategies**: Scale by queue delay and/or concurrency with min/max worker bounds to balance latency and cost.
- **Queue delay**: Expose time-in-queue as a first-class metric to drive autoscaling and SLO monitoring.
- **Request count**: Track success and failure totals over windows for quick health checks and alerting.
- **runsync**: Synchronous invocation path that returns results in the same HTTP call for short-running jobs.
- **Network storage beta**: Region-scoped, attachable volumes shareable across Pods and endpoints for model caches and datasets.
- **Job cancel API**: Programmatically terminate queued or running jobs to free capacity and enforce client timeouts.

## Serverless platform hardens with cleaner API

- **Serverless API v2**: Revised request and response schema with improved error semantics and new endpoints for better control over job lifecycle and observability.

## Better control over notifications and GPU allocation

- **Notification preferences**: Configure which platform events trigger alerts to reduce noise for teams and CI systems.
- **GPU priorities**: Influence scheduling by marking workloads as higher priority to reduce queue time for critical jobs.

## Encrypted volumes for persistent data

- **Runpod now offers encrypted volumes**: Enable at-rest encryption for persistent volumes with no application changes required using platform-managed keys.
