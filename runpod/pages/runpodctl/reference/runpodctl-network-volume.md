> Commit-pinned source for Runpod main: [runpodctl/reference/runpodctl-network-volume.mdx](https://docs.runpod.io/runpodctl/reference/runpodctl-network-volume)

# network-volume

Use runpodctl to create, inspect, list, update, and remove persistent network volumes shared by Pods and Serverless endpoints.

Manage network volumes for persistent shared storage across Pods and Serverless endpoints.

```bash Command
runpodctl network-volume <subcommand> [flags]
```

## Alias

You can use `nv` as a shorthand for `network-volume`:

```bash
runpodctl nv list
```

## Subcommands

### List network volumes

List all your network volumes:

```bash
runpodctl network-volume list
```

### Get network volume details

Get detailed information about a specific network volume:

```bash
runpodctl network-volume get <volume-id>
```

### Create a network volume

Create a new network volume:

```bash
runpodctl network-volume create --name "my-volume" --size 100 --data-center-id "US-GA-1"
```

#### Create flags

**--name (type: string; required)**

Volume name.

**--size (type: int; required)**

Volume size in GB (1-4000).

**--data-center-id (type: string; required)**

Datacenter ID where the volume will be created. Use [`runpodctl datacenter list`](https://docs.runpod.io/runpodctl/reference/runpodctl-datacenter) to see available datacenters.

### Update a network volume

Update network volume configuration:

```bash
runpodctl network-volume update <volume-id> --name "new-name"
```

#### Update flags

**--name (type: string)**

New volume name.

**--size (type: int)**

New volume size in GB. Must be larger than the current size.

### Delete a network volume

Delete a network volume:

```bash
runpodctl network-volume delete <volume-id>
```

> **Warning**
>
> Deleting a network volume permanently removes all data stored on it. Make sure to back up any important data before deleting.

## Related commands

- [`runpodctl pod create`](https://docs.runpod.io/runpodctl/reference/runpodctl-pod)
- [`runpodctl datacenter list`](https://docs.runpod.io/runpodctl/reference/runpodctl-datacenter)
