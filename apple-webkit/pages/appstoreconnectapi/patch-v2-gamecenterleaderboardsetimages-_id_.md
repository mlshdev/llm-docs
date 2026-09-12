> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-gamecenterleaderboardsetimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-gamecenterleaderboardsetimages-_id_)

# Modify a Game Center Leaderboard Set Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update a specific Game Center leaderboard set image.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetImageV2UpdateRequest`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetImageV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- 200:
- 400:
- 401:
- 403:
- 404:
- 409:
- 422:
- 429:

## See Also

### Managing leaderboard set images

- [Read Game Center Leaderboard Set Image Information](get-v2-gamecenterleaderboardsetimages-_id_.md): Get information about a specific Game Center leaderboard set image.
- [Create a Game Center Leaderboard Set Image](post-v2-gamecenterleaderboardsetimages.md): Create a Game Center leaderboard set image.
- [Delete a Game Center Leaderboard Set Image](delete-v2-gamecenterleaderboardsetimages-_id_.md): Delete a specific Game Center leaderboard set image.
- [Read Leaderboard Set Image Information](get-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Get information about a leaderboard set image and its upload and processing status.
- [Create a Leaderboard Set Image](post-v1-gamecenterleaderboardsetimages.md): Deprecated. Add a new leaderboard set image.
- [Modify a Leaderboard Set Image](patch-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Commit a leaderboard set image after uploading it.
- [Delete a Leaderboard Set Image](delete-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Delete an image that’s associated with a leaderboard set.
