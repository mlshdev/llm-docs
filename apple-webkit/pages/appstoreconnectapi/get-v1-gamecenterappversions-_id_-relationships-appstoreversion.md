> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterappversions-_id_-relationships-appstoreversion](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterappversions-_id_-relationships-appstoreversion)

# Get the App Store version ID for a Game Center app version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/{id}/relationships/appStoreVersion
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `GameCenterAppVersionAppStoreVersionLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Game Center app versions

- [Read app versions for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterappversions.md): Get a list of app versions for a Game Center detail.
- [List Game Center app version IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterappversions.md)
- [Read app version information](get-v1-gamecenterappversions-_id_.md): Read the Game Center enablement state and related app version information.
- [Read the App Store version for an app version](get-v1-gamecenterappversions-_id_-appstoreversion.md): Read the App Store version and related information for an app version.
- [Read compatibility version information](get-v1-gamecenterappversions-_id_-compatibilityversions.md): Get compatibility version information for a specific app version.
- [List all compatible app version IDs](get-v1-gamecenterappversions-_id_-relationships-compatibilityversions.md): List all compatible verisons for an app version.
