> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/dashboard_versions.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/dashboard_versions.md)

# Dashboard Versions

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

## Get all dashboard versions by dashboard UID

Query parameters:

- **limit** - Maximum number of results to return. Defaults to 1000 if not set, or if an invalid value is passed in.
- **start** - Version to start from when returning queries

`GET /api/dashboards/uid/:uid/versions`

Gets all existing dashboard versions for the dashboard with the given `uid`.

**Example request for getting all dashboard versions**:

```http
GET /api/dashboards/uid/QA7wKklGz/versions?limit=2?start=0 HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 428

{
  "continueToken": "",
  "versions": [
    {
      "id": 2,
      "dashboardId": 1,
      "uid": "QA7wKklGz",
      "parentVersion": 1,
      "restoredFrom": 0,
      "version": 2,
      "created": "2017-06-08T17:24:33-04:00",
      "createdBy": "admin",
      "message": "Updated panel title"
    },
    {
      "id": 1,
      "dashboardId": 1,
      "uid": "QA7wKklGz",
      "parentVersion": 0,
      "restoredFrom": 0,
      "version": 1,
      "created": "2017-06-08T17:23:33-04:00",
      "createdBy": "admin",
      "message": "Initial save"
    }
  ]
}
```

Status Codes:

- **200** - Ok
- **400** - Errors
- **401** - Unauthorized
- **404** - Dashboard version not found

## Get dashboard version by dashboard UID

`GET /api/dashboards/uid/:uid/versions/:version`

Get the dashboard version with the given version, for the dashboard with the given UID.

**Example request for getting a dashboard version**:

```http
GET /api/dashboards/uid/QA7wKklGz/versions/1 HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response**:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Content-Length: 1300

{
  "id": 1,
  "dashboardId": 1,
  "uid": "QA7wKklGz",
  "parentVersion": 0,
  "restoredFrom": 0,
  "version": 1,
  "created": "2017-04-26T17:18:38-04:00",
  "message": "Initial save",
  "data": {
    "annotations": {
      "list": [

      ]
    },
    "editable": true,
    "gnetId": null,
    "graphTooltip": 0,
    "id": 1,
    "links": [

    ],
    "rows": [
      {
        "collapse": false,
        "height": "250px",
        "panels": [

        ],
        "repeat": null,
        "repeatIteration": null,
        "repeatRowId": null,
        "showTitle": false,
        "title": "Dashboard Row",
        "titleSize": "h6"
      }
    ],
    "schemaVersion": 14,
      "tags": [

    ],
    "templating": {
      "list": [

      ]
    },
    "time": {
      "from": "now-6h",
      "to": "now"
    },
    "timepicker": {},
    "timezone": "browser",
    "title": "test",
    "version": 1
  },
  "createdBy": "admin"
}
```

Status Codes:

- **200** - Ok
- **401** - Unauthorized
- **404** - Dashboard version not found
