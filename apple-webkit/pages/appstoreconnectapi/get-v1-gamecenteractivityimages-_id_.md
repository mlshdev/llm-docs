> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenteractivityimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenteractivityimages-_id_)

# Read activity image information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information for a specific Game Center activity image.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterActivityImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterActivityImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`

## Response Codes

- `200` OK — `GameCenterActivityImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center activities

- [Create an Activity Image](post-v1-gamecenteractivityimages.md): Reserve an image for a Game Center activity.
- [Commit an Image for an Activity](patch-v1-gamecenteractivityimages-_id_.md): Commit an uploaded image asset as a Game Center activity image.
- [Delete an Activity Image](delete-v1-gamecenteractivityimages-_id_.md): Remove a specific image from a Game Center activity.
