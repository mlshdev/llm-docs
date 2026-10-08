> Pinned source for Runpod main: [storage/globalvolume/globalvolume-pods.mdx](https://github.com/runpod/docs/blob/1c896ad086bccb72275ab0e4211f79ff1dda0041/storage/globalvolume/globalvolume-pods.mdx)
> Canonical documentation: https://docs.runpod.io/storage/globalvolume/globalvolume-pods

# Global volumes for Pods

Attach a global volume to a GPU Pod for elastic, region-independent storage that persists across sessions.

> **Note**
>
> Global volumes for Pods are in beta. Features and behavior may change before general availability.

Attaching a global volume to a Pod gives it access to elastic, region-independent storage without being locked to a specific data center. The volume persists when the Pod is stopped or deleted, so your data is available the next time you deploy.

If you don't have a global volume yet, [create one first](https://docs.runpod.io/storage/globalvolume#create-a-global-volume).

## Attach a global volume to a Pod

You can attach a global volume when deploying a new Pod using either of the following methods.

- **From Storage:** Click your global volume, then click **Configure Pod with volume**. This opens the Pod deployment page with the volume already attached.
- **During Pod deployment:**
  1. Go to **Pods** and click **+ Deploy**.
  2. Select a template and GPU. You must select a GPU before you can attach storage.
  3. Scroll to the **Storage** section.
  4. Under **Persistent storage**, click **+ Add volume**.
  5. Select your volume from the list. Global volumes appear first with a **Global** badge, followed by network volumes labeled with their data center. To create a new global volume here instead, click **+ Create volume**.
  6. Click **Deploy Pod**.

A Pod supports one global volume and one network volume at a time. Once a global volume is attached, other global volumes no longer appear in the list.

## Mount paths

The mount path is set at deploy time and does not change while the Pod is running.

A global volume defaults to `/workspace`. If you add a network volume during deployment without changing the global volume's mount path, the deploy flow automatically shifts the global volume to `/workspace-global` so both volumes can be mounted without conflict. The network volume then mounts at `/workspace`.

If you edit the global volume's mount path field during deployment (rather than leaving the default), the network volume is assigned `/workspace-2` instead.

You can verify the volume is mounted by running `ls` on the mount path from the Pod's **Console** tab. For example, if your global volume is at `/workspace-global`:

```bash
ls /workspace-global
```

## Limitations

- **One volume of each type per Pod:** Each Pod supports a maximum of one global volume and one network volume at a time.

For more limitations that apply to Pods, see [Global volumes — Limitations](https://docs.runpod.io/storage/globalvolume#limitations).

## Next steps

- [Migrate data from a network volume](https://docs.runpod.io/storage/globalvolume#migrate-data-from-a-network-volume)
  - [Deploy a Pod](https://docs.runpod.io/pods/manage-pods)
