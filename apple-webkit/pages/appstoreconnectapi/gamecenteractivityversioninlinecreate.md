> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivityversioninlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivityversioninlinecreate)

# GameCenterActivityVersionInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.3+

The data structure you use to configure an activity version while creating an activity.

## Declaration

```
object GameCenterActivityVersionInlineCreate
```

## Properties

- `attributes` — `GameCenterActivityVersionInlineCreate.Attributes`:
- `id` — `string`:
- `relationships` — `GameCenterActivityVersionInlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterActivityVersions`

## Mentioned In

- [App Store Connect API 4.3 release notes](app-store-connect-api-4-3-release-notes.md)

## Topics

### Dictionaries

- [GameCenterActivityVersionInlineCreate.Attributes](gamecenteractivityversioninlinecreate/attributes-data.dictionary.md): Attributes that describe an activity version resource that you create while creating an activity.
- [GameCenterActivityVersionInlineCreate.Relationships](gamecenteractivityversioninlinecreate/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterActivitiesResponse](gamecenteractivitiesresponse.md): A response containing a list of Game Center activities configured for an app.
- [GameCenterActivity](gamecenteractivity.md): A social or competitive event in Game Center that players can participate in, such as a leaderboard challenge.
- [GameCenterActivityAchievementsV2LinkagesRequest](gamecenteractivityachievementsv2linkagesrequest.md): The data structure that represents a Game Center activity achievement linkage request resource.
- [GameCenterActivityLeaderboardsV2LinkagesRequest](gamecenteractivityleaderboardsv2linkagesrequest.md): The data structure that represents a Game Center activity leaderboard linkage request resource.
- [GameCenterActivityAchievementsLinkagesRequest](gamecenteractivityachievementslinkagesrequest.md): Deprecated. The request body for updating the list of achievements linked to a Game Center activity.
- [GameCenterActivityLeaderboardsLinkagesRequest](gamecenteractivityleaderboardslinkagesrequest.md): Deprecated. The request body for updating the list of leaderboards linked to a Game Center activity.
- [GameCenterActivityCreateRequest](gamecenteractivitycreaterequest.md): The request body for creating a new Game Center activity.
- [GameCenterActivityResponse](gamecenteractivityresponse.md): A response containing a single Game Center activity with its configuration.
- [GameCenterActivityUpdateRequest](gamecenteractivityupdaterequest.md): The request body you use to update an activity.
- [GameCenterActivityVersion](gamecenteractivityversion.md): A versioned configuration of a Game Center activity, containing its localizations and release status.
- [GameCenterActivityVersionCreateRequest](gamecenteractivityversioncreaterequest.md): The request body for creating a version of a Game Center activity.
- [GameCenterActivityLocalizationImageLinkageResponse](gamecenteractivitylocalizationimagelinkageresponse.md)
- [StringToStringMap](stringtostringmap.md): A dictionary object mapping arbitrary string keys to string values, used for flexible key-value metadata.
