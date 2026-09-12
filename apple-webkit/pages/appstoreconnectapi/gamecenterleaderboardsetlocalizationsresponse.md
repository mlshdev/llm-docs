> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetlocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetlocalizationsresponse)

# GameCenterLeaderboardSetLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that list Game Center leaderboard set localizations.

## Declaration

```
object GameCenterLeaderboardSetLocalizationsResponse
```

## Properties

- `data` — `[GameCenterLeaderboardSetLocalization]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterLeaderboardSetImage`, `GameCenterLeaderboardSet`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterLeaderboardSetLocalizationV2](gamecenterleaderboardsetlocalizationv2.md): The data structure that represents a Game Center leaderboard set localization v2 resource.
- [GameCenterLeaderboardSetLocalizationV2CreateRequest](gamecenterleaderboardsetlocalizationv2createrequest.md): The request body you use to create a Game Center leaderboard set localization v2.
- [GameCenterLeaderboardSetLocalizationV2Response](gamecenterleaderboardsetlocalizationv2response.md): A response that contains a single Game Center leaderboard set localization v2 resource.
- [GameCenterLeaderboardSetLocalizationV2UpdateRequest](gamecenterleaderboardsetlocalizationv2updaterequest.md): The request body you use to update a Game Center leaderboard set localization v2.
- [GameCenterLeaderboardSetLocalizationsV2Response](gamecenterleaderboardsetlocalizationsv2response.md): A response that contains a single Game Center leaderboard set localization v2 resource.
- [GameCenterLeaderboardSetLocalizationV2ImageLinkageResponse](gamecenterleaderboardsetlocalizationv2imagelinkageresponse.md): A response that contains a single Game Center leaderboard set localization v2 image linkage resource.
- [GameCenterLeaderboardSetLocalization](gamecenterleaderboardsetlocalization.md): Deprecated. The data structure that represent a leaderboard set localization.
- [GameCenterLeaderboardSetLocalizationCreateRequest](gamecenterleaderboardsetlocalizationcreaterequest.md): Deprecated. The request body you use to create a leaderboard set localization.
- [GameCenterLeaderboardSetLocalizationResponse](gamecenterleaderboardsetlocalizationresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard set localization.
- [GameCenterLeaderboardSetLocalizationUpdateRequest](gamecenterleaderboardsetlocalizationupdaterequest.md): Deprecated. The request body you use to update a leaderboard localization.
