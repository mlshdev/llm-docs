> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v2-gamecenterleaderboardlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v2-gamecenterleaderboardlocalizations-_id_)

# Modify a Game Center Leaderboard Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update a specific Game Center leaderboard localization.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardLocalizationV2UpdateRequest`

## Response Codes

- `200` OK — `GameCenterLeaderboardLocalizationV2Response`:
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

### Managing leaderboard localizations

- [Read Game Center Leaderboard Localization Information](get-v2-gamecenterleaderboardlocalizations-_id_.md): Get information about a specific Game Center leaderboard localization.
- [List All Images for a Game Center Leaderboard Localization](get-v2-gamecenterleaderboardlocalizations-_id_-image.md): Get a list of images for a specific Game Center leaderboard localization.
- [Get All Image IDs for a Game Center Leaderboard Localization](get-v2-gamecenterleaderboardlocalizations-_id_-relationships-image.md): Get a list of image resource IDs for a specific Game Center leaderboard localization.
- [Create a Game Center Leaderboard Localization](post-v2-gamecenterleaderboardlocalizations.md): Create a Game Center leaderboard localization.
- [Delete a Game Center Leaderboard Localization](delete-v2-gamecenterleaderboardlocalizations-_id_.md): Delete a specific Game Center leaderboard localization.
- [Read Leaderboard Localization Information](get-v1-gamecenterleaderboardlocalizations-_id_.md): Deprecated. Get information about a leaderboard localization.
- [Read the Image for a Leaderboard Localization](get-v1-gamecenterleaderboardlocalizations-_id_-gamecenterleaderboardimage.md): Deprecated. Get information about the image associated with a leaderboard localization.
- [Get the leaderboard image ID for a Game Center leaderboard localization](get-v1-gamecenterleaderboardlocalizations-_id_-relationships-gamecenterleaderboardimage.md): Deprecated.
- [Create a Leaderboard Localization](post-v1-gamecenterleaderboardlocalizations.md): Deprecated. Add a new leaderboard localization.
- [Modify a Leaderboard Localization](patch-v1-gamecenterleaderboardlocalizations-_id_.md): Deprecated. Edit a leaderboard localization.
- [Delete a Leaderboard Localization](delete-v1-gamecenterleaderboardlocalizations-_id_.md): Deprecated. Delete a localization that’s associated with a leaderboard.
