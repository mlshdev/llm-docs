> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenteractivities-_id_-relationships-achievementsv2](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenteractivities-_id_-relationships-achievementsv2)

# Add an Achievement to a Game Center Activity

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Add an achievement to a Game Center activity.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterActivities/{id}/relationships/achievementsV2
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterActivityAchievementsV2LinkagesRequest`

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

### Managing Game Center activities

- [Create an Activity](post-v1-gamecenteractivities.md): Create an activity for your Game Center detail or Game Center group.
- [Add a Leaderboard to a Game Center Activity](post-v1-gamecenteractivities-_id_-relationships-leaderboardsv2.md): Add a leaderboard to a Game Center activity.
- [Modify the achievements for a game center activity](post-v1-gamecenteractivities-_id_-relationships-achievements.md): Deprecated. Update the relationship between achievements and a specific Game Center activity.
- [Modify the leaderboards for a game center activity](post-v1-gamecenteractivities-_id_-relationships-leaderboards.md): Deprecated. Update the relationship between a leaderboard and a specific Game Center activity.
- [Read Activity Information](get-v1-gamecenteractivities-_id_.md): Get information for a specific Game Center activity.
- [Read the Versions for an Activity](get-v1-gamecenteractivities-_id_-versions.md): Get a list of versions for a specific Game Center activity.
- [List version IDs for a Game Center activity](get-v1-gamecenteractivities-_id_-relationships-versions.md)
- [List all activities for a game center detail](get-v1-gamecenterdetails-_id_-gamecenteractivities.md): Get activity release information for a specific Game Center detail.
- [List Game Center activity IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenteractivities.md)
- [List all activities for a game center group](get-v1-gamecentergroups-_id_-gamecenteractivities.md): Get a list of all activities for a Game Center group.
- [List activity IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenteractivities.md): Get a list of activity IDs for a specific Game Center group.
- [Modify an Activity](patch-v1-gamecenteractivities-_id_.md): Update details for a specific Game Center activity.
- [Delete an Activity](delete-v1-gamecenteractivities-_id_.md): Remove a specific Game Center activity.
- [Remove an Achievement](delete-v1-gamecenteractivities-_id_-relationships-achievementsv2.md): Remove an achievement from a Game Center activity.
- [Remove a Leaderboard](delete-v1-gamecenteractivities-_id_-relationships-leaderboardsv2.md): Remove a leaderboard from a Game Center activity.
