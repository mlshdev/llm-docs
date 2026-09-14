> Pinned source for Runpod main: [get-started.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/get-started.mdx)
> Canonical documentation: https://docs.runpod.io/get-started

# Deploy your first Pod

Run code on a remote GPU in minutes. Review setup steps, core concepts, and recommended next actions for building on Runpod.

Follow this guide to learn how to create an account, deploy your first GPU Pod, and use it to execute code remotely.

## Step 1: Create an account

Start by creating a Runpod account:

1. [Sign up here](https://www.console.runpod.io/signup).
2. Verify your email address.
3. Set up two-factor authentication (recommended for security).

## Step 2: Deploy a Pod

Now that you've created your account, you're ready to deploy your first Pod:

Use this path to launch a Pod from the console. Configure your workload, choose a region and GPU, review the pricing, and deploy.

Runpod is rolling out an updated deployment flow through [early access](https://console.runpod.io/user/early-access). Use the tabs below to follow the version that matches what you see in the console.

To open the deploy page, click **+ New** in the top-right corner of the console and select **Pod**.

> **Tip**
>
> You can also click **Pods** in the left sidebar.

> **Warning**
>
> These instructions describe the early access version of the deployment flow. If you don't see this flow, follow the **Legacy flow** tab, or enable the new flow from [Account → Early access](https://console.runpod.io/user/early-access).

1. In the **Workload** panel at the top of the page:

   - **Template**: select the container image your Pod will run. Use the search box to find a template, or click **Explore all** to browse. The selected template and its image appear below the search bar. Click **Set overrides** to customize environment variables, exposed ports, or container start commands without editing the template itself.
   - **Pod name**: a name is auto-generated. You can replace it with any name you prefer.
   - **Options**: when you select an [official Runpod template](https://docs.runpod.io/pods/templates/overview), two extra options appear. These options are not shown for community templates.
     - **Start Jupyter notebook**: launches a Jupyter server when the Pod starts, accessible from the console. Enabled by default.
     - **SSH terminal access**: enables SSH into the Pod. If enabled, paste your SSH public key in the field that appears. [Learn how to create an SSH key](https://docs.runpod.io/pods/configuration/use-ssh).
2. Set the **Region** for your Pod. It's set to **Any region** by default. Click to restrict deployment to a specific geographic region.
3. In the **Compute** panel, choose a GPU from one of four tabs:

   - **Available**: shows only GPUs with capacity right now.
   - **Recommended**: shows GPUs recommended by Runpod and by the template maintainer.
   - **All**: shows all GPUs, including those that are out of capacity and those marked incompatible by the template.
   - **Recent**: shows all GPUs you've deployed in the last 7 days. This tab only appears if you have a recent deployment history.

   Use the search box, **Network volume** filter, **Filter** button, or **Sort by** dropdown to narrow the list. Click **Compare GPUs** to ask the Runpod assistant for a comparison of the selected GPUs.

   The **Network volume** filter narrows the GPU list to compatible GPUs by filtering for GPUs that are in the same data center as the selected network volume. Select any network volume, and GPU availability updates to match it. GPUs that aren't compatible with the selected volume move to the incompatible section of the **All** tab.

   If the GPU you want shows **Out of capacity**, you can still select it and deploy it once capacity frees up. Selecting an out-of-capacity GPU changes the final [Deploy](#deploy-your-first-pod) step: instead of deploying right away, you can subscribe to deploy when the GPU becomes available.
4. Pods offer two kinds of storage.

   **Container disk**

   This is the container's primary storage, and it's wiped whenever the Pod is stopped.

   **Persistent storage**

   Persistent storage keeps your data across stops and restarts, and you can mount it at any location. It's mounted at `/workspace` by default, but you can change this with a template override, or the template itself can set a different default. It comes in two types, and you can attach one or the other but not both:

   - **Volume disk**: a disk attached directly to your Pod that keeps its data across stops and restarts but is deleted when the Pod is terminated.
   - **Network volume**: permanent storage that exists independently of any Pod, so you can attach the same volume to different Pods over time.

   If you did select a network volume in the **Compute** step, the persistent storage selection in this step is locked to that network volume.

   GPUs that aren't compatible with any network volume have volume disk selected automatically, and you can't select a network volume for them.

   For a full comparison, see [Storage options](https://docs.runpod.io/pods/storage/types).
5. The **Summary** panel on the right shows:

   - The selected template and GPU.
   - Total cost per hour (billed per millisecond).
   - A breakdown of GPU cost, container disk cost, persistent storage cost, and stopped cost.

   Verify the configuration looks correct before deploying.
6. Click **Deploy Pod** to launch your Pod.

   Your Pod appears under **Pods** in the left sidebar. It may take a moment to reach the running state while the container image is pulled.

   > **Note**
   >
   > If you haven't set up payments yet, you'll be prompted to add a payment method and purchase credits for your account.

   If you selected an out-of-capacity GPU, the **Summary** panel shows **Instance not available** and a **Deploy when available** button in place of **Deploy Pod**. Runpod queues your Pod and deploys it automatically as soon as that GPU frees up within the time window you choose.

   1. In the right panel, click the **Deploy when available** button to open the subscription modal.
   2. In the **Deploy when available** modal:

      - **Notifications**: choose how you want to be notified when your Pod deploys:

        - **Email**: sends a notification to one of your account's email addresses. Select which address to use. If you're a member of a team, you can also select the team's email address.
        - **In-console notification**: shows an alert inside the Runpod console.

        Both are enabled by default.
      - **Subscription window**: set the time range during which Runpod monitors for availability and auto-deploys your Pod:
        - The default window is 24 hours from now.
        - Click the date range to adjust the start and end time.
        - Check **Use advanced scheduler** to fine-tune the hours when Runpod can deploy your request, rather than monitoring continuously across the entire window.
   3. Click **Subscribe** to confirm. Runpod monitors for availability and deploys your Pod automatically when the selected GPU becomes free within your subscription window.

      You'll receive a notification (via email or in-console, depending on your settings) when the Pod has been deployed.

      > **Warning**
      >
      > If you don't have enough funds available when the GPU becomes available, your deploy when available subscription fails and no Pod is deployed. To retry, you'll need to subscribe again.

      > **Tip**
      >
      > If the GPU doesn't become available within your subscription window, your subscription expires and no Pod is deployed. You can create a new subscription at any time.

1) The deploy page opens to a grid of available GPUs. Use the controls at the top of the grid to narrow the list, then click a card to configure it.

   - Filter the list with the row of toggles: **Secure Cloud**, **Network volume**, **Any region**, **Global Networking**, and **Additional filters**.
   - Drag the **VRAM** slider to set a minimum amount of VRAM.
   - Use the search box to find a GPU by name.
   - Browse GPUs by group: Featured GPUs, NVIDIA latest generation, NVIDIA previous generation, and AMD.

   Each card shows the GPU's price per hour, VRAM, maximum count, and current availability (High, Medium, Low, or Unavailable).

   Click a card to select that GPU and open the Configure deployment panel below.
2) After you select a GPU, the Configure deployment panel opens below the grid. Set the following:

   - **Pod name**: a name is auto-generated. You can replace it with any name you prefer.
   - **Pod template**: click **Edit** to modify the current template's settings, or **Change template** to swap it for a different one.
   - **GPU count**: choose how many GPUs to attach, from 1 to 8.
   - **Instance pricing**: choose **On-Demand** for standard pricing, or **Reserved** to reserve capacity (click **Talk to sales** to arrange a reservation).
   - **Options**: enable **Encrypt volume**, **SSH terminal access**, or **Start Jupyter notebook**. Start Jupyter notebook is enabled by default.
   - **Storage configuration**: set the **Container disk** size, then choose between a **Network volume** and a **Volume disk** for persistent storage.
3) You must complete the storage configuration before you can deploy. If you haven't selected persistent storage, a warning appears: "No network volume has been selected. Please select a network volume above or switch to volume disk." Select a network volume or switch to a volume disk to enable the deploy button.

   Review the **Pricing summary** and **Pod summary** to confirm your configuration, then click **Deploy On-Demand** to deploy and start your Pod. You'll be redirected back to the Pods page after a few seconds.

   > **Note**
   >
   > If you haven't set up payments yet, you'll be prompted to add a payment method and purchase credits for your account.

First, install the [Runpod CLI](https://docs.runpod.io/runpodctl/overview) on your local machine and configure it with your API key:

```bash
# Install runpodctl
bash <(wget -qO- cli.runpod.io)

# Configure your API key
runpodctl config --apiKey "your-api-key"
```

Then deploy your Pod:

```bash
runpodctl pod create \
  --name "quickstart-pod" \
  --gpu-id "NVIDIA A40" \
  --image "runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"
```

The response includes your Pod ID:

```json
{
  "id": "uv9wy55tyv30lo",
  "name": "quickstart-pod",
  "desiredStatus": "RUNNING",
  ...
}
```

Save it for later:

```bash
export RUNPOD_POD_ID="uv9wy55tyv30lo"
```

## Step 3: Execute code on your Pod

Once your Pod finishes initializing, connect and run some code:

1. On the [Pods page](https://www.console.runpod.io/pods), click your Pod to open the detail pane.
2. Under **HTTP Services**, click **Jupyter Lab** to open a JupyterLab workspace.
3. Under **Notebook**, select **Python 3 (ipykernel)**.
4. Type `print("Hello, world!")` in the first cell and click the play button.

> **Note**
>
> You'll need an [SSH key added to your account](https://docs.runpod.io/pods/configuration/use-ssh) for this to work. You can run `runpodctl doctor` to set this up automatically.

Get the SSH command for your Pod:

```bash
runpodctl ssh info $RUNPOD_POD_ID
```

The output includes the SSH command to connect:

```json
{
  "sshCommand": "ssh root@194.68.245.207 -p 22100 -i ~/.ssh/id_ed25519"
}
```

Use this command to connect and run code:

```bash
ssh root@194.68.245.207 -p 22100
python3 -c "print('Hello, world!')"
```

> **Success**
>
> Congratulations! You just ran your first line of code on Runpod.

## Step 4: Clean up

To avoid incurring unnecessary charges, clean up your Pod resources.

> **Danger**
>
> Terminating a Pod permanently deletes all data that isn't stored in a network volume. Be sure that you've saved any data you might need to access again.

To stop your Pod:

1. Return to the [Pods page](https://www.console.runpod.io/pods) and click your running Pod.
2. Click the **Stop** button (pause icon) to stop your Pod.
3. Click **Stop Pod** in the modal that opens to confirm.

You'll still be charged a small amount for storage on stopped Pods ($0.20 per GB per month). If you don't need to retain any data on your Pod, you should terminate it completely.

To terminate your Pod:

1. Click the **Terminate** button (trash icon).
2. Click **Terminate Pod** to confirm.

Stop your Pod:

```bash
runpodctl pod stop $RUNPOD_POD_ID
```

You'll still be charged a small amount for storage on stopped Pods ($0.20 per GB per month). If you don't need to retain any data on your Pod, terminate it completely:

```bash
runpodctl pod delete $RUNPOD_POD_ID
```

## Next steps

- [Generate API keys](https://docs.runpod.io/get-started/api-keys)

  Create API keys for programmatic resource management.
- [Manage your account](https://docs.runpod.io/accounts-billing/manage-accounts)

  Create teams and invite collaborators.
- [Choose the right Pod](https://docs.runpod.io/pods/choose-a-pod)

  Learn how to select the best Pod for your workload.
- [Pod pricing](https://docs.runpod.io/pods/pricing)

  Review pricing options for Pods.
- [Explore tutorials](https://docs.runpod.io/tutorials/introduction/overview)

  Follow step-by-step guides for specific AI/ML use cases.
- [Runpod Serverless](https://docs.runpod.io/serverless/overview)

  Start building production-ready applications.

## Need help?

- Join the Runpod community [on Discord](https://discord.com/invite/cUpRmau42V).
- Submit a support request using our [contact page](https://contact.runpod.io/hc/requests/new).
- Reach out to us via [email](mailto:help@runpod.io).
