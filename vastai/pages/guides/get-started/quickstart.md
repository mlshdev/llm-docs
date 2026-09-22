> Pinned source for Vast.ai main: [guides/get-started/quickstart.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/guides/get-started/quickstart.mdx)
> Canonical documentation: https://docs.vast.ai/guides/get-started/quickstart

# Sign up and rent your first GPU

This Quickstart will guide you through setting up your Vast.ai account and running your first instance in just a few steps.&#x20;

### 1. Sign Up & Add Credit

- Create an account on [vast.ai.](https://cloud.vast.ai/)
- Verify your email address.
- Go to [**Billing**](https://docs.vast.ai/guides/reference/billing) → **Add Credit** and top up using [credit card, BitPay, or Crypto.com](https://docs.vast.ai/guides/reference/billing#payment-methods).
- Learn about [autobilling](https://docs.vast.ai/guides/reference/billing#autobilling-credit-card-only) to avoid interruptions.

  ![Billing](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/guides-overview-quick-start.webp)
- Your balance appears at the top right of the dashboard.

  ![](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/guides-overview-quick-start-2.webp)

> **Note**
>
> Before you can **rent a machine** or **create a team**, you must [verify your email address](https://docs.vast.ai/guides/reference/account-settings#email-verification). After signing up, check your inbox (and spam folder) for the verification email and click the link inside. You can resend the verification email anytime from [**Settings**](https://docs.vast.ai/guides/reference/account-settings) → Resend Verification Email. Learn more about [teams](https://docs.vast.ai/guides/teams/teams-overview) and [instance management](https://docs.vast.ai/guides/instances/manage-instances).

### &#x32;**. Prepare to Connect**

- **For SSH access**: generate an [SSH key pair](https://docs.vast.ai/guides/instances/connect/ssh#generating-ssh-keys) following our [complete SSH guide](https://docs.vast.ai/guides/instances/connect/ssh) and upload your **public key** in [Keys page](https://cloud.vast.ai/manage-keys/) or via [account settings](https://docs.vast.ai/guides/reference/keys).

  ![Keys](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/guides-overview-quick-start-3.webp)
- **For Jupyter access**: download and install the provided [TSL certificate](https://docs.vast.ai/guides/instances/connect/jupyter#certificate-installation) following our [Jupyter setup guide](https://docs.vast.ai/guides/instances/connect/jupyter) (needed for secure browser access).

> **Note**
>
> If you don’t install the provided browser certificate:&#x20;
>
> - **Windows / Linux** - You’ll see a **“Your connection is not private”** privacy warning. You can still connect by clicking **Advanced** → **Proceed**, but the warning will appear every time.
> - **macOS** - Browsers will block Jupyter until you install and trust the provided certificate in **Keychain Access**. Without it, you won’t be able to connect.
>
> Installing the certificate once removes the warning permanently.

### 3. Pick a [**Template**](https://docs.vast.ai/guides/templates/introduction) & Find a Machine

- Browse [**Templates**](https://cloud.vast.ai/templates/) for pre-built setups (e.g., [PyTorch](https://docs.vast.ai/pytorch), TensorFlow, ComfyUI) or [create custom templates](https://docs.vast.ai/guides/templates/creating-templates).
- Go to [**Search**](https://cloud.vast.ai/create/) and filter by GPU type, count, RAM, CPU, network speed, and price. Learn about [search filters](https://docs.vast.ai/guides/instances/choosing/overview#search-filters) and [instance types](https://docs.vast.ai/guides/instances/choosing/instance-types).
- **Disk Space is Permanent.** The disk size you choose when creating an instance cannot be changed later. If you run out of space, you'll need to create a new instance with a larger disk. Learn about [storage types](https://docs.vast.ai/guides/instances/storage/types) and [volumes](https://docs.vast.ai/guides/instances/storage/volumes). Tip: Allocate a bit more than you think you need to avoid interruptions.
- Click **Rent** when you find a match. Consider [reserved instances](https://docs.vast.ai/guides/instances/choosing/reserved-instances) for 50% savings on long-term projects.
- Wait for the instance to start-cached images launch quickly, fresh pulls may take 10-60 minutes. Check [instance status](https://docs.vast.ai/guides/instances/manage-instances#status) for progress.
- Click **Open** button to access your instance via your chosen [connection method](https://docs.vast.ai/guides/instances/connect/overview).

### **4. [Manage or End Your Instance](https://docs.vast.ai/guides/instances/manage-instances)**

- Use **Stop** to pause GPU billing ([storage still accrues charges](https://docs.vast.ai/guides/instances/storage/types#costs)). Learn about the [instance lifecycle](https://docs.vast.ai/guides/instances/manage-instances#lifecycle).
- Use **Delete** when finished to stop *all* charges. See [data movement](https://docs.vast.ai/guides/instances/storage/data-movement) if you need to save data first.

![Manage or End Your Instance](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/guides-overview-quick-start-4.webp)

## Common Questions

### What is a minimum deposit amount?

The minimum deposit amount on Vast.ai is $5.

### What happens when my balance runs out? Can I avoid interruptions?

When your balance reaches zero, your running instances will automatically stop. To avoid this, you can enable [**autobilling**](https://docs.vast.ai/guides/reference/billing#autobilling-credit-card-only) on the [Billing page](https://docs.vast.ai/guides/reference/billing). Set an auto-charge threshold higher than your average daily spend, so your card is automatically charged when your balance falls below that amount. We also recommend setting a [**low-balance email alert**](https://docs.vast.ai/guides/reference/account-settings#notifications) at a slightly lower threshold to notify you if the auto-charge fails for any reason. Learn more about [billing management](https://docs.vast.ai/guides/reference/billing) and [cost optimization](https://docs.vast.ai/guides/instances/pricing).

### How can I customize a template?

You can create a new template from scratch, or you can edit an existing template. You can find a guide [here](https://docs.vast.ai/guides/templates/creating-templates). See also [template settings](https://docs.vast.ai/guides/templates/template-settings) and [advanced setup](https://docs.vast.ai/guides/templates/advanced-setup) for more customization options. Learn about [managing templates](https://docs.vast.ai/guides/templates/managing-templates) for organizing your template library.

## Next Steps

- [Instances Overview](https://docs.vast.ai/guides/instances/overview)

  Complete guide to GPU instances, types, and management
- [Instance Pricing](https://docs.vast.ai/guides/instances/pricing)

  Marketplace pricing, instance types, and saving strategies
- [Templates Introduction](https://docs.vast.ai/guides/templates/introduction)

  Pre-built environments, customization, and Docker setup
