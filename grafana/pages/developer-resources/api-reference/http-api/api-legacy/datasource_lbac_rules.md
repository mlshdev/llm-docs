> Release-pinned source for Grafana v13.2.1: [docs/sources/developer-resources/api-reference/http-api/api-legacy/datasource_lbac_rules.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/developer-resources/api-reference/http-api/api-legacy/datasource_lbac_rules.md)

# Data source LBAC rules API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

LBAC (Label-Based Access Control) rules can be set for teams.

## Get LBAC rules for a data source

`GET /api/datasources/uid/:uid/lbac/teams`

Gets all existing LBAC rules for the data source with the given `uid`.

**Required permissions**

| Action           | Scope                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| datasources:read | datasources:*<br>datasources:uid:*<br>datasources:uid:my\_datasource (single data source) |

### Examples

**Example request:**

```
GET /api/datasources/uid/my_datasource/lbac/teams HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 131

{
  "rules": [
    {
      "teamUId": "fdnd1pf4m9sxvc",
      "rules": [
        "{ service_name=\"bigquery-sync-mysql\" }"
      ]
    },
    {
      "teamUid": "dfed1p2m9sxvfc",
      "rules": [
        "{ service_name=\"api\" }"
      ]
    }
  ]
}
```

## Update LBAC rules for a data source

`PUT /api/datasources/uid/:uid/lbac/teams`

Updates LBAC rules for teams associated with the data source with the given `uid`. Here you submit a list of teams and the rules for each team.
Deleting a team from the list will remove the team's LBAC rules. You have to submit all teams and their rules to be updated, to remove a team's rules, you have to submit the current list of rules without the team.

**Required permissions**

| Action                        | Scope                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| datasources:write             | datasources:*<br>datasources:uid:*<br>datasources:uid:my\_datasource (single data source) |
| datasources.permissions:write | datasources:*<br>datasources:uid:*<br>datasources:uid:my\_datasource (single data source) |

### Examples

**Example request:**

```http
PUT /api/datasources/uid/my_datasource/lbac/teams
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "rules": [
    {
      "teamUId": "fdnd1pf4m9sxvc",
      "rules": [
        "{ service_name=\"bigquery-sync-mysql\" }"
      ]
    },
    {
      "teamUid": "dfed1p2m9sxvfc",
      "rules": [
        "{ service_name=\"api\" }"
      ]
    }
  ]
}
```

**Example response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 35

{
  "id": 1,
  "message": "Data source LBAC rules updated",
  "name": "loki",
  "rules": [
    {
      "teamUId": "fdnd1pf4m9sxvc",
      "rules": [
        "{ service_name=\"bigquery-sync-mysql\" }"
      ]
    },
    {
      "teamUid": "dfed1p2m9sxvfc",
      "rules": [
        "{ service_name=\"api\" }"
      ]
    }
  ],
  "uid": "ee1nm1t7spog0e",
}
```
