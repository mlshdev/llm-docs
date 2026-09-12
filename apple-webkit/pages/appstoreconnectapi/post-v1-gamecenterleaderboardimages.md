> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterleaderboardimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterleaderboardimages)

# Create a Leaderboard Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Add a new leaderboard image.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardImages
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardImageCreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing leaderboard images

- [Read Game Center Leaderboard Image Information](get-v2-gamecenterleaderboardimages-_id_.md): Get information about a specific Game Center leaderboard image.
- [Create a Game Center Leaderboard Image](post-v2-gamecenterleaderboardimages.md): Create a Game Center leaderboard image.
- [Modify a Game Center Leaderboard Image](patch-v2-gamecenterleaderboardimages-_id_.md): Update a specific Game Center leaderboard image.
- [Delete a Game Center Leaderboard Image](delete-v2-gamecenterleaderboardimages-_id_.md): Delete a specific Game Center leaderboard image.
- [Read Leaderboard Image Information](get-v1-gamecenterleaderboardimages-_id_.md): Deprecated. Get information about a leaderboard image and its upload and processing status.
- [Modify a Leaderboard Image](patch-v1-gamecenterleaderboardimages-_id_.md): Deprecated. Commit a leaderboard image after uploading it.
- [Delete a Leaderboard Image](delete-v1-gamecenterleaderboardimages-_id_.md): Deprecated. Delete an image that’s associated with a leaderboard.
