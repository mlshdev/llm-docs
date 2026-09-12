> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardv2createrequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardv2createrequest/data-data.dictionary/attributes-data.dictionary)

# GameCenterLeaderboardV2CreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

The request body you use to create a Game Center leaderboard create request.

## Declaration

```
object GameCenterLeaderboardV2CreateRequest.Data.Attributes
```

## Properties

- `activityProperties` — `StringToStringMap`:
- `defaultFormatter` — `GameCenterLeaderboardFormatter` (required):
- `recurrenceDuration` — `duration`:
- `recurrenceRule` — `string`:
- `recurrenceStartDate` — `date-time`:
- `referenceName` — `string` (required):
- `scoreRangeEnd` — `number`:
- `scoreRangeStart` — `number`:
- `scoreSortType` — `string` (required): **Allowed values:** `ASC`, `DESC`
- `submissionType` — `string` (required): **Allowed values:** `BEST_SCORE`, `MOST_RECENT_SCORE`
- `vendorIdentifier` — `string` (required):
- `visibility` — `string`: **Allowed values:** `SHOW_FOR_ALL`, `HIDE_FOR_ALL`

<a id="overview"></a>

## Overview

- activityProperties:
- defaultFormatter:
- recurrenceDuration:
- recurrenceRule:
- recurrenceStartDate:
- referenceName:
- scoreRangeEnd:
- scoreRangeStart:
- scoreSortType:
- submissionType:
- vendorIdentifier:
- visibility:

## See Also

### Dictionaries

- [GameCenterLeaderboardV2CreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those you can operate on.
