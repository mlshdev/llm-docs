> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/folder_dashboard_search.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/folder_dashboard_search.md)

# Folder/Dashboard Search API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

## Search folders and dashboards

`GET /api/search/`

> Note: When using [Role-based access control](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/), search results will contain only dashboards and folders which you have access to.

Query parameters:

- **query** – Search Query
- **tag** – List of tags to search for
- **type** – Type to search for, `dash-folder` or `dash-db`
- **dashboardIds** – List of dashboard id's to search for
- **dashboardUID** - List of dashboard uid's to search for, It is deprecated since Grafana v9.1, please use dashboardUIDs instead
- **dashboardUIDs** – List of dashboard uid's to search for
- **folderUIDs** – List of folder UIDs to search in
- **starred** – Flag indicating if only starred Dashboards should be returned
- **limit** – Limit the number of returned results (max is 5000; default is 1000). If an invalid value is provided (for example, strings or special characters), the parameter defaults to 1000.
- **page** – Use this parameter to access hits beyond limit. Numbering starts at 1. limit param acts as page size.

**Example request for retrieving folders and dashboards at the root level**:

```http
GET /api/search?query=&starred=false HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response for retrieving folders and dashboards at the root level**:

```http
HTTP/1.1 200
Content-Type: application/json

[
  {
    "id": 163,
    "uid": "000000163",
    "orgId": 1,
    "title": "Folder",
    "url": "/dashboards/f/000000163/folder",
    "type": "dash-folder",
    "tags": [],
    "isStarred": false,
    "uri":"db/folder" // deprecated in Grafana v5.0
  },
  {
    "id":1,
    "uid": "cIBgcSjkk",
    "orgId": 1,
    "title":"Production Overview",
    "url": "/d/cIBgcSjkk/production-overview",
    "type":"dash-db",
    "tags":[prod],
    "isStarred":true,
    "uri":"db/production-overview" // deprecated in Grafana v5.0
  }
]
```

**Example request searching for dashboards**:

```http
GET /api/search?query=Production%20Overview&starred=true&tag=prod HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response searching for dashboards**:

```http
HTTP/1.1 200
Content-Type: application/json

[
  {
    "id":1,
    "uid": "cIBgcSjkk",
    "orgId": 1,
    "title":"Production Overview",
    "url": "/d/cIBgcSjkk/production-overview",
    "type":"dash-db",
    "tags":[prod],
    "isStarred":true,
    "folderId": 2,
    "folderUid": "000000163",
    "folderTitle": "Folder",
    "folderUrl": "/dashboards/f/000000163/folder",
    "uri":"db/production-overview" // deprecated in Grafana v5.0
  }
]
```
