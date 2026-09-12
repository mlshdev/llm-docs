> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterleaderboardsetimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboardsetimages-_id_)

# Read Game Center Leaderboard Set Image Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get information about a specific Game Center leaderboard set image.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetImages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterLeaderboardSetImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `localization`
- `fields[gameCenterLeaderboardSetLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `version`, `image`
- `include` — `[string]`: **Allowed values:** `localization`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetImageV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterLeaderboardSetImages\]:
- include:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Managing leaderboard set images

- [Create a Game Center Leaderboard Set Image](post-v2-gamecenterleaderboardsetimages.md): Create a Game Center leaderboard set image.
- [Modify a Game Center Leaderboard Set Image](patch-v2-gamecenterleaderboardsetimages-_id_.md): Update a specific Game Center leaderboard set image.
- [Delete a Game Center Leaderboard Set Image](delete-v2-gamecenterleaderboardsetimages-_id_.md): Delete a specific Game Center leaderboard set image.
- [Read Leaderboard Set Image Information](get-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Get information about a leaderboard set image and its upload and processing status.
- [Create a Leaderboard Set Image](post-v1-gamecenterleaderboardsetimages.md): Deprecated. Add a new leaderboard set image.
- [Modify a Leaderboard Set Image](patch-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Commit a leaderboard set image after uploading it.
- [Delete a Leaderboard Set Image](delete-v1-gamecenterleaderboardsetimages-_id_.md): Deprecated. Delete an image that’s associated with a leaderboard set.
