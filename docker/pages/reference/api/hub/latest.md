> Pinned source for Docker main: [content/reference/api/hub/latest.md](https://github.com/docker/docs/blob/bbf8dfd2f0205fd5c754eedceac8f8b69aa91f81/content/reference/api/hub/latest.md)

# Docker Hub API reference

## API specification

**Docker HUB API**

- Version: `2-beta`

Docker Hub is a service provided by Docker for finding and sharing container images with your team.

It is the world's largest library and community for container images.

In addition to the [Docker Hub UI](https://docs.docker.com/docker-hub/) and [Docker Hub CLI tool](https://github.com/docker/hub-tool#readme) (currently experimental), Docker provides an API that allows you to interact with Docker Hub.

Browse through the Docker Hub API documentation to explore the supported endpoints.

- Base URL: `https://hub.docker.com`

## Authentication

### `bearerAuth` (http, bearer)

### `bearerSCIMAuth` (http, bearer)

## Endpoints

### `POST /v2/users/login`

**Create an authentication token**

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

***As of September 16, 2024, this route requires a personal access token (PAT) instead of a password if your organization has SSO enforced.***

<div style="background-color:rgb(255, 165, 0, .25); padding:5px; border-radius:4px">
  <strong>Deprecated</strong>: Use [<a href="#tag/authentication-api/operation/AuthCreateAccessToken">Create access token</a>] instead.
</div>

**Deprecated.**

**Authentication:** none

**Request body** (required): Login details.

- Media type: `application/json`
  - Schema (object): User login details
    - `username` (required; string): The username of the Docker Hub account to authenticate with.
      - Example: `myusername`
    - `password` (required; string): The password or personal access token (PAT) of the Docker Hub account to authenticate with.
      - Example: `p@ssw0rd`

**Responses**

- `200`: Authentication successful
  - Media type: `application/json`
    - Schema (object): successful user login response
      - `token` (string): Created authentication token. This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
- `401`: Authentication failed or second factor required
  - Media type: `application/json`
    - Schema (object): failed user login response or second factor required
      - `detail` (required; string): Description of the error.
        - Example: `Incorrect authentication credentials`
      - `login_2fa_token` (string; nullable): Short time lived token to be used on `/v2/users/2fa-login` to complete the authentication. This field is present only if 2FA is enabled.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

### `POST /v2/users/2fa-login`

**Second factor authentication**

When a user has two-factor authentication (2FA) enabled, this is the second call to perform after `/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.

**Authentication:** none

**Request body** (required): Login details.

- Media type: `application/json`
  - Schema (object): Second factor user login details
    - `login_2fa_token` (required; string): The intermediate 2FA token returned from `/v2/users/login` API.
      - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
    - `code` (required; string): The Time-based One-Time Password of the Docker Hub account to authenticate with.
      - Example: `123456`

**Responses**

- `200`: Authentication successful
  - Media type: `application/json`
    - Schema (object): successful user login response
      - `token` (string): Created authentication token. This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
- `401`: Authentication failed
  - Media type: `application/json`
    - Schema (object): failed second factor login response.
      - `detail` (string): Description of the error.
        - Example: `Incorrect authentication credentials`

### `POST /v2/auth/token`

**Create access token**

Creates and returns a short-lived access token in JWT format for use as a bearer when calling Docker APIs.

If successful, the access token returned should be used in the HTTP Authorization header like
`Authorization: Bearer {access_token}`.

***If your organization has SSO enforced, you must use a personal access token (PAT) instead of a password.***

**Authentication:** none

**Request body**

- Media type: `application/json`
  - Schema (object): Request to create access token
    - `identifier` (required; string): The identifier of the account to create an access token for. If using a password or personal access token, this must be a username. If using an organization access token, this must be an organization name.
      - Example: `myusername`
    - `secret` (required; string): The secret of the account to create an access token for. This can be a password, personal access token, or organization access token.
      - Example: `dckr_pat_124509ugsdjga93`

**Responses**

- `200`: Token created
  - Media type: `application/json`
    - Schema (object): successful access token response
      - `access_token` (string): The created access token. This expires in 10 minutes.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/access-tokens`

**List personal access tokens**

Returns a paginated list of personal access tokens.

**Authentication:** `bearerAuth`

**Parameters**

- `page` (query; number; default: `1`)
- `page_size` (query; number; default: `10`)

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object)
      - `count` (number)
        - Example: `1`
      - `next` (string)
        - Example: `null`
      - `previous` (string)
        - Example: `null`
      - `active_count` (number)
        - Example: `1`
      - `results` (array)
        - `items`
          - allOf:
            - `variant 1` (object)
              - `uuid` (string)
                - Example: `b30bbf97-506c-4ecd-aabc-842f3cb484fb`
              - `client_id` (string)
                - Example: `HUB`
              - `creator_ip` (string)
                - Example: `127.0.0.1`
              - `creator_ua` (string)
                - Example: `some user agent`
              - `created_at` (string)
                - Example: `2021-07-20T12:00:00.000000Z`
              - `last_used` (string; nullable)
                - Example: `null`
              - `generated_by` (string)
                - Example: `manual`
              - `is_active` (boolean)
                - Example: `true`
              - `token` (string)
                - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`
              - `token_label` (string)
                - Example: `My read only token`
              - `scopes` (array)
                - Example: `["repo:read"]`
                - `items` (string)
              - `expires_at` (string; format: date-time)
                - Example: `2021-10-28T18:30:19.520861Z`
            - `variant 2` (object)
              - `token` (string)
                - Example: \`\`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object): Used to error if input validation fails.
      - `fields` (object)
        - `items` (string)
      - `text` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `POST /v2/access-tokens`

**Create personal access token**

Creates and returns a personal access token.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `token_label` (required; string; minimum length: `1`; maximum length: `100`): Friendly name for you to identify the token.
      - Example: `My read only token`
    - `scopes` (required; array): Valid scopes: "repo:admin", "repo:write", "repo:read", "repo:public\_read"
      - Example: `["repo:read"]`
      - `items` (string)
    - `expires_at` (string; format: date-time): Optional expiration date for the token. If omitted, the token will remain valid indefinitely.
      - Example: `2021-10-28T18:30:19.520861Z`

**Responses**

- `201`: Created
  - Media type: `application/json`
    - Schema
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object): Used to error if input validation fails.
      - `fields` (object)
        - `items` (string)
      - `text` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/access-tokens/{uuid}`

**Get personal access token**

Returns a personal access token by UUID.

**Authentication:** `bearerAuth`

**Parameters**

- `uuid` (path; required; string)

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `uuid` (string)
            - Example: `b30bbf97-506c-4ecd-aabc-842f3cb484fb`
          - `client_id` (string)
            - Example: `HUB`
          - `creator_ip` (string)
            - Example: `127.0.0.1`
          - `creator_ua` (string)
            - Example: `some user agent`
          - `created_at` (string)
            - Example: `2021-07-20T12:00:00.000000Z`
          - `last_used` (string; nullable)
            - Example: `null`
          - `generated_by` (string)
            - Example: `manual`
          - `is_active` (boolean)
            - Example: `true`
          - `token` (string)
            - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`
          - `token_label` (string)
            - Example: `My read only token`
          - `scopes` (array)
            - Example: `["repo:read"]`
            - `items` (string)
          - `expires_at` (string; format: date-time)
            - Example: `2021-10-28T18:30:19.520861Z`
        - `variant 2` (object)
          - `token` (string)
            - Example: \`\`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `PATCH /v2/access-tokens/{uuid}`

**Update personal access token**

Updates a personal access token partially. You can either update the token's label or enable/disable it.

**Authentication:** `bearerAuth`

**Parameters**

- `uuid` (path; required; string)

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `token_label` (string; minimum length: `1`; maximum length: `100`)
      - Example: `My read only token`
    - `is_active` (boolean)
      - Example: `false`

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object): Used to error if input validation fails.
      - `fields` (object)
        - `items` (string)
      - `text` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `DELETE /v2/access-tokens/{uuid}`

**Delete personal access token**

Deletes a personal access token permanently. This cannot be undone.

**Authentication:** `bearerAuth`

**Parameters**

- `uuid` (path; required; string)

**Responses**

- `204`: A successful response.
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/auditlogs/{account}/actions`

**List audit log actions**

List audit log actions for a namespace to be used as a filter for querying audit log events.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `account` (path; required; string): Namespace to query audit log actions for.

**Responses**

- `200`: A successful response.
  - Media type: `application/json`
    - Schema (object): GetAuditActions response.
      - `actions` (object): Map of audit log actions.
        - `additional properties` (object)
          - `actions` (array): List of audit log actions.
            - `items` (object): Audit Log action
              - `name` (string): Name of audit log action.
              - `description` (string): Description of audit log action.
              - `label` (string): Label for audit log action.
          - `label` (string): Grouping label for a particular set of audit log actions.
    - Example `response`: `{"actions":{"billing":{"actions":[{"name":"plan.upgrade","description":"Occurs when your organization’s billing plan is upgraded to a higher tier plan.","label":"Plan Upgraded"},{"name":"plan.downgrade","description":"Occurs when your organization’s billing plan is downgraded to a lower tier plan.","label":"Plan Downgraded"},{"name":"plan.seat_add","description":"Occurs when a seat is added to your organization’s billing plan.","label":"Seat Added"},{"name":"plan.seat_remove","description":"Occurs when a seat is removed from your organization’s billing plan.","label":"Seat Removed"},{"name":"plan.cycle_change","description":"Occurs when there is a change in the recurring interval that your organization is charged.","label":"Billing Cycle Changed"},{"name":"plan.downgrade_cancel","description":"Occurs when a scheduled plan downgrade for your organization is canceled.","label":"Plan Downgrade Canceled"},{"name":"plan.seat_removal_cancel","description":"Occurs when a scheduled seat removal for an organization’s billing plan is canceled.","label":"Seat Removal Canceled"},{"name":"plan.upgrade.request","description":"Occurs when a user in your organization requests a plan upgrade.","label":"Plan Upgrade Requested"},{"name":"plan.downgrade.request","description":"Occurs when a user in your organization requests a plan downgrade.","label":"Plan Downgrade Requested"},{"name":"plan.seat_add.request","description":"Occurs when a user in your organization requests an increase in the number of seats.","label":"Seat Addition Requested"},{"name":"plan.seat_removal.request","description":"Occurs when a user in your organization requests a decrease in the number of seats.","label":"Seat Removal Requested"},{"name":"plan.cycle_change.request","description":"Occurs when a user in your organization requests a change in the billing cycle.","label":"Billing Cycle Change Requested"},{"name":"plan.downgrade_cancel.request","description":"Occurs when a user in your organization requests a cancellation of a scheduled plan downgrade.","label":"Plan Downgrade Cancellation Requested"},{"name":"plan.seat_removal_cancel.request","description":"Occurs when a user in your organization requests a cancellation of a scheduled seat removal.","label":"Seat Removal Cancellation Requested"},{"name":"plan.product_change","description":"Occurs when there is a change in the product that your organization subscribes to.","label":"Billing Product Changed"}],"label":"Billing"},"enterprise":{"actions":[{"name":"setting.policy.create","description":"Details of adding an admin settings policy","label":"Policy created"},{"name":"setting.policy.update","description":"Details of updating an admin settings policy","label":"Policy updated"},{"name":"setting.policy.delete","description":"Details of deleting an admin settings policy","label":"Policy deleted"},{"name":"setting.policy.transfer","description":"Details of transferring an admin settings policy to another owner","label":"Policy transferred"},{"name":"sso.connection.create","description":"Details of creating a new org/company SSO connection","label":"Create SSO Connection"},{"name":"sso.connection.update","description":"Details of updating an existing org/company SSO connection","label":"Update SSO Connection"},{"name":"sso.connection.delete","description":"Details of deleting an existing org/company SSO connection","label":"Delete SSO Connection"},{"name":"sso.connection.enforcement_toggle","description":"Details of toggling enforcement on an existing org/company SSO connection","label":"Enforce SSO"},{"name":"sso.connection.scim_toggle","description":"Details of toggling SCIM on an existing org/company SSO connection","label":"Enforce SCIM"},{"name":"sso.connection.scim_token_refresh","description":"Details of a SCIM token refresh on an existing org/company SSO connection","label":"Refresh SCIM Token"},{"name":"sso.connection.connection_type_change","description":"Details of a connection type change on an existing org/company SSO connection","label":"Change SSO Connection Type"},{"name":"sso.connection.jit_toggle","description":"Details of a JIT toggle on an existing org/company SSO connection","label":"Toggle JIT provisioning"}],"label":"Enterprise"},"offload":{"actions":[{"name":"lease.start","description":"Details of the started Offload lease.","label":"Offload lease start"},{"name":"lease.end","description":"Details of the ended Offload lease.","label":"Offload lease end"}],"label":"Offload"},"oidc":{"actions":[{"name":"connection.create","description":"Details of creating an OIDC connection.","label":"OIDC connection created"},{"name":"connection.update","description":"Details of updating an OIDC connection.","label":"OIDC connection updated"},{"name":"connection.delete","description":"Details of deleting an OIDC connection.","label":"OIDC connection deleted"}],"label":"OIDC"},"org":{"actions":[{"name":"create","description":"Activities related to the creation of a new organization","label":"Organization Created"},{"name":"member.add","description":"Details of the member added to your organization","label":"Organization Member Added"},{"name":"member.remove","description":"Details about the member removed from your organization","label":"Organization Member Removed"},{"name":"member.role.change","description":"Details about the role changed for a member in your organization","label":"Member Role Changed"},{"name":"member.invite.send","description":"Details of the member invited to your organization","label":"Org Member Invited"},{"name":"team.create","description":"Activities related to the creation of a team","label":"Organization Created"},{"name":"team.update","description":"Activities related to the modification of a team","label":"Organization Deleted"},{"name":"team.delete","description":"Activities related to the deletion of a team","label":"Organization Deleted"},{"name":"team.member.add","description":"Details of the member added to your team","label":"Team Member Added"},{"name":"team.member.remove","description":"Details of the member removed from your team","label":"Team Member Removed"},{"name":"domain.create","description":"Details of the single sign-on domain added to your organization","label":"Single Sign-On domain added"},{"name":"domain.verify","description":"Details of the single sign-on domain verified for your organization","label":"Single Sign-On domain verified"},{"name":"domain.delete","description":"Details of the single sign-on domain removed from your organization","label":"Single Sign-On domain deleted"},{"name":"domain.auto-provisioning.toggle","description":"Details of toggling the Auto-Provisioning feature on a domain on or off","label":"Organization Auto-Provisioning Toggled"},{"name":"settings.update","description":"Details related to the organization setting that was updated","label":"Organization Settings Updated"},{"name":"registry_access.enabled","description":"Activities related to enabling Registry Access Management","label":"Registry Access Management enabled"},{"name":"registry_access.disabled","description":"Activities related to disabling Registry Access Management","label":"Registry Access Management disabled"},{"name":"registry_access.registry_added","description":"Activities related to the addition of a registry","label":"Registry Access Management registry added"},{"name":"registry_access.registry_updated","description":"Details related to the registry that was updated","label":"Registry Access Management registry updated"},{"name":"registry_access.registry_removed","description":"Activities related to the removal of a registry","label":"Registry Access Management registry removed"},{"name":"access_token.create","description":"Access token created in organization","label":"Access token created"},{"name":"access_token.update","description":"Access token updated in organization","label":"Access token updated"},{"name":"access_token.delete","description":"Access token deleted in organization","label":"Access token deleted"},{"name":"customrole.create","description":"A custom role was created","label":"Custom role created"},{"name":"customrole.update","description":"An existing custom role was updated","label":"Custom role updated"},{"name":"customrole.delete","description":"A custom role was deleted","label":"Custom role deleted"},{"name":"securepolicyconfigure.create","description":"A secure policy configuration was created","label":"Secure Policy Configuration created"},{"name":"securepolicyconfigure.update","description":"A secure policy configuration was updated","label":"Secure Policy Configuration updated"},{"name":"securepolicyconfigure.delete","description":"A secure policy configuration was deleted","label":"Secure Policy Configuration deleted"},{"name":"securepolicyclient.create","description":"A secure policy client was created","label":"Secure Policy Client created"},{"name":"securepolicyclient.update","description":"A secure policy client was updated","label":"Secure Policy Client updated"},{"name":"securepolicyclient.delete","description":"A secure policy client was deleted","label":"Secure Policy Client deleted"},{"name":"securepolicyprofile.create","description":"A secure policy profile was created","label":"Secure Policy Profile created"},{"name":"securepolicyprofile.update","description":"A secure policy profile was updated","label":"Secure Policy Profile updated"},{"name":"securepolicyprofile.delete","description":"A secure policy profile was deleted","label":"Secure Policy Profile deleted"}],"label":"Organization"},"repo":{"actions":[{"name":"create","description":"Activities related to the creation of a new repository","label":"Repository Created"},{"name":"update","description":"Activities related to the modification of a repository","label":"Repository Updated"},{"name":"delete","description":"Activities related to the deletion of a repository","label":"Repository Deleted"},{"name":"change_privacy","description":"Details related to the privacy policies that were updated","label":"Privacy Changed"},{"name":"category.updated","description":"Details related to updating a repository categories","label":"Categories updated"},{"name":"immutable.tags.updated","description":"Details related to updating tag immutability of a repository","label":"Tag immutability updated"},{"name":"tag.push","description":"Activities related to the tags pushed","label":"Tag Pushed"},{"name":"tag.delete","description":"Activities related to the tags deleted","label":"Tag Deleted"}],"label":"Repository"}}}`
- `429`
  - Media type: `application/json`
    - Schema
    - Example `response`: `{"detail":"Rate limit exceeded","error":false}`
- `500`
  - Media type: `application/json`
    - Schema
- `default`: An unexpected error response.
  - Media type: `application/json`
    - Schema (object)
      - `code` (integer; format: int32)
      - `message` (string)
      - `details` (array)
        - `items` (object)
          - `type_url` (string)
          - `value` (string; format: byte)

### `GET /v2/auditlogs/{account}`

**List audit log events**

List audit log events for a given namespace.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `account` (path; required; string): Namespace to query audit logs for.
- `action` (query; string): action name one of \["repo.tag.push", ...]. Optional parameter to filter specific audit log actions.
- `name` (query; string): name. Optional parameter to filter audit log events to a specific name. For repository events, this is the name of the repository. For organization events, this is the name of the organization. For team member events, this is the username of the team member.
- `actor` (query; string): actor name. Optional parameter to filter audit log events to the specific user who triggered the event.
- `from` (query; string; format: date-time): Start of the time window you wish to query audit events for.
- `to` (query; string; format: date-time): End of the time window you wish to query audit events for.
- `page` (query; integer; format: int32; default: `1`): page - specify page number. Page number to get.
- `page_size` (query; integer; format: int32; default: `25`): page\_size - specify page size. Number of events to return per page.

**Responses**

- `200`: A successful response.
  - Media type: `application/json`
    - Schema (object): GetAuditLogs response.
      - `logs` (array): List of audit log events.
        - `items` (object): Audit log event.
          - `account` (string)
          - `action` (string)
          - `name` (string)
          - `actor` (string)
          - `data` (object)
            - `additional properties` (string)
          - `timestamp` (string; format: date-time)
          - `action_description` (string)
    - Example `response`: `{"logs":[{"account":"docker","action":"repo.tag.push","name":"docker/example","actor":"docker","data":{"digest":"sha256:c1ae9c435032a276f80220c7d9b40f76266bbe79243d34f9cda30b76fe114dfa","tag":"latest"},"timestamp":"2021-02-19T01:34:35Z","action_description":"pushed the tag latest with the digest sha256:c1ae9c435032a to the repository docker/example\n"},{"account":"docker","action":"offload.lease.end","name":"docker","actor":"docker","data":{"lease_id":"l_3EgPuRCjtUqT279CFPOQWcO8zOf","resource_type":"run_4cpu_8mem","started_at":"2026-06-04T18:24:21Z","updated_at":"2026-06-04T18:36:43Z","org_id":"b908ca6e-b9a9-4a53-a9a5-6bec96f72432","user_id":"ecae6747-e42c-43cb-925d-cfce1ab32b02"},"timestamp":"2026-06-04T18:36:43Z","action_description":"offload lease 'l_3EgPuRCjtUqT279CFPOQWcO8zOf' ended, ran for '12m22s'"}]}`
- `429`
  - Media type: `application/json`
    - Schema
    - Example `response`: `{"detail":"Rate limit exceeded","error":false}`
- `500`
  - Media type: `application/json`
    - Schema
- `default`: An unexpected error response.
  - Media type: `application/json`
    - Schema (object)
      - `code` (integer; format: int32)
      - `message` (string)
      - `details` (array)
        - `items` (object)
          - `type_url` (string)
          - `value` (string; format: byte)

### `GET /v2/orgs/{name}/settings`

**Get organization settings**

Returns organization settings by name.

**Authentication:** `bearerAuth`

**Parameters**

- `name` (path; required; string): Name of the organization.

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object)
      - `restricted_images` (object)
        - `enabled` (boolean): Whether or not to restrict image usage for users in the organization.
          - Example: `true`
        - `allow_official_images` (boolean): Allow usage of official images if "enabled" is `true`.
          - Example: `true`
        - `allow_verified_publishers` (boolean): Allow usage of verified publisher images if "enabled" is `true`.
          - Example: `true`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `PUT /v2/orgs/{name}/settings`

**Update organization settings**

Updates an organization's settings. Some settings are only used when the organization is on a business subscription.

***Only users with administrative privileges for the organization (owner role) can modify these settings.***

The following settings are only used on a business subscription:

- `restricted_images`

**Authentication:** `bearerAuth`

**Parameters**

- `name` (path; required; string): Name of the organization.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `restricted_images` (required)
      - allOf:
        - `variant 1` (object)
          - `enabled` (boolean): Whether or not to restrict image usage for users in the organization.
            - Example: `true`
          - `allow_official_images` (boolean): Allow usage of official images if "enabled" is `true`.
            - Example: `true`
          - `allow_verified_publishers` (boolean): Allow usage of verified publisher images if "enabled" is `true`.
            - Example: `true`
        - `variant 2` (object)

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object)
      - `restricted_images` (object)
        - `enabled` (boolean): Whether or not to restrict image usage for users in the organization.
          - Example: `true`
        - `allow_official_images` (boolean): Allow usage of official images if "enabled" is `true`.
          - Example: `true`
        - `allow_verified_publishers` (boolean): Allow usage of verified publisher images if "enabled" is `true`.
          - Example: `true`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{name}/access-tokens`

**List access tokens**

List access tokens for an organization.

**Authentication:** `bearerAuth`

**Parameters**

- `page` (query; number; default: `1`)
- `page_size` (query; number; default: `10`)

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object)
      - `total` (number)
        - Example: `10`
      - `next` (string)
        - Example: `https://hub.docker.com/v2/orgs/docker/access-tokens?page=2&page_size=10`
      - `previous` (string)
        - Example: `https://hub.docker.com/v2/orgs/docker/access-tokens?page=1&page_size=10`
      - `results` (array)
        - `items` (object)
          - `id` (string)
            - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`
          - `label` (string)
            - Example: `My organization token`
          - `created_by` (string)
            - Example: `johndoe`
          - `is_active` (boolean)
            - Example: `true`
          - `created_at` (string; format: date-time)
            - Example: `2022-05-20T00:54:18Z`
          - `expires_at` (string; format: date-time; nullable)
            - Example: `2023-05-20T00:54:18Z`
          - `last_used_at` (string; format: date-time; nullable)
            - Example: `2022-06-15T12:30:45Z`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `POST /v2/orgs/{name}/access-tokens`

**Create access token**

Create an access token for an organization.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `label` (string): Label for the access token
      - Example: `My organization token`
    - `description` (string): Description of the access token
      - Example: `Token for CI/CD pipeline`
    - `resources` (array): Resources this token has access to
      - `items` (object)
        - `type` (string; enum: `TYPE_REPO`, `TYPE_ORG`): The type of resource
          - Example: `TYPE_REPO`
        - `path` (string): The path of the resource. The format of this will change depending on the type of resource. For TYPE\_REPO resources: - Must be an existing repository name (e.g., "myorg/myrepo") - Can use glob patterns (e.g., "myorg/*" for all repositories in the organization) - Use "*/\*/public" to reference all public repositories
          - Example: `myorg/myrepo`
        - `scopes` (array): The scopes this token has access to
          - `items` (string)
            - Example: `scope-image-pull`
    - `expires_at` (string; format: date-time; nullable): Expiration date for the token
      - Example: `2023-05-20T00:54:18Z`

**Responses**

- `201`: Created
  - Media type: `application/json`
    - Schema (object)
      - allOf:
        - `variant 1` (object)
          - `id` (string)
            - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`
          - `label` (string)
            - Example: `My organization token`
          - `is_active` (boolean)
            - Example: `true`
          - `created_at` (string; format: date-time)
            - Example: `2022-05-20T00:54:18Z`
          - `expires_at` (string; format: date-time; nullable)
            - Example: `2023-05-20T00:54:18Z`
          - `last_used_at` (string; format: date-time; nullable)
            - Example: `2022-06-15T12:30:45Z`
        - `variant 2` (object)
          - `token` (string): The actual token value that can be used for authentication
            - Example: `dckr_oat_7awgM4jG5SQvxcvmNzhKj8PQjxo`
          - `resources` (array)
            - `items` (object)
              - `type` (string; enum: `TYPE_REPO`, `TYPE_ORG`): The type of resource
                - Example: `TYPE_REPO`
              - `path` (string): The path of the resource. The format of this will change depending on the type of resource. For TYPE\_REPO resources: - Must be an existing repository name (e.g., "myorg/myrepo") - Can use glob patterns (e.g., "myorg/*" for all repositories in the organization) - Use "*/\*/public" to reference all public repositories
                - Example: `myorg/myrepo`
              - `scopes` (array): The scopes this token has access to
                - `items` (string)
                  - Example: `scope-image-pull`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object): Used to error if input validation fails.
      - `fields` (object)
        - `items` (string)
      - `text` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/access-tokens/{access_token_id}`

**Get access token**

Get details of a specific access token for an organization.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `access_token_id` (path; required; string): The ID of the access token to retrieve
  - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `id` (string)
            - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`
          - `label` (string)
            - Example: `My organization token`
          - `created_by` (string)
            - Example: `johndoe`
          - `is_active` (boolean)
            - Example: `true`
          - `created_at` (string; format: date-time)
            - Example: `2022-05-20T00:54:18Z`
          - `expires_at` (string; format: date-time; nullable)
            - Example: `2023-05-20T00:54:18Z`
          - `last_used_at` (string; format: date-time; nullable)
            - Example: `2022-06-15T12:30:45Z`
        - `variant 2` (object)
          - `resources` (array): Resources this token has access to
            - `items` (object)
              - `type` (string; enum: `TYPE_REPO`, `TYPE_ORG`): The type of resource
                - Example: `TYPE_REPO`
              - `path` (string): The path of the resource. The format of this will change depending on the type of resource. For TYPE\_REPO resources: - Must be an existing repository name (e.g., "myorg/myrepo") - Can use glob patterns (e.g., "myorg/*" for all repositories in the organization) - Use "*/\*/public" to reference all public repositories
                - Example: `myorg/myrepo`
              - `scopes` (array): The scopes this token has access to
                - `items` (string)
                  - Example: `scope-image-pull`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `PATCH /v2/orgs/{org_name}/access-tokens/{access_token_id}`

**Update access token**

Update a specific access token for an organization.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `access_token_id` (path; required; string): The ID of the access token to retrieve
  - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `label` (string): Label for the access token
      - Example: `My organization token`
    - `description` (string): Description of the access token
      - Example: `Token for CI/CD pipeline`
    - `resources` (array): Resources this token has access to
      - `items` (object)
        - `type` (string; enum: `TYPE_REPO`, `TYPE_ORG`): The type of resource
          - Example: `TYPE_REPO`
        - `path` (string): The path of the resource. The format of this will change depending on the type of resource. For TYPE\_REPO resources: - Must be an existing repository name (e.g., "myorg/myrepo") - Can use glob patterns (e.g., "myorg/*" for all repositories in the organization) - Use "*/\*/public" to reference all public repositories
          - Example: `myorg/myrepo`
        - `scopes` (array): The scopes this token has access to
          - `items` (string)
            - Example: `scope-image-pull`
    - `is_active` (boolean): Whether the token is active
      - Example: `true`

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object)
      - allOf:
        - `variant 1` (object)
          - `id` (string)
            - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`
          - `label` (string)
            - Example: `My organization token`
          - `created_by` (string)
            - Example: `johndoe`
          - `is_active` (boolean)
            - Example: `true`
          - `created_at` (string; format: date-time)
            - Example: `2022-05-20T00:54:18Z`
          - `expires_at` (string; format: date-time; nullable)
            - Example: `2023-05-20T00:54:18Z`
          - `last_used_at` (string; format: date-time; nullable)
            - Example: `2022-06-15T12:30:45Z`
        - `variant 2` (object)
          - `resources` (array): Resources this token has access to
            - `items` (object)
              - `type` (string; enum: `TYPE_REPO`, `TYPE_ORG`): The type of resource
                - Example: `TYPE_REPO`
              - `path` (string): The path of the resource. The format of this will change depending on the type of resource. For TYPE\_REPO resources: - Must be an existing repository name (e.g., "myorg/myrepo") - Can use glob patterns (e.g., "myorg/*" for all repositories in the organization) - Use "*/\*/public" to reference all public repositories
                - Example: `myorg/myrepo`
              - `scopes` (array): The scopes this token has access to
                - `items` (string)
                  - Example: `scope-image-pull`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `DELETE /v2/orgs/{org_name}/access-tokens/{access_token_id}`

**Delete access token**

Delete a specific access token for an organization. This action cannot be undone.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `access_token_id` (path; required; string): The ID of the access token to retrieve
  - Example: `a7a5ef25-8889-43a0-8cc7-f2a94268e861`

**Responses**

- `204`: Access token deleted successfully
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/namespaces/{namespace}/repositories/{repository}/tags`

**List repository tags**

Returns the list of tags for the specified repository.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)
- `page` (query; integer): Page number to get. Defaults to 1.
- `page_size` (query; integer): Number of items to get per page. Defaults to 10. Max of 100.

**Responses**

- `200`: list repository tags
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `count` (integer): total number of results available across all pages
          - `next` (string; nullable): link to next page of results if any
          - `previous` (string; nullable): link to previous page of results if any
        - `variant 2` (object)
          - `results` (array)
            - `items` (object)
              - `id` (integer): tag ID
              - `images` (object)
                - `architecture` (string): CPU architecture
                - `features` (string): CPU features
                - `variant` (string): CPU variant
                - `digest` (string; nullable): image digest
                - `layers` (array)
                  - `items` (object)
                    - `digest` (string; nullable): image layer digest
                    - `size` (integer): size of the layer
                    - `instruction` (string): Dockerfile instruction
                - `os` (string): operating system
                - `os_features` (string): OS features
                - `os_version` (string): OS version
                - `size` (integer): size of the image
                - `status` (string; enum: `active`, `inactive`): Status of the image
                - `last_pulled` (string; nullable): datetime of last pull
                  - Example: `2021-01-05T21:06:53.506400Z`
                - `last_pushed` (string; nullable): datetime of last push
                  - Example: `2021-01-05T21:06:53.506400Z`
              - `creator` (integer): ID of the user that pushed the tag
              - `last_updated` (string; nullable): datetime of last update
                - Example: `2021-01-05T21:06:53.506400Z`
              - `last_updater` (integer): ID of the last user that updated the tag
              - `last_updater_username` (string): Hub username of the user that updated the tag
              - `name` (string): name of the tag
              - `repository` (integer): repository ID
              - `full_size` (integer): compressed size (sum of all layers) of the tagged image
              - `v2` (string): repository API version
              - `status` (string; enum: `active`, `inactive`): whether a tag has been pushed to or pulled in the past month
              - `tag_last_pulled` (string; nullable): datetime of last pull
                - Example: `2021-01-05T21:06:53.506400Z`
              - `tag_last_pushed` (string; nullable): datetime of last push
                - Example: `2021-01-05T21:06:53.506400Z`
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `HEAD /v2/namespaces/{namespace}/repositories/{repository}/tags`

**Check repository tags**

Checks whether the repository has any tags.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)

**Responses**

- `200`: Repository contains tags
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/namespaces/{namespace}/repositories/{repository}/tags/{tag}`

**Read repository tag**

Returns details for a specific tag in the specified repository.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)
- `tag` (path; required; string)

**Responses**

- `200`: repository tag
  - Media type: `application/json`
    - Schema (object)
      - `id` (integer): tag ID
      - `images` (object)
        - `architecture` (string): CPU architecture
        - `features` (string): CPU features
        - `variant` (string): CPU variant
        - `digest` (string; nullable): image digest
        - `layers` (array)
          - `items` (object)
            - `digest` (string; nullable): image layer digest
            - `size` (integer): size of the layer
            - `instruction` (string): Dockerfile instruction
        - `os` (string): operating system
        - `os_features` (string): OS features
        - `os_version` (string): OS version
        - `size` (integer): size of the image
        - `status` (string; enum: `active`, `inactive`): Status of the image
        - `last_pulled` (string; nullable): datetime of last pull
          - Example: `2021-01-05T21:06:53.506400Z`
        - `last_pushed` (string; nullable): datetime of last push
          - Example: `2021-01-05T21:06:53.506400Z`
      - `creator` (integer): ID of the user that pushed the tag
      - `last_updated` (string; nullable): datetime of last update
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_updater` (integer): ID of the last user that updated the tag
      - `last_updater_username` (string): Hub username of the user that updated the tag
      - `name` (string): name of the tag
      - `repository` (integer): repository ID
      - `full_size` (integer): compressed size (sum of all layers) of the tagged image
      - `v2` (string): repository API version
      - `status` (string; enum: `active`, `inactive`): whether a tag has been pushed to or pulled in the past month
      - `tag_last_pulled` (string; nullable): datetime of last pull
        - Example: `2021-01-05T21:06:53.506400Z`
      - `tag_last_pushed` (string; nullable): datetime of last push
        - Example: `2021-01-05T21:06:53.506400Z`
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `HEAD /v2/namespaces/{namespace}/repositories/{repository}/tags/{tag}`

**Check repository tag**

Checks whether the specified tag exists in the repository.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)
- `tag` (path; required; string)

**Responses**

- `200`: Repository tag exists
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `PATCH /v2/namespaces/{namespace}/repositories/{repository}/immutabletags`

**Update repository immutable tags**

Updates the immutable tags configuration for this repository.

**Only users with administrative privileges for the repository can modify these settings.**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `immutable_tags` (required; boolean): Whether immutable tags are enabled
    - `immutable_tags_rules` (required; array): List of immutable tag rules
      - Example: `["v.*",".*-RELEASE"]`
      - `items` (string)

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `user` (required; string): Username of the repository owner
      - `name` (required; string): Repository name
      - `namespace` (required; string): Repository namespace
      - `repository_type` (string; nullable): Type of the repository
      - `status` (required; integer): Repository status code
      - `status_description` (required; string): Description of the repository status
      - `description` (required; string): Short description of the repository
      - `is_private` (required; boolean): Whether the repository is private
      - `is_automated` (required; boolean): Whether the repository has automated builds
      - `star_count` (required; integer; format: int64): Number of stars
      - `pull_count` (required; integer; format: int64): Number of pulls
      - `last_updated` (required; string; format: date-time): ISO 8601 timestamp of when repository was last updated
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_modified` (string; format: date-time; nullable): ISO 8601 timestamp of when repository was last modified
        - Example: `2021-01-05T21:06:53.506400Z`
      - `date_registered` (required; string; format: date-time): ISO 8601 timestamp of when repository was created
        - Example: `2021-01-05T21:06:53.506400Z`
      - `collaborator_count` (required; integer; format: int64): Number of collaborators
      - `affiliation` (string; nullable): Repository affiliation
      - `hub_user` (string; nullable): Hub user information
      - `has_starred` (required; boolean): Whether the current user has starred this repository
      - `full_description` (string; nullable): Full description of the repository
      - `permissions` (required; object)
        - `read` (required; boolean): Read permission
        - `write` (required; boolean): Write permission
        - `admin` (required; boolean): Admin permission
      - `media_types` (required; array): Supported media types
        - `items` (string; nullable)
      - `content_types` (required; array): Supported content types
        - `items` (string)
      - `categories` (required; array): Repository categories
        - `items` (object): Repository category for classification and discovery
          - `name` (required; string; minimum length: `1`): Human-readable name of the category
            - Example: `Databases`
          - `slug` (required; string; minimum length: `1`; pattern: `^[a-z0-9]+(?:-[a-z0-9]+)*$`): URL-friendly identifier for the category
            - Example: `databases`
      - `immutable_tags_settings` (required; object)
        - `enabled` (required; boolean): Whether immutable tags are enabled
        - `rules` (required; array): List of immutable tag rules
          - `items` (string)
      - `storage_size` (integer; format: int64; nullable): Storage size in bytes
      - `source` (string; nullable): Source of the repository, where it was created from
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `POST /v2/namespaces/{namespace}/repositories/{repository}/immutabletags/verify`

**Verify repository immutable tags**

Validates the immutable tags regex passed in the request body and returns a list of tags matching it in this repository.

**Only users with administrative privileges for the repository can call this endpoint.**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `regex` (required; string; pattern: `^[a-z0-9]+((\\.|_|__|-+)[a-z0-9]+)*(\\/[a-z0-9]+((\\.|_|__|-+)[a-z0-9]+)*)*$`): Immutable tags rule regex pattern. Must match format: \[a-z0-9]+((\\.|*|\_\_|-+)\[a-z0-9]+)\*(\\/\[a-z0-9]+((\\.|*|\_\_|-+)\[a-z0-9]+)*)*
      - Example: `v.*`

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `tags` (required; array): List of tags that match the provided regex pattern
        - Example: `["v1.0.0","v2.1.3","latest"]`
        - `items` (string)
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `POST /v2/repositories/{namespace}/{repository}/groups`

**Assign a group (Team) to a repository for access**

Assigns an organization group (team) to a repository with a specified permission level.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `group_id` (required; integer; format: int64): The ID of the organization group to grant access to
      - Example: `12345`
    - `permission` (required; string; enum: `read`, `write`, `admin`): The permission level to grant to the group: - read: Can view and pull from the repository - write: Can view, pull, and push to the repository - admin: Can view, pull, push, and manage repository settings
      - Example: `write`
  - Example: `{"group_id":12345,"permission":"write"}`

**Responses**

- `200`: Repository group permission created successfully
  - Media type: `application/json`
    - Schema (object)
      - `group_name` (string): The name of the group
        - Example: `developers`
      - `permission` (string; enum: `read`, `write`, `admin`): The permission level granted to the group
        - Example: `write`
      - `group_id` (integer; format: int64): The ID of the group
        - Example: `12345`
    - Example: `{"group_name":"developers","permission":"write","group_id":12345}`
- `400`: Bad Request - Invalid request parameters
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
      - `message` (string)

### `GET /v2/namespaces/{namespace}/repositories`

**List repositories in a namespace**

Returns a list of repositories within the specified namespace (organization or user).

Public repositories are accessible to everyone, while private repositories require appropriate authentication and permissions.

<span class="oat"></span>

**OAT listing behavior**: an OAT with the `scope-repository-list` scope sees all repositories including private ones. An OAT without that scope only sees public repositories. This filtering is silent: the response is a normal `200` with no indication that private repositories were withheld.

**Authentication:** `bearerAuth` or

**Parameters**

- `namespace` (path; required; string)
- `page` (query; integer; default: `1`; minimum: `1`): Page number to get. Defaults to 1.
- `page_size` (query; integer; default: `10`; minimum: `1`; maximum: `100`): Number of repositories to get per page. Defaults to 10. Max of 100.
- `name` (query; string): Filter repositories by name (partial match).
- `ordering` (query; string; enum: `name`, `-name`, `last_updated`, `-last_updated`, `pull_count`, `-pull_count`): Order repositories by the specified field. Prefix with '-' for descending order. Available options: - `name` / `-name`: Repository name (ascending/descending) - `last_updated` / `-last_updated`: Last update time (ascending/descending) - `pull_count` / `-pull_count`: Number of pulls (ascending/descending)

**Responses**

- `200`: List of repositories
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `count` (integer): total number of results available across all pages
          - `next` (string; nullable): link to next page of results if any
          - `previous` (string; nullable): link to previous page of results if any
        - `variant 2` (object)
          - `results` (array)
            - `items` (object)
              - `name` (string): Name of the repository
                - Example: `hello-world`
              - `namespace` (string): Namespace (organization or username) that owns the repository
                - Example: `docker`
              - `repository_type` (string; nullable; enum: `image`, `plugin`, `null`): Type of repository
                - Example: `image`
              - `status` (integer): Repository status code
                - Example: `1`
              - `status_description` (string; enum: `active`, `inactive`): Human-readable repository status
                - Example: `active`
              - `description` (string; nullable): Repository description
                - Example: `Hello World! (an example of minimal Dockerization)`
              - `is_private` (boolean): Whether the repository is private
                - Example: `false`
              - `star_count` (integer; minimum: `0`): Number of users who starred this repository
                - Example: `1234`
              - `pull_count` (integer; minimum: `0`): Total number of pulls for this repository
                - Example: `50000000`
              - `last_updated` (string; format: date-time; nullable): ISO 8601 timestamp of when the repository was last updated
                - Example: `2023-12-01T10:30:00Z`
              - `last_modified` (string; format: date-time; nullable): ISO 8601 timestamp of when the repository was last modified
                - Example: `2023-12-01T10:30:00Z`
              - `date_registered` (string; format: date-time): ISO 8601 timestamp of when the repository was created
                - Example: `2013-06-19T19:07:54Z`
              - `affiliation` (string): User's affiliation with the repository (empty string if no affiliation)
                - Example: \`\`
              - `media_types` (array): Media types supported by this repository
                - Example: `["application/vnd.docker.plugin.v1+json"]`
                - `items` (string)
              - `content_types` (array): Content types supported by this repository
                - Example: `["plugin"]`
                - `items` (string)
              - `categories` (array): Categories associated with this repository
                - Example: `[]`
                - `items` (object): Repository category for classification and discovery
                  - `name` (required; string; minimum length: `1`): Human-readable name of the category
                    - Example: `Databases`
                  - `slug` (required; string; minimum length: `1`; pattern: `^[a-z0-9]+(?:-[a-z0-9]+)*$`): URL-friendly identifier for the category
                    - Example: `databases`
              - `storage_size` (integer; minimum: `0`): Storage size in bytes used by this repository
                - Example: `232719127`
    - Example `repositories_list`: `{"count":287,"next":"https://hub.docker.com/v2/namespaces/docker/repositories?page=2&page_size=2","previous":null,"results":[{"name":"highland_builder","namespace":"docker","repository_type":"image","status":1,"status_description":"active","description":"Image for performing Docker build requests","is_private":false,"star_count":7,"pull_count":15722123,"last_updated":"2023-06-20T10:44:45.459826Z","last_modified":"2024-10-16T13:48:34.145251Z","date_registered":"2015-05-19T21:13:35.937763Z","affiliation":"","media_types":["application/octet-stream","application/vnd.docker.container.image.v1+json","application/vnd.docker.distribution.manifest.v1+prettyjws"],"content_types":["unrecognized","image"],"categories":[{"name":"Languages & frameworks","slug":"languages-and-frameworks"},{"name":"Integration & delivery","slug":"integration-and-delivery"},{"name":"Operating systems","slug":"operating-systems"}],"storage_size":488723114800},{"name":"whalesay","namespace":"docker","repository_type":null,"status":1,"status_description":"active","description":"An image for use in the Docker demo tutorial","is_private":false,"star_count":757,"pull_count":130737682,"last_updated":"2015-06-19T19:06:27.388123Z","last_modified":"2024-10-16T13:48:34.145251Z","date_registered":"2015-06-09T18:16:36.527329Z","affiliation":"","media_types":["application/vnd.docker.distribution.manifest.v1+prettyjws"],"content_types":["image"],"categories":[{"name":"Languages & frameworks","slug":"languages-and-frameworks"},{"name":"Integration & delivery","slug":"integration-and-delivery"}],"storage_size":103666708}]}`
- `400`: Bad Request - Invalid request parameters
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
    - Example `invalid_ordering`: `{"fields":{"ordering":["Invalid ordering value. Must be one of: name, -name, last_updated, -last_updated, pull_count, -pull_count"]},"text":"Invalid ordering value"}`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Page not found - occurs when requesting a page number `>1` that exceeds the available results
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `POST /v2/namespaces/{namespace}/repositories`

**Create a new repository**

Creates a new repository within the specified namespace. The repository will be created
with the provided metadata including name, description, and privacy settings.

<span class="oat"></span>

**Authentication:** `BearerAuth`

**Parameters**

- `namespace` (path; required; string)

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string; minimum length: `2`; maximum length: `255`; pattern: `^[a-z0-9]+(?:[._-][a-z0-9]+)*$`): The name of the repository. Must be 2-255 characters long and may only include alphanumeric characters, periods (.), underscores (\_), or hyphens (-). Letters must be lowercase.
      - Example: `my-app`
    - `namespace` (required; string): The namespace where the repository will be created
      - Example: `myorganization`
    - `description` (string; maximum length: `100`): Short description of the repository
      - Example: `A sample application repository`
    - `full_description` (string; maximum length: `25000`): Detailed description of the repository
      - Example: `This is a comprehensive description of my application repository that contains additional details about the project, its purpose, usage instructions, and other relevant information.`
    - `registry` (string): The registry where the repository will be hosted
      - Example: `docker.io`
    - `is_private` (boolean; default: `false`): Whether the repository should be private
      - Example: `false`
  - Example: `{"name":"my-app","namespace":"myorganization","description":"A sample application repository","full_description":"This is a comprehensive description of my application repository that contains additional details about the project.","registry":"docker.io","is_private":false}`

**Responses**

- `201`: Repository created successfully
  - Media type: `application/json`
    - Schema (object)
      - `user` (required; string): Username of the repository owner
      - `name` (required; string): Repository name
      - `namespace` (required; string): Repository namespace
      - `repository_type` (string; nullable): Type of the repository
      - `status` (required; integer): Repository status code
      - `status_description` (required; string): Description of the repository status
      - `description` (required; string): Short description of the repository
      - `is_private` (required; boolean): Whether the repository is private
      - `is_automated` (required; boolean): Whether the repository has automated builds
      - `star_count` (required; integer; format: int64): Number of stars
      - `pull_count` (required; integer; format: int64): Number of pulls
      - `last_updated` (required; string; format: date-time): ISO 8601 timestamp of when repository was last updated
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_modified` (string; format: date-time; nullable): ISO 8601 timestamp of when repository was last modified
        - Example: `2021-01-05T21:06:53.506400Z`
      - `date_registered` (required; string; format: date-time): ISO 8601 timestamp of when repository was created
        - Example: `2021-01-05T21:06:53.506400Z`
      - `collaborator_count` (required; integer; format: int64): Number of collaborators
      - `affiliation` (string; nullable): Repository affiliation
      - `hub_user` (string; nullable): Hub user information
      - `has_starred` (required; boolean): Whether the current user has starred this repository
      - `full_description` (string; nullable): Full description of the repository
      - `permissions` (required; object)
        - `read` (required; boolean): Read permission
        - `write` (required; boolean): Write permission
        - `admin` (required; boolean): Admin permission
      - `media_types` (required; array): Supported media types
        - `items` (string; nullable)
      - `content_types` (required; array): Supported content types
        - `items` (string)
      - `categories` (required; array): Repository categories
        - `items` (object): Repository category for classification and discovery
          - `name` (required; string; minimum length: `1`): Human-readable name of the category
            - Example: `Databases`
          - `slug` (required; string; minimum length: `1`; pattern: `^[a-z0-9]+(?:-[a-z0-9]+)*$`): URL-friendly identifier for the category
            - Example: `databases`
      - `immutable_tags_settings` (required; object)
        - `enabled` (required; boolean): Whether immutable tags are enabled
        - `rules` (required; array): List of immutable tag rules
          - `items` (string)
      - `storage_size` (integer; format: int64; nullable): Storage size in bytes
      - `source` (string; nullable): Source of the repository, where it was created from
    - Example: `{"name":"my-app","namespace":"myorganization","repository_type":"image","status":1,"status_description":"Active","description":"A sample application repository","is_private":false,"is_automated":false,"star_count":0,"pull_count":0,"last_updated":"2025-01-20T10:30:00Z","date_registered":"2025-01-20T10:30:00Z","collaborator_count":0,"hub_user":"myorganization","has_starred":false,"full_description":"This is a comprehensive description of my application repository that contains additional details about the project.","media_types":[],"content_types":[],"categories":[],"immutable_tags_settings":{"enabled":false,"rules":[]},"storage_size":null,"source":null}`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `500`: Internal
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/namespaces/{namespace}/repositories/{repository}`

**Get repository in a namespace**

Returns a repository within the specified namespace (organization or user).

Public repositories are accessible to everyone, while private repositories require appropriate authentication and permissions.

<span class="oat"></span>

**Authentication:** `bearerAuth` or

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `user` (required; string): Username of the repository owner
      - `name` (required; string): Repository name
      - `namespace` (required; string): Repository namespace
      - `repository_type` (string; nullable): Type of the repository
      - `status` (required; integer): Repository status code
      - `status_description` (required; string): Description of the repository status
      - `description` (required; string): Short description of the repository
      - `is_private` (required; boolean): Whether the repository is private
      - `is_automated` (required; boolean): Whether the repository has automated builds
      - `star_count` (required; integer; format: int64): Number of stars
      - `pull_count` (required; integer; format: int64): Number of pulls
      - `last_updated` (required; string; format: date-time): ISO 8601 timestamp of when repository was last updated
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_modified` (string; format: date-time; nullable): ISO 8601 timestamp of when repository was last modified
        - Example: `2021-01-05T21:06:53.506400Z`
      - `date_registered` (required; string; format: date-time): ISO 8601 timestamp of when repository was created
        - Example: `2021-01-05T21:06:53.506400Z`
      - `collaborator_count` (required; integer; format: int64): Number of collaborators
      - `affiliation` (string; nullable): Repository affiliation
      - `hub_user` (string; nullable): Hub user information
      - `has_starred` (required; boolean): Whether the current user has starred this repository
      - `full_description` (string; nullable): Full description of the repository
      - `permissions` (required; object)
        - `read` (required; boolean): Read permission
        - `write` (required; boolean): Write permission
        - `admin` (required; boolean): Admin permission
      - `media_types` (required; array): Supported media types
        - `items` (string; nullable)
      - `content_types` (required; array): Supported content types
        - `items` (string)
      - `categories` (required; array): Repository categories
        - `items` (object): Repository category for classification and discovery
          - `name` (required; string; minimum length: `1`): Human-readable name of the category
            - Example: `Databases`
          - `slug` (required; string; minimum length: `1`; pattern: `^[a-z0-9]+(?:-[a-z0-9]+)*$`): URL-friendly identifier for the category
            - Example: `databases`
      - `immutable_tags_settings` (required; object)
        - `enabled` (required; boolean): Whether immutable tags are enabled
        - `rules` (required; array): List of immutable tag rules
          - `items` (string)
      - `storage_size` (integer; format: int64; nullable): Storage size in bytes
      - `source` (string; nullable): Source of the repository, where it was created from
    - Example: `{"name":"my-app","namespace":"myorganization","repository_type":"image","status":1,"status_description":"Active","description":"A sample application repository","is_private":false,"is_automated":false,"star_count":0,"pull_count":0,"last_updated":"2025-01-20T10:30:00Z","date_registered":"2025-01-20T10:30:00Z","collaborator_count":0,"hub_user":"myorganization","has_starred":false,"full_description":"This is a comprehensive description of my application repository that contains additional details about the project.","media_types":[],"content_types":[],"categories":[],"immutable_tags_settings":{"enabled":false,"rules":[]},"storage_size":null,"source":null}`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `500`: Internal
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `HEAD /v2/namespaces/{namespace}/repositories/{repository}`

**Check repository in a namespace**

Check a repository within the specified namespace (organization or user).

Public repositories are accessible to everyone, while private repositories require appropriate authentication and permissions.

<span class="oat"></span>

**Authentication:** `bearerAuth` or

**Parameters**

- `namespace` (path; required; string)
- `repository` (path; required; string)

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `user` (required; string): Username of the repository owner
      - `name` (required; string): Repository name
      - `namespace` (required; string): Repository namespace
      - `repository_type` (string; nullable): Type of the repository
      - `status` (required; integer): Repository status code
      - `status_description` (required; string): Description of the repository status
      - `description` (required; string): Short description of the repository
      - `is_private` (required; boolean): Whether the repository is private
      - `is_automated` (required; boolean): Whether the repository has automated builds
      - `star_count` (required; integer; format: int64): Number of stars
      - `pull_count` (required; integer; format: int64): Number of pulls
      - `last_updated` (required; string; format: date-time): ISO 8601 timestamp of when repository was last updated
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_modified` (string; format: date-time; nullable): ISO 8601 timestamp of when repository was last modified
        - Example: `2021-01-05T21:06:53.506400Z`
      - `date_registered` (required; string; format: date-time): ISO 8601 timestamp of when repository was created
        - Example: `2021-01-05T21:06:53.506400Z`
      - `collaborator_count` (required; integer; format: int64): Number of collaborators
      - `affiliation` (string; nullable): Repository affiliation
      - `hub_user` (string; nullable): Hub user information
      - `has_starred` (required; boolean): Whether the current user has starred this repository
      - `full_description` (string; nullable): Full description of the repository
      - `permissions` (required; object)
        - `read` (required; boolean): Read permission
        - `write` (required; boolean): Write permission
        - `admin` (required; boolean): Admin permission
      - `media_types` (required; array): Supported media types
        - `items` (string; nullable)
      - `content_types` (required; array): Supported content types
        - `items` (string)
      - `categories` (required; array): Repository categories
        - `items` (object): Repository category for classification and discovery
          - `name` (required; string; minimum length: `1`): Human-readable name of the category
            - Example: `Databases`
          - `slug` (required; string; minimum length: `1`; pattern: `^[a-z0-9]+(?:-[a-z0-9]+)*$`): URL-friendly identifier for the category
            - Example: `databases`
      - `immutable_tags_settings` (required; object)
        - `enabled` (required; boolean): Whether immutable tags are enabled
        - `rules` (required; array): List of immutable tag rules
          - `items` (string)
      - `storage_size` (integer; format: int64; nullable): Storage size in bytes
      - `source` (string; nullable): Source of the repository, where it was created from
    - Example: `{"name":"my-app","namespace":"myorganization","repository_type":"image","status":1,"status_description":"Active","description":"A sample application repository","is_private":false,"is_automated":false,"star_count":0,"pull_count":0,"last_updated":"2025-01-20T10:30:00Z","date_registered":"2025-01-20T10:30:00Z","collaborator_count":0,"hub_user":"myorganization","has_starred":false,"full_description":"This is a comprehensive description of my application repository that contains additional details about the project.","media_types":[],"content_types":[],"categories":[],"immutable_tags_settings":{"enabled":false,"rules":[]},"storage_size":null,"source":null}`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `500`: Internal
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/members`

**List org members**

Returns a list of members for an organization.

*The following fields are only visible to orgs with insights enabled.*

- `last_logged_in_at`
- `last_seen_at`
- `last_desktop_version`

To make visible, please see [View Insights for organization users](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `search` (query; integer): Search term.
- `page` (query; integer): Page number (starts on 1).
- `page_size` (query; integer): Number of items (rows) per page.
- `invites` (query; boolean): Include invites in the response.
- `type` (query; string; enum: `all`, `invitee`, `member`)
  - Example: `all`
- `role` (query; string; enum: `owner`, `editor`, `member`)
  - Example: `owner`

**Responses**

- `200`: List of members
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `count` (number): The total number of items that match with the search.
          - Example: `120`
        - `previous` (string): The URL or link for the previous page of items.
          - Example: `https://hub.docker.com/v2/some/resources/items?page=1&page_size=20`
        - `next` (string): The URL or link for the next page of items.
          - Example: `https://hub.docker.com/v2/some/resources/items?page=3&page_size=20`
        - `results` (array): List of accounts.
          - `items` (object)
            - allOf:
              - `variant 1` (object)
                - `id` (string): The UUID trimmed
                  - Example: `0ab70deb065a43fcacd55d48caa945d8`
                - `company` (string)
                  - Example: `Docker Inc`
                - `date_joined` (string)
                  - Example: `2021-01-05T21:06:53.506400Z`
                - `full_name` (string)
                  - Example: `Jon Snow`
                - `gravatar_email` (string)
                - `gravatar_url` (string)
                - `location` (string)
                - `profile_url` (string)
                - `type` (string; enum: `User`, `Org`)
                  - Example: `User`
                - `username` (string)
                  - Example: `dockeruser`
            - `email` (string): User's email address
              - Example: `example@docker.com`
            - `role` (string; enum: `Owner`, `Editor`, `Member`, `Invitee`): The member's role in the organization (`Owner`, `Editor`, `Member`, or `Invitee` for pending invites).
              - Example: `Owner`
            - `groups` (array): Groups (Teams) that the user is member of
              - Example: `["developers","owners"]`
              - `items` (string)
            - `is_guest` (boolean): If the organization has verified domains, members that have email addresses outside of those domains will be flagged as guests.
              - Example: `false`
            - `primary_email` (string): The user's email primary address.
              - Example: `example@docker.com`
            - `last_logged_in_at` (string; format: date-time): Last time the user logged in. To access this field, you must have insights visible for your organization. See [Insights](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).
              - Example: `2021-01-05T21:06:53.506400Z`
            - `last_seen_at` (string; format: date-time): Last time the user was seen. To access this field, you must have insights visible for your organization. See [Insights](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).
              - Example: `2021-01-05T21:06:53.506400Z`
            - `last_desktop_version` (string): Last desktop version the user used. To access this field, you must have insights visible for your organization. See [Insights](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).
              - Example: `4.29.0`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/members/export`

**Export org members CSV**

Export members of an organization as a CSV

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`

**Responses**

- `200`: Exported members
  - Header `Content-Disposition` (string)
  - Media type: `text/csv`
    - Schema (array)
      - `items` (object)
        - `Name` (required; string): First and last name of the member
        - `Username` (required; string): Username of the member
        - `Email` (required; string): Email address of the member
        - `Type` (required; string; enum: `Invitee`, `User`): Type of the member
        - `Permission` (string; enum: `Owner`, `Member`): Permission of the member
        - `Teams` (string): Comma-separated list of teams the member is part of
          - Example: `team-1, team-2`
        - `Date Joined` (required; string): Date the member joined the organization
          - Example: `2020-01-01 15:00:51.193355 +0000 UTC`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `PUT /v2/orgs/{org_name}/members/{username}`

**Update org member (role)**

Updates the role of a member in the organization.
***Only users in the "owners" group of the organization can use this endpoint.***

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `username` (path; required; string): Username, identifier for the user (namespace, DockerID).

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `role` (required; string): Role of the member. Valid values are the core roles `owner`, `editor`, and `member`, or the name of an existing [custom role](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/manage/). Use the custom role's name identifier, not its label or UUID.
      - Example: `owner`

**Responses**

- `200`: Member role updated
  - Media type: `application/json`
    - Schema (object)
      - allOf:
        - `variant 1` (object)
          - `id` (string): The UUID trimmed
            - Example: `0ab70deb065a43fcacd55d48caa945d8`
          - `company` (string)
            - Example: `Docker Inc`
          - `date_joined` (string)
            - Example: `2021-01-05T21:06:53.506400Z`
          - `full_name` (string)
            - Example: `Jon Snow`
          - `gravatar_email` (string)
          - `gravatar_url` (string)
          - `location` (string)
          - `profile_url` (string)
          - `type` (string; enum: `User`, `Org`)
            - Example: `User`
          - `username` (string)
            - Example: `dockeruser`
      - `email` (string): User's email address
        - Example: `example@docker.com`
      - `role` (string; enum: `Owner`, `Editor`, `Member`, `Invitee`): The member's role in the organization (`Owner`, `Editor`, `Member`, or `Invitee` for pending invites).
        - Example: `Owner`
      - `groups` (array): Groups (Teams) that the user is member of
        - Example: `["developers","owners"]`
        - `items` (string)
      - `is_guest` (boolean): If the organization has verified domains, members that have email addresses outside of those domains will be flagged as guests.
        - Example: `false`
      - `primary_email` (string): The user's email primary address.
        - Example: `example@docker.com`
      - `last_logged_in_at` (string; format: date-time): Last time the user logged in. To access this field, you must have insights visible for your organization. See [Insights](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_seen_at` (string; format: date-time): Last time the user was seen. To access this field, you must have insights visible for your organization. See [Insights](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).
        - Example: `2021-01-05T21:06:53.506400Z`
      - `last_desktop_version` (string): Last desktop version the user used. To access this field, you must have insights visible for your organization. See [Insights](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).
        - Example: `4.29.0`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `DELETE /v2/orgs/{org_name}/members/{username}`

**Remove member from org**

Removes the member from the org, ie. all groups in the org, unless they're the last owner

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `username` (path; required; string): Username, identifier for the user (namespace, DockerID).

**Responses**

- `204`: Member removed successfully
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/invites`

**List org invites**

Return all pending invites for a given org, only team owners can call this endpoint

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `data` (array)
        - `items` (object)
          - `id` (string): uuid representing the invite id
            - Example: `e36eca69-4cc8-4f17-9845-ae8c2b832691`
          - `inviter_username` (string)
            - Example: `moby`
          - `invitee` (string): can either be a dockerID for registered users or an email for non-registered users
            - Example: `invitee@docker.com`
          - `org` (string): name of the org to join
            - Example: `docker`
          - `team` (string): name of the team (user group) to join
            - Example: `owners`
          - `created_at` (string)
            - Example: `2021-10-28T18:30:19.520861Z`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/groups`

**Get groups of an organization**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `page` (query; integer): Page number (starts on 1).
- `page_size` (query; integer): Number of items (rows) per page.
- `username` (query; string): Get groups for the specified username in the organization.
- `search` (query; string): Get groups for the specified group in the organization.

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `count` (number)
        - Example: `1`
      - `next` (string)
        - Example: `null`
      - `previous` (string)
        - Example: `null`
      - `results` (array)
        - `items` (object)
          - `id` (number): Group ID
            - Example: `10`
          - `uuid` (string): UUID for the group
          - `name` (string): Name of the group
            - Example: `mygroup`
          - `description` (string): Description of the group
            - Example: `Groups description`
          - `member_count` (number): Member count of the group
            - Example: `10`
          - `role` (string): Role assigned to the team. A core role (`owner`, `editor`, or `member`) or the name of a custom role (not the label or UUID).
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `POST /v2/orgs/{org_name}/groups`

**Create a new group**

Create a new group within an organization.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string)
    - `description` (string)

**Responses**

- `201`: Group created successfully
  - Media type: `application/json`
    - Schema (object)
      - `id` (number): Group ID
        - Example: `10`
      - `uuid` (string): UUID for the group
      - `name` (string): Name of the group
        - Example: `mygroup`
      - `description` (string): Description of the group
        - Example: `Groups description`
      - `member_count` (number): Member count of the group
        - Example: `10`
      - `role` (string): Role assigned to the team. A core role (`owner`, `editor`, or `member`) or the name of a custom role (not the label or UUID).
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/groups/{group_name}`

**Get a group of an organization**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `id` (number): Group ID
        - Example: `10`
      - `uuid` (string): UUID for the group
      - `name` (string): Name of the group
        - Example: `mygroup`
      - `description` (string): Description of the group
        - Example: `Groups description`
      - `member_count` (number): Member count of the group
        - Example: `10`
      - `role` (string): Role assigned to the team. A core role (`owner`, `editor`, or `member`) or the name of a custom role (not the label or UUID).
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `PUT /v2/orgs/{org_name}/groups/{group_name}`

**Update the details for an organization group**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string)
    - `description` (string)

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `id` (number): Group ID
        - Example: `10`
      - `uuid` (string): UUID for the group
      - `name` (string): Name of the group
        - Example: `mygroup`
      - `description` (string): Description of the group
        - Example: `Groups description`
      - `member_count` (number): Member count of the group
        - Example: `10`
      - `role` (string): Role assigned to the team. A core role (`owner`, `editor`, or `member`) or the name of a custom role (not the label or UUID).
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `PATCH /v2/orgs/{org_name}/groups/{group_name}`

**Update some details for an organization group**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `name` (string)
    - `description` (string)
    - `role` (string): Role assigned to the team. Valid values are the core roles `owner`, `editor`, and `member`, or the name of an existing [custom role](https://docs.docker.com/enterprise/security/roles-and-permissions/custom-roles/manage/). Use the custom role's name identifier, not its label or UUID.

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `id` (number): Group ID
        - Example: `10`
      - `uuid` (string): UUID for the group
      - `name` (string): Name of the group
        - Example: `mygroup`
      - `description` (string): Description of the group
        - Example: `Groups description`
      - `member_count` (number): Member count of the group
        - Example: `10`
      - `role` (string): Role assigned to the team. A core role (`owner`, `editor`, or `member`) or the name of a custom role (not the label or UUID).
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `DELETE /v2/orgs/{org_name}/groups/{group_name}`

**Delete an organization group**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.

**Responses**

- `204`: Group deleted successfully
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/orgs/{org_name}/groups/{group_name}/members`

**List members of a group**

List the members (users) that are in a group.
If user is owner of the org or has otherwise elevated permissions, they can search by email and the result will also contain emails.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.
- `page` (query; integer): Page number (starts on 1).
- `page_size` (query; integer): Number of items (rows) per page.
- `search` (query; string): Search members by username, full\_name or email.

**Responses**

- `200`
  - Media type: `application/json`
    - Schema (object)
      - `count` (number)
        - Example: `1`
      - `next` (string)
        - Example: `null`
      - `previous` (string)
        - Example: `null`
      - `results` (array)
        - `items` (object)
          - `id` (string): The UUID trimmed
            - Example: `0ab70deb065a43fcacd55d48caa945d8`
          - `company` (string)
            - Example: `Docker Inc`
          - `date_joined` (string; format: date-time)
            - Example: `2021-01-05T21:06:53.506400Z`
          - `full_name` (string)
            - Example: `John Snow`
          - `gravatar_email` (string)
          - `gravatar_url` (string)
          - `location` (string)
          - `profile_url` (string)
          - `type` (string; enum: `User`, `Org`)
            - Example: `User`
          - `username` (string)
            - Example: `dockeruser`
          - `email` (string)
            - Example: `dockeruser@docker.com`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `POST /v2/orgs/{org_name}/groups/{group_name}/members`

**Add a member to a group**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `member` (required; string)
      - Example: `jonsnow`

**Responses**

- `200`: OK
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `500`: Internal
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `DELETE /v2/orgs/{org_name}/groups/{group_name}/members/{username}`

**Remove a user from a group**

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Name of the organization (namespace).
  - Example: `myorganization`
- `group_name` (path; required; string): Name of the group (team) in the organization.
- `username` (path; required; string): Username, identifier for the user (namespace, DockerID).

**Responses**

- `204`: User removed successfully
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `DELETE /v2/invites/{id}`

**Cancel an invite**

Mark the invite as cancelled so it doesn't show up on the list of pending invites

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string)

**Responses**

- `204`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `PATCH /v2/invites/{id}/resend`

**Resend an invite**

Resend a pending invite to the user, any org owner can resend an invite

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string)

**Responses**

- `204`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `POST /v2/invites/bulk`

**Bulk create invites**

Create multiple invites by emails or DockerIDs. Only a team owner can create invites.

<span class="oat"></span>

**Authentication:** `bearerAuth`

**Parameters**

- `X-Analytics-Client-Feature` (header; string): Optional string that indicates the feature used to submit the bulk invites (e.g.'file', 'web')

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `org` (required; string): organization name
      - Example: `docker`
    - `team` (string): team name
      - Example: `owners`
    - `role` (string): role for invitees
      - Example: `member`
    - `invitees` (required; array): list of invitees emails or Docker Ids
      - Example: `["invitee1DockerId","invitee2@docker.com","invitee3@docker.com"]`
      - `items` (string): invitee email or Docker ID
    - `dry_run` (boolean): Optional, run through validation but don't actually change data.
      - Example: `true`

**Responses**

- `202`: Accepted
  - Media type: `application/json`
    - Schema (object)
      - `invitees` (object)
        - Example: `{"invitees":[{"invitee":"invitee@docker.com","status":"invited","invite":{"id":"e36eca69-4cc8-4f17-9845-ae8c2b832691","inviter_username":"moby","invitee":"invitee@docker.com","org":"docker","team":"owners","created_at":"2021-10-28T18:30:19.520861Z"}},{"invitee":"invitee2@docker.com","status":"existing_org_member"},{"invitee":"invitee3@docker.com","status":"invalid_email_or_docker_id"}]}`
        - `invitees` (array): A list of invitees
          - `items` (object)
            - `invitee` (string): invitee email or Docker ID
            - `status` (string): status of the invite or validation error
            - `invite` (object)
              - `id` (string): uuid representing the invite id
                - Example: `e36eca69-4cc8-4f17-9845-ae8c2b832691`
              - `inviter_username` (string)
                - Example: `moby`
              - `invitee` (string): can either be a dockerID for registered users or an email for non-registered users
                - Example: `invitee@docker.com`
              - `org` (string): name of the org to join
                - Example: `docker`
              - `team` (string): name of the team (user group) to join
                - Example: `owners`
              - `created_at` (string)
                - Example: `2021-10-28T18:30:19.520861Z`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)
- `409`: Conflict
  - Media type: `application/json`
    - Schema (object)
      - `errinfo` (object)
        - `items` (string)
      - `detail` (string)
      - `message` (string)

### `GET /v2/scim/2.0/ServiceProviderConfig`

**Get service provider config**

Returns a service provider config for Docker's configuration.

**Authentication:** `bearerSCIMAuth`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - Example: `["urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"]`
        - `items` (string)
      - `documentationUri` (string)
        - Example: \`\`
      - `patch` (object)
        - `supported` (boolean)
          - Example: `false`
      - `bulk` (object)
        - `supported` (boolean)
          - Example: `false`
        - `maxOperations` (integer)
        - `maxPayloadSize` (integer)
      - `filter` (object)
        - `supported` (boolean)
          - Example: `true`
        - `maxResults` (integer)
          - Example: `99999`
      - `changePassword` (object)
        - `supported` (boolean)
          - Example: `false`
      - `sort` (object)
        - `supported` (boolean)
          - Example: `true`
      - `etag` (object)
        - `supported` (boolean)
          - Example: `false`
      - `authenticationSchemes` (object)
        - `name` (string)
          - Example: `OAuth 2.0 Bearer Token`
        - `description` (string)
          - Example: `The OAuth 2.0 Bearer Token Authentication scheme. OAuth enables clients to access protected resources by obtaining an access token, which is defined in RFC 6750 as "a string representing an access authorization issued to the client", rather than using the resource owner's credentials directly.`
        - `specUri` (string)
          - Example: `http://tools.ietf.org/html/rfc6750`
        - `type` (string)
          - Example: `oauthbearertoken`
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `GET /v2/scim/2.0/ResourceTypes`

**List resource types**

Returns all resource types supported for the SCIM configuration.

**Authentication:** `bearerSCIMAuth`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - `items` (string)
          - Example: `urn:ietf:params:scim:api:messages:2.0:ListResponse`
      - `totalResults` (integer)
        - Example: `1`
      - `resources` (array)
        - `items` (object)
          - `schemas` (array)
            - Example: `["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]`
            - `items` (string)
          - `id` (string)
            - Example: `User`
          - `name` (string)
            - Example: `User`
          - `description` (string)
            - Example: `User`
          - `endpoint` (string)
            - Example: `/Users`
          - `schema` (string)
            - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `GET /v2/scim/2.0/ResourceTypes/{name}`

**Get a resource type**

Returns a resource type by name.

**Authentication:** `bearerSCIMAuth`

**Parameters**

- `name` (path; required; string)
  - Example: `User`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - Example: `["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]`
        - `items` (string)
      - `id` (string)
        - Example: `User`
      - `name` (string)
        - Example: `User`
      - `description` (string)
        - Example: `User`
      - `endpoint` (string)
        - Example: `/Users`
      - `schema` (string)
        - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `404`: Not Found
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `404`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `GET /v2/scim/2.0/Schemas`

**List schemas**

Returns all schemas supported for the SCIM configuration.

**Authentication:** `bearerSCIMAuth`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - `items` (string)
          - Example: `urn:ietf:params:scim:api:messages:2.0:ListResponse`
      - `totalResults` (integer)
        - Example: `1`
      - `resources` (array)
        - `items` (object)
          - `schemas` (array)
            - Example: `["urn:ietf:params:scim:schemas:core:2.0:Schema"]`
            - `items` (string)
          - `id` (string)
            - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
          - `name` (string)
            - Example: `User`
          - `description` (string)
            - Example: `User Account`
          - `attributes` (array)
            - Example: `[]`
            - `items`
              - allOf:
                - `variant 1` (object)
                  - `name` (string)
                    - Example: `userName`
                  - `type` (string; enum: `string`, `boolean`, `complex`)
                    - Example: `string`
                  - `multiValued` (boolean)
                    - Example: `false`
                  - `description` (string)
                    - Example: `Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider's entire set of Users.`
                  - `required` (boolean)
                    - Example: `true`
                  - `caseExact` (boolean)
                    - Example: `false`
                  - `mutability` (string)
                    - Example: `readWrite`
                  - `returned` (string)
                    - Example: `default`
                  - `uniqueness` (string)
                    - Example: `server`
                - `variant 2` (object)
                  - `subAttributes` (array)
                    - `items` (object)
                      - `name` (string)
                        - Example: `userName`
                      - `type` (string; enum: `string`, `boolean`, `complex`)
                        - Example: `string`
                      - `multiValued` (boolean)
                        - Example: `false`
                      - `description` (string)
                        - Example: `Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider's entire set of Users.`
                      - `required` (boolean)
                        - Example: `true`
                      - `caseExact` (boolean)
                        - Example: `false`
                      - `mutability` (string)
                        - Example: `readWrite`
                      - `returned` (string)
                        - Example: `default`
                      - `uniqueness` (string)
                        - Example: `server`
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `GET /v2/scim/2.0/Schemas/{id}`

**Get a schema**

Returns a schema by ID.

**Authentication:** `bearerSCIMAuth`

**Parameters**

- `id` (path; required; string)
  - Example: `urn:ietf:params:scim:schemas:core:2.0:User`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - Example: `["urn:ietf:params:scim:schemas:core:2.0:Schema"]`
        - `items` (string)
      - `id` (string)
        - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
      - `name` (string)
        - Example: `User`
      - `description` (string)
        - Example: `User Account`
      - `attributes` (array)
        - Example: `[]`
        - `items`
          - allOf:
            - `variant 1` (object)
              - `name` (string)
                - Example: `userName`
              - `type` (string; enum: `string`, `boolean`, `complex`)
                - Example: `string`
              - `multiValued` (boolean)
                - Example: `false`
              - `description` (string)
                - Example: `Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider's entire set of Users.`
              - `required` (boolean)
                - Example: `true`
              - `caseExact` (boolean)
                - Example: `false`
              - `mutability` (string)
                - Example: `readWrite`
              - `returned` (string)
                - Example: `default`
              - `uniqueness` (string)
                - Example: `server`
            - `variant 2` (object)
              - `subAttributes` (array)
                - `items` (object)
                  - `name` (string)
                    - Example: `userName`
                  - `type` (string; enum: `string`, `boolean`, `complex`)
                    - Example: `string`
                  - `multiValued` (boolean)
                    - Example: `false`
                  - `description` (string)
                    - Example: `Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider's entire set of Users.`
                  - `required` (boolean)
                    - Example: `true`
                  - `caseExact` (boolean)
                    - Example: `false`
                  - `mutability` (string)
                    - Example: `readWrite`
                  - `returned` (string)
                    - Example: `default`
                  - `uniqueness` (string)
                    - Example: `server`
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `404`: Not Found
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `404`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `GET /v2/scim/2.0/Users`

**List users**

Returns paginated users for an organization. Use `startIndex` and `count` query parameters to receive paginated results.

**Sorting:**

Sorting allows you to specify the order in which resources are returned by specifying a combination of `sortBy` and `sortOrder` query parameters.

The `sortBy` parameter specifies the attribute whose value will be used to order the returned responses. The `sortOrder` parameter defines the order in which the `sortBy` parameter is applied. Allowed values are "ascending" and "descending".

**Filtering:**

You can request a subset of resources by specifying the `filter` query parameter containing a filter expression. Attribute names and attribute operators used in filters are case insensitive. The filter parameter must contain at least one valid expression. Each expression must contain an attribute name followed by an attribute operator and an optional value.

Supported operators are listed below.

- `eq` equal
- `ne` not equal
- `co` contains
- `sw` starts with
- `and` Logical "and"
- `or` Logical "or"
- `not` "Not" function
- `()` Precedence grouping

**Authentication:** `bearerSCIMAuth`

**Parameters**

- `startIndex` (query; integer; minimum: `1`)
  - Example: `1`
- `count` (query; integer; minimum: `1`; maximum: `200`)
  - Example: `10`
- `filter` (query; string)
  - Example: `userName eq "jon.snow@docker.com"`
- `attributes` (query; string): Comma delimited list of attributes to limit to in the response.
  - Example: `userName,displayName`
- `sortOrder` (query; string; enum: `ascending`, `descending`)
- `sortBy` (query; string): User attribute to sort by.
  - Example: `userName`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - Example: `["urn:ietf:params:scim:api:messages:2.0:ListResponse"]`
        - `items` (string)
      - `totalResults` (integer)
        - Example: `1`
      - `startIndex` (integer)
        - Example: `1`
      - `itemsPerPage` (integer)
        - Example: `10`
      - `resources` (array)
        - `items` (object)
          - `schemas` (array)
            - `items` (string; minimum items: `1`)
              - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
          - `id` (string): The unique identifier for the user. A v4 UUID.
            - Example: `d80f7c79-7730-49d8-9a41-7c42fb622d9c`
          - `userName` (string): The user's email address. This must be reachable via email.
            - Example: `jon.snow@docker.com`
          - `name` (object)
            - `givenName` (string)
              - Example: `Jon`
            - `familyName` (string)
              - Example: `Snow`
          - `displayName` (string): The username in Docker. Also known as the "Docker ID".
            - Example: `jonsnow`
          - `active` (boolean)
            - Example: `true`
          - `emails` (array)
            - `items` (object)
              - `value` (string)
                - Example: `jon.snow@docker.com`
              - `display` (string)
                - Example: `jon.snow@docker.com`
              - `primary` (boolean)
                - Example: `true`
          - `groups` (array)
            - `items` (object)
              - `value` (string)
                - Example: `nightswatch`
              - `display` (string)
                - Example: `nightswatch`
          - `meta` (object)
            - `resourceType` (string)
              - Example: `User`
            - `location` (string)
              - Example: `https://hub.docker.com/v2/scim/2.0/Users/d80f7c79-7730-49d8-9a41-7c42fb622d9c`
            - `created` (string; format: date-time): The creation date for the user as a RFC3339 formatted string.
              - Example: `2022-05-20T00:54:18Z`
            - `lastModified` (string; format: date-time): The date the user was last modified as a RFC3339 formatted string.
              - Example: `2022-05-20T00:54:18Z`
- `400`: Bad Request
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `400`
          - `scimType` (string): Some types of errors will return this per the specification.
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `403`: Forbidden
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `403`
- `404`: Not Found
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `404`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `POST /v2/scim/2.0/Users`

**Create user**

Creates a user. If the user already exists by email, they are assigned to the organization on the "company" team.

**Authentication:** `bearerSCIMAuth`

**Request body** (required)

- Media type: `application/scim+json`
  - Schema (object)
    - `schemas` (required; array)
      - `items` (string; minimum items: `1`)
        - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
    - `userName` (required; string): The user's email address. This must be reachable via email.
      - Example: `jon.snow@docker.com`
    - `name` (object)
      - `givenName` (string)
        - Example: `Jon`
      - `familyName` (string)
        - Example: `Snow`

**Responses**

- `201`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - `items` (string; minimum items: `1`)
          - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
      - `id` (string): The unique identifier for the user. A v4 UUID.
        - Example: `d80f7c79-7730-49d8-9a41-7c42fb622d9c`
      - `userName` (string): The user's email address. This must be reachable via email.
        - Example: `jon.snow@docker.com`
      - `name` (object)
        - `givenName` (string)
          - Example: `Jon`
        - `familyName` (string)
          - Example: `Snow`
      - `displayName` (string): The username in Docker. Also known as the "Docker ID".
        - Example: `jonsnow`
      - `active` (boolean)
        - Example: `true`
      - `emails` (array)
        - `items` (object)
          - `value` (string)
            - Example: `jon.snow@docker.com`
          - `display` (string)
            - Example: `jon.snow@docker.com`
          - `primary` (boolean)
            - Example: `true`
      - `groups` (array)
        - `items` (object)
          - `value` (string)
            - Example: `nightswatch`
          - `display` (string)
            - Example: `nightswatch`
      - `meta` (object)
        - `resourceType` (string)
          - Example: `User`
        - `location` (string)
          - Example: `https://hub.docker.com/v2/scim/2.0/Users/d80f7c79-7730-49d8-9a41-7c42fb622d9c`
        - `created` (string; format: date-time): The creation date for the user as a RFC3339 formatted string.
          - Example: `2022-05-20T00:54:18Z`
        - `lastModified` (string; format: date-time): The date the user was last modified as a RFC3339 formatted string.
          - Example: `2022-05-20T00:54:18Z`
- `400`: Bad Request
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `400`
          - `scimType` (string): Some types of errors will return this per the specification.
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `403`: Forbidden
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `403`
- `404`: Not Found
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `404`
- `409`: Conflict
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `409`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `GET /v2/scim/2.0/Users/{id}`

**Get a user**

Returns a user by ID.

**Authentication:** `bearerSCIMAuth`

**Parameters**

- `id` (path; required; string): The user ID.
  - Example: `d80f7c79-7730-49d8-9a41-7c42fb622d9c`

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - `items` (string; minimum items: `1`)
          - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
      - `id` (string): The unique identifier for the user. A v4 UUID.
        - Example: `d80f7c79-7730-49d8-9a41-7c42fb622d9c`
      - `userName` (string): The user's email address. This must be reachable via email.
        - Example: `jon.snow@docker.com`
      - `name` (object)
        - `givenName` (string)
          - Example: `Jon`
        - `familyName` (string)
          - Example: `Snow`
      - `displayName` (string): The username in Docker. Also known as the "Docker ID".
        - Example: `jonsnow`
      - `active` (boolean)
        - Example: `true`
      - `emails` (array)
        - `items` (object)
          - `value` (string)
            - Example: `jon.snow@docker.com`
          - `display` (string)
            - Example: `jon.snow@docker.com`
          - `primary` (boolean)
            - Example: `true`
      - `groups` (array)
        - `items` (object)
          - `value` (string)
            - Example: `nightswatch`
          - `display` (string)
            - Example: `nightswatch`
      - `meta` (object)
        - `resourceType` (string)
          - Example: `User`
        - `location` (string)
          - Example: `https://hub.docker.com/v2/scim/2.0/Users/d80f7c79-7730-49d8-9a41-7c42fb622d9c`
        - `created` (string; format: date-time): The creation date for the user as a RFC3339 formatted string.
          - Example: `2022-05-20T00:54:18Z`
        - `lastModified` (string; format: date-time): The date the user was last modified as a RFC3339 formatted string.
          - Example: `2022-05-20T00:54:18Z`
- `400`: Bad Request
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `400`
          - `scimType` (string): Some types of errors will return this per the specification.
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `403`: Forbidden
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `403`
- `404`: Not Found
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `404`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`

### `PUT /v2/scim/2.0/Users/{id}`

**Update a user**

Updates a user. This route is used to change the user's name, activate, and deactivate the user.

**Authentication:** `bearerSCIMAuth`

**Parameters**

- `id` (path; required; string): The user ID.
  - Example: `d80f7c79-7730-49d8-9a41-7c42fb622d9c`

**Request body** (required)

- Media type: `application/scim+json`
  - Schema (object)
    - `schemas` (required; array)
      - `items` (string; minimum items: `1`)
        - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
    - `name`
      - allOf:
        - `variant 1` (object)
          - `givenName` (string)
            - Example: `Jon`
          - `familyName` (string)
            - Example: `Snow`
        - `variant 2`: If this is omitted from the request, the update will skip the update on it. We will only ever change the name, but not clear it.
    - `enabled` (boolean; default: `false`): If this is omitted from the request, it will default to false resulting in a deactivated user.

**Responses**

- `200`
  - Media type: `application/scim+json`
    - Schema (object)
      - `schemas` (array)
        - `items` (string; minimum items: `1`)
          - Example: `urn:ietf:params:scim:schemas:core:2.0:User`
      - `id` (string): The unique identifier for the user. A v4 UUID.
        - Example: `d80f7c79-7730-49d8-9a41-7c42fb622d9c`
      - `userName` (string): The user's email address. This must be reachable via email.
        - Example: `jon.snow@docker.com`
      - `name` (object)
        - `givenName` (string)
          - Example: `Jon`
        - `familyName` (string)
          - Example: `Snow`
      - `displayName` (string): The username in Docker. Also known as the "Docker ID".
        - Example: `jonsnow`
      - `active` (boolean)
        - Example: `true`
      - `emails` (array)
        - `items` (object)
          - `value` (string)
            - Example: `jon.snow@docker.com`
          - `display` (string)
            - Example: `jon.snow@docker.com`
          - `primary` (boolean)
            - Example: `true`
      - `groups` (array)
        - `items` (object)
          - `value` (string)
            - Example: `nightswatch`
          - `display` (string)
            - Example: `nightswatch`
      - `meta` (object)
        - `resourceType` (string)
          - Example: `User`
        - `location` (string)
          - Example: `https://hub.docker.com/v2/scim/2.0/Users/d80f7c79-7730-49d8-9a41-7c42fb622d9c`
        - `created` (string; format: date-time): The creation date for the user as a RFC3339 formatted string.
          - Example: `2022-05-20T00:54:18Z`
        - `lastModified` (string; format: date-time): The date the user was last modified as a RFC3339 formatted string.
          - Example: `2022-05-20T00:54:18Z`
- `400`: Bad Request
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `400`
          - `scimType` (string): Some types of errors will return this per the specification.
- `401`: Unauthorized
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `401`
- `403`: Forbidden
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `403`
- `404`: Not Found
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `404`
- `409`: Conflict
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `409`
- `500`: Internal Error
  - Media type: `application/scim+json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `status` (string): The status code for the response in string format.
          - `schemas` (array)
            - `items` (string; default: `urn:ietf:params:scim:api:messages:2.0:Error`)
          - `detail` (string): Details about why the request failed.
        - `variant 2` (object)
          - `status`
            - Example: `500`
