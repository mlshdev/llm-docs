> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/team_sync.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/team_sync.md)

# Team Sync API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

> Team Sync is only available in Grafana Enterprise. Read more about [Grafana Enterprise](https://grafana.com/docs/grafana/latest/introduction/grafana-enterprise/).

> If you are running Grafana Enterprise, for some endpoints you'll need to have specific permissions. Refer to [Role-based access control permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/) for more information.

## Get External Groups

`GET /api/teams/:teamId/groups`

**Required permissions**

See note in the introduction for an explanation.

| Action                 | Scope    |
| ---------------------- | -------- |
| teams.permissions:read | teams:\* |

**Example Request**:

```http
GET /api/teams/1/groups HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

[
  {
    "orgId": 1,
    "teamId": 1,
    "groupId": "cn=editors,ou=groups,dc=grafana,dc=org"
  }
]
```

Status Codes:

- **200** - Ok
- **401** - Unauthorized
- **403** - Permission denied

## Add External Group

`POST /api/teams/:teamId/groups`

**Required permissions**

See note in the introduction for an explanation.

| Action                  | Scope    |
| ----------------------- | -------- |
| teams.permissions:write | teams:\* |

**Example Request**:

```http
POST /api/teams/1/groups HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer YWRtaW46YWRtaW4=

{
  "groupId": "cn=editors,ou=groups,dc=grafana,dc=org"
}
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{"message":"Group added to Team"}
```

Status Codes:

- **200** - Ok
- **400** - Group is already added to this team
- **401** - Unauthorized
- **403** - Permission denied
- **404** - Team not found

## Remove External Group

`DELETE /api/teams/:teamId/groups?groupId=external-group-id`

**Required permissions**

See note in the introduction for an explanation.

| Action                  | Scope    |
| ----------------------- | -------- |
| teams.permissions:write | teams:\* |

**Example Request**:

```http
DELETE /api/teams/1/groups?groupId=cn%3Deditors%2Cou%3Dgroups%2Cdc%3Dgrafana%2Cdc%3Dorg HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{"message":"Team Group removed"}
```

Status Codes:

- **200** - Ok
- **401** - Unauthorized
- **403** - Permission denied
- **404** - Team not found/Group not found

## Search Team Groups

`GET /api/teams/:teamId/groups/search`

Search for team groups with pagination support.

**Required permissions**

| Action                 | Scope    |
| ---------------------- | -------- |
| teams.permissions:read | teams:\* |

**Example Request**:

```http
GET /api/teams/1/groups/search?name=editors&query=group&page=1&perpage=10 HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

[
  {
    "totalCount": 1,
    "teamGroups": [
      {
        "orgId": 1,
        "teamId": 1,
        "groupId": "cn=editors,ou=groups,dc=grafana,dc=org"
      }
    ],
    "page": 1,
    "perPage": 10
  }
]
```

Status Codes:

- **200** - Ok
- **400** - Bad Request (invalid team ID format or missing query parameter)
- **401** - Unauthorized
- **403** - Permission denied
- **500** - Internal Server Error
