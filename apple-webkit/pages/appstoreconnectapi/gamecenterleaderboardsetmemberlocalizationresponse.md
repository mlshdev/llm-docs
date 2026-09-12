> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetmemberlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetmemberlocalizationresponse)

# GameCenterLeaderboardSetMemberLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a single localization for a leaderboard’s membership within a leaderboard set.

## Declaration

```
object GameCenterLeaderboardSetMemberLocalizationResponse
```

## Properties

- `data` — `GameCenterLeaderboardSetMemberLocalization` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterLeaderboardSet`, `GameCenterLeaderboard`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterLeaderboardSetMemberLocalization](gamecenterleaderboardsetmemberlocalization.md): The data structure that represent a leaderboard set member localization.
- [GameCenterLeaderboardSetMemberLocalizationCreateRequest](gamecenterleaderboardsetmemberlocalizationcreaterequest.md): The request body you use to create a leaderboard set localization.
- [GameCenterLeaderboardSetMemberLocalizationUpdateRequest](gamecenterleaderboardsetmemberlocalizationupdaterequest.md): The request body you use to update a leaderboard localization.
- [GameCenterLeaderboardSetMemberLocalizationsResponse](gamecenterleaderboardsetmemberlocalizationsresponse.md): A response that contains multiple leaderboard localizations resources.
- [GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardLinkageResponse](gamecenterleaderboardsetmemberlocalizationgamecenterleaderboardlinkageresponse.md): Deprecated.
- [GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardSetLinkageResponse](gamecenterleaderboardsetmemberlocalizationgamecenterleaderboardsetlinkageresponse.md): Deprecated.
