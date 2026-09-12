> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecenterleaderboardsetmemberlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecenterleaderboardsetmemberlocalizations-_id_)

# Modify a Leaderboard Set Member Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+ (deprecated in 4.0)

Edit a leaderboard set member localization.

> This endpoint is deprecated. Use [Modify a Leaderboard Set Localization](patch-v1-gamecenterleaderboardsetlocalizations-_id_.md) instead.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetMemberLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetMemberLocalizationUpdateRequest`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetMemberLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md)

## See Also

### Managing leaderboard set member localizations

- [Read Leaderboard Set Member Localization Information](get-v1-gamecenterleaderboardsetmemberlocalizations.md): Get information about leaderboard member set localizations.
- [Read Leaderboard Information for a Leaderboard Set Member Localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboard.md): Deprecated. Get information about a leaderboard for a specific leaderboard set member localization.
- [Read the leaderboard id for a leaderboard set member localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-relationships-gamecenterleaderboard.md): Deprecated. Get the leaderboard ID for a specific leaderboard set member localization.
- [Read Leaderboard Set Information for a Leaderboard Set Member Localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboardset.md): Deprecated. Get information about a leaderboard set for a specific leaderboard set member localization.
- [Get the leaderboard set ID for a Game Center leaderboard set member localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-relationships-gamecenterleaderboardset.md): Deprecated.
- [Create a Leaderboard Set Member Localization](post-v1-gamecenterleaderboardsetmemberlocalizations.md): Deprecated. Add a new leaderboard set localization.
- [Delete a Leaderboard Set Member Localization](delete-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Delete a localization that’s associated with a leaderboard set member.
