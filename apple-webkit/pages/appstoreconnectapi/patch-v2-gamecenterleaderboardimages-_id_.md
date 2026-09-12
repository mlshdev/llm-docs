> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-gamecenterleaderboardimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-gamecenterleaderboardimages-_id_)

# Modify a Game Center Leaderboard Image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update a specific Game Center leaderboard image.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardImageV2UpdateRequest`

## Response Codes

- `200` OK — `GameCenterLeaderboardImageV2Response`:
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

### Managing leaderboard images

- [Read Game Center Leaderboard Image Information](get-v2-gamecenterleaderboardimages-_id_.md): Get information about a specific Game Center leaderboard image.
- [Create a Game Center Leaderboard Image](post-v2-gamecenterleaderboardimages.md): Create a Game Center leaderboard image.
- [Delete a Game Center Leaderboard Image](delete-v2-gamecenterleaderboardimages-_id_.md): Delete a specific Game Center leaderboard image.
- [Read Leaderboard Image Information](get-v1-gamecenterleaderboardimages-_id_.md): Deprecated. Get information about a leaderboard image and its upload and processing status.
- [Create a Leaderboard Image](post-v1-gamecenterleaderboardimages.md): Deprecated. Add a new leaderboard image.
- [Modify a Leaderboard Image](patch-v1-gamecenterleaderboardimages-_id_.md): Deprecated. Commit a leaderboard image after uploading it.
- [Delete a Leaderboard Image](delete-v1-gamecenterleaderboardimages-_id_.md): Deprecated. Delete an image that’s associated with a leaderboard.
