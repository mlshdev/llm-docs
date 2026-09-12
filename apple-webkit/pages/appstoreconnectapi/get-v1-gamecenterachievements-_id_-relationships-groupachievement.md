> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterachievements-_id_-relationships-groupachievement](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterachievements-_id_-relationships-groupachievement)

# List Group Achievements for an Achievement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

List associated group achievements for a specific achievement.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAchievements/{id}/relationships/groupAchievement
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the achievement resource ID from the [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md) response.

## Response Codes

- `200` OK — `GameCenterAchievementGroupAchievementLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading achievements

- [Read Game Center Achievement Information](get-v2-gamecenterachievements-_id_.md): Get information about a specific Game Center achievement.
- [List All Versions for a Game Center Achievement](get-v2-gamecenterachievements-_id_-versions.md): Get a list of versions for a specific Game Center achievement.
- [Get All Version IDs for a Game Center Achievement](get-v2-gamecenterachievements-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center achievement.
- [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md): Deprecated. List all achievement information for a Game Center detail.
- [Read Achievement Information](get-v1-gamecenterachievements-_id_.md): Deprecated. Read information about a specific Game Center achievement.
- [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md): Deprecated. Read information about the release for specific achievement.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [List Associated Group Achievement Information for an Achievement](get-v1-gamecenterachievements-_id_-groupachievement.md): Deprecated. Read information about the group for specific achievement.
- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
