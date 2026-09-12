> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboard/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboard/attributes-data.dictionary)

# GameCenterLeaderboard.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

Attributes that describe a leaderboard resource.

## Declaration

```
object GameCenterLeaderboard.Attributes
```

## Properties

- `activityProperties` — `StringToStringMap`:
- `archived` — `boolean`:
- `defaultFormatter` — `GameCenterLeaderboardFormatter`:
- `recurrenceDuration` — `duration`:
- `recurrenceRule` — `string`:
- `recurrenceStartDate` — `date-time`:
- `referenceName` — `string`:
- `scoreRangeEnd` — `number`:
- `scoreRangeStart` — `number`:
- `scoreSortType` — `string`: **Allowed values:** `ASC`, `DESC`
- `submissionType` — `string`: **Allowed values:** `BEST_SCORE`, `MOST_RECENT_SCORE`
- `vendorIdentifier` — `string`:
- `visibility` — `string`: **Allowed values:** `SHOW_FOR_ALL`, `HIDE_FOR_ALL`

<a id="Discussion"></a>

### Discussion

Use leaderboard formatters to specify the unit of measurement for a Game Center leaderboard. There is a new required attribute `defaultFormatter` when you use [Create a Leaderboard](../post-v1-gamecenterleaderboards.md), which gives all your localizations the same formatter. You can also optionally use `formatterOverride` to override a specific leaderboard localization when calling [Create a Leaderboard Localization](../post-v1-gamecenterleaderboardlocalizations.md) or [Modify a Leaderboard Localization](../patch-v1-gamecenterleaderboardlocalizations-_id_.md).

Before App Store Connect API version 3.0, formatters were based on localizations and were required for each localization. Legacy leaderboards created before the new addition of the Game Center APIs don’t have a `defaultFormatter` value; the value is `null`. Any localizations created before the new addition of the Game Center APIs have a `formatterOverride`.

## See Also

### Objects

- [GameCenterLeaderboard.Relationships](relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.
