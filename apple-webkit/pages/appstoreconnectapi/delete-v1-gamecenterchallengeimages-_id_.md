> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterchallengeimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterchallengeimages-_id_)

# Delete a Challenge Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Remove a specific image from a Game Center challenge.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterChallengeImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing challenge images

- [Read Image Information for a Challenge Localization](get-v1-gamecenterchallengelocalizations-_id_-image.md): Get details about the image for a specific Game Center challenge localization.
- [Read Challenge Image Information](get-v1-gamecenterchallengeimages-_id_.md): Get information for a specific Game Center challenge image.
- [Create a Challenge Image](post-v1-gamecenterchallengeimages.md): Reserve an image for a Game Center challenge.
- [Commit an Image for a Challenge](patch-v1-gamecenterchallengeimages-_id_.md): Commit an uploaded image asset as a Game Center challenge image.
