> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/datasource_permissions.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/datasource_permissions.md)

# Data source Permissions API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

> The Data Source Permissions is only available in Grafana Enterprise. Read more about [Grafana Enterprise](https://grafana.com/docs/grafana/latest/introduction/grafana-enterprise/).

> If you are running Grafana Enterprise, for some endpoints you'll need to have specific permissions. Refer to [Role-based access control permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/) for more information.

This API can be used to list, add and remove permissions for a data source.

Permissions can be set for a user, team, service account or a basic role (Admin, Editor, Viewer).

### Optional `ds_type` query parameter {#ds-type}

Every endpoint in this API accepts an optional query parameter `ds_type`. Set it to the data source **plugin type** (for example `prometheus` or `loki`). Use `ds_type` when more than one data source in the organization shares the same UID so Grafana can resolve the correct instance.

## Get permissions for a data source

`GET /api/access-control/datasources/:uid`

Gets all existing permissions for the data source with the given `uid`.

Append `?ds_type=<TYPE>` when you need to disambiguate the UID; refer to Optional `ds_type` query parameter.

**Required permissions**

See note in the [introduction](#data-source-permissions-api) for an explanation.

| Action                       | Scope                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------- |
| datasources.permissions:read | datasources:\*<br>datasources:uid:\*<br>datasources:uid:my\_datasource (single data source) |

### Examples

**Example request:**

```http
GET /api/access-control/datasources/my_datasource HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example request (with `ds_type` when the UID is not unique):**

```http
GET /api/access-control/datasources/my_datasource?ds_type=prometheus HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 551

[
    {
        "id": 1,
        "roleName": "fixed:datasources:reader",
        "isManaged": false,
        "isInherited": false,
        "isServiceAccount": false,
        "userId": 1,
        "userLogin": "admin_user",
        "userAvatarUrl": "/avatar/admin_user",
        "actions": [
            "datasources:read",
            "datasources:query",
            "datasources:read",
            "datasources:query",
            "datasources:write",
            "datasources:delete"
        ],
        "permission": "Edit"
    },
    {
        "id": 2,
        "roleName": "managed:teams:1:permissions",
        "isManaged": true,
        "isInherited": false,
        "isServiceAccount": false,
        "team": "A team",
        "teamId": 1,
        "teamAvatarUrl": "/avatar/523d70c8551046f441727d690431858c",
        "actions": [
            "datasources:read",
            "datasources:query"
        ],
        "permission": "Query"
    },
    {
        "id": 3,
        "roleName": "basic:admin",
        "isManaged": false,
        "isInherited": false,
        "isServiceAccount": false,
        "builtInRole": "Admin",
        "actions": [
            "datasources:query",
            "datasources:read",
            "datasources:write",
            "datasources:delete"
        ],
        "permission": "Edit"
    },
]
```

Status codes:

- **200** - Ok
- **401** - Unauthorized
- **403** - Access denied
- **500** - Internal error

## Add or revoke access to a data source for a user

`POST /api/access-control/datasources/:uid/users/:id`

Sets user permission for the data source with the given `uid`.

Append `?ds_type=<TYPE>` when you need to disambiguate the UID; refer to Optional `ds_type` query parameter.

To add a permission, set the `permission` field to either `Query`, `Edit`, or `Admin`.
To remove a permission, set the `permission` field to an empty string.

**Required permissions**

See note in the [introduction](#data-source-permissions-api) for an explanation.

| Action                        | Scope                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| datasources.permissions:write | datasources:\*<br>datasources:uid:\*<br>datasources:uid:my\_datasource (single data source) |

### Examples

**Example request:**

```http
POST /api/access-control/datasources/my_datasource/users/1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "permission": "Query",
}
```

When granting a `Query` permission, the user also has read access to the data source.

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message": "Permission updated"}
```

**Example request:**

```http
POST /api/access-control/datasources/my_datasource/users/1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "permission": "",
}
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message": "Permission removed"}
```

Status codes:

- **200** - Ok
- **400** - Permission cannot be added, see response body for details
- **401** - Unauthorized
- **403** - Access denied

## Add or revoke access to a data source for a team

`POST /api/access-control/datasources/:uid/teams/:id`

Sets team permission for the data source with the given `uid`.

Append `?ds_type=<TYPE>` when you need to disambiguate the UID; refer to Optional `ds_type` query parameter.

To add a permission, set the `permission` field to either `Query`, `Edit`, or `Admin`.
To remove a permission, set the `permission` field to an empty string.

When adding `Query`, `Edit`, or `Admin` permissions, the user implicitly has `Read` access.

**Required permissions**

See note in the [introduction](#data-source-permissions-api) for an explanation.

| Action                        | Scope                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| datasources.permissions:write | datasources:\*<br>datasources:uid:\*<br>datasources:uid:my\_datasource (single data source) |

### Examples

**Example request:**

```http
POST /api/access-control/datasources/my_datasource/teams/1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "permission": "Edit",
}
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message": "Permission updated"}
```

**Example request:**

```http
POST /api/access-control/datasources/my_datasource/teams/1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "permission": "",
}
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message": "Permission removed"}
```

Status codes:

- **200** - Ok
- **400** - Permission cannot be added, see response body for details
- **401** - Unauthorized
- **403** - Access denied

## Add or revoke access to a data source for a basic role

`POST /api/access-control/datasources/:uid/builtInRoles/:builtinRoleName`

Sets permission for the data source with the given `uid` to all users who have the specified basic role.

Append `?ds_type=<TYPE>` when you need to disambiguate the UID; refer to Optional `ds_type` query parameter.

You can set permissions for the following basic roles: `Admin`, `Editor`, `Viewer`.

To add a permission, set the `permission` field to either `Query`, `Edit`, or `Admin`.
To remove a permission, set the `permission` field to an empty string.

**Required permissions**

See note in the [introduction](#data-source-permissions-api) for an explanation.

| Action                        | Scope                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| datasources.permissions:write | datasources:\*<br>datasources:uid:\*<br>datasources:uid:my\_datasource (single data source) |

### Examples

**Example request:**

```http
POST /api/access-control/datasources/my_datasource/builtInRoles/Admin
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "permission": "Edit",
}
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message": "Permission updated"}
```

**Example request:**

```http
POST /api/access-control/datasources/my_datasource/builtInRoles/Viewer
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "permission": "",
}
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message": "Permission removed"}
```

Status codes:

- **200** - Ok
- **400** - Permission cannot be added, see response body for details
- **401** - Unauthorized
- **403** - Access denied
