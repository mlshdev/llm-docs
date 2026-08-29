> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/correlations.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/api-legacy/correlations.md)

# Correlations API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis/).

This API can be used to define correlations between data sources.

## Create correlations

`POST /api/datasources/uid/:sourceUID/correlations`

Creates a correlation between two data sources - the source data source identified by `sourceUID` in the path, and the target data source which is specified in the body.

**Example request:**

```http
POST /api/datasources/uid/uyBf2637k/correlations HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
{
	"targetUID": "PDDA8E780A17E7EF1",
	"label": "My Label",
	"description": "Logs to Traces",
  "type": "query",
  "config": {
    "field": "message",
    "target": {},
  }
}
```

JSON body schema:

- **targetUID** – Target data source uid.
- **label** – A label for the correlation.
- **description** – A description for the correlation.

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json
{
  "message": "Correlation created",
  "result": {
    "description": "Logs to Traces",
    "label": "My Label",
    "sourceUID": "uyBf2637k",
    "targetUID": "PDDA8E780A17E7EF1",
    "uid": "50xhMlg9k",
    "type": "query",
    "config": {
      "field": "message",
      "target": {},
    }
  }
}
```

Status codes:

- **200** – OK
- **400** - Errors (invalid JSON, missing or invalid fields)
- **401** – Unauthorized
- **403** – Forbidden, source data source is read-only
- **404** – Not found, either source or target data source could not be found
- **500** – Internal error

## Delete correlations

`DELETE /api/datasources/uid/:sourceUID/correlations/:correlationUID`

Deletes a correlation.

**Example request:**

```http
DELETE /api/datasources/uid/uyBf2637k/correlations/J6gn7d31L HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json
{
  "message": "Correlation deleted"
}
```

Status codes:

- **200** – OK
- **401** – Unauthorized
- **403** – Forbidden, data source is read-only
- **404** – Correlation not found
- **500** – Internal error

## Update correlations

`PATCH /api/datasources/uid/:sourceUID/correlations/:correlationUID`

Updates a correlation.

**Example request:**

```http
POST /api/datasources/uid/uyBf2637k/correlations/J6gn7d31L HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
{
	"label": "My Label",
	"description": "Logs to Traces",
}
```

JSON body schema:

- **label** – A label for the correlation.
- **description** – A description for the correlation.

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json
{
  "message": "Correlation updated",
  "result": {
    "description": "Logs to Traces",
    "label": "My Label",
    "sourceUID": "uyBf2637k",
    "targetUID": "PDDA8E780A17E7EF1",
    "uid": "J6gn7d31L",
    "type": "query",
    "config": {
			"field": "message",
			"target": {}
		}
  }
}
```

Status codes:

- **200** – OK
- **400** – Bad request
- **401** – Unauthorized
- **403** – Forbidden, source data source is read-only
- **404** – Not found, either source or target data source could not be found
- **500** – Internal error

## Get single correlation

`GET /api/datasources/uid/:sourceUID/correlations/:correlationUID`

Gets a single correlation.

**Example request:**

```http
GET /api/datasources/uid/uyBf2637k/correlations/J6gn7d31L HTTP/1.1
Accept: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json
{
  "description": "Logs to Traces",
  "label": "My Label",
  "sourceUID": "uyBf2637k",
  "targetUID": "PDDA8E780A17E7EF1",
  "uid": "J6gn7d31L",
  "provisioned": false,
  "type": "query",
  "config": {
    "field": "message",
    "target": {},
  }
}
```

Status codes:

- **200** – OK
- **401** – Unauthorized
- **404** – Not found, either source data source or correlation were not found
- **500** – Internal error

## Get all correlations originating from a given data source

`GET /api/datasources/uid/:sourceUID/correlations`

Get all correlations originating from the data source identified by the given `sourceUID` in the path.

**Example request:**

```http
GET /api/datasources/uid/uyBf2637k/correlations HTTP/1.1
Accept: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json
[
  {
    "description": "Logs to Traces",
    "label": "My Label",
    "sourceUID": "uyBf2637k",
    "targetUID": "PDDA8E780A17E7EF1",
    "uid": "J6gn7d31L",
    "provisioned": false,
    "type": "query",
    "config": {
      "field": "message",
      "target": {},
    }
  },
  {
    "description": "Logs to Metrics",
    "label": "Another Label",
    "sourceUID": "uyBf2637k",
    "targetUID": "P15396BDD62B2BE29",
    "uid": "uWCpURgVk",
    "provisioned": false,
    "type": "query",
    "config": {
      "field": "message",
      "target": {},
    }
  }
]
```

Status codes:

- **200** – OK
- **401** – Unauthorized
- **404** – Not found, either source data source is not found or no correlation exists originating from the given data source
- **500** – Internal error

## Get all correlations

`GET /api/datasources/correlations`

Get all correlations.

Query parameters:

- **page** - Optional. Specify which page number to return. Use the limit parameter to specify the number of correlations per page. The default is page 1.
- **limit** - Optional. Limits the number of returned correlations per page. The default is 100 correlations per page. The maximum limit is 1000 correlations in a page.
- **sourceUID** - Optional. Specify a source datasource UID to filter by. This can be repeated to filter by multiple datasources.

**Example request:**

```http
GET /api/datasources/correlations HTTP/1.1
Accept: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>
```

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json
[
  {
    "description": "Prometheus to Loki",
    "label": "My Label",
    "sourceUID": "uyBf2637k",
    "targetUID": "PDDA8E780A17E7EF1",
    "uid": "J6gn7d31L",
    "provisioned": false,
    "type": "query",
    "config": {
      "field": "message",
      "target": {},
    }
  },
  {
    "description": "Loki to Tempo",
    "label": "Another Label",
    "sourceUID": "PDDA8E780A17E7EF1",
    "targetUID": "P15396BDD62B2BE29",
    "uid": "uWCpURgVk",
    "provisioned": false,
    "type": "query",
    "config": {
      "field": "message",
      "target": {},
    }
  }
]
```

Status codes:

- **200** – OK
- **401** – Unauthorized
- **404** – Not found, no correlation is found
- **500** – Internal error
