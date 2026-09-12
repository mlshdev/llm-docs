> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterdetails-_id_-relationships-gamecenterachievementsv2](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterdetails-_id_-relationships-gamecenterachievementsv2)

# Modify the Achievements for a Game Center Detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update the achievements relationship for a specific Game Center detail.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/relationships/gameCenterAchievementsV2
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterDetailGameCenterAchievementsV2LinkagesRequest`

## Response Codes

- `204` No Content:
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
- 204:
- 401:
- 403:
- 404:
- 409:
- 422:
- 429:

## See Also

### Creating and editing Game Center details

- [Enable game center for an app](post-v1-gamecenterdetails.md): Create a Game Center detail for an app.
- [Modify a game center detail for an app](patch-v1-gamecenterdetails-_id_.md): Edit challenge state, default leaderboards, and groups.
- [Modify the Leaderboard Sets for a Game Center Detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsetsv2.md): Update the leaderboard sets relationship for a specific Game Center detail.
- [Modify the Leaderboards for a Game Center Detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsv2.md): Update the leaderboards relationship for a specific Game Center detail.
- [Modify the associated leaderboard sets for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. Edit the associated leaderboard sets for a Game Center detail.
- [Modify the associated leaderboards for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboards.md): Deprecated. Edit the associated leaderboards for a Game Center detail.
- [Modify the challenges minimum platform version for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-challengesminimumplatformversions.md): Update the relationship between a challenges minimum platform version and a specific Game Center detail.
