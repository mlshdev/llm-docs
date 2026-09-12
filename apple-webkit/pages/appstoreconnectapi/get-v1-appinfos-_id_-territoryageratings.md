> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-territoryageratings](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-territoryageratings)

# List Territory Age Ratings for an App Info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

List all territory age ratings for a specific app info.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/territoryAgeRatings
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `appInfo` resource ID from the [List all app infos for an app](get-v1-apps-_id_-appinfos.md) response.

## Query Parameters

- `fields[territories]` — `[string]`: Additional fields to include for each territory resource returned by the response.
  **Allowed values:** `currency`
- `fields[territoryAgeRatings]` — `[string]`: Additional fields to include for each territory age rating resource returned by the response.
  **Allowed values:** `appStoreAgeRating`, `territory`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `territory`
- `limit` — `integer`: The maximum number of territory age rating resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `TerritoryAgeRatingsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md)

## See Also

### Reading territory age rating

- [List territory age rating IDs for an app info](get-v1-appinfos-_id_-relationships-territoryageratings.md): List all territory age rating IDs for a specific app info.
