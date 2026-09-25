> Pinned source for Runpod main: [storage/high-performance-storage.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/storage/high-performance-storage.mdx)
> Canonical documentation: https://docs.runpod.io/storage/high-performance-storage

# High-performance storage

Premium storage tier for demanding AI workloads with up to 3x throughput and 4x IOPS. Review configuration and usage guidance for Runpod storage.

High-performance storage is a network volume tier designed for data-intensive AI workloads. Its parallel storage architecture delivers high throughput and low latency under heavy concurrent load, even when thousands of processes access it simultaneously.

## Performance comparison

In internal benchmarks, high-performance storage delivers up to 3x the throughput and 4x the IOPS of standard storage on parallel operations.

|               | Standard storage                                       | High-performance storage                           |
| ------------- | ------------------------------------------------------ | -------------------------------------------------- |
| Best for      | General-purpose work, development, cost-sensitive jobs | Training, fine-tuning, latency-sensitive inference |
| Throughput    | High                                                   | Up to 3x higher                                    |
| IOPS          | High                                                   | Up to 4x higher                                    |
| Concurrency   | Moderate                                               | Optimized for massive parallelism                  |
| Relative cost | Lower                                                  | Premium                                            |

Both tiers are fully supported. Choose based on whether storage performance sits on the critical path of your workload.

## When to choose High-performance storage

If your GPUs ever sit idle waiting on data (slow dataloaders, long checkpoint writes, sluggish model loads) you're a candidate for high-performance storage. If storage isn't your bottleneck, standard storage is the cost-effective choice.

| Use case                      | Why it helps                                                                                         |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| Training                      | Feeds GPUs at the rate they can consume data, preventing I/O bottlenecks and reducing training time. |
| Fine-tuning and checkpointing | Speeds up write-heavy operations like checkpoints, so jobs spend more time computing.                |
| Inference                     | Cuts model load time from a central volume, lowering endpoint cold-start latency.                    |

## Create a high-performance volume

High-performance storage is available as a network volume type in select data centers.

1. Navigate to the [Storage page](https://console.runpod.io/user/storage) in the Runpod console.
2. Click **Create network volume**.
3. Select a data center that supports high-performance storage. You can either select the **High-performance** tab to filter data centers that support it, or look for the purple ⚡ icon on individual data centers.
4. Enter a name and set the volume size in GB.
5. The **High-performance storage** toggle appears automatically and is enabled by default. Leave it on to use high-performance storage, or turn it off to use standard storage instead.
6. Click **Create network volume**.

## Attach to your workloads

High-performance volumes work across the platform like standard network volumes.

- **Pods**: Attach during Pod creation, or from the volume manager for existing setups.
- **Serverless**: Attach to an endpoint to speed up model loading and reduce cold-start latency. See [Network volumes for Serverless](https://docs.runpod.io/storage/network-volumes#network-volumes-for-serverless).
- **Instant Clusters**: New clusters can be provisioned with high-performance storage by default.

## Pricing

High-performance storage is priced per-GB at a premium to standard storage. The console displays per-GB and total monthly cost as you configure a volume.

> **Note**
>
> Exact pricing varies by data center. Check the volume creation flow in the console for current rates.

## FAQ

**Is standard storage going away?**

No. Standard storage remains fully supported and is the recommended choice for general-purpose work. High-performance storage is an additional tier for performance-sensitive workloads.

**Which data centers support High-performance storage?**

Multiple US and European data centers support High-performance storage, with more rolling out over time. Supported data centers are marked with a purple ⚡ icon in the network volume creation flow.

**Can I migrate an existing standard volume to high-performance?**

Direct migration is not currently supported. To move data to a high-performance volume, create a new high-performance volume and transfer your data using the [S3-compatible API](https://docs.runpod.io/storage/s3-api) or [runpodctl](https://docs.runpod.io/storage/network-volumes#using-runpodctl).

## Next steps

- [Network volumes](https://docs.runpod.io/storage/network-volumes)

  Learn more about network volume management and features.
- [S3-compatible API](https://docs.runpod.io/storage/s3-api)

  Manage files without launching compute resources.
