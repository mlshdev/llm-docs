> Release-pinned source for Grafana v13.2.0: [docs/sources/developer-resources/api-reference/http-api/apis-migration.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/developer-resources/api-reference/http-api/apis-migration.md)

# Migrate to the new Grafana APIs

> **Note**
>
> New APIs are available in Grafana 12 and later.
> Legacy APIs are deprecated starting in Grafana 13.

Grafana is migrating existing APIs to the new `/apis` model, a Kubernetes-style API layer which follows a standardized API structure alongside consistent API versioning. Refer to the [New API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis) documentation for more details.

**Legacy APIs are not being disabled for the moment**. Removal of legacy APIs is planned for a future major release, and any breaking changes will be announced well in advance to avoid disruptions.

## Deprecation notes

The API migration process is underway and there may not be an exact `/apis` match to the legacy API you're using. Some legacy APIs may not be migrated at all. For details, refer to [List of available HTTP APIs](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api#list-of-available-http-apis) table.

### Query history API

The [Query History API](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/api-legacy/query_history) will not be migrated.

This functionality is being deprecated. Grafana will revert to using local on-device storage for this functionality, since this approach reduces the amount of traffic to the backend with minimal change in functionality. If you're using this API, consider using a similar approach.
