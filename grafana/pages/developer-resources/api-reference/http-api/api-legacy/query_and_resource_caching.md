> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/query_and_resource_caching.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/query_and_resource_caching.md)

# Query and resource caching API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

## Requirements

If you're running Grafana Enterprise, for some endpoints you'll need to have specific permissions. Refer to [Role-based access control permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/) for more information.

## Enable caching for a data source

`POST /api/datasources/:dataSourceUID/cache/enable`

**Required permissions**

See note in the [introduction](#query-and-resource-caching-api) for an explanation.

| Action                    | Scope          |
| ------------------------- | -------------- |
| datasources.caching:write | datasources:\* |

### Examples

**Example Request**:

```http
POST /api/datasources/jZrmlLCGka/cache/enable HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
   "message": "Data source cache enabled",
   "dataSourceID": 1,
   "dataSourceUID": "jZrmlLCGka",
   "enabled": true,
   "ttlQueriesMs": 300000,
   "ttlResourcesMs": 300000,
   "useDefaultTTL": true,
   "defaultTTLMs": 300000,
   "created": "2023-04-21T11:49:22-04:00",
   "updated": "2023-04-24T16:30:29-04:00"
}
```

#### Status codes

| Code | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| 200  | Cache was successfully enabled for the data source                       |
| 500  | Unexpected error. Refer to the body and/or server logs for more details. |

## Disable caching for a data source

`POST /api/datasources/:dataSourceUID/cache/disable`

**Required permissions**

See note in the [introduction](#query-and-resource-caching-api) for an explanation.

| Action                    | Scope          |
| ------------------------- | -------------- |
| datasources.caching:write | datasources:\* |

### Examples

**Example Request**:

```http
POST /api/datasources/jZrmlLCGka/cache/disable HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
   "message": "Data source cache disabled",
   "dataSourceID": 1,
   "dataSourceUID": "jZrmlLCGka",
   "enabled": false,
   "ttlQueriesMs": 300000,
   "ttlResourcesMs": 300000,
   "useDefaultTTL": true,
   "defaultTTLMs": 0,
   "created": "2023-04-21T11:49:22-04:00",
   "updated": "2023-04-24T16:30:31-04:00"
}
```

#### Status codes

| Code | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| 200  | Cache was successfully enabled for the data source                       |
| 500  | Unexpected error. Refer to the body and/or server logs for more details. |

## Clean cache for all data sources

`POST /api/datasources/:dataSourceUID/cache/clean`

Will clean cached data for *all* data sources with caching enabled. The `dataSourceUID` specified will only be used to return the configuration for that data source.

**Required permissions**

See note in the [introduction](#query-and-resource-caching-api) for an explanation.

| Action                    | Scope          |
| ------------------------- | -------------- |
| datasources.caching:write | datasources:\* |

### Examples

**Example Request**:

```http
POST /api/datasources/jZrmlLCGka/cache/clean HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
   "message": "Data source cache cleaned",
   "dataSourceID": 1,
   "dataSourceUID": "jZrmlLCGka",
   "enabled": false,
   "ttlQueriesMs": 300000,
   "ttlResourcesMs": 300000,
   "useDefaultTTL": true,
   "defaultTTLMs": 0,
   "created": "2023-04-21T11:49:22-04:00",
   "updated": "2023-04-24T16:30:31-04:00"
}
```

#### Status codes

| Code | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| 200  | Cache was successfully enabled for the data source                       |
| 500  | Unexpected error. Refer to the body and/or server logs for more details. |

## Update cache configuration for a data source

`POST /api/datasources/:dataSourceUID/cache`

**Required permissions**

See note in the [introduction](#query-and-resource-caching-api) for an explanation.

| Action                    | Scope          |
| ------------------------- | -------------- |
| datasources.caching:write | datasources:\* |

### Examples

**Example Request**:

```http
POST /api/datasources/jZrmlLCGka/cache HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
   "dataSourceID": 1,
   "dataSourceUID": "jZrmlLCGka",
   "enabled": true,
   "useDefaultTTL": false,
   "ttlQueriesMs": 60000,
   "ttlResourcesMs": 300000,
}
```

#### JSON Body Schema

| Field name     | Data type | Description                                                                                                                                 |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceID   | number    | The ID of the data source to configure.                                                                                                     |
| dataSourceUID  | string    | The UID of the data source to configure.                                                                                                    |
| enabled        | boolean   | Whether or not to enable caching for this data source.                                                                                      |
| useDefaultTTL  | boolean   | Whether the configured default TTL (Time-To-Live) should be used for both query and resource caching, instead of the user-specified values. |
| ttlQueriesMs   | number    | The TTL to use for query caching, in milliseconds.                                                                                          |
| ttlResourcesMs | number    | The TTL to use for resource caching, in milliseconds.                                                                                       |

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
   "message": "Data source cache settings updated",
   "dataSourceID": 1,
   "dataSourceUID": "jZrmlLCGka",
   "enabled": true,
   "useDefaultTTL": false,
   "ttlQueriesMs": 60000,
   "ttlResourcesMs": 300000,
   "defaultTTLMs": 300000,
   "created": "2023-04-21T11:49:22-04:00",
   "updated": "2023-04-24T17:03:40-04:00"
}
```

#### Status codes

| Code | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| 200  | Cache was successfully enabled for the data source                       |
| 400  | Request errors (invalid json, missing or invalid fields, etc)            |
| 500  | Unexpected error. Refer to the body and/or server logs for more details. |

## Get cache configuration for a data source

`GET /api/datasources/:dataSourceUID/cache`

**Required permissions**

See note in the [introduction](#query-and-resource-caching-api) for an explanation.

| Action                   | Scope          |
| ------------------------ | -------------- |
| datasources.caching:read | datasources:\* |

### Examples

**Example Request**:

```http
GET /api/datasources/jZrmlLCGka/cache HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example Response**:

```http
HTTP/1.1 200
Content-Type: application/json

{
   "message": "Data source cache settings loaded",
   "dataSourceID": 1,
   "dataSourceUID": "jZrmlLCGka",
   "enabled": true,
   "useDefaultTTL": false,
   "ttlQueriesMs": 60000,
   "ttlResourcesMs": 300000,
   "defaultTTLMs": 300000,
   "created": "2023-04-21T11:49:22-04:00",
   "updated": "2023-04-24T17:03:40-04:00"
}
```

#### Status codes

| Code | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| 200  | Cache was successfully enabled for the data source                       |
| 500  | Unexpected error. Refer to the body and/or server logs for more details. |
