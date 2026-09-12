> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterachievementsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterachievementsresponse)

# GameCenterAchievementsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that list Game Center achievements.

## Declaration

```
object GameCenterAchievementsResponse
```

## Properties

- `data` — `[GameCenterAchievement]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterAchievementLocalization`, `GameCenterAchievementRelease`, `GameCenterAchievement`, `GameCenterActivity`, `GameCenterDetail`, `GameCenterGroup`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterAchievementV2](gamecenterachievementv2.md): The data structure that represents a Game Center achievement v2 resource.
- [GameCenterAchievementV2CreateRequest](gamecenterachievementv2createrequest.md): The request body you use to create a Game Center achievement v2.
- [GameCenterAchievementV2Response](gamecenterachievementv2response.md): A response that contains a single Game Center achievement v2 resource.
- [GameCenterAchievementV2UpdateRequest](gamecenterachievementv2updaterequest.md): The request body you use to update a Game Center achievement v2.
- [GameCenterAchievementsV2Response](gamecenterachievementsv2response.md): A response that contains a single Game Center achievement v2 resource.
- [GameCenterAchievementV2ActivityLinkageRequest](gamecenterachievementv2activitylinkagerequest.md): The data structure that represents a Game Center achievement v2 activity linkage request resource.
- [GameCenterAchievementV2VersionsLinkagesResponse](gamecenterachievementv2versionslinkagesresponse.md): A response that contains a list of Game Center achievement v2 version linkage resources.
- [GameCenterAchievement](gamecenterachievement.md): Deprecated. A reward in Game Center that players earn by completing specific challenges or milestones in a game.
- [GameCenterAchievementCreateRequest](gamecenterachievementcreaterequest.md): Deprecated. A request body you use to create a Game Center achievement.
- [GameCenterAchievementGroupAchievementLinkageRequest](gamecenterachievementgroupachievementlinkagerequest.md): Deprecated. The request body you use to attach an achievement to an achievement group.
- [GameCenterAchievementGroupAchievementLinkageResponse](gamecenterachievementgroupachievementlinkageresponse.md): Deprecated. A response body that contains the ID of a single related resource.
- [GameCenterAchievementResponse](gamecenterachievementresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center achievement.
- [GameCenterAchievementUpdateRequest](gamecenterachievementupdaterequest.md): Deprecated. The request body you use to update a Game Center achievement.
- [GameCenterAchievementActivityLinkageRequest](gamecenterachievementactivitylinkagerequest.md): Deprecated.
- [GameCenterAchievementLocalizationsLinkagesResponse](gamecenterachievementlocalizationslinkagesresponse.md): Deprecated.
