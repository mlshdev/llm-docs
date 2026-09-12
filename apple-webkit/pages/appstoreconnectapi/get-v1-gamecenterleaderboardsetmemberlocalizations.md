> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsetmemberlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterleaderboardsetmemberlocalizations)

# Read Leaderboard Set Member Localization Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get information about leaderboard member set localizations.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetMemberLocalizations
```

## Query Parameters

- `fields[gameCenterLeaderboardSetMemberLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `gameCenterLeaderboardSet`, `gameCenterLeaderboard`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`
- `filter[gameCenterLeaderboardSet]` — `[string]` (required):
- `filter[gameCenterLeaderboard]` — `[string]` (required):
- `include` — `[string]`: **Allowed values:** `gameCenterLeaderboardSet`, `gameCenterLeaderboard`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterLeaderboardSetMemberLocalizationsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing leaderboard set member localizations

- [Read Leaderboard Information for a Leaderboard Set Member Localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboard.md): Deprecated. Get information about a leaderboard for a specific leaderboard set member localization.
- [Read the leaderboard id for a leaderboard set member localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-relationships-gamecenterleaderboard.md): Deprecated. Get the leaderboard ID for a specific leaderboard set member localization.
- [Read Leaderboard Set Information for a Leaderboard Set Member Localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-gamecenterleaderboardset.md): Deprecated. Get information about a leaderboard set for a specific leaderboard set member localization.
- [Get the leaderboard set ID for a Game Center leaderboard set member localization](get-v1-gamecenterleaderboardsetmemberlocalizations-_id_-relationships-gamecenterleaderboardset.md): Deprecated.
- [Create a Leaderboard Set Member Localization](post-v1-gamecenterleaderboardsetmemberlocalizations.md): Deprecated. Add a new leaderboard set localization.
- [Modify a Leaderboard Set Member Localization](patch-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Deprecated. Edit a leaderboard set member localization.
- [Delete a Leaderboard Set Member Localization](delete-v1-gamecenterleaderboardsetmemberlocalizations-_id_.md): Delete a localization that’s associated with a leaderboard set member.
