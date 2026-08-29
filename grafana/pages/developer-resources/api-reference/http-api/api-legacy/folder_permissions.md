> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/folder_permissions.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/folder_permissions.md)

# Folder Permissions API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

This API can be used to update/get the permissions for a folder.

Permissions with `folderId=-1` are the default permissions for users with the Viewer and Editor roles. Permissions can be set for a user, a team or a role (Viewer or Editor). Permissions cannot be set for Admins - they always have access to everything.

The permission levels for the permission field:

- 1 = View
- 2 = Edit
- 4 = Admin

> If you are running Grafana Enterprise, for some endpoints you'll need to have specific permissions. Refer to [Role-based access control permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/) for more information.

## Get permissions for a folder

`GET /api/folders/:uid/permissions`

Gets all existing permissions for the folder with the given `uid`.

**Required permissions**

See note in the introduction for an explanation.

| Action                     | Scope       |
| -------------------------- | ----------- |
| `folders.permissions:read` | `folders:*` |

**Example request**:

```http
GET /api/folders/nErXDvCkzz/permissions HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 551

[
  {
    "id": 1,
    "folderId": -1,
    "created": "2017-06-20T02:00:00+02:00",
    "updated": "2017-06-20T02:00:00+02:00",
    "userId": 0,
    "userLogin": "",
    "userEmail": "",
    "teamId": 0,
    "team": "",
    "role": "Viewer",
    "permission": 1,
    "permissionName": "View",
    "uid": "nErXDvCkzz",
    "title": "",
    "slug": "",
    "isFolder": false,
    "url": ""
  },
  {
    "id": 2,
    "dashboardId": -1,
    "created": "2017-06-20T02:00:00+02:00",
    "updated": "2017-06-20T02:00:00+02:00",
    "userId": 0,
    "userLogin": "",
    "userEmail": "",
    "teamId": 0,
    "team": "",
    "role": "Editor",
    "permission": 2,
    "permissionName": "Edit",
    "uid": "",
    "title": "",
    "slug": "",
    "isFolder": false,
    "url": ""
  }
]
```

Status Codes:

- **200** - Ok
- **401** - Unauthorized
- **403** - Access denied
- **404** - Folder not found

## Update permissions for a folder

`POST /api/folders/:uid/permissions`

Updates permissions for a folder. This operation will remove existing permissions if they're not included in the request.

**Required permissions**

See note in the introduction for an explanation.

| Action                      | Scope       |
| --------------------------- | ----------- |
| `folders.permissions:write` | `folders:*` |

**Example request**:

```http
POST /api/folders/nErXDvCkzz/permissions
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
{
  "items": [
    {
      "role": "Viewer",
      "permission": 1
    },
    {
      "role": "Editor",
      "permission": 2
    },
    {
      "teamId": 1,
      "permission": 1
    },
    {
      "userId": 11,
      "permission": 4
    }
  ]
}
```

JSON body schema:

- **items** - The permission items to add/update. Items that are omitted from the list will be removed.

**Example response**:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{"message":"Folder permissions updated","id":1,"title":"Department ABC"}
```

Status Codes:

- **200** - Ok
- **401** - Unauthorized
- **403** - Access denied
- **404** - Dashboard not found
