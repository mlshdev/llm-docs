> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-gamecenterleaderboardsetlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-gamecenterleaderboardsetlocalizations-_id_)

# Delete a Game Center Leaderboard Set Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Delete a specific Game Center leaderboard set localization.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardSetLocalizations/{id}
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

<a id="overview"></a>

## Overview

- id:
- 204:
- 400:
- 401:
- 403:
- 404:
- 409:
- 429:

## See Also

### Managing leaderboard set localizations

- [Read Game Center Leaderboard Set Localization Information](get-v2-gamecenterleaderboardsetlocalizations-_id_.md): Get information about a specific Game Center leaderboard set localization.
- [List All Images for a Game Center Leaderboard Set Localization](get-v2-gamecenterleaderboardsetlocalizations-_id_-image.md): Get a list of images for a specific Game Center leaderboard set localization.
- [Get All Image IDs for a Game Center Leaderboard Set Localization](get-v2-gamecenterleaderboardsetlocalizations-_id_-relationships-image.md): Get a list of image resource IDs for a specific Game Center leaderboard set localization.
- [Create a Game Center Leaderboard Set Localization](post-v2-gamecenterleaderboardsetlocalizations.md): Create a Game Center leaderboard set localization.
- [Modify a Game Center Leaderboard Set Localization](patch-v2-gamecenterleaderboardsetlocalizations-_id_.md): Update a specific Game Center leaderboard set localization.
- [Read Leaderboard Set Localization Information](get-v1-gamecenterleaderboardsetlocalizations-_id_.md): Deprecated. Get information about a leaderboard set localization.
- [Read the Image Associated With a Leaderboard Set Localization](get-v1-gamecenterleaderboardsetlocalizations-_id_-gamecenterleaderboardsetimage.md): Deprecated. Get information about a leaderboard set image associated with a leaderboard set localization.
- [Get the leaderboard set image ID for a Game Center leaderboard set localization](get-v1-gamecenterleaderboardsetlocalizations-_id_-relationships-gamecenterleaderboardsetimage.md): Deprecated.
- [Create a Leaderboard Set Localization](post-v1-gamecenterleaderboardsetlocalizations.md): Deprecated. Add a new leaderboard set localization.
- [Modify a Leaderboard Set Localization](patch-v1-gamecenterleaderboardsetlocalizations-_id_.md): Deprecated. Edit a leaderboard set localization.
- [Delete a Leaderboard Set Localization](delete-v1-gamecenterleaderboardsetlocalizations-_id_.md): Deprecated. Delete a localization that’s associated with a leaderboard set.
