> Commit-pinned source for Docker main: [content/reference/api/hub/latest.md](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/content/reference/api/hub/latest.md)

# Docker Hub API reference

## API specification

- Version: `2-beta`

- Base URL: `https://hub.docker.com`

Docker Hub is a service provided by Docker for finding and sharing container images with your team.

It is the world's largest library and community for container images.

In addition to the [Docker Hub UI](https://docs.docker.com/docker-hub/) and [Docker Hub CLI tool](https://github.com/docker/hub-tool#readme) (currently experimental), Docker provides an API that allows you to interact with Docker Hub.

Browse through the Docker Hub API documentation to explore the supported endpoints.

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

**Request body**: Login details.

**Responses**

- `200`: Authentication successful
- `401`: Authentication failed or second factor required

### `POST /v2/users/2fa-login`

**Second factor authentication**

When a user has two-factor authentication (2FA) enabled, this is the second call to perform after `/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.

**Request body**: Login details.

**Responses**

- `200`: Authentication successful
- `401`: Authentication failed

### `POST /v2/auth/token`

**Create access token**

Creates and returns a short-lived access token in JWT format for use as a bearer when calling Docker APIs.

If successful, the access token returned should be used in the HTTP Authorization header like
`Authorization: Bearer {access_token}`.

***If your organization has SSO enforced, you must use a personal access token (PAT) instead of a password.***

**Request body**

**Responses**

- `200`: Token created
- `401`: Unauthorized

### `GET /v2/access-tokens`

**List personal access tokens**

Returns a paginated list of personal access tokens.

**Parameters**

- `page` (query)
- `page_size` (query)

**Responses**

- `200`: OK
- `400`: Bad Request
- `401`: Unauthorized

### `POST /v2/access-tokens`

**Create personal access token**

Creates and returns a personal access token.

**Request body**

**Responses**

- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized

### `GET /v2/access-tokens/{uuid}`

**Get personal access token**

Returns a personal access token by UUID.

**Parameters**

- `uuid` (path, required)

**Responses**

- `200`: OK
- `401`: Unauthorized
- `404`: Not Found

### `PATCH /v2/access-tokens/{uuid}`

**Update personal access token**

Updates a personal access token partially. You can either update the token's label or enable/disable it.

**Parameters**

- `uuid` (path, required)

**Request body**

**Responses**

- `200`: OK
- `400`: Bad Request
- `401`: Unauthorized

### `DELETE /v2/access-tokens/{uuid}`

**Delete personal access token**

Deletes a personal access token permanently. This cannot be undone.

**Parameters**

- `uuid` (path, required)

**Responses**

- `204`: A successful response.
- `401`: Unauthorized
- `404`: Not Found

### `GET /v2/auditlogs/{account}/actions`

**List audit log actions**

List audit log actions for a namespace to be used as a filter for querying audit log events.

<span class="oat"></span>

**Parameters**

- `account` (path, required): Namespace to query audit log actions for.

**Responses**

- `200`: A successful response.
- `429`:
- `500`:
- `default`: An unexpected error response.

### `GET /v2/auditlogs/{account}`

**List audit log events**

List audit log events for a given namespace.

<span class="oat"></span>

**Parameters**

- `account` (path, required): Namespace to query audit logs for.
- `action` (query): action name one of \["repo.tag.push", ...]. Optional parameter to filter specific audit log actions.
- `name` (query): name. Optional parameter to filter audit log events to a specific name. For repository events, this is the name of the repository. For organization events, this is the name of the organization. For team member events, this is the username of the team member.
- `actor` (query): actor name. Optional parameter to filter audit log events to the specific user who triggered the event.
- `from` (query): Start of the time window you wish to query audit events for.
- `to` (query): End of the time window you wish to query audit events for.
- `page` (query): page - specify page number. Page number to get.
- `page_size` (query): page\_size - specify page size. Number of events to return per page.

**Responses**

- `200`: A successful response.
- `429`:
- `500`:
- `default`: An unexpected error response.

### `GET /v2/orgs/{name}/settings`

**Get organization settings**

Returns organization settings by name.

**Parameters**

- `name` (path, required): Name of the organization.

**Responses**

- `200`: OK
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `PUT /v2/orgs/{name}/settings`

**Update organization settings**

Updates an organization's settings. Some settings are only used when the organization is on a business subscription.

***Only users with administrative privileges for the organization (owner role) can modify these settings.***

The following settings are only used on a business subscription:

- `restricted_images`

**Parameters**

- `name` (path, required): Name of the organization.

**Request body**

**Responses**

- `200`: OK
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/orgs/{name}/access-tokens`

**List access tokens**

List access tokens for an organization.

**Parameters**

- `page` (query)
- `page_size` (query)

**Responses**

- `200`: OK
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `POST /v2/orgs/{name}/access-tokens`

**Create access token**

Create an access token for an organization.

**Request body**

**Responses**

- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/orgs/{org_name}/access-tokens/{access_token_id}`

**Get access token**

Get details of a specific access token for an organization.

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `access_token_id` (path, required): The ID of the access token to retrieve

**Responses**

- `200`: OK
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `PATCH /v2/orgs/{org_name}/access-tokens/{access_token_id}`

**Update access token**

Update a specific access token for an organization.

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `access_token_id` (path, required): The ID of the access token to retrieve

**Request body**

**Responses**

- `200`: OK
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `DELETE /v2/orgs/{org_name}/access-tokens/{access_token_id}`

**Delete access token**

Delete a specific access token for an organization. This action cannot be undone.

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `access_token_id` (path, required): The ID of the access token to retrieve

**Responses**

- `204`: Access token deleted successfully
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/namespaces/{namespace}/repositories/{repository}/tags`

**List repository tags**

Returns the list of tags for the specified repository.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)
- `page` (query): Page number to get. Defaults to 1.
- `page_size` (query): Number of items to get per page. Defaults to 10. Max of 100.

**Responses**

- `200`: list repository tags
- `403`: Forbidden
- `404`: Not Found

### `HEAD /v2/namespaces/{namespace}/repositories/{repository}/tags`

**Check repository tags**

Checks whether the repository has any tags.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)

**Responses**

- `200`: Repository contains tags
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/namespaces/{namespace}/repositories/{repository}/tags/{tag}`

**Read repository tag**

Returns details for a specific tag in the specified repository.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)
- `tag` (path, required)

**Responses**

- `200`: repository tag
- `403`: Forbidden
- `404`: Not Found

### `HEAD /v2/namespaces/{namespace}/repositories/{repository}/tags/{tag}`

**Check repository tag**

Checks whether the specified tag exists in the repository.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)
- `tag` (path, required)

**Responses**

- `200`: Repository tag exists
- `403`: Forbidden
- `404`: Not Found

### `PATCH /v2/namespaces/{namespace}/repositories/{repository}/immutabletags`

**Update repository immutable tags**

Updates the immutable tags configuration for this repository.

**Only users with administrative privileges for the repository can modify these settings.**

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)

**Request body**

**Responses**

- `200`:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `POST /v2/namespaces/{namespace}/repositories/{repository}/immutabletags/verify`

**Verify repository immutable tags**

Validates the immutable tags regex passed in the request body and returns a list of tags matching it in this repository.

**Only users with administrative privileges for the repository can call this endpoint.**

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)

**Request body**

**Responses**

- `200`:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `POST /v2/repositories/{namespace}/{repository}/groups`

**Assign a group (Team) to a repository for access**

Assigns an organization group (team) to a repository with a specified permission level.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)

**Request body**

**Responses**

- `200`: Repository group permission created successfully
- `400`: Bad Request - Invalid request parameters
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/namespaces/{namespace}/repositories`

**List repositories in a namespace**

Returns a list of repositories within the specified namespace (organization or user).

Public repositories are accessible to everyone, while private repositories require appropriate authentication and permissions.

<span class="oat"></span>

**OAT listing behavior**: an OAT with the `scope-repository-list` scope sees all repositories including private ones. An OAT without that scope only sees public repositories. This filtering is silent: the response is a normal `200` with no indication that private repositories were withheld.

**Parameters**

- `namespace` (path, required)
- `page` (query): Page number to get. Defaults to 1.
- `page_size` (query): Number of repositories to get per page. Defaults to 10. Max of 100.
- `name` (query): Filter repositories by name (partial match).
- `ordering` (query): Order repositories by the specified field. Prefix with '-' for descending order. Available options: - `name` / `-name`: Repository name (ascending/descending) - `last_updated` / `-last_updated`: Last update time (ascending/descending) - `pull_count` / `-pull_count`: Number of pulls (ascending/descending)

**Responses**

- `200`: List of repositories
- `400`: Bad Request - Invalid request parameters
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page not found - occurs when requesting a page number `>1` that exceeds the available results

### `POST /v2/namespaces/{namespace}/repositories`

**Create a new repository**

Creates a new repository within the specified namespace. The repository will be created
with the provided metadata including name, description, and privacy settings.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)

**Request body**

**Responses**

- `201`: Repository created successfully
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal

### `GET /v2/namespaces/{namespace}/repositories/{repository}`

**Get repository in a namespace**

Returns a repository within the specified namespace (organization or user).

Public repositories are accessible to everyone, while private repositories require appropriate authentication and permissions.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)

**Responses**

- `200`
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal

### `HEAD /v2/namespaces/{namespace}/repositories/{repository}`

**Check repository in a namespace**

Check a repository within the specified namespace (organization or user).

Public repositories are accessible to everyone, while private repositories require appropriate authentication and permissions.

<span class="oat"></span>

**Parameters**

- `namespace` (path, required)
- `repository` (path, required)

**Responses**

- `200`
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal

### `GET /v2/orgs/{org_name}/members`

**List org members**

Returns a list of members for an organization.

*The following fields are only visible to orgs with insights enabled.*

- `last_logged_in_at`
- `last_seen_at`
- `last_desktop_version`

To make visible, please see [View Insights for organization users](https://docs.docker.com/admin/insights/#view-insights-for-organization-users).

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `search` (query): Search term.
- `page` (query): Page number (starts on 1).
- `page_size` (query): Number of items (rows) per page.
- `invites` (query): Include invites in the response.
- `type` (query)
- `role` (query)

**Responses**

- `200`: List of members
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/orgs/{org_name}/members/export`

**Export org members CSV**

Export members of an organization as a CSV

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).

**Responses**

- `200`: Exported members
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `PUT /v2/orgs/{org_name}/members/{username}`

**Update org member (role)**

Updates the role of a member in the organization.
***Only users in the "owners" group of the organization can use this endpoint.***

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `username` (path, required): Username, identifier for the user (namespace, DockerID).

**Request body**

**Responses**

- `200`: Member role updated
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `DELETE /v2/orgs/{org_name}/members/{username}`

**Remove member from org**

Removes the member from the org, ie. all groups in the org, unless they're the last owner

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `username` (path, required): Username, identifier for the user (namespace, DockerID).

**Responses**

- `204`: Member removed successfully
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/orgs/{org_name}/invites`

**List org invites**

Return all pending invites for a given org, only team owners can call this endpoint

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).

**Responses**

- `200`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/orgs/{org_name}/groups`

**Get groups of an organization**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `page` (query): Page number (starts on 1).
- `page_size` (query): Number of items (rows) per page.
- `username` (query): Get groups for the specified username in the organization.
- `search` (query): Get groups for the specified group in the organization.

**Responses**

- `200`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `POST /v2/orgs/{org_name}/groups`

**Create a new group**

Create a new group within an organization.

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).

**Request body**

**Responses**

- `201`: Group created successfully
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden

### `GET /v2/orgs/{org_name}/groups/{group_name}`

**Get a group of an organization**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.

**Responses**

- `200`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `PUT /v2/orgs/{org_name}/groups/{group_name}`

**Update the details for an organization group**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.

**Request body**

**Responses**

- `200`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `PATCH /v2/orgs/{org_name}/groups/{group_name}`

**Update some details for an organization group**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.

**Request body**

**Responses**

- `200`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `DELETE /v2/orgs/{org_name}/groups/{group_name}`

**Delete an organization group**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.

**Responses**

- `204`: Group deleted successfully
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `GET /v2/orgs/{org_name}/groups/{group_name}/members`

**List members of a group**

List the members (users) that are in a group.
If user is owner of the org or has otherwise elevated permissions, they can search by email and the result will also contain emails.

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.
- `page` (query): Page number (starts on 1).
- `page_size` (query): Number of items (rows) per page.
- `search` (query): Search members by username, full\_name or email.

**Responses**

- `200`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `POST /v2/orgs/{org_name}/groups/{group_name}/members`

**Add a member to a group**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.

**Request body**

**Responses**

- `200`: OK
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal

### `DELETE /v2/orgs/{org_name}/groups/{group_name}/members/{username}`

**Remove a user from a group**

<span class="oat"></span>

**Parameters**

- `org_name` (path, required): Name of the organization (namespace).
- `group_name` (path, required): Name of the group (team) in the organization.
- `username` (path, required): Username, identifier for the user (namespace, DockerID).

**Responses**

- `204`: User removed successfully
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `DELETE /v2/invites/{id}`

**Cancel an invite**

Mark the invite as cancelled so it doesn't show up on the list of pending invites

<span class="oat"></span>

**Parameters**

- `id` (path, required)

**Responses**

- `204`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `PATCH /v2/invites/{id}/resend`

**Resend an invite**

Resend a pending invite to the user, any org owner can resend an invite

<span class="oat"></span>

**Parameters**

- `id` (path, required)

**Responses**

- `204`:
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found

### `POST /v2/invites/bulk`

**Bulk create invites**

Create multiple invites by emails or DockerIDs. Only a team owner can create invites.

<span class="oat"></span>

**Parameters**

- `X-Analytics-Client-Feature` (header): Optional string that indicates the feature used to submit the bulk invites (e.g.'file', 'web')

**Request body**

**Responses**

- `202`: Accepted
- `400`: Bad Request
- `409`: Conflict

### `GET /v2/scim/2.0/ServiceProviderConfig`

**Get service provider config**

Returns a service provider config for Docker's configuration.

**Responses**

- `200`:
- `401`: Unauthorized
- `500`: Internal Error

### `GET /v2/scim/2.0/ResourceTypes`

**List resource types**

Returns all resource types supported for the SCIM configuration.

**Responses**

- `200`:
- `401`: Unauthorized
- `500`: Internal Error

### `GET /v2/scim/2.0/ResourceTypes/{name}`

**Get a resource type**

Returns a resource type by name.

**Parameters**

- `name` (path, required)

**Responses**

- `200`:
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Error

### `GET /v2/scim/2.0/Schemas`

**List schemas**

Returns all schemas supported for the SCIM configuration.

**Responses**

- `200`:
- `401`: Unauthorized
- `500`: Internal Error

### `GET /v2/scim/2.0/Schemas/{id}`

**Get a schema**

Returns a schema by ID.

**Parameters**

- `id` (path, required)

**Responses**

- `200`:
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Error

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

**Parameters**

- `startIndex` (query):
- `count` (query):
- `filter` (query):
- `attributes` (query): Comma delimited list of attributes to limit to in the response.
- `sortOrder` (query)
- `sortBy` (query): User attribute to sort by.

**Responses**

- `200`:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Error

### `POST /v2/scim/2.0/Users`

**Create user**

Creates a user. If the user already exists by email, they are assigned to the organization on the "company" team.

**Request body**

**Responses**

- `201`:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `409`: Conflict
- `500`: Internal Error

### `GET /v2/scim/2.0/Users/{id}`

**Get a user**

Returns a user by ID.

**Parameters**

- `id` (path, required): The user ID.

**Responses**

- `200`:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Error

### `PUT /v2/scim/2.0/Users/{id}`

**Update a user**

Updates a user. This route is used to change the user's name, activate, and deactivate the user.

**Parameters**

- `id` (path, required): The user ID.

**Request body**

**Responses**

- `200`:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `409`: Conflict
- `500`: Internal Error
