> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetmemberlocalization](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetmemberlocalization)

# GameCenterLeaderboardSetMemberLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The data structure that represent a leaderboard set member localization.

## Declaration

```
object GameCenterLeaderboardSetMemberLocalization
```

## Properties

- `attributes` — `GameCenterLeaderboardSetMemberLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterLeaderboardSetMemberLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterLeaderboardSetMemberLocalizations`

## Topics

### Objects

- [GameCenterLeaderboardSetMemberLocalization.Attributes](gamecenterleaderboardsetmemberlocalization/attributes-data.dictionary.md): Attributes that describe a leaderboard resource.
- [GameCenterLeaderboardSetMemberLocalization.Relationships](gamecenterleaderboardsetmemberlocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterLeaderboardSetMemberLocalizationCreateRequest](gamecenterleaderboardsetmemberlocalizationcreaterequest.md): The request body you use to create a leaderboard set localization.
- [GameCenterLeaderboardSetMemberLocalizationResponse](gamecenterleaderboardsetmemberlocalizationresponse.md): A response containing a single localization for a leaderboard’s membership within a leaderboard set.
- [GameCenterLeaderboardSetMemberLocalizationUpdateRequest](gamecenterleaderboardsetmemberlocalizationupdaterequest.md): The request body you use to update a leaderboard localization.
- [GameCenterLeaderboardSetMemberLocalizationsResponse](gamecenterleaderboardsetmemberlocalizationsresponse.md): A response that contains multiple leaderboard localizations resources.
- [GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardLinkageResponse](gamecenterleaderboardsetmemberlocalizationgamecenterleaderboardlinkageresponse.md): Deprecated.
- [GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardSetLinkageResponse](gamecenterleaderboardsetmemberlocalizationgamecenterleaderboardsetlinkageresponse.md): Deprecated.
