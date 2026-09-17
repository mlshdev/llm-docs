> Pinned source for Runpod main: [runpodctl/reference/runpodctl-billing.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/runpodctl/reference/runpodctl-billing.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-billing

# billing

Use runpodctl to retrieve billing history for Pods, Serverless endpoints, and network volumes across configurable time ranges.

View billing history for Pods, Serverless endpoints, and network volumes.

```bash Command
runpodctl billing <subcommand> [flags]
```

## Subcommands

### View Pod billing

View billing history for Pods:

```bash
runpodctl billing pods
```

#### Pod billing flags

**--bucket-size (type: string)**

Time bucket size (`hour`, `day`, `week`, `month`, `year`).

**--start-time (type: string)**

Start time in RFC3339 format (e.g., `2024-01-01T00:00:00Z`).

**--end-time (type: string)**

End time in RFC3339 format.

**--grouping (type: string)**

Group results by `podId` or `gpuId`.

**--pod-id (type: string)**

Filter by specific Pod ID.

**--gpu-id (type: string)**

Filter by specific GPU type.

### View Serverless billing

View billing history for Serverless endpoints:

```bash
runpodctl billing serverless
```

#### Serverless billing flags

**--bucket-size (type: string)**

Time bucket size (`hour`, `day`, `week`, `month`, `year`).

**--start-time (type: string)**

Start time in RFC3339 format.

**--end-time (type: string)**

End time in RFC3339 format.

**--grouping (type: string)**

Group results by `endpointId`, `podId`, or `gpuId`.

**--endpoint-id (type: string)**

Filter by specific endpoint ID.

**--gpu-id (type: string)**

Filter by specific GPU type.

### View network volume billing

View billing history for network volumes:

```bash
runpodctl billing network-volume
```

#### Network volume billing flags

**--bucket-size (type: string)**

Time bucket size (`hour`, `day`, `week`, `month`, `year`).

**--start-time (type: string)**

Start time in RFC3339 format.

**--end-time (type: string)**

End time in RFC3339 format.

## Related commands

- [`runpodctl user`](https://docs.runpod.io/runpodctl/reference/runpodctl-user)
