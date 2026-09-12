> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterchallengeimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterchallengeimages-_id_)

# Read Challenge Image Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information for a specific Game Center challenge image.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterChallengeImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterChallengeImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`

## Response Codes

- `200` OK — `GameCenterChallengeImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing challenge images

- [Read Image Information for a Challenge Localization](get-v1-gamecenterchallengelocalizations-_id_-image.md): Get details about the image for a specific Game Center challenge localization.
- [Create a Challenge Image](post-v1-gamecenterchallengeimages.md): Reserve an image for a Game Center challenge.
- [Commit an Image for a Challenge](patch-v1-gamecenterchallengeimages-_id_.md): Commit an uploaded image asset as a Game Center challenge image.
- [Delete a Challenge Image](delete-v1-gamecenterchallengeimages-_id_.md): Remove a specific image from a Game Center challenge.
