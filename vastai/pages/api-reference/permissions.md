> Pinned source for Vast.ai main: [api-reference/permissions.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/permissions.mdx)
> Canonical documentation: https://docs.vast.ai/api-reference/permissions

# Permissions

Every API key has a set of permissions that control which endpoints it can access. This page is the comprehensive reference for permission categories, how they map to API routes, and how to build custom scoped keys.

For an overview of API key creation and usage, see [Authentication](https://docs.vast.ai/api-reference/authentication).

## Permission Categories

Permissions are organized into categories. When you create a scoped API key, you include only the categories the key needs. The available categories are:

| Category         | Controls                                                                       |
| ---------------- | ------------------------------------------------------------------------------ |
| `instance_read`  | Viewing instances, logs, SSH keys, volumes, deposits                           |
| `instance_write` | Creating, managing, and destroying instances and volumes                       |
| `user_read`      | Viewing account info, API keys, SSH keys, environment variables, templates     |
| `user_write`     | Creating/modifying API keys, SSH keys, environment variables, templates, teams |
| `billing_read`   | Viewing invoices and earnings                                                  |
| `billing_write`  | Transferring credit                                                            |
| `machine_read`   | Viewing machines and reports (hosts)                                           |
| `machine_write`  | Managing machines, maintenance, listing/unlisting (hosts)                      |
| `misc`           | Search offers, benchmarks, network volumes, serverless endpoints               |
| `team_read`      | Viewing team members and roles                                                 |
| `team_write`     | Inviting/removing team members, managing roles                                 |

## Creating Scoped Keys

Define permissions as a JSON object and pass it when creating a key. The top-level key is always `"api"`, containing the categories you want to grant.

**Example, Instance management with billing access:**

```json
{
  "api": {
    "misc": {},
    "user_read": {},
    "instance_read": {},
    "instance_write": {},
    "billing_read": {},
    "billing_write": {}
  }
}
```

**Example, Instance management without billing:**

```json
{
  "api": {
    "misc": {},
    "user_read": {},
    "instance_read": {},
    "instance_write": {}
  }
}
```

You can create scoped keys using:

- **API**: [Create API Key](https://docs.vast.ai/api-reference/accounts/create-api-key)
- **CLI**: [`vastai create api-key`](https://docs.vast.ai/cli/reference/create-api-key)
- **SDK**: [`vast.create_api_key()`](https://docs.vast.ai/sdk/python/reference/create-api-key)

## Custom Roles

Custom roles let you assign the same set of permissions to multiple team members.

- **Creating roles**: Use the CLI or the Manage page in the web console (requires `team_write` access).
- **Defining permissions**: Select from any combination of the categories listed above.
- **Assigning roles**: Assign created roles to team members through the team management interface or CLI.

## Constraints

Constraints narrow a permission category to specific parameter values. This lets you create keys that can only operate on certain resources.

**Example, Read logs for a single instance only:**

```json
{
  "api": {
    "instance_read": {
      "api.instance.request_logs": {
        "constraints": {
          "id": {
            "eq": 1227
          }
        }
      }
    }
  }
}
```

**Example, Read logs for a range of instance IDs:**

```json
{
  "api": {
    "instance_read": {
      "api.instance.request_logs": {
        "constraints": {
          "id": {
            "lte": 2,
            "gte": 1
          }
        }
      }
    }
  }
}
```

Supported constraint operators: `eq`, `lte`, `gte`.

> **Note**
>
> API keys using constraints must be created via the CLI ([`vastai create api-key`](https://docs.vast.ai/cli/reference/create-api-key)) or the API ([Create API Key](https://docs.vast.ai/api-reference/accounts/create-api-key)).

You can also use **wildcards** in `params` to represent placeholder values, useful when generating many keys that perform similar operations.

## Endpoint Reference by Category

Below is the complete mapping of which endpoints each permission category controls.

### instance\_read

- [Show Instance](https://docs.vast.ai/api-reference/instances/show-instance)
- [Show Instances](https://docs.vast.ai/api-reference/instances/show-instances)
- [Show Logs](https://docs.vast.ai/api-reference/instances/show-logs)
- [Show SSH Keys](https://docs.vast.ai/api-reference/instances/show-ssh-keys)
- [Show Volumes](https://docs.vast.ai/api-reference/volumes/list-volumes)
- [Show Deposit](https://docs.vast.ai/api-reference/billing/show-deposit)

### instance\_write

- [Attach SSH Key](https://docs.vast.ai/api-reference/instances/attach-ssh-key)
- [Copy](https://docs.vast.ai/api-reference/instances/copy)
- [Cancel Copy](https://docs.vast.ai/api-reference/instances/cancel-copy)
- [Cloud Copy](https://docs.vast.ai/api-reference/instances/cloud-copy)
- [Cancel Sync](https://docs.vast.ai/api-reference/instances/cancel-sync)
- [Change Bid](https://docs.vast.ai/api-reference/instances/change-bid)
- [Create Instance](https://docs.vast.ai/api-reference/instances/create-instance)
- [Manage Instance](https://docs.vast.ai/api-reference/instances/manage-instance)
- [Delete Instance](https://docs.vast.ai/api-reference/instances/destroy-instance)
- [Detach SSH Key](https://docs.vast.ai/api-reference/instances/detach-ssh-key)
- [Execute](https://docs.vast.ai/api-reference/instances/execute)
- [Prepay Instance](https://docs.vast.ai/api-reference/instances/prepay-instance)
- [Reboot Instance](https://docs.vast.ai/api-reference/instances/reboot-instance)
- [Recycle Instance](https://docs.vast.ai/api-reference/instances/recycle-instance)
- [Create Volume](https://docs.vast.ai/api-reference/volumes/rent-volume)
- [Delete Volume](https://docs.vast.ai/api-reference/volumes/delete-volume)

### user\_read

- [Show API Keys](https://docs.vast.ai/api-reference/accounts/show-api-keys)
- [Show Connections](https://docs.vast.ai/api-reference/accounts/show-connections)
- [Show Environment Variables](https://docs.vast.ai/api-reference/accounts/show-env-vars)
- [Show IP Addresses](https://docs.vast.ai/api-reference/accounts/show-ipaddrs)
- [Show SSH Keys](https://docs.vast.ai/api-reference/accounts/show-ssh-keys)
- [Show Subaccounts](https://docs.vast.ai/api-reference/accounts/show-subaccounts)
- [Show User](https://docs.vast.ai/api-reference/accounts/show-user)
- [Search Templates](https://docs.vast.ai/api-reference/search/search-template)

### user\_write

- [Create API Key](https://docs.vast.ai/api-reference/accounts/create-api-key)
- [Delete API Key](https://docs.vast.ai/api-reference/accounts/delete-api-key)
- [Create Environment Variable](https://docs.vast.ai/api-reference/accounts/create-env-var)
- [Update Environment Variable](https://docs.vast.ai/api-reference/accounts/update-env-var)
- [Delete Environment Variable](https://docs.vast.ai/api-reference/accounts/delete-env-var)
- [Create SSH Key](https://docs.vast.ai/api-reference/accounts/create-ssh-key)
- [Update SSH Key](https://docs.vast.ai/api-reference/accounts/update-ssh-key)
- [Delete SSH Key](https://docs.vast.ai/api-reference/accounts/delete-ssh-key)
- [Create Subaccount](https://docs.vast.ai/api-reference/accounts/create-subaccount)
- [Set User](https://docs.vast.ai/api-reference/accounts/set-user)
- [Create Team](https://docs.vast.ai/api-reference/team/create-team)
- [Delete Team](https://docs.vast.ai/api-reference/team/destroy-team)
- [Create Template](https://docs.vast.ai/api-reference/templates/create-template)
- [Edit Template](https://docs.vast.ai/api-reference/templates/edit-template)
- [Delete Template](https://docs.vast.ai/api-reference/templates/delete-template)

### billing\_read

- [Search Invoices](https://docs.vast.ai/api-reference/billing/search-invoices)
- [Show Invoices](https://docs.vast.ai/api-reference/billing/show-invoices)
- [Show Earnings](https://docs.vast.ai/api-reference/billing/show-earnings)

### billing\_write

- [Transfer Credit](https://docs.vast.ai/api-reference/accounts/transfer-credit)

### machine\_read

- [Show Machines](https://docs.vast.ai/api-reference/machines/show-machines)
- [Show Reports](https://docs.vast.ai/api-reference/machines/show-reports)

### machine\_write

- [Cancel Maintenance](https://docs.vast.ai/api-reference/machines/cancel-maint)
- [Cleanup Machine](https://docs.vast.ai/api-reference/machines/cleanup-machine)
- [List Machine](https://docs.vast.ai/api-reference/machines/list-machine)
- [Remove Default Job](https://docs.vast.ai/api-reference/machines/remove-defjob)
- [Schedule Maintenance](https://docs.vast.ai/api-reference/machines/schedule-maint)
- [Set Default Job](https://docs.vast.ai/api-reference/machines/set-defjob)
- [Set Minimum Bid](https://docs.vast.ai/api-reference/machines/set-min-bid)
- [Unlist Machine](https://docs.vast.ai/api-reference/machines/unlist-machine)
- [Unlist Volume](https://docs.vast.ai/api-reference/volumes/unlist-volume)

### misc

- [Show Workergroups](https://docs.vast.ai/api-reference/serverless/show-workergroup)
- [Create Workergroup](https://docs.vast.ai/api-reference/serverless/create-workergroup)
- [Update Workergroup](https://docs.vast.ai/api-reference/serverless/update-workergroup)
- [Delete Workergroup](https://docs.vast.ai/api-reference/serverless/delete-workergroup)
- [Show Endpoints](https://docs.vast.ai/api-reference/serverless/show-endpoints)
- [Create Endpoint](https://docs.vast.ai/api-reference/serverless/create-endpoint)
- [Delete Endpoint](https://docs.vast.ai/api-reference/serverless/delete-endpoint)
- [Search Benchmarks](https://docs.vast.ai/api-reference/search/search-benchmarks)
- [Search Offers](https://docs.vast.ai/api-reference/search/search-offers)
- [Search Volumes](https://docs.vast.ai/api-reference/volumes/search-volumes)

### team\_read

- [Show Team Members](https://docs.vast.ai/api-reference/team/show-team-members)
- [Show Team Role](https://docs.vast.ai/api-reference/team/show-team-role)
- [Show Team Roles](https://docs.vast.ai/api-reference/team/show-team-roles)

### team\_write

- [Invite Team Member](https://docs.vast.ai/api-reference/team/invite-team-member)
- [Remove Team Member](https://docs.vast.ai/api-reference/team/remove-team-member)
- [Create Team Role](https://docs.vast.ai/api-reference/team/create-team-role)
- [Update Team Role](https://docs.vast.ai/api-reference/team/update-team-role)
- [Remove Team Role](https://docs.vast.ai/api-reference/team/remove-team-role)
