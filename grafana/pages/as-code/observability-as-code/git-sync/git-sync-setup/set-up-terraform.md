> Release-pinned source for Grafana v13.2.0: [docs/sources/as-code/observability-as-code/git-sync/git-sync-setup/set-up-terraform.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/as-code/observability-as-code/git-sync/git-sync-setup/set-up-terraform.md)

# Set up Git Sync with Terraform

You can also configure Git Sync via the Grafana provisioning app platform using Terraform.

## Before you begin

Before you begin, make sure to have the following:

- A Grafana Cloud account or an on-prem Grafana instance.
- Administrator permissions in your Grafana stack/instance.
- Terraform 1.11 or later installed on your machine. Refer to the [Terraform install documentation](https://developer.hashicorp.com/terraform/install) to learn more.

> **Note**
>
> Save all of the following Terraform configuration files in the same directory.

## Configure the Grafana provider

Use this Terraform configuration to configure the [Grafana provider](https://registry.terraform.io/providers/grafana/grafana/latest/docs) with the authentication required to set up Git Sync.

1. Create a service account and token in Grafana. For more information refer to [Service account tokens](https://grafana.com/docs/grafana/latest/administration/service-accounts/#service-account-tokens) or [Create and manage a Grafana Cloud stack using Terraform](https://grafana.com/docs/grafana-cloud/as-code/infrastructure-as-code/terraform/terraform-cloud-stack/).

2. Make sure that the token has the Admin or the `Provisioning:Repositories` writer permission.

3. Create a file named `main.tf` and add the following:

   ```terraform
      terraform {
        required_providers {
          grafana = {
            source  = "grafana/grafana"
            version = ">= 4.28.1"
          }
        }
      }

      provider "grafana" {
        url = "https://<your-stack>.grafana.net/"
        auth = var.grafana_service_account_token
        stack_id = var.grafana_stack_id
      }
   ```

Replace the following field values:

- `<Stack-URL>` with the URL of your Grafana stack (for example, `https://my-stack.grafana.net/`)
- `<Service-account-token>` with the service account token that you created (or `<USERNAME>:<PASSWORD>` for basic auth)
- `<Stack-ID>` with the Grafana stack ID, if you are using a Grafana Cloud stack

> **Caution**
>
> The Git Sync Terraform resources are App Platform resources and talk directly to the Grafana stack's API.
>
> **Do not use Grafana Cloud provider settings in this configuration**. Configure the provider with `url` and `auth` (not `cloud_api_url` and `cloud_access_policy_token`). If you're using Grafana Cloud, set `stack_id` to your stack ID.

## Create the resources to use Git Sync

You need two resources for configure and manage Git Sync:

- The repository resource configures the Git repository to sync Grafana resources with. For examples, refer to [Repository resource](https://registry.terraform.io/providers/grafana/grafana/latest/docs/resources/apps_provisioning_repository_v0alpha1) in the Terraform registry.
- The connection resource configures your Git provider credentials. For examples, refer to [Connection resource](https://registry.terraform.io/providers/grafana/grafana/latest/docs/resources/apps_provisioning_connection_v0alpha1) in the Terraform registry.

For better understanding of the required resources, refer to [Git Sync key concepts](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/key-concepts).
