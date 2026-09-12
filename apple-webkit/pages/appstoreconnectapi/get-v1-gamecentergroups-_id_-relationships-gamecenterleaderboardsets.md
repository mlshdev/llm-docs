> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsets](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsets)

# Read the Leaderboard Sets in a Group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

List all the leaderboard sets associated with a specific group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and modifying group relationships

- [Get All Achievement IDs for a Game Center Group](get-v1-gamecentergroups-_id_-relationships-gamecenterachievementsv2.md): Get a list of achievement resource IDs for a specific Game Center group.
- [Get All Leaderboard Set IDs for a Game Center Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsetsv2.md): Get a list of leaderboard set resource IDs for a specific Game Center group.
- [Get All Leaderboard IDs for a Game Center Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsv2.md): Get a list of leaderboard resource IDs for a specific Game Center group.
- [Modify the Achievements for a Game Center Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterachievementsv2.md): Update the achievements relationship for a specific Game Center group.
- [Modify the Leaderboard Sets for a Game Center Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsetsv2.md): Update the leaderboard sets relationship for a specific Game Center group.
- [Modify the Leaderboards for a Game Center Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsv2.md): Update the leaderboards relationship for a specific Game Center group.
- [Read the Achievements in a Group](get-v1-gamecentergroups-_id_-relationships-gamecenterachievements.md): Deprecated. List all the achievements associated with a specific group.
- [Read the Leaderboards in a Group](get-v1-gamecentergroups-_id_-relationships-gamecenterleaderboards.md): Deprecated. List all the leaderboard associated with a specific group.
- [Edit the Achievements Associated With a Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterachievements.md): Deprecated. Modify the achievements in a specific group.
- [Edit the Leaderboard Sets Associated With a Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. Modify the leaderboard sets in a specific group.
- [Edit the Leaderboard Associated With a Group](patch-v1-gamecentergroups-_id_-relationships-gamecenterleaderboards.md): Deprecated. Modify the Game Center leaderboards in a specific group.
