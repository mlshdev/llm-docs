> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterleaderboardlocalizations-_id_-image](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterleaderboardlocalizations-_id_-image)

# List All Images for a Game Center Leaderboard Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get a list of images for a specific Game Center leaderboard localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterLeaderboardLocalizations/{id}/image
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterLeaderboardImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `localization`
- `fields[gameCenterLeaderboardLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `formatterOverride`, `formatterSuffix`, `formatterSuffixSingular`, `description`, `version`, `image`
- `include` — `[string]`: **Allowed values:** `localization`

## Response Codes

- `200` OK — `GameCenterLeaderboardImageV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- fields\[gameCenterLeaderboardImages\]:
- fields\[gameCenterLeaderboardLocalizations\]:
- include:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Managing leaderboard localizations

- [Read Game Center Leaderboard Localization Information](get-v2-gamecenterleaderboardlocalizations-_id_.md): Get information about a specific Game Center leaderboard localization.
- [Get All Image IDs for a Game Center Leaderboard Localization](get-v2-gamecenterleaderboardlocalizations-_id_-relationships-image.md): Get a list of image resource IDs for a specific Game Center leaderboard localization.
- [Create a Game Center Leaderboard Localization](post-v2-gamecenterleaderboardlocalizations.md): Create a Game Center leaderboard localization.
- [Modify a Game Center Leaderboard Localization](patch-v2-gamecenterleaderboardlocalizations-_id_.md): Update a specific Game Center leaderboard localization.
- [Delete a Game Center Leaderboard Localization](delete-v2-gamecenterleaderboardlocalizations-_id_.md): Delete a specific Game Center leaderboard localization.
- [Read Leaderboard Localization Information](get-v1-gamecenterleaderboardlocalizations-_id_.md): Deprecated. Get information about a leaderboard localization.
- [Read the Image for a Leaderboard Localization](get-v1-gamecenterleaderboardlocalizations-_id_-gamecenterleaderboardimage.md): Deprecated. Get information about the image associated with a leaderboard localization.
- [Get the leaderboard image ID for a Game Center leaderboard localization](get-v1-gamecenterleaderboardlocalizations-_id_-relationships-gamecenterleaderboardimage.md): Deprecated.
- [Create a Leaderboard Localization](post-v1-gamecenterleaderboardlocalizations.md): Deprecated. Add a new leaderboard localization.
- [Modify a Leaderboard Localization](patch-v1-gamecenterleaderboardlocalizations-_id_.md): Deprecated. Edit a leaderboard localization.
- [Delete a Leaderboard Localization](delete-v1-gamecenterleaderboardlocalizations-_id_.md): Deprecated. Delete a localization that’s associated with a leaderboard.
