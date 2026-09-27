> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-performanceoverviews

# Get the performance overview for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get the aggregated performance overview data for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/performanceOverviews
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `app` resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `filter[deviceType]` — `[string]`:

## Response Codes

- `200` OK — `xcodeOverview`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5 release notes](app-store-connect-api-4-5-release-notes.md)
