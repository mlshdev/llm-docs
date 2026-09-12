> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetv2response](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetv2response)

# GameCenterLeaderboardSetV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A response that contains a single Game Center leaderboard set v2 resource.

## Declaration

```
object GameCenterLeaderboardSetV2Response
```

## Properties

- `data` — `GameCenterLeaderboardSetV2` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterDetail`, `GameCenterGroup`, `GameCenterLeaderboardSetVersionV2`, `GameCenterLeaderboardV2`
- `links` — `DocumentLinks` (required):

<a id="overview"></a>

## Overview

- data:
- included:
- links:

## See Also

### Objects

- [GameCenterLeaderboardSetV2](gamecenterleaderboardsetv2.md): The data structure that represents a Game Center leaderboard set v2 resource.
- [GameCenterLeaderboardSetV2CreateRequest](gamecenterleaderboardsetv2createrequest.md): The request body you use to create a Game Center leaderboard set v2.
- [GameCenterLeaderboardSetV2UpdateRequest](gamecenterleaderboardsetv2updaterequest.md): The request body you use to update a Game Center leaderboard set v2.
- [GameCenterLeaderboardSetsV2Response](gamecenterleaderboardsetsv2response.md): A response that contains a single Game Center leaderboard set v2 resource.
- [GameCenterLeaderboardSetV2GameCenterLeaderboardsLinkagesRequest](gamecenterleaderboardsetv2gamecenterleaderboardslinkagesrequest.md): The data structure that represents a Game Center leaderboard set v2 Game Center leaderboard linkage request resource.
- [GameCenterLeaderboardSetV2GameCenterLeaderboardsLinkagesResponse](gamecenterleaderboardsetv2gamecenterleaderboardslinkagesresponse.md): A response that contains a list of Game Center leaderboard set v2 Game Center leaderboard linkage resources.
- [GameCenterLeaderboardSetV2VersionsLinkagesResponse](gamecenterleaderboardsetv2versionslinkagesresponse.md): A response that contains a list of Game Center leaderboard set v2 version linkage resources.
- [GameCenterLeaderboardSet](gamecenterleaderboardset.md): Deprecated. The data structure that represent a leaderboard set resource.
- [GameCenterLeaderboardSetCreateRequest](gamecenterleaderboardsetcreaterequest.md): Deprecated. The request body you use to create a leaderboard set.
- [GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest](gamecenterleaderboardsetgamecenterleaderboardslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a leaderboard set and a leaderboard.
- [GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse](gamecenterleaderboardsetgamecenterleaderboardslinkagesresponse.md): Deprecated. A response that confirms a relationship between a leaderboard set and a leaderboard.
- [GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest](gamecenterleaderboardsetgroupleaderboardsetlinkagerequest.md): Deprecated. The request body you use to create a relationship between a leaderboard set and a group leaderboard set.
- [GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse](gamecenterleaderboardsetgroupleaderboardsetlinkageresponse.md): Deprecated. A response that confirms a relationship between a leaderboard set and a group leaderboard set.
- [GameCenterLeaderboardSetResponse](gamecenterleaderboardsetresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard set.
- [GameCenterLeaderboardSetUpdateRequest](gamecenterleaderboardsetupdaterequest.md): Deprecated. The request body you use to update a leaderboard set.
