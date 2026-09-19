> Pinned source for Runpod main: [runpodctl/reference/runpodctl-datacenter.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/runpodctl/reference/runpodctl-datacenter.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-datacenter

# datacenter

Use runpodctl to list Runpod data centers, review their locations, and inspect current GPU availability from the command line.

List available datacenters and their locations.

```bash Command
runpodctl datacenter <subcommand> [flags]
```

## Alias

You can use `dc` as a shorthand for `datacenter`:

```bash
runpodctl dc list
```

## Subcommands

### List datacenters

List all available datacenters with GPU availability:

```bash
runpodctl datacenter list
```

## Example output

```json
[
  {
    "gpuAvailability": [
      {
        "displayName": "RTX 4090",
        "gpuId": "NVIDIA GeForce RTX 4090",
        "stockStatus": "High"
      }
    ],
    "id": "US-GA-1",
    "location": "United States",
    "name": "US-GA-1"
  },
  {
    "gpuAvailability": [
      {
        "displayName": "A100 PCIe",
        "gpuId": "NVIDIA A100 80GB PCIe",
        "stockStatus": "High"
      }
    ],
    "id": "EU-RO-1",
    "location": "Europe",
    "name": "EU-RO-1"
  }
]
```

## Using datacenter IDs

When creating network volumes or specifying preferred datacenters for Pods, use the datacenter ID:

```bash
# Create a network volume in a specific datacenter
runpodctl network-volume create --name "my-volume" --size 100 --data-center-id "US-GA-1"

# Create a Pod with preferred datacenter
runpodctl pod create --template-id runpod-torch-v21 --gpu-id "NVIDIA RTX 4090" --data-center-ids "US-GA-1"
```

## Related commands

- [`runpodctl network-volume create`](https://docs.runpod.io/runpodctl/reference/runpodctl-network-volume)
- [`runpodctl pod create`](https://docs.runpod.io/runpodctl/reference/runpodctl-pod)
- [`runpodctl gpu list`](https://docs.runpod.io/runpodctl/reference/runpodctl-gpu)
