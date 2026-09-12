> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterenabledversions-_id_-relationships-compatibleversions](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterenabledversions-_id_-relationships-compatibleversions)

# Replace all compatible versions for a game center enabled version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

> This endpoint is deprecated.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterEnabledVersionCompatibleVersionsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Removing and Replacing Compatible Versions

- [Remove compatible versions from a game center enabled version](delete-v1-gamecenterenabledversions-_id_-relationships-compatibleversions.md): Deprecated.
