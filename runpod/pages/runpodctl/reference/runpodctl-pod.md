> Pinned source for Runpod main: [runpodctl/reference/runpodctl-pod.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/runpodctl/reference/runpodctl-pod.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-pod

# pod

Use runpodctl to create, list, start, stop, inspect, and delete Pods from the command line with status and resource filters.

Manage Pods, including creating, listing, starting, stopping, and deleting Pods.

```bash
runpodctl <subcommand> pod [flags]
```

## Subcommands

### List Pods

List your Pods. By default, this command shows only running Pods (similar to `docker ps`):

```bash
runpodctl pod list
```

List all Pods including exited ones:

```bash
runpodctl pod list --all
```

Filter by status:

```bash
runpodctl pod list --status exited
```

Filter by creation time:

```bash
# Pods created in the last 24 hours
runpodctl pod list --since 24h

# Pods created in the last 7 days
runpodctl pod list --since 7d

# Pods created after a specific date
runpodctl pod list --created-after 2025-01-15
```

#### List flags

**--all, -a (type: bool)**

Show all Pods including exited ones. By default, only running Pods are shown.

**--status (type: string)**

Filter by Pod status (e.g., `RUNNING`, `EXITED`). Cannot be used with `--all`.

**--since (type: string)**

Filter Pods created within the specified duration (e.g., `1h`, `24h`, `7d`). Cannot be used with `--created-after`.

**--created-after (type: string)**

Filter Pods created after the specified date in `YYYY-MM-DD` format. Cannot be used with `--since`.

**--compute-type (type: string)**

Filter by compute type (`GPU` or `CPU`).

**--name (type: string)**

Filter by Pod name.

### Get Pod details

Get detailed information about a specific Pod, including SSH connection info:

```bash
runpodctl pod get <pod-id>
```

### Create a Pod

Create a new Pod from a template:

```bash
runpodctl pod create --template-id runpod-torch-v21 --gpu-id "NVIDIA GeForce RTX 4090"
```

Create a Pod with a custom Docker image:

```bash
runpodctl pod create --image "runpod/pytorch:1.0.3-cu1281-torch291-ubuntu2404" --gpu-id "NVIDIA GeForce RTX 4090"
```

Create a CPU-only Pod:

```bash
runpodctl pod create --compute-type cpu --image ubuntu:22.04
```

#### Create flags

**--template-id (type: string)**

Template ID to use for Pod configuration. Use [`runpodctl template search`](https://docs.runpod.io/runpodctl/reference/runpodctl-template) to find templates.

**--image (type: string)**

Docker image to use (e.g., `runpod/pytorch:2.8.0-py3.11-cuda12.8.1-cudnn-devel-ubuntu22.04`). Required if no template specified.

**--name (type: string)**

Custom name for the Pod.

**--gpu-id (type: string)**

GPU type (e.g., `NVIDIA GeForce RTX 4090`, `NVIDIA A100 80GB PCIe`). Use [`runpodctl gpu list`](https://docs.runpod.io/runpodctl/reference/runpodctl-gpu) to see available GPUs.

**--gpu-count (type: int)**

Number of GPUs to allocate.

**--compute-type (type: string)**

Compute type (`GPU` or `CPU`).

**--container-disk-in-gb (type: int)**

Container disk size in GB.

**--volume-in-gb (type: int)**

Persistent volume size in GB.

**--volume-mount-path (type: string)**

Mount path for the persistent volume.

**--ports (type: string)**

Comma-separated list of ports to expose (e.g., `8888/http,22/tcp`).

**--env (type: string)**

Environment variables as a JSON object (e.g., `'{"KEY":"value"}'`).

**--cloud-type (type: string)**

Cloud tier (`SECURE` or `COMMUNITY`).

**--data-center-ids (type: string)**

Comma-separated list of preferred datacenter IDs. Use [`runpodctl datacenter list`](https://docs.runpod.io/runpodctl/reference/runpodctl-datacenter) to see available datacenters.

**--global-networking (type: bool)**

Enable global networking (Secure Cloud only).

**--public-ip (type: bool)**

Require public IP (Community Cloud only).

**--ssh (type: bool)**

Enable SSH on the Pod.

**--network-volume-id (type: string)**

Network volume ID to attach. Use [`runpodctl network-volume list`](https://docs.runpod.io/runpodctl/reference/runpodctl-network-volume) to see available network volumes.

**--min-cuda-version (type: string)**

Minimum CUDA version required (e.g., `11.8`, `12.4`). The Pod will only be scheduled on machines that meet this CUDA version requirement.

**--docker-args (type: string)**

Docker arguments passed to the container at runtime (e.g., `"sleep infinity"`).

**--registry-auth-id (type: string)**

Container registry authentication ID for pulling private images. Use [`runpodctl registry list`](https://docs.runpod.io/runpodctl/reference/runpodctl-registry) to see available registry credentials.

**--country-code (type: string)**

Country code for regional deployment (e.g., `US`, `CA`, `EU`). Restricts Pod placement to machines in the specified region.

**--compliance (type: string)**

Compliance settings for the Pod (e.g., regulatory requirements for data handling).

### Start a Pod

Start a stopped Pod:

```bash
runpodctl pod start <pod-id>
```

### Stop a Pod

Stop a running Pod:

```bash
runpodctl pod stop <pod-id>
```

### Restart a Pod

Restart a Pod:

```bash
runpodctl pod restart <pod-id>
```

### Reset a Pod

Reset a Pod to its initial state:

```bash
runpodctl pod reset <pod-id>
```

### Update a Pod

Update Pod configuration:

```bash
runpodctl pod update <pod-id> --name "new-name"
```

#### Update flags

**--name (type: string)**

New name for the Pod.

**--image (type: string)**

New Docker image name.

**--container-disk-in-gb (type: int)**

New container disk size in GB.

**--volume-in-gb (type: int)**

New volume size in GB.

**--volume-mount-path (type: string)**

New volume mount path.

**--ports (type: string)**

New comma-separated list of ports.

**--env (type: string)**

New environment variables as a JSON object.

### Delete a Pod

Delete a Pod:

```bash
runpodctl pod delete <pod-id>
```

## Pod URLs

Access exposed ports on your Pod using the following URL pattern:

```
https://<pod-id>-<port>.proxy.runpod.net
```

For example, if your Pod ID is `abc123xyz` and you exposed port 8888:

```
https://abc123xyz-8888.proxy.runpod.net
```

## Related commands

- [`runpodctl gpu list`](https://docs.runpod.io/runpodctl/reference/runpodctl-gpu)
- [`runpodctl template`](https://docs.runpod.io/runpodctl/reference/runpodctl-template)
- [`runpodctl ssh`](https://docs.runpod.io/runpodctl/reference/runpodctl-ssh)
