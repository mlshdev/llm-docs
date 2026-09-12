> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterleaderboardsetimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterleaderboardsetimages)

# Create a Game Center Leaderboard Set Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center leaderboard set image.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetImages
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetImageV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardSetImageV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- 201:
- 400:
- 401:
- 403:
- 409:
- 422:
- 429:

## See Also

### Managing leaderboard set images

- [Read Game Center Leaderboard Set Image Information](get-v2-gamecenterleaderboardsetimages-_id_.md): Get information about a specific Game Center leaderboard set image.
- [Modify a Game Center Leaderboard Set Image](patch-v2-gamecenterleaderboardsetimages-_id_.md): Update a specific Game Center leaderboard set image.
- [Delete a Game Center Leaderboard Set Image](delete-v2-gamecenterleaderboardsetimages-_id_.md): Delete a specific Game Center leaderboard set image.
- [Read Leaderboard Set Image Information](get-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Get information about a leaderboard set image and its upload and processing status.
- [Create a Leaderboard Set Image](post-v1-gamecenterleaderboardsetimages.md): Deprecated. Add a new leaderboard set image.
- [Modify a Leaderboard Set Image](patch-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Commit a leaderboard set image after uploading it.
- [Delete a Leaderboard Set Image](delete-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Delete an image that’s associated with a leaderboard set.
