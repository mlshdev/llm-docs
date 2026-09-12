> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-gamecenterdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-gamecenterdetail)

# Get the Game Center detail ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/gameCenterDetail
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppGameCenterDetailLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Game Center detail information

- [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md): Get Game Center detail information for an app.
- [List Game Center-enabled version IDs for an app](get-v1-apps-_id_-relationships-gamecenterenabledversions.md): Deprecated.
