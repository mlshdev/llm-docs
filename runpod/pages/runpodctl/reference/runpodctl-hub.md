> Pinned source for Runpod main: [runpodctl/reference/runpodctl-hub.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/runpodctl/reference/runpodctl-hub.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-hub

# hub

Browse and search Runpod Hub repos with runpodctl, inspect repository details, and use Hub IDs to deploy Serverless endpoints.

Browse and search the Runpod Hub marketplace to discover deployable repos. You can list popular repos, search by name, and get details for specific repos. Use Hub repo IDs with [`runpodctl serverless create --hub-id`](https://docs.runpod.io/runpodctl/reference/runpodctl-serverless) to deploy endpoints directly from the Hub.

```bash
runpodctl hub <subcommand> [flags]
```

## Subcommands

### List repos

List repos from the Hub marketplace. By default, shows the top 10 repos ordered by stars.

```bash
# List top repos by stars
runpodctl hub list

# List only Serverless repos
runpodctl hub list --type SERVERLESS

# List only Pod repos
runpodctl hub list --type POD

# Filter by category
runpodctl hub list --category ai --limit 20

# Order by deployment count
runpodctl hub list --order-by deploys

# Filter by repo owner
runpodctl hub list --owner runpod
```

#### List flags

**--type (type: string)**

Filter by deployment type (`POD` or `SERVERLESS`). This filter is applied client-side, so `--limit` may return fewer results than specified.

**--category (type: string)**

Filter by category.

**--owner (type: string)**

Filter by repo owner.

**--order-by (type: string)**

Sort results by field: `createdAt`, `deploys`, `releasedAt`, `stars`, `updatedAt`, or `views`.

**--order-dir (type: string)**

Sort direction: `asc` or `desc`.

**--limit (type: int)**

Maximum number of results to return.

**--offset (type: int)**

Number of results to skip for pagination.

### Search repos

Search for repos in the Hub by name:

```bash
# Search for vLLM repos
runpodctl hub search vllm

# Search Serverless repos only
runpodctl hub search whisper --type SERVERLESS

# Limit search results
runpodctl hub search stable-diffusion --limit 5
```

#### Search flags

**--type (type: string)**

Filter by deployment type (`POD` or `SERVERLESS`). This filter is applied client-side, so `--limit` may return fewer results than specified.

**--category (type: string)**

Filter by category.

**--owner (type: string)**

Filter by repo owner.

**--order-by (type: string)**

Sort results by field: `createdAt`, `deploys`, `releasedAt`, `stars`, `updatedAt`, or `views`.

**--order-dir (type: string)**

Sort direction: `asc` or `desc`.

**--limit (type: int)**

Maximum number of results to return.

**--offset (type: int)**

Number of results to skip for pagination.

### Get repo details

Get detailed information about a specific Hub repo by its ID or owner/name:

```bash
# Get by listing ID
runpodctl hub get cm8h09d9n000008jvh2rqdsmb

# Get by owner/name
runpodctl hub get runpod-workers/worker-vllm
```

## Deploy from the Hub

After finding a repo you want to deploy, use its listing ID with `serverless create`:

```bash
# Find a repo
runpodctl hub search vllm

# Deploy it
runpodctl serverless create --hub-id cm8h09d9n000008jvh2rqdsmb --name "my-vllm"
```

GPU IDs and container disk size are automatically pulled from the Hub release config. You can override the GPU type with `--gpu-id`.

## Related commands

- [`runpodctl serverless create`](https://docs.runpod.io/runpodctl/reference/runpodctl-serverless)
- [`runpodctl template search`](https://docs.runpod.io/runpodctl/reference/runpodctl-template)
