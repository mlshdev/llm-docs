> Release-pinned source for Grafana v13.2.1: [docs/sources/developer-resources/api-reference/http-api/api-legacy/preferences.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/developer-resources/api-reference/http-api/api-legacy/preferences.md)

# User and Org Preferences API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

Keys:

- **theme** - One of: `light`, `dark`, or an empty string for the default theme
- **homeDashboardId** - Deprecated. Use `homeDashboardUID` instead.
- **homeDashboardUID**: The `:uid` of a dashboard
- **timezone** - Any valid IANA timezone string (e.g., `America/New_York`, `Europe/London`), `utc`, `browser`, or an empty string for the default.

Omitting a key will cause the current value to be replaced with the
system default value.

## Get Current User Prefs

`GET /api/user/preferences`

**Example Request**:

```http
GET /api/user/preferences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
    "theme": "",
    "homeDashboardId": 217,
    "homeDashboardUID": "jcIIG-07z",
    "timezone": "utc",
    "weekStart": "",
    "navbar": {
        "bookmarkUrls": null
    },
    "queryHistory": {
        "homeTab": ""
    }
}
```

## Update Current User Prefs

`PUT /api/user/preferences`

**Example Request**:

```http
PUT /api/user/preferences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "theme": "",
  "homeDashboardUID":"home",
  "timezone":"utc"
}
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: text/plain; charset=utf-8

{"message":"Preferences updated"}
```

## Patch Current User Prefs

Update one or more preferences without modifying the others.

`PATCH /api/user/preferences`

**Example Request**:

```http
PATCH /api/user/preferences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "theme": "dark"
}
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: text/plain; charset=utf-8

{"message":"Preferences updated"}
```

## Get Current Org Prefs

`GET /api/org/preferences`

**Example Request**:

```http
GET /api/org/preferences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
    "theme": "",
    "homeDashboardId": 0,
    "homeDashboardUID": "",
    "timezone": "",
    "weekStart": "",
    "navbar": {
        "bookmarkUrls": null
    },
    "queryHistory": {
        "homeTab": ""
    }
}
```

## Update Current Org Prefs

`PUT /api/org/preferences`

**Example Request**:

```http
PUT /api/org/preferences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "theme": "",
  "homeDashboardUID":"home",
  "timezone":"utc"
}
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: text/plain; charset=utf-8

{"message":"Preferences updated"}
```

## Patch Current Org Prefs

Update one or more preferences without modifying the others.

`PATCH /api/org/preferences`

**Example Request**:

```http
PATCH /api/org/preferences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "theme": "dark"
}
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: text/plain; charset=utf-8

{"message":"Preferences updated"}
```
