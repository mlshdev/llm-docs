> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-icons](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-icons)

# List all icons for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

List all the icons for various platforms delivered with a build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/icons
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[buildIcons]` — `[string]`: **Allowed values:** `iconAsset`, `iconType`, `masked`, `name`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BuildIconsWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:
