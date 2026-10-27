> Pinned source for Grafana v13.3.0: [docs/sources/developer-resources/api-reference/http-api/api-legacy/short_url.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/developer-resources/api-reference/http-api/api-legacy/short_url.md)

# Short URL API

> **Note**
>
> Starting in Grafana 13, `/api` endpoints are being deprecated in favor of the `/apis` route. Note that while Grafana is working on migrating existing APIs, currently there may not be an exact match to the legacy API you're using.
>
> **This change doesn't disrupt or break your current setup**. Legacy APIs are not being disabled and remain fully accessible and operative, but `/api` routes will no longer be updated.
>
> To learn more refer to the [new API structure in Grafana](https://grafana.com/docs/grafana/v13.3/developer-resources/api-reference/http-api/apis/).

> **Note**
>
> Grafana announced the deprecation of this API on September 23, 2026. Use the `shorturl.grafana.app/v1beta1` API group instead:
>
> - **Create a short URL:** `POST /apis/shorturl.grafana.app/v1beta1/namespaces/{namespace}/shorturls`
> - **Retrieve a short URL:** `GET /apis/shorturl.grafana.app/v1beta1/namespaces/{namespace}/shorturls/{name}`
>
> The new API uses different request and response shapes than the endpoints on this page, so changing the URL alone isn't enough. Refer to the [Short URL API Swagger documentation](https://play.grafana.org/swagger?api=shorturl.grafana.app-v1beta1) for the schemas, and to [API structure in Grafana](https://grafana.com/docs/grafana/v13.3/developer-resources/api-reference/http-api/apis/) for how to determine the `{namespace}` for your instance.

Use this API to create shortened URLs. A short URL represents a longer URL containing complex query parameters in a smaller and simpler format.

## Create short URL

`POST /api/short-urls`

Creates a short URL.

**Example request:**

```http
POST /api/short-urls HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <SERVICE_ACCOUNT_TOKEN>

{
  "path": "d/TxKARsmGz/new-dashboard?orgId=1&from=1599389322894&to=1599410922894"
}
```

JSON body schema:

- **path** – The path to shorten, relative to the Grafana [root\_url](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#root_url).

**Example response:**

```http
HTTP/1.1 200
Content-Type: application/json

{
  "uid": AT76wBvGk,
  "url": http://localhost:3000/goto/AT76wBvGk?orgId=1
}

```

Status codes:

- **200** – Created
- **400** – Errors (invalid JSON, missing or invalid fields)
