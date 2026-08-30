> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/service-accounts/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/service-accounts/_index.md)

# Service accounts

Service accounts allow you to run automated workloads in Grafana, such as dashboard provisioning, configuration, or report generation using the Grafana API.

Note the following:

- A service account is not the same as a Grafana [user](https://grafana.com/docs/grafana/v13.2/administration/user-management/).
- Service accounts replace [API keys](https://grafana.com/docs/grafana/v13.2/administration/service-accounts/migrate-api-keys/) as the primary way to authenticate applications that interact with Grafana.
- Use service accounts to access the Grafana HTTP API (dashboards, users, data sources, alerts).
- If you're a Grafana Cloud user and need to send or query telemetry data (metrics, logs, traces), use [Cloud Access Policies](https://grafana.com/docs/grafana-cloud/security-and-account-management/authentication-and-permissions/access-policies/) instead.
- In [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/), you can combine service accounts with [role-based access control](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/) to grant very specific permissions to applications that interact with Grafana.

## When to use service accounts

Use service accounts and tokens to perform operations on automated or triggered tasks such as:

- Authenticate applications, such as Terraform, with the Grafana API.
- Schedule reports for specific dashboards to be delivered on a daily/weekly/monthly basis.
- Define alerts in your system to be used in Grafana.
- Set up an external SAML authentication provider.
- Interact with Grafana without signing in as a user.

### Service account benefits

The added benefits of service accounts to API keys include:

- Service accounts resemble Grafana users and can be enabled/disabled, granted specific permissions, and remain active until they are deleted or disabled. API keys are only valid until their expiry date.
- Service accounts can be associated with multiple tokens.
- Unlike API keys, service account tokens are not associated with a specific user, which means that applications can be authenticated even if a Grafana user is deleted.
- You can grant granular permissions to service accounts by leveraging [role-based access control](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/). For more information about permissions, refer to [About users and permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/).

### Service account limitations

Service accounts only work in the organization they are created for. If you have the same task that is needed for multiple organizations, create service accounts in each organization.

Service accounts can't be used for instance-wide operations, such as global user management and organization management. These tasks require a user with [Grafana server administrator permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/).

## Service account tokens

A service account token is a generated random string that acts as an alternative to a password when authenticating with the Grafana HTTP API. Use service access tokens the same way as API Keys, for example to access Grafana HTTP API programmatically. Service account access tokens inherit permissions from the service account.

When you create a service account, you can associate one or more access tokens with it. Create multiple tokens for the same service account if:

- Multiple applications use the same permissions, but you would like to audit or manage their actions separately.
- You need to rotate or replace a compromised token.

## Create a service account in Grafana

Use a service account to run automated workloads in Grafana, like dashboard provisioning, configuration, or report generation.

> **Note**
>
> To create service accounts via the API refer to [Create a service account in the HTTP API](https://grafana.com/docs/grafana/v13.2/developers/http_api/serviceaccount/#create-service-account).

### Service account users

In order to create a service account, a user must have:

- Admin rights, or
- The roles `fixed:roles:reader` and `fixed:serviceaccounts:creator`

The user who creates a service account can read, update and delete the service account that they created, as well as the permissions associated with that service account.

### Before you begin

Ensure you have permission to create and edit service accounts. By default, the organization administrator role is required to create and edit service accounts. For more information about user permissions, refer to [About users and permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/).

### Create a service account

1. Sign in to Grafana and click **Administration** in the left-side menu.
2. Click **Users and access > Service accounts > Add service account**.
3. Enter a **Display name**. The display name must be unique as it determines the ID associated with the service account.
   - Use a consistent naming convention when you name service accounts. A consistent naming convention can help you scale and maintain service accounts in the future.
   - You can change the display name at any time.
4. Click **Create**.

## Add a token to a service account in Grafana

A service account token is a generated random string that acts as an alternative to a password when authenticating with Grafana’s HTTP API. For more information about service accounts, refer to [About service accounts in Grafana](https://grafana.com/docs/grafana/v13.2/administration/service-accounts/).

You can create a service account token using the Grafana UI or via the API. For more information about creating a service account token via the API, refer to [Create service account tokens using the HTTP API](https://grafana.com/docs/grafana/v13.2/developers/http_api/serviceaccount/#create-service-account-tokens).

### Before you begin

Ensure you have permission to create and edit service accounts. By default, the organization administrator role is required to create and edit service accounts. For more information about user permissions, refer to [About users and permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/).

### Service account token expiration dates

By default, service account tokens don't have an expiration date. However, you can use `token_expiration_day_limit` to limit the expiration date of the token in days.

### Add a token to a service account

1. Sign in to Grafana and click **Administration** in the left-side menu.
2. Click **Users and access** > **Service accounts**.
3. Click the service account to which you want to add a token.
4. Click **Add service account token**.
5. Enter a name for the token.
6. Optionally, you can select **Set expiration date** and enter an expiry date for the token.
   - The expiry date specifies how long you want the key to be valid.
   - If you are unsure of an expiration date, we recommend that you set the token to expire after a short time, such as a few hours or less. This limits the risk associated with a token that is valid for a long time.
7. Click **Generate token**.

## Assign roles to a service account in Grafana

You can assign organization roles (`Viewer`, `Editor`, `Admin`) to a Grafana service account to control access for the associated service account tokens. To assign organization roles you can use the Grafana UI or the API. For more information about assigning a role to a service account via the API, refer to [Update service account using the HTTP API](https://grafana.com/docs/grafana/v13.2/developers/http_api/serviceaccount/#update-service-account).

In [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/), you can also [assign RBAC roles](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/assign-rbac-roles/) to grant very specific permissions to applications that interact with Grafana.

> **Note**
>
> Since Grafana 10.2.0, the `None` basic role is available for organization users or service accounts. This role has no permissions by default, and you can grant permissions with RBAC.

### Before you begin

Ensure you have permission to update service accounts roles. By default, the organization administrator role is required to update service accounts permissions. For more information about user permissions, refer to [About users and permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/).

### To assign a role to a service account

1. Sign in to Grafana and click **Administration** in the left-side menu.
2. Click **Users and access**.
3. Click **Service accounts**.
4. Click the service account to which you want to assign a role. As an alternative, find the service account in the list view.
5. Assign a role using the role picker to update.

## Manage users and team permissions for a service account in Grafana

To control what and who can do with the service account you can assign permissions directly to users and teams. You can assign permissions using the Grafana UI.

> **Note**
>
> Assigning team management permissions to a service account does not make the account part of the team.

### Before you begin

Make sure that you have the following permissions:

- To update user and team permissions of a service accounts. By default, the organization administrator role is required to update user and teams permissions for a service account. For more information about user permissions, refer to [About users and permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/).
- To read teams.

### User and team permissions for a service account

You can assign on of the following permissions to a specific user or a team:

1. **Edit**: A user or a team with this permission can view, edit, enable and disable a service account, and add or delete service account tokens.
2. **Admin**: User or a team with this permission will be able to everything from **Edit** permission, as well as manage user and team permissions for a service account.

### To update team permissions for a service account

1. Sign in to Grafana and click **Administration** in the left-side menu.
2. Click **Users and access**.
3. Click **Service accounts**.
4. Click the service account for which you want to update team permissions a role.
5. In the Permissions section at the bottom, click **Add permission**.
6. Choose **Team** in the dropdown and select your desired team.
7. Choose **View**, **Edit** or **Admin** role in the dropdown and click **Save**.

### To update user permissions for a service account

1. Sign in to Grafana and click **Administration** in the left-side menu.
2. Click **Users and access**.
3. Click **Service accounts**.
4. Click the service account for which you want to update team permissions a role.
5. In the Permissions section at the bottom, click **Add permission**.
6. Choose **User** in the dropdown and select your desired user.
7. Choose **View**, **Edit** or **Admin** role in the dropdown and click **Save**.

## Debug the permissions of a service account token

Learn which RBAC permissions are attached to a service account token to diagnose permissions-related issues with token authorization.

### Before you begin

If you haven't added a token to a service account, do so before proceeding. Refer to [Add a token to a service account](#add-a-token-to-a-service-account-in-grafana) to see how.

### List a service account token's permissions

To list your token's permissions, use the `/api/access-control/user/permissions` endpoint.

Run the following command with the token whose permissions you want to check:

```bash
curl -H "Authorization: Bearer glsa_iNValIdinValiDinvalidinvalidinva_5b582697" -X GET '<grafana_url>/api/access-control/user/permissions' | jq
```

The output lists the token's permissions:

> **Note**
>
> The following command output is shortened to show only the relevant content.

```json
{
  "dashboards:read": ["dashboards:uid:70KrY6IVz"],
  "dashboards:write": ["dashboards:uid:70KrY6IVz"],
  "datasources.id:read": ["datasources:*"],
  "datasources:read": ["datasources:*"],
  "datasources:explore": [""],
  "datasources:query": ["datasources:uid:grafana"],
  "datasources:read": ["datasources:uid:grafana"],
  "orgs:read": [""]
}
```

### Check which dashboards a token is allowed to see

To list which dashboards a token can view, filter the `/api/access-control/user/permissions` endpoint's response for the `dashboards:read` permission key:

```bash
curl -H "Authorization: Bearer glsa_iNValIdinValiDinvalidinvalidinva_5b582697" -X GET '<grafana_url>/api/access-control/user/permissions' | jq '."dashboards:read"'
```

The output lists the dashboards a token can view and the folders a token can view dashboards from,
by their unique identifiers (`uid`):

```json
[
  "dashboards:uid:70KrY6IVz",
  "dashboards:uid:d61be733D",
  "folders:uid:dBS87Axw2",
],
```
