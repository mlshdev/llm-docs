> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterenabledversions-_id_-relationships-compatibleversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterenabledversions-_id_-relationships-compatibleversions)

# Get all compatible version ids for a game center enabled version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

> This endpoint is deprecated. Use [List all compatible app version IDs](get-v1-gamecenterappversions-_id_-relationships-compatibilityversions.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterEnabledVersionCompatibleVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting and Adding Compatible Versions

- [Add compatible versions to a game center enabled version](post-v1-gamecenterenabledversions-_id_-relationships-compatibleversions.md): Deprecated.
