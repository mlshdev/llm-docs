> Pinned source for Runpod main: [pods/manage-pods.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/pods/manage-pods.mdx)
> Canonical documentation: https://docs.runpod.io/pods/manage-pods

# Manage Pods

Create, start, stop, and terminate Pods using the Runpod console or CLI. Review setup, configuration, and operations guidance for Runpod Pods.

This page covers the core Pod management operations. For CLI usage, first [install the Runpod CLI](https://docs.runpod.io/runpodctl/overview) and configure your API key:

```sh
runpodctl config --apiKey RUNPOD_API_KEY
```

## Quick reference

| Action        | Web UI                                                   | CLI                                                               |
| ------------- | -------------------------------------------------------- | ----------------------------------------------------------------- |
| **Deploy**    | [Pods page](https://www.console.runpod.io/pods) → Deploy | `runpodctl pod create --name NAME --gpu-id "GPU" --image "IMAGE"` |
| **Start**     | Expand Pod → Play icon                                   | `runpodctl pod start POD_ID`                                      |
| **Stop**      | Expand Pod → Stop icon                                   | `runpodctl pod stop POD_ID`                                       |
| **Update**    | Three-dot menu → Edit Pod                                | `runpodctl pod update POD_ID`                                     |
| **Terminate** | Expand Pod → Trash icon                                  | `runpodctl pod delete POD_ID`                                     |
| **List**      | [Pods page](https://www.console.runpod.io/pods)          | `runpodctl pod list`                                              |

## Deploy a Pod

> **Tip**
>
> Deploy preconfigured Pods from the [Runpod Hub](https://docs.runpod.io/hub/overview#deploy-as-a-pod) for quick setup.

1. Open the [Pods page](https://www.console.runpod.io/pods) and click **Deploy**.
2. (Optional) Attach a [network volume](https://docs.runpod.io/storage/network-volumes) for persistent storage.
3. Select **GPU** or **CPU**, then configure:

**GPU**: Select GPU type → Name your Pod → (Optional) Choose a template → Set GPU count → Click **Deploy On-Demand**

**CPU**: Select CPU type → Choose instance configuration → Name your Pod → Click **Deploy On-Demand**

> **Warning**
>
> **CUDA compatibility**: Ensure the host machine CUDA version matches your templates requirements. If you see "OCI runtime create failed" errors, use **Additional filters → CUDA Versions** to select compatible machines.

```sh
runpodctl pod create \
  --name hello-world \
  --gpu-id "NVIDIA A40" \
  --image "runpod/pytorch:3.10-2.0.0-117" \
  --container-disk-in-gb 10 \
  --volume-in-gb 100
```

```bash
curl --request POST \
  --url https://rest.runpod.io/v1/pods \
  --header 'Authorization: Bearer RUNPOD_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "my-pod",
    "imageName": "runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
    "gpuTypeIds": ["NVIDIA GeForce RTX 4090"],
    "gpuCount": 1,
    "containerDiskInGb": 50,
    "volumeInGb": 20
  }'
```

To deploy a Pod from an existing template, use the `templateId` parameter instead of specifying individual configuration options:

```bash
curl --request POST \
  --url https://rest.runpod.io/v1/pods \
  --header 'Authorization: Bearer RUNPOD_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "my-pod-from-template",
    "templateId": "YOUR_TEMPLATE_ID",
    "gpuTypeIds": ["NVIDIA GeForce RTX 4090"],
    "gpuCount": 1
  }'
```

See the [Pod API reference](https://docs.runpod.io/api-reference/pods/POST/pods) for all parameters.

## Stop a Pod

Stopping a Pod releases the GPU and preserves data in `/workspace` (volume disk). Container disk data is cleared.

> **Warning**
>
> You'll still be charged for [volume disk storage](https://docs.runpod.io/pods/storage/types#volume-disk) while stopped. Terminate the Pod if you don't need to retain your environment.

> **Tip**
>
> When using a [network volume](https://docs.runpod.io/storage/network-volumes), your `/workspace` data is preserved whether you stop or terminate the Pod.

1. Open the [Pods page](https://www.console.runpod.io/pods) and expand your Pod.
2. Click the **Stop** button (square icon) and confirm.

```sh
runpodctl pod stop $RUNPOD_POD_ID
```

**Schedule a stop** (e.g., after 2 hours):

```sh
sleep 2h; runpodctl pod stop $RUNPOD_POD_ID &
```

```bash
curl --request POST \
  --url "https://rest.runpod.io/v1/pods/$RUNPOD_POD_ID/stop" \
  --header 'Authorization: Bearer RUNPOD_API_KEY'
```

## Start a Pod

Resume a stopped Pod. Note: You may be allocated [zero GPUs](https://docs.runpod.io/pods/troubleshooting/zero-gpus) if capacity has changed.

1. Open the [Pods page](https://www.console.runpod.io/pods) and expand your Pod.
2. Click the **Start** button (play icon).

```sh
runpodctl pod start $RUNPOD_POD_ID
```

```bash
curl --request POST \
  --url "https://rest.runpod.io/v1/pods/$RUNPOD_POD_ID/start" \
  --header 'Authorization: Bearer RUNPOD_API_KEY'
```

## Update a Pod

Modify an existing Pod's configuration, such as storage size, image, ports, or environment variables.

> **Warning**
>
> Editing a running Pod resets it completely, erasing all data not stored in `/workspace` or a network volume.

1. Open the [Pods page](https://www.console.runpod.io/pods).
2. Click the three-dot menu next to the Pod you want to update.
3. Click **Edit Pod** and modify your configuration.
4. Click **Save** to apply changes.

```bash
curl --request PATCH \
  --url "https://rest.runpod.io/v1/pods/$RUNPOD_POD_ID" \
  --header 'Authorization: Bearer RUNPOD_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "containerDiskInGb": 100,
    "volumeInGb": 200
  }'
```

See the [Pod API reference](https://docs.runpod.io/api-reference/pods/PATCH/pods/podId) for all editable fields.

## Terminate a Pod

> **Danger**
>
> Terminating permanently deletes all data not stored in a [network volume](https://docs.runpod.io/storage/network-volumes). Export important data first.

1. Open the [Pods page](https://www.console.runpod.io/pods) and expand your Pod.
2. Stop the Pod if running, then click **Terminate** (trash icon) and confirm.

```sh
runpodctl pod delete $RUNPOD_POD_ID
```

```bash
curl --request DELETE \
  --url "https://rest.runpod.io/v1/pods/$RUNPOD_POD_ID" \
  --header 'Authorization: Bearer RUNPOD_API_KEY'
```

## View logs

Pods provide two log types:

- **Container logs**: Application output (stdout)
- **System logs**: Pod lifecycle events (startup, shutdown, errors)

Access logs from the [Pods page](https://www.console.runpod.io/pods) by expanding your Pod and clicking **Logs**.

## Troubleshooting

| Issue                          | Solution                                                                                                                |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Zero GPUs on restart**       | See [Zero GPU Pods](https://docs.runpod.io/pods/troubleshooting/zero-gpus)                                              |
| **Pod stuck initializing**     | Check logs for command errors; ensure you have an idle job (e.g., `sleep infinity`) if using SSH                        |
| **Docker Compose not working** | Not supported. Use a [custom template](https://docs.runpod.io/pods/templates/overview) with your dependencies baked in. |

Need help? [Contact support](https://www.runpod.io/contact).
