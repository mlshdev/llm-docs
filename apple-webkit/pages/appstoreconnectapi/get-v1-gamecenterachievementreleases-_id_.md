> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterachievementreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterachievementreleases-_id_)

# Read game center achievement release information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read the state of a specific achievement release.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center achievement release resource ID from the [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md) response.

## Query Parameters

- `fields[gameCenterAchievementReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterAchievement`
- `include` — `[string]`: **Allowed values:** `gameCenterDetail`, `gameCenterAchievement`
- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `groupAchievement`, `localizations`, `releases`, `activity`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`

## Response Codes

- `200` OK — `GameCenterAchievementReleaseResponse`:
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
https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/b46850bc-ba02-3793-4ea7-36738b92440a
```

**Response**

```json
{
  “data” : {
    “type” : “gameCenterAchievementReleases”,
    “id” : “b46850bc-ba02-3793-4ea7-36738b92440a”,
    “attributes” : {
      “live” : true
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/b46850bc-ba02-3793-4ea7-36738b92440a”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/b46850bc-ba02-3793-4ea7-36738b92440a”
  }
}
```

## See Also

### Managing Game Center achievement releases

- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [Create a game center achievement release](post-v1-gamecenterachievementreleases.md): Deprecated. Create a release for an achievement and a Game Center detail.
- [Delete a game center achievement release](delete-v1-gamecenterachievementreleases-_id_.md): Deprecated. Delete a release of an achievement or Game Center detail.
