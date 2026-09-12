> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterleaderboardsetmemberlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterleaderboardsetmemberlocalizations)

# Create a Leaderboard Set Member Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+ (deprecated in 4.0)

Add a new leaderboard set localization.

> This endpoint is deprecated. Use [Create a Leaderboard Set Localization](post-v1-gamecenterleaderboardsetlocalizations.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetMemberLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardSetMemberLocalizationCreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardSetMemberLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
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
- [Modify a Leaderboard Set Member Localization](patch-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Deprecated. Edit a leaderboard set member localization.
- [Delete a Leaderboard Set Member Localization](delete-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Delete a localization that’s associated with a leaderboard set member.
