> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterchallenges-_id_-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterchallenges-_id_-versions)

# Read the Versions for a Challenge

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of versions for a specific Game Center challenge.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterChallenges/{id}/versions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterChallengeImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`
- `fields[gameCenterChallengeLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `description`, `version`, `image`
- `fields[gameCenterChallengeVersionReleases]` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterChallengeVersions]` — `[string]`: **Allowed values:** `version`, `state`, `challenge`, `localizations`, `releases`, `defaultImage`
- `fields[gameCenterChallenges]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `archived`, `challengeType`, `repeatable`, `gameCenterDetail`, `gameCenterGroup`, `versions`, `leaderboard`, `leaderboardV2`
- `include` — `[string]`: **Allowed values:** `challenge`, `localizations`, `releases`, `defaultImage`
- `limit` — `integer`: **Maximum:** `200`
- `limit[localizations]` — `integer`: **Maximum:** `50`
- `limit[releases]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterChallengeVersionsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing challenges

- [Read Challenge Information](get-v1-gamecenterchallenges-_id_.md): Get information for a specific Game Center challenge.
- [Create a Challenge](post-v1-gamecenterchallenges.md): Add a challenge to a Game Center detail or group by referencing an existing leaderboard.
- [Modify a Challenge](patch-v1-gamecenterchallenges-_id_.md): Update details for a specific Game Center challenge.
- [Modify the Leaderboard for a Game Center Challenge](patch-v1-gamecenterchallenges-_id_-relationships-leaderboardv2.md): Update the leaderboard relationship for a specific Game Center challenge.
- [Modify the Leaderboard for a Challenge](patch-v1-gamecenterchallenges-_id_-relationships-leaderboard.md): Deprecated. Update the relationship between a leaderbaord and a specific Game Center challenge.
- [Modify the challenges minimum platform version for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-challengesminimumplatformversions.md): Update the relationship between a challenges minimum platform version and a specific Game Center detail.
- [Delete a Challenge](delete-v1-gamecenterchallenges-_id_.md): Remove a specific Game Center challenge.
- [Read the challenges for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterchallenges.md): Get challenge information for a specific Game Center detail.
- [Read the challenges for a game center group](get-v1-gamecentergroups-_id_-gamecenterchallenges.md): Get challenge information for a specific Game Center group.
- [List Game Center challenge IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenterchallenges.md)
- [Read the challenges for a game center group](get-v1-gamecentergroups-_id_-gamecenterchallenges.md): Get challenge information for a specific Game Center group.
- [List Game Center challenge IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenterchallenges.md)
