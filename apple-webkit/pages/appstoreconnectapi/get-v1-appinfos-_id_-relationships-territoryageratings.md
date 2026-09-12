> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-territoryageratings](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-territoryageratings)

# List territory age rating IDs for an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

List all territory age rating IDs for a specific app info.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/relationships/territoryAgeRatings
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `appInfo` resource ID from the [List all app infos for an app](get-v1-apps-_id_-appinfos.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of territory age rating resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppInfoTerritoryAgeRatingsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading territory age rating

- [List Territory Age Ratings for an App Info](get-v1-appinfos-_id_-territoryageratings.md): List all territory age ratings for a specific app info.
