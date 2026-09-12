> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivitiesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivitiesresponse)

# GameCenterActivitiesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a list of Game Center activities configured for an app.

## Declaration

```
object GameCenterActivitiesResponse
```

## Properties

- `data` — `[GameCenterActivity]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterAchievement`, `GameCenterActivityVersion`, `GameCenterDetail`, `GameCenterGroup`, `GameCenterLeaderboard`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterActivity](gamecenteractivity.md): A social or competitive event in Game Center that players can participate in, such as a leaderboard challenge.
- [GameCenterActivityAchievementsV2LinkagesRequest](gamecenteractivityachievementsv2linkagesrequest.md): The data structure that represents a Game Center activity achievement linkage request resource.
- [GameCenterActivityLeaderboardsV2LinkagesRequest](gamecenteractivityleaderboardsv2linkagesrequest.md): The data structure that represents a Game Center activity leaderboard linkage request resource.
- [GameCenterActivityAchievementsLinkagesRequest](gamecenteractivityachievementslinkagesrequest.md): Deprecated. The request body for updating the list of achievements linked to a Game Center activity.
- [GameCenterActivityLeaderboardsLinkagesRequest](gamecenteractivityleaderboardslinkagesrequest.md): Deprecated. The request body for updating the list of leaderboards linked to a Game Center activity.
- [GameCenterActivityCreateRequest](gamecenteractivitycreaterequest.md): The request body for creating a new Game Center activity.
- [GameCenterActivityVersionInlineCreate](gamecenteractivityversioninlinecreate.md): The data structure you use to configure an activity version while creating an activity.
- [GameCenterActivityResponse](gamecenteractivityresponse.md): A response containing a single Game Center activity with its configuration.
- [GameCenterActivityUpdateRequest](gamecenteractivityupdaterequest.md): The request body you use to update an activity.
- [GameCenterActivityVersion](gamecenteractivityversion.md): A versioned configuration of a Game Center activity, containing its localizations and release status.
- [GameCenterActivityVersionCreateRequest](gamecenteractivityversioncreaterequest.md): The request body for creating a version of a Game Center activity.
- [GameCenterActivityLocalizationImageLinkageResponse](gamecenteractivitylocalizationimagelinkageresponse.md)
- [StringToStringMap](stringtostringmap.md): A dictionary object mapping arbitrary string keys to string values, used for flexible key-value metadata.
