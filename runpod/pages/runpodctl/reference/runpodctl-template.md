> Pinned source for Runpod main: [runpodctl/reference/runpodctl-template.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/runpodctl/reference/runpodctl-template.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-template

# template

Use runpodctl to list, search, inspect, create, update, and delete reusable templates for Pods and Serverless endpoints.

List, search, and manage templates for Pods and Serverless endpoints.

```bash
runpodctl template <subcommand> [flags]
```

## Alias

You can use `tpl` as a shorthand for `template`:

```bash
runpodctl tpl list
```

## Subcommands

### List templates

List available templates:

```bash
# List official and community templates (first 10)
runpodctl template list

# List only official templates
runpodctl template list --type official

# List community templates
runpodctl template list --type community

# List your own templates
runpodctl template list --type user

# List all templates including user templates
runpodctl template list --all

# Show more results
runpodctl template list --limit 50
```

#### List flags

**--type (type: string)**

Filter by template type (`official`, `community`, `user`).

**--limit (type: int)**

Maximum number of results to return.

**--offset (type: int)**

Number of results to skip for pagination.

**--all (type: bool)**

Include all templates including user templates.

### Search templates

Search for templates by name:

```bash
# Search for PyTorch templates
runpodctl template search pytorch

# Search with limit
runpodctl template search comfyui --limit 5

# Search only official templates
runpodctl template search vllm --type official
```

#### Search flags

**--type (type: string)**

Filter by template type (`official`, `community`, `user`).

**--limit (type: int)**

Maximum number of results to return.

**--offset (type: int)**

Number of results to skip for pagination.

### Get template details

Get detailed information about a specific template, including README, environment variables, and exposed ports (with their labels):

```bash
runpodctl template get <template-id>
```

### Create a template

Create a new template:

```bash
# Create a Pod template
runpodctl template create --name "my-template" --image "runpod/pytorch:2.8.0-py3.11-cuda12.8.1-cudnn-devel-ubuntu22.04"

# Create a Serverless template
runpodctl template create --name "my-serverless-template" --image "my-image:latest" --serverless

# Create a template that pulls from a private registry
runpodctl template create --name "private-gpu" --image "registry.example.com/team/image:tag" --registry-auth-id <registry-auth-id>

# Create a template with labeled ports
runpodctl template create --name "dev" --image "my-image:latest" --ports "22/tcp,8888/http" --port-labels "22=ssh,8888=jupyter lab"
```

> **Note**
>
> **Pod templates vs Serverless templates**: Templates are either for Pods or for Serverless endpoints, not both. Pod templates support volume disk storage and are used with `runpodctl pod create`. Serverless templates do not support volume disks and are used with `runpodctl serverless create`. Use the `--serverless` flag when creating templates for Serverless endpoints.

#### Create flags

**--name (type: string; required)**

Template name.

**--image (type: string; required)**

Docker image (e.g., `runpod/pytorch:2.8.0-py3.11-cuda12.8.1-cudnn-devel-ubuntu22.04`).

**--container-disk-in-gb (type: int)**

Container disk size in GB.

**--volume-in-gb (type: int)**

Persistent volume size in GB.

**--volume-mount-path (type: string)**

Volume mount path.

**--ports (type: string)**

Comma-separated list of ports to expose (e.g., `8888/http,22/tcp`).

**--port-labels (type: string)**

Display names for the ports the template exposes, shown next to each port in the Runpod console. Provide comma-separated `port=name` pairs (e.g., `22=ssh,8888=jupyter lab`) or a JSON object (e.g., `{"22":"ssh","8888":"jupyter lab"}`). This flag requires `--ports`, and every labeled port must also appear in `--ports`. The pair form splits on commas, so use the JSON form for any label name that contains a comma.

**--registry-auth-id (type: string)**

ID of the container registry authentication used to pull the image from a private registry. Find the ID with [`runpodctl registry list`](https://docs.runpod.io/runpodctl/reference/runpodctl-registry).

**--env (type: string)**

Environment variables as a JSON object (e.g., `'{"KEY":"value"}'`).

**--docker-start-cmd (type: string)**

Comma-separated Docker start commands.

**--docker-entrypoint (type: string)**

Comma-separated Docker entrypoint commands.

**--serverless (type: bool)**

Create as a Serverless template. Serverless templates do not support volume disks (`--volume-in-gb` is not supported). Each Serverless template can only be bound to one endpoint at a time.

**--readme (type: string)**

Template README content.

### Update a template

Update an existing template:

```bash
# Rename a template
runpodctl template update <template-id> --name "new-name"

# Attach registry credentials
runpodctl template update <template-id> --registry-auth-id <registry-auth-id>

# Update port labels (or pass "" to clear them)
runpodctl template update <template-id> --port-labels "22=ssh,8888=jupyter lab"
```

#### Update flags

**--name (type: string)**

New template name.

**--image (type: string)**

New Docker image name.

**--ports (type: string)**

New comma-separated list of ports.

**--port-labels (type: string)**

New display names for the template's exposed ports, as `port=name` pairs or a JSON object. Pass an empty value (`--port-labels ""`) to remove all port labels.

**--registry-auth-id (type: string)**

New container registry authentication ID for pulling private images. Pass an empty value (`--registry-auth-id ""`) to detach registry credentials from the template.

**--env (type: string)**

New environment variables as a JSON object.

**--readme (type: string)**

New README content.

**--container-disk-in-gb (type: int)**

New container disk size in GB.

### Delete a template

Delete a template:

```bash
runpodctl template delete <template-id>
```

## Related commands

- [`runpodctl pod create`](https://docs.runpod.io/runpodctl/reference/runpodctl-pod)
- [`runpodctl serverless create`](https://docs.runpod.io/runpodctl/reference/runpodctl-serverless)
