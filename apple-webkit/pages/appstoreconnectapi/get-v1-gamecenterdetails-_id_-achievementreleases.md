> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-achievementreleases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-achievementreleases)

# List achievement releases

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read information about the achievement releases for specific Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/achievementReleases
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center detail resource ID from the [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md) response.

## Query Parameters

- `fields[gameCenterAchievementReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterAchievement`
- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `groupAchievement`, `localizations`, `releases`, `activity`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `filter[gameCenterAchievement]` — `[string]`:
- `filter[live]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterAchievement`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterAchievementReleasesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/gameCenterDetails/83b895ff-7bfe-5056-1208-ffd0d6a74e46/achievementReleases?limit=5
```

**Response**

```json
{
  “data” : [ {
    “type” : “gameCenterAchievementReleases”,
    “id” : “24d3a649-59e7-7d15-f794-3abf4e44d0a8”,
    “attributes” : {
      “live” : true
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/24d3a649-59e7-7d15-f794-3abf4e44d0a8”
    }
  }, {
    “type” : “gameCenterAchievementReleases”,
    “id” : “71002ec8-e7e0-fc5f-456b-c2b563b3294d”,
    “attributes” : {
      “live” : true
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/71002ec8-e7e0-fc5f-456b-c2b563b3294d”
    }
  }, {
    “type” : “gameCenterAchievementReleases”,
    “id” : “2025e5d2-d60f-7504-099a-c6d7df11292d”,
    “attributes” : {
      “live” : true
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/2025e5d2-d60f-7504-099a-c6d7df11292d”
    }
  }, {
    “type” : “gameCenterAchievementReleases”,
    “id” : “b9d99cb3-c5f4-3050-f4dc-d6f4b749cba3”,
    “attributes” : {
      “live” : true
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/b9d99cb3-c5f4-3050-f4dc-d6f4b749cba3”
    }
  }, {
    “type” : “gameCenterAchievementReleases”,
    “id” : “701b76ef-9fe5-f1e7-02ea-b875fe27d0fd”,
    “attributes” : {
      “live” : true
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/701b76ef-9fe5-f1e7-02ea-b875fe27d0fd”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterDetails/83b895ff-7bfe-5056-1208-ffd0d6a74e46/achievementReleases?limit=5”
  },
  “meta” : {
    “paging” : {
      “total” : 35,
      “limit” : 5
    }
  }
}

```

## See Also

### Managing Game Center achievement releases

- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [Read game center achievement release information](get-v1-gamecenterachievementreleases-_id_.md): Deprecated. Read the state of a specific achievement release.
- [Create a game center achievement release](post-v1-gamecenterachievementreleases.md): Deprecated. Create a release for an achievement and a Game Center detail.
- [Delete a game center achievement release](delete-v1-gamecenterachievementreleases-_id_.md): Deprecated. Delete a release of an achievement or Game Center detail.
