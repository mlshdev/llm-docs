> Pinned source for Runpod main: [storage/globalvolume/globalvolume-serverless.mdx](https://github.com/runpod/docs/blob/1c896ad086bccb72275ab0e4211f79ff1dda0041/storage/globalvolume/globalvolume-serverless.mdx)
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

You attach a global volume when you create a new endpoint or edit an existing one.

**To attach a global volume to a new endpoint:**

1. Go to **Serverless** and click **+ New Endpoint**.
2. Configure your endpoint, then expand **Advanced**.
3. Under **Global volume**, select the volume you want to attach.
4. Click **Deploy**.

**To attach or change the global volume on an existing endpoint:**

1. Go to **Serverless** and select your endpoint.
2. Click **Manage**, then **Edit Endpoint**.
3. Expand **Advanced** and select the global volume you want to attach.
4. Click **Save Endpoint**.

> **Note**
>
> Attaching a volume doesn't copy any existing data, so upload your model files and other assets to the global volume before you attach it. Changing the attached volume triggers a new release and your workers redeploy to pick it up.

An endpoint can attach at most one global volume. It can't use a global volume and a network volume at the same time, but it can attach multiple network volumes on their own. To switch an endpoint from network volumes to a global volume, detach the network volumes first. To switch back, remove the global volume first.

## Limitations

- **One global volume per endpoint:** An endpoint can attach at most one global volume at a time.
- **Mutually exclusive with network volumes:** An endpoint can't use a global volume and a network volume at the same time.

For shared limitations that apply to both Pods and Serverless, see [Global volumes — Limitations](https://docs.runpod.io/storage/globalvolume/overview#limitations).

## Next steps

- [Global volumes for Pods](https://docs.runpod.io/storage/globalvolume/globalvolume-pods)
- [Serverless storage options](https://docs.runpod.io/serverless/storage/overview)
- [Use the S3-compatible API](https://docs.runpod.io/storage/s3-api)
