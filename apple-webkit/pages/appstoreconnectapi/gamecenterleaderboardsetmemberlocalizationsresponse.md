> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetmemberlocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetmemberlocalizationsresponse)

# GameCenterLeaderboardSetMemberLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response that contains multiple leaderboard localizations resources.

## Declaration

```
object GameCenterLeaderboardSetMemberLocalizationsResponse
```

## Properties

- `data` — `[GameCenterLeaderboardSetMemberLocalization]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterLeaderboardSet`, `GameCenterLeaderboard`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterLeaderboardSetMemberLocalization](gamecenterleaderboardsetmemberlocalization.md): The data structure that represent a leaderboard set member localization.
- [GameCenterLeaderboardSetMemberLocalizationCreateRequest](gamecenterleaderboardsetmemberlocalizationcreaterequest.md): The request body you use to create a leaderboard set localization.
- [GameCenterLeaderboardSetMemberLocalizationResponse](gamecenterleaderboardsetmemberlocalizationresponse.md): A response containing a single localization for a leaderboard’s membership within a leaderboard set.
- [GameCenterLeaderboardSetMemberLocalizationUpdateRequest](gamecenterleaderboardsetmemberlocalizationupdaterequest.md): The request body you use to update a leaderboard localization.
- [GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardLinkageResponse](gamecenterleaderboardsetmemberlocalizationgamecenterleaderboardlinkageresponse.md): Deprecated.
- [GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardSetLinkageResponse](gamecenterleaderboardsetmemberlocalizationgamecenterleaderboardsetlinkageresponse.md): Deprecated.
