> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterappversions-_id_-relationships-compatibilityversions](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterappversions-_id_-relationships-compatibilityversions)

# Remove compatible app version relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Remove a compatible version relationship from an app version.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterAppVersionCompatibilityVersionsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, editing, and deleting Game Center app versions

- [Create an app version](post-v1-gamecenterappversions.md): Add a new Game Center app version.
- [Add compatible app version relationships](post-v1-gamecenterappversions-_id_-relationships-compatibilityversions.md): Create a relationship between two Game Center app versions.
- [Modify an app version](patch-v1-gamecenterappversions-_id_.md): Change the state of Game Center enablement for an app version.
