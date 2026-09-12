> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterleaderboards-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterleaderboards-_id_)

# Edit a Leaderboard

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Modify the details of a leaderboard.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboards/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the leaderboard resource ID from the [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md) response.

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardUpdateRequest`

## Response Codes

- `200` OK — `GameCenterLeaderboardResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

### Discussion

Use leaderboard formatters to specify the unit of measurement for a Game Center leaderboard. There is a new required attribute `defaultFormatter` when you use [Create a Leaderboard](post-v1-gamecenterleaderboards.md), which gives all your localizations the same formatter. You can also optionally use `formatterOverride` to override a specific leaderboard localization when calling [Create a Leaderboard Localization](post-v1-gamecenterleaderboardlocalizations.md) or [Modify a Leaderboard Localization](patch-v1-gamecenterleaderboardlocalizations-_id_.md).

Before App Store Connect API version 3.0, formatters were based on localizations and were required for each localization. Legacy leaderboards created before the new addition of the Game Center APIs will not have a `defaultFormatter` value, the value would be `null` in this case. Any localizations created before the new addition of the Game Center APIs will always have a `formatterOverride`.

## See Also

### Creating, modifying, and deleting leaderboards

- [Create a Game Center Leaderboard](post-v2-gamecenterleaderboards.md): Create a Game Center leaderboard.
- [Modify a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_.md): Update a specific Game Center leaderboard.
- [Modify the Activity for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center leaderboard.
- [Modify the Challenge for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-challenge.md): Update the challenge relationship for a specific Game Center leaderboard.
- [Delete a Game Center Leaderboard](delete-v2-gamecenterleaderboards-_id_.md): Delete a specific Game Center leaderboard.
- [Create a Leaderboard](post-v1-gamecenterleaderboards.md): Deprecated. Add a new leaderboard to your app.
- [Edit the Relationship Between a Leaderboard and a Group Leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard.md): Deprecated. Modify the group leadboard to which a leaderboard belongs.
- [Modify the activity for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-activity.md): Deprecated.
- [Modify the challenge for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-challenge.md): Deprecated.
- [Delete a Leaderboard](delete-v1-gamecenterleaderboards-_id_.md): Deprecated. Delete a leaderboard from your app.
