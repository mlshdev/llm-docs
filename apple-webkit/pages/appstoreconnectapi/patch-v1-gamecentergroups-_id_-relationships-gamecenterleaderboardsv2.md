> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsv2](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsv2)

# Modify the Leaderboards for a Game Center Group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Update the leaderboards relationship for a specific Game Center group.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardsV2
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterGroupGameCenterLeaderboardsV2LinkagesRequest`

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

### Reading and modifying group relationships

- [Get All Achievement IDs for a Game Center Group](get-v1-gamecentergroups-_id_-relationships-gamecenterachievementsv2.md): Get a list of achievement resource IDs for a specific Game Center group.
- [Get All Leaderboard Set IDs for a Game Center Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsetsv2.md): Get a list of leaderboard set resource IDs for a specific Game Center group.
- [Get All Leaderboard IDs for a Game Center Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsv2.md): Get a list of leaderboard resource IDs for a specific Game Center group.
- [Modify the Achievements for a Game Center Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterachievementsv2.md): Update the achievements relationship for a specific Game Center group.
- [Modify the Leaderboard Sets for a Game Center Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsetsv2.md): Update the leaderboard sets relationship for a specific Game Center group.
- [Read the Achievements in a Group](get-v1-gamecentergroups-_id_-relationships-gamecenterachievements.md): Deprecated. List all the achievements associated with a specific group.
- [Read the Leaderboard Sets in a Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. List all the leaderboard sets associated with a specific group.
- [Read the Leaderboards in a Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboards.md): Deprecated. List all the leaderboard associated with a specific group.
- [Edit the Achievements Associated With a Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterachievements.md): Deprecated. Modify the achievements in a specific group.
- [Edit the Leaderboard Sets Associated With a Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. Modify the leaderboard sets in a specific group.
- [Edit the Leaderboard Associated With a Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboards.md): Deprecated. Modify the Game Center leaderboards in a specific group.
