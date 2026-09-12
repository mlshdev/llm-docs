> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterchallengeimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterchallengeimages)

# Create a Challenge Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Reserve an image for a Game Center challenge.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterChallengeImages
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterChallengeImageCreateRequest`

## Response Codes

- `201` Created — `GameCenterChallengeImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game Center challenges](configuring-game-center-challenges.md)

## See Also

### Managing challenge images

- [Read Image Information for a Challenge Localization](get-v1-gamecenterchallengelocalizations-_id_-image.md): Get details about the image for a specific Game Center challenge localization.
- [Read Challenge Image Information](get-v1-gamecenterchallengeimages-_id_.md): Get information for a specific Game Center challenge image.
- [Commit an Image for a Challenge](patch-v1-gamecenterchallengeimages-_id_.md): Commit an uploaded image asset as a Game Center challenge image.
- [Delete a Challenge Image](delete-v1-gamecenterchallengeimages-_id_.md): Remove a specific image from a Game Center challenge.
