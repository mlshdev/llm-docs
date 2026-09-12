> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterappversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterappversions)

# Create an app version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Add a new Game Center app version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterAppVersionCreateRequest`

## Response Codes

- `201` Created — `GameCenterAppVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, editing, and deleting Game Center app versions

- [Add compatible app version relationships](post-v1-gamecenterappversions-_id_-relationships-compatibilityversions.md): Create a relationship between two Game Center app versions.
- [Modify an app version](patch-v1-gamecenterappversions-_id_.md): Change the state of Game Center enablement for an app version.
- [Remove compatible app version relationships](delete-v1-gamecenterappversions-_id_-relationships-compatibilityversions.md): Remove a compatible version relationship from an app version.
