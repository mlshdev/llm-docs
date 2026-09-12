> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterdetailgamecenterachievementslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterdetailgamecenterachievementslinkagesresponse)

# GameCenterDetailGameCenterAchievementsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response that confirms a relationship between a Game Center detail and an achievement.

## Declaration

```
object GameCenterDetailGameCenterAchievementsLinkagesResponse
```

## Properties

- `data` — `[GameCenterDetailGameCenterAchievementsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Objects

- [GameCenterDetailGameCenterAchievementsLinkagesResponse.Data](gamecenterdetailgamecenterachievementslinkagesresponse/data-data.dictionary.md): Deprecated. The resource linkage data identifying the achievements associated with a Game Center detail.

## See Also

### Objects

- [GameCenterDetail](gamecenterdetail.md): The Game Center configuration for an app, linking it to leaderboards, achievement sets, and groups.
- [GameCenterDetailCreateRequest](gamecenterdetailcreaterequest.md): The request body you use to create a Game Center detail.
- [GameCenterDetailGameCenterAchievementsV2LinkagesRequest](gamecenterdetailgamecenterachievementsv2linkagesrequest.md): The data structure that represents a Game Center detail Game Center achievement linkage request resource.
- [GameCenterDetailGameCenterAchievementsV2LinkagesResponse](gamecenterdetailgamecenterachievementsv2linkagesresponse.md): A response that contains a list of Game Center detail Game Center achievement linkage resources.
- [GameCenterDetailGameCenterLeaderboardSetsV2LinkagesRequest](gamecenterdetailgamecenterleaderboardsetsv2linkagesrequest.md): The data structure that represents a Game Center detail Game Center leaderboard set linkage request resource.
- [GameCenterDetailGameCenterLeaderboardSetsV2LinkagesResponse](gamecenterdetailgamecenterleaderboardsetsv2linkagesresponse.md): A response that contains a list of Game Center detail Game Center leaderboard set linkage resources.
- [GameCenterDetailGameCenterLeaderboardsV2LinkagesRequest](gamecenterdetailgamecenterleaderboardsv2linkagesrequest.md): The data structure that represents a Game Center detail Game Center leaderboard linkage request resource.
- [GameCenterDetailGameCenterLeaderboardsV2LinkagesResponse](gamecenterdetailgamecenterleaderboardsv2linkagesresponse.md): A response that contains a list of Game Center detail Game Center leaderboard linkage resources.
- [GameCenterDetailGameCenterAchievementsLinkagesRequest](gamecenterdetailgamecenterachievementslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a Game Center detail and an achievement.
- [GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest](gamecenterdetailgamecenterleaderboardsetslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a Game Center detail and a leaderboard set.
- [GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse](gamecenterdetailgamecenterleaderboardsetslinkagesresponse.md): Deprecated. A response that confirms a relationship between a Game Center detail and leaderboard set.
- [GameCenterDetailGameCenterLeaderboardsLinkagesRequest](gamecenterdetailgamecenterleaderboardslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a Game Center detail and a leaderboard.
- [GameCenterDetailGameCenterLeaderboardsLinkagesResponse](gamecenterdetailgamecenterleaderboardslinkagesresponse.md): Deprecated. A response that confirms a relationship between a Game Center detail and a leaderboard.
- [GameCenterDetailChallengesMinimumPlatformVersionsLinkagesRequest](gamecenterdetailchallengesminimumplatformversionslinkagesrequest.md): The request body for updating the minimum platform versions required for challenges in a Game Center detail.
- [GameCenterDetailResponse](gamecenterdetailresponse.md): The response body for endpoints that read or modify the Game Center details for an app.
