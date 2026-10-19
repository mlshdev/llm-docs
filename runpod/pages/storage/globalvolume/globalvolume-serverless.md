> Pinned source for Runpod main: [storage/globalvolume/globalvolume-serverless.mdx](https://github.com/runpod/docs/blob/d53e0557ab43204135d5bc362bfaf2baca752af4/storage/globalvolume/globalvolume-serverless.mdx)
> Canonical documentation: https://docs.runpod.io/storage/globalvolume/globalvolume-serverless

# Global volumes for Serverless

Attach a global volume to a GPU Serverless endpoint so workers share access to model weights and other read-heavy data across all data centers.

> **Note**
>
> Global volumes for Serverless are in beta. Features and behavior may change before general availability.

Attaching a global volume to a Serverless endpoint gives its workers shared, region-independent access to model weights and other read-heavy data. Because a global volume has no data center, attaching one doesn't restrict where your workers run. Your endpoint keeps access to the full GPU pool, unlike a network volume, which limits an endpoint to a single region.

Global volumes are available on GPU endpoints only. CPU endpoints don't support them.

If you don't have a global volume yet, [create one first](https://docs.runpod.io/storage/globalvolume/overview#create-a-global-volume).

## Mount path

Inside a worker, a global volume mounts at `/runpod-volume`, the same path used for network volumes on Serverless. Read your model files and other assets from this path in your handler function.

## Attach a global volume to an endpoint

You can select a global volume during endpoint creation only when you deploy from a Docker image or a GitHub repository. The following deployment options don't include storage settings:

- **Deploy image or video API**.
- **Deploy LLM API**.
- **Deploy from the Hub**.
- **Start with Hello World!**.

For these options, create the endpoint first, then [attach the volume to the existing endpoint](#attach-to-an-existing-endpoint).

Flash doesn't support global volumes yet. To attach storage to a Flash endpoint, use a [network volume](https://docs.runpod.io/flash/configuration/storage).

> **Note**
>
> Attaching a volume doesn't copy any existing data, so upload your model files and other assets to the global volume before you attach it.

### Attach during endpoint creation

1. Go to [Serverless](https://console.runpod.io/serverless) and click **New endpoint**.
2. Select **Deploy from a Docker image** or **Deploy from a GitHub repository**, configure your source, and click **Next**.
3. On the **Configure endpoint** page, make sure **Compute type** is set to **GPU** and select your GPU configuration.
4. Expand **Advanced settings**.
5. Under **Global volume**, select the volume you want to attach.
6. Click **Deploy**.

### Attach to an existing endpoint

Use these steps to attach, change, or remove the global volume on any endpoint, including endpoints created with options that don't include storage settings during creation.

1. Go to [Serverless](https://console.runpod.io/serverless) and select your endpoint.
2. Click **Manage**, then **Edit endpoint**.
3. Expand **Advanced**.
4. Under **Global volume**, select the volume you want to attach, or select **None** to remove it.
5. Click **Save Endpoint**.

Changing the attached volume triggers a new release, and your workers redeploy to pick it up.

An endpoint can attach at most one global volume. It can't use a global volume and network volumes at the same time, but it can attach multiple network volumes on their own. In the console, selecting a global volume disables the **Network volumes** field, and selecting a network volume disables **Global volume** and limits **Data centers** to that volume's data center. To switch between them, clear your current selection first: set **Global volume** to **None**, or deselect the network volumes.

Unlike [Pods](https://docs.runpod.io/storage/globalvolume/globalvolume-pods), a Serverless endpoint can't use a global volume and network volumes together.

## Limitations

- **One global volume per endpoint:** An endpoint can attach at most one global volume at a time.
- **Mutually exclusive with network volumes:** An endpoint can't use a global volume and a network volume at the same time.

For shared limitations that apply to both Pods and Serverless, see [Global volumes — Limitations](https://docs.runpod.io/storage/globalvolume/overview#limitations).

## Next steps

- [Global volumes for Pods](https://docs.runpod.io/storage/globalvolume/globalvolume-pods)
- [Serverless storage options](https://docs.runpod.io/serverless/storage/overview)
- [Use the S3-compatible API](https://docs.runpod.io/storage/s3-api)
