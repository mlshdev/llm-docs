> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardlocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardlocalizationsresponse)

# GameCenterLeaderboardLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that list Game Center leaderboard localizations.

## Declaration

```
object GameCenterLeaderboardLocalizationsResponse
```

## Properties

- `data` — `[GameCenterLeaderboardLocalization]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterLeaderboardImage`, `GameCenterLeaderboard`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterLeaderboardLocalizationV2](gamecenterleaderboardlocalizationv2.md): The data structure that represents a Game Center leaderboard localization v2 resource.
- [GameCenterLeaderboardLocalizationV2CreateRequest](gamecenterleaderboardlocalizationv2createrequest.md): The request body you use to create a Game Center leaderboard localization v2.
- [GameCenterLeaderboardLocalizationV2Response](gamecenterleaderboardlocalizationv2response.md): A response that contains a single Game Center leaderboard localization v2 resource.
- [GameCenterLeaderboardLocalizationV2UpdateRequest](gamecenterleaderboardlocalizationv2updaterequest.md): The request body you use to update a Game Center leaderboard localization v2.
- [GameCenterLeaderboardLocalizationsV2Response](gamecenterleaderboardlocalizationsv2response.md): A response that contains a single Game Center leaderboard localization v2 resource.
- [GameCenterLeaderboardLocalizationV2ImageLinkageResponse](gamecenterleaderboardlocalizationv2imagelinkageresponse.md): A response that contains a single Game Center leaderboard localization v2 image linkage resource.
- [GameCenterLeaderboardLocalization](gamecenterleaderboardlocalization.md): Deprecated. The data structure that represent a leaderboard localization.
- [GameCenterLeaderboardLocalizationCreateRequest](gamecenterleaderboardlocalizationcreaterequest.md): Deprecated. The request body you use to create a leaderboard localization.
- [GameCenterLeaderboardLocalizationResponse](gamecenterleaderboardlocalizationresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard localization.
- [GameCenterLeaderboardLocalizationUpdateRequest](gamecenterleaderboardlocalizationupdaterequest.md): Deprecated. The request body you use to update a leaderboard localization.
- [GameCenterLeaderboardLocalizationGameCenterLeaderboardImageLinkageResponse](gamecenterleaderboardlocalizationgamecenterleaderboardimagelinkageresponse.md): Deprecated.
- [GameCenterLeaderboardLocalizationsLinkagesResponse](gamecenterleaderboardlocalizationslinkagesresponse.md): Deprecated.
