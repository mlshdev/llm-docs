> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-gamecenterappversion](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-gamecenterappversion)

# Get the Game Center app version ID for an App Store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/relationships/gameCenterAppVersion
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppStoreVersionGameCenterAppVersionLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Game Center app versions

- [Read game center app version information of an app store version](get-v1-appstoreversions-_id_-gamecenterappversion.md): Get the status of Game Center enablement for an App Store version.
