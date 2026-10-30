> Pinned source for Runpod main: [runpodctl/reference/runpodctl-billing.mdx](https://github.com/runpod/docs/blob/f2481a71841afde6db66b886a32d287d2e3ac0c9/runpodctl/reference/runpodctl-billing.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-billing

# billing

Use runpodctl to retrieve billing history for Pods, Serverless endpoints, and network volumes across configurable time ranges.

View billing history for Pods, Serverless endpoints, and network volumes. Each command returns one record per resource per time bucket, with the total cost split into its components.

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

**--pod-id (type: string)**

Filter by specific Pod ID.

Each record includes `startTime`, `endTime`, `podId`, `totalAmount`, and the cost split into `gpuAmount`, `cpuAmount`, and `diskAmount`. CPU Pods are included.

```json
[
  {
    "startTime": "2026-09-01T00:00:00Z",
    "endTime": "2026-09-02T00:00:00Z",
    "podId": "abc123xyz",
    "totalAmount": 4.32,
    "gpuAmount": 4.08,
    "cpuAmount": 0,
    "diskAmount": 0.24
  }
]
```

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

**--endpoint-id (type: string)**

Filter by specific endpoint ID.

Each record includes `startTime`, `endTime`, `serverlessId` (the endpoint ID), `totalAmount`, and the cost split into `gpuAmount`, `cpuAmount`, and `diskAmount`. CPU endpoints are included.

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

Each record includes `startTime`, `endTime`, `networkVolumeId`, `totalAmount`, and the cost split into `standardAmount` and `highPerformanceAmount` for standard and high-performance storage.

## Related commands

- [`runpodctl user`](https://docs.runpod.io/runpodctl/reference/runpodctl-user)
