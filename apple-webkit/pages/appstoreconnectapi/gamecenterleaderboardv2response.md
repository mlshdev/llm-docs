> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardv2response](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardv2response)

# GameCenterLeaderboardV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A response that contains a single Game Center leaderboard v2 resource.

## Declaration

```
object GameCenterLeaderboardV2Response
```

## Properties

- `data` — `GameCenterLeaderboardV2` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterActivity`, `GameCenterChallenge`, `GameCenterDetail`, `GameCenterGroup`, `GameCenterLeaderboardSetV2`, `GameCenterLeaderboardVersionV2`
- `links` — `DocumentLinks` (required):

<a id="overview"></a>

## Overview

- data:
- included:
- links:

## See Also

### Objects and types

- [GameCenterLeaderboardV2](gamecenterleaderboardv2.md): The data structure that represents a Game Center leaderboard v2 resource.
- [GameCenterLeaderboardV2CreateRequest](gamecenterleaderboardv2createrequest.md): The request body you use to create a Game Center leaderboard v2.
- [GameCenterLeaderboardV2UpdateRequest](gamecenterleaderboardv2updaterequest.md): The request body you use to update a Game Center leaderboard v2.
- [GameCenterLeaderboardsV2Response](gamecenterleaderboardsv2response.md): A response that contains a list of Game Center leaderboard resources.
- [GameCenterLeaderboardV2ActivityLinkageRequest](gamecenterleaderboardv2activitylinkagerequest.md): The data structure that represents a Game Center leaderboard v2 activity linkage request resource.
- [GameCenterLeaderboardV2ChallengeLinkageRequest](gamecenterleaderboardv2challengelinkagerequest.md): The data structure that represents a Game Center leaderboard v2 challenge linkage request resource.
- [GameCenterLeaderboardV2VersionsLinkagesResponse](gamecenterleaderboardv2versionslinkagesresponse.md): A response that contains a list of Game Center leaderboard v2 version linkage resources.
- [GameCenterLeaderboardUpdateRequest](gamecenterleaderboardupdaterequest.md): Deprecated. The request body you use to update a leaderboard.
- [GameCenterLeaderboardsResponse](gamecenterleaderboardsresponse.md): Deprecated. The response body for endpoints that list Game Center leaderboards.
- [GameCenterLeaderboard](gamecenterleaderboard.md): Deprecated. The data structure that represent a leaderboard resource.
- [GameCenterLeaderboardCreateRequest](gamecenterleaderboardcreaterequest.md): Deprecated. The request body you use to create a leaderboard.
- [GameCenterLeaderboardResponse](gamecenterleaderboardresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard.
- [GameCenterLeaderboardGroupLeaderboardLinkageRequest](gamecenterleaderboardgroupleaderboardlinkagerequest.md): Deprecated. The request body you use to attach an individual leaderbaord to a group leaderboard.
- [GameCenterLeaderboardGroupLeaderboardLinkageResponse](gamecenterleaderboardgroupleaderboardlinkageresponse.md): Deprecated. A response confriming a relationship between a leaderboard and group leaderboard.
- [GameCenterLeaderboardActivityLinkageRequest](gamecenterleaderboardactivitylinkagerequest.md): Deprecated.
