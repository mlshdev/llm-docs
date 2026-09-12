> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-leaderboards](https://developer.apple.com/documentation/appstoreconnectapi/game-center-leaderboards)

# Game Center leaderboards

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Create and manage leaderboards for your apps.

<a id="overview"></a>

## Overview

Use leaderboards in your games so players can compare their scores against other players in the same game. When you configure leaderboards in App Store Connect, you specify details such as the scores to collect and how to order them.

For more information about how to use leaderboards in your app, see [Configure leaderboards](https://developer.apple.com/help/app-store-connect/configure-game-center/configure-leaderboards/).

## Topics

### Reading leaderboards

- [Read Game Center Leaderboard Information](get-v2-gamecenterleaderboards-_id_.md): Get information about a specific Game Center leaderboard.
- [List All Versions for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-versions.md): Get a list of versions for a specific Game Center leaderboard.
- [Get All Version IDs for a Game Center Leaderboard](get-v2-gamecenterleaderboards-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center leaderboard.
- [Read Leaderboard Information](get-v1-gamecenterleaderboards-_id_.md): Deprecated. Read information about a specific leaderboard.
- [Read Group Information for a Leaderboard](get-v1-gamecenterleaderboards-_id_-groupleaderboard.md): Deprecated. Read the group leadboard to which a leaderboard belongs.
- [List All Localizations for a Leaderboard](get-v1-gamecenterleaderboards-_id_-localizations.md): Deprecated. Get a list of localized metadata for a leaderboard.
- [List localization IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-localizations.md): Deprecated.
- [List all groups to which a leaderboard belongs](get-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard.md): Deprecated. List associated group leaderboards for a specific leaderboard.
- [List Releases for a Leaderboard](get-v1-gamecenterleaderboards-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard and related information.
- [List release IDs for a Game Center leaderboard](get-v1-gamecenterleaderboards-_id_-relationships-releases.md): Deprecated.

### Creating, modifying, and deleting leaderboards

- [Create a Game Center Leaderboard](post-v2-gamecenterleaderboards.md): Create a Game Center leaderboard.
- [Modify a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_.md): Update a specific Game Center leaderboard.
- [Modify the Activity for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center leaderboard.
- [Modify the Challenge for a Game Center Leaderboard](patch-v2-gamecenterleaderboards-_id_-relationships-challenge.md): Update the challenge relationship for a specific Game Center leaderboard.
- [Delete a Game Center Leaderboard](delete-v2-gamecenterleaderboards-_id_.md): Delete a specific Game Center leaderboard.
- [Create a Leaderboard](post-v1-gamecenterleaderboards.md): Deprecated. Add a new leaderboard to your app.
- [Edit a Leaderboard](patch-v1-gamecenterleaderboards-_id_.md): Deprecated. Modify the details of a leaderboard.
- [Edit the Relationship Between a Leaderboard and a Group Leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-groupleaderboard.md): Deprecated. Modify the group leadboard to which a leaderboard belongs.
- [Modify the activity for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-activity.md): Deprecated.
- [Modify the challenge for a Game Center leaderboard](patch-v1-gamecenterleaderboards-_id_-relationships-challenge.md): Deprecated.
- [Delete a Leaderboard](delete-v1-gamecenterleaderboards-_id_.md): Deprecated. Delete a leaderboard from your app.

### Objects and types

- [GameCenterLeaderboardV2](gamecenterleaderboardv2.md): The data structure that represents a Game Center leaderboard v2 resource.
- [GameCenterLeaderboardV2CreateRequest](gamecenterleaderboardv2createrequest.md): The request body you use to create a Game Center leaderboard v2.
- [GameCenterLeaderboardV2Response](gamecenterleaderboardv2response.md): A response that contains a single Game Center leaderboard v2 resource.
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
- [GameCenterLeaderboardChallengeLinkageRequest](gamecenterleaderboardchallengelinkagerequest.md): Deprecated.
- [GameCenterLeaderboardFormatter](gamecenterleaderboardformatter.md): The values you can select to describe the format of a leaderboard.
- [StringToStringMap](stringtostringmap.md): A dictionary object mapping arbitrary string keys to string values, used for flexible key-value metadata.

## See Also

### Leaderboards

- [Game Center leaderboard images](game-center-leaderboard-images.md): Read and manage image assets for Game Center leaderboards.
- [Game Center leaderboard localizations](game-center-leaderboard-localizations.md): Manage localizations for Game Center leaderboards.
- [Game Center leaderboard versions](game-center-leaderboard-versions.md): Manage versions for your Game Center leaderboards.
- [Game Center leaderboard releases](game-center-leaderboard-releases.md): Read, create, and delete Game Center leaderboards releases.
- [Game Center leaderboards scores](game-center-leaderboards-scores.md): Create and modify Game Center leaderboards scores.
