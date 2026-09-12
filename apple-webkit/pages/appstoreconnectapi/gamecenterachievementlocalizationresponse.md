> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterachievementlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterachievementlocalizationresponse)

# GameCenterAchievementLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that create, read, or modify a single Game Center achievement localization.

## Declaration

```
object GameCenterAchievementLocalizationResponse
```

## Properties

- `data` — `GameCenterAchievementLocalization` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterAchievementImage`, `GameCenterAchievement`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterAchievementLocalizationV2](gamecenterachievementlocalizationv2.md): The data structure that represents a Game Center achievement localization v2 resource.
- [GameCenterAchievementLocalizationV2CreateRequest](gamecenterachievementlocalizationv2createrequest.md): The request body you use to create a Game Center achievement localization v2.
- [GameCenterAchievementLocalizationV2Response](gamecenterachievementlocalizationv2response.md): A response that contains a single Game Center achievement localization v2 resource.
- [GameCenterAchievementLocalizationV2UpdateRequest](gamecenterachievementlocalizationv2updaterequest.md): The request body you use to update a Game Center achievement localization v2.
- [GameCenterAchievementLocalizationsV2Response](gamecenterachievementlocalizationsv2response.md): A response that contains a single Game Center achievement localization v2 resource.
- [GameCenterAchievementLocalizationV2ImageLinkageResponse](gamecenterachievementlocalizationv2imagelinkageresponse.md): A response that contains a single Game Center achievement localization v2 image linkage resource.
- [GameCenterAchievementLocalization](gamecenterachievementlocalization.md): Deprecated. The localized name, description, and badge image for a Game Center achievement in a specific language.
- [GameCenterAchievementLocalizationCreateRequest](gamecenterachievementlocalizationcreaterequest.md): Deprecated. The request body you use to create a Game Center achievement localization.
- [GameCenterAchievementLocalizationUpdateRequest](gamecenterachievementlocalizationupdaterequest.md): Deprecated. The request body you use to update a achievement.
- [GameCenterAchievementLocalizationsResponse](gamecenterachievementlocalizationsresponse.md): Deprecated. The response body for endpoints that list Game Center achievement localizations.
- [GameCenterAchievementLocalizationGameCenterAchievementImageLinkageResponse](gamecenterachievementlocalizationgamecenterachievementimagelinkageresponse.md): Deprecated.
- [GameCenterAchievementLocalizationGameCenterAchievementLinkageResponse](gamecenterachievementlocalizationgamecenterachievementlinkageresponse.md): Deprecated.
- [GameCenterAchievementLocalizationsLinkagesResponse](gamecenterachievementlocalizationslinkagesresponse.md): Deprecated.
