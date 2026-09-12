> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterachievementimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterachievementimages)

# Create an Achievement Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Add a new achievement image.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterAchievementImageCreateRequest`

## Response Codes

- `201` Created — `GameCenterAchievementImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
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
- [Modify an Achievement Image](patch-v1-gamecenterachievementimages-_id_.md): Deprecated. Commit an achievement image after uploading it.
- [Delete an Achievement Image](delete-v1-gamecenterachievementimages-_id_.md): Deprecated. Delete an image that’s associated with an achievement.
