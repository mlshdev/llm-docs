> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardversionsv2response](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardversionsv2response)

# GameCenterLeaderboardVersionsV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A response that contains a list of Game Center leaderboard version resources.

## Declaration

```
object GameCenterLeaderboardVersionsV2Response
```

## Properties

- `data` — `[GameCenterLeaderboardVersionV2]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterLeaderboardLocalizationV2`, `GameCenterLeaderboardV2`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

<a id="overview"></a>

## Overview

- data:
- included:
- links:
- meta:

## See Also

### Objects

- [GameCenterLeaderboardVersionV2](gamecenterleaderboardversionv2.md): The data structure that represents a Game Center leaderboard version v2 resource.
- [GameCenterLeaderboardVersionV2CreateRequest](gamecenterleaderboardversionv2createrequest.md): The request body you use to create a Game Center leaderboard version v2.
- [GameCenterLeaderboardVersionV2Response](gamecenterleaderboardversionv2response.md): A response that contains a single Game Center leaderboard version resource.
- [GameCenterLeaderboardVersionV2InlineCreate](gamecenterleaderboardversionv2inlinecreate.md): The data structure that represents a Game Center leaderboard version v2 inline create resource.
- [GameCenterLeaderboardVersionV2LocalizationsLinkagesResponse](gamecenterleaderboardversionv2localizationslinkagesresponse.md): A response that contains a list of Game Center leaderboard version v2 localization linkage resources.
