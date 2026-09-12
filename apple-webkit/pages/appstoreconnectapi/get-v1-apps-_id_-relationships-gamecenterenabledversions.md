> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-gamecenterenabledversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-gamecenterenabledversions)

# List Game Center-enabled version IDs for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/gameCenterEnabledVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppGameCenterEnabledVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Game Center detail information

- [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md): Get Game Center detail information for an app.
- [Get the Game Center detail ID for an app](get-v1-apps-_id_-relationships-gamecenterdetail.md)
