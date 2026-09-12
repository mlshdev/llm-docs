> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardlocalizationupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardlocalizationupdaterequest/data-data.dictionary/attributes-data.dictionary)

# GameCenterLeaderboardLocalizationUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

Attributes that describe a leaderboard resource.

## Declaration

```
object GameCenterLeaderboardLocalizationUpdateRequest.Data.Attributes
```

## Properties

- `description` — `string`:
- `formatterOverride` — `GameCenterLeaderboardFormatter`:
- `formatterSuffix` — `string`:
- `formatterSuffixSingular` — `string`:
- `name` — `string`:

<a id="Discussion"></a>

### Discussion

Use leaderboard formatters to specify the unit of measurement for a Game Center leaderboard. There is a new required attribute `defaultFormatter` when you use [Create a Leaderboard](../../post-v1-gamecenterleaderboards.md), which gives all your localizations the same formatter. You can also optionally use `formatterOverride` to override a specific leaderboard localization when calling [Create a Leaderboard Localization](../../post-v1-gamecenterleaderboardlocalizations.md) or [Modify a Leaderboard Localization](../../patch-v1-gamecenterleaderboardlocalizations-_id_.md).

Before App Store Connect API version 3.0, formatters were based on localizations and were required for each localization. Legacy leaderboards created before the new addition of the Game Center APIs will not have a `defaultFormatter` value, the value would be `null` in this case. Any localizations created before the new addition of the Game Center APIs will always have a `formatterOverride`.
