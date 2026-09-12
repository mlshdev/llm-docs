> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterachievementimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterachievementimages-_id_)

# Modify an Achievement Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Commit an achievement image after uploading it.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center achievement images resource ID from the [Read Achievement Information](get-v1-gamecenterachievements-_id_.md) response.

## HTTP Body

Content type: `application/json`

Type: `GameCenterAchievementImageUpdateRequest`

## Response Codes

- `200` OK — `GameCenterAchievementImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center achievements images

- [Read Game Center Achievement Image Information](get-v2-gamecenterachievementimages-_id_.md): Get information about a specific Game Center achievement image.
- [Create a Game Center Achievement Image](post-v2-gamecenterachievementimages.md): Create a Game Center achievement image.
- [Modify a Game Center Achievement Image](patch-v2-gamecenterachievementimages-_id_.md): Update a specific Game Center achievement image.
- [Delete a Game Center Achievement Image](delete-v2-gamecenterachievementimages-_id_.md): Delete a specific Game Center achievement image.
- [Read Achievement Image Information](get-v1-gamecenterachievementimages-_id_.md): Deprecated. Get information about an achievement image and its upload and processing status.
- [Create an Achievement Image](post-v1-gamecenterachievementimages.md): Deprecated. Add a new achievement image.
- [Delete an Achievement Image](delete-v1-gamecenterachievementimages-_id_.md): Deprecated. Delete an image that’s associated with an achievement.
