> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterchallengeimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterchallengeimages-_id_)

# Commit an Image for a Challenge

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Commit an uploaded image asset as a Game Center challenge image.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterChallengeImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterChallengeImageUpdateRequest`

## Response Codes

- `200` OK — `GameCenterChallengeImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game Center challenges](configuring-game-center-challenges.md)

## See Also

### Managing challenge images

- [Read Image Information for a Challenge Localization](get-v1-gamecenterchallengelocalizations-_id_-image.md): Get details about the image for a specific Game Center challenge localization.
- [Read Challenge Image Information](get-v1-gamecenterchallengeimages-_id_.md): Get information for a specific Game Center challenge image.
- [Create a Challenge Image](post-v1-gamecenterchallengeimages.md): Reserve an image for a Game Center challenge.
- [Delete a Challenge Image](delete-v1-gamecenterchallengeimages-_id_.md): Remove a specific image from a Game Center challenge.
