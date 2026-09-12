> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-leaderboard-sets](https://developer.apple.com/documentation/appstoreconnectapi/game-center-leaderboard-sets)

# Game Center leaderboard sets

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage Game Center leaderboard sets for your apps.

<a id="overview"></a>

## Overview

Leaderboard sets organize several leaderboards into a single unit. For example, in a game that includes many levels, you might define a leaderboard set to organize the leaderboards for each level. A single app can have 100 leaderboard sets, and a set can have a maximum of 100 leaderboards. You must have at least one leaderboard for your app before you can create a leaderboard set. Once you add leaderboard sets to your app, all future leaderboards that you configure for the app must be included in a leaderboard set.

The process to start using leaderboard sets to organize your app’s leaderboards includes these steps:

- Create the first leaderboard set.
- Create additional leaderboard sets.
- Add new leaderboards directly into leaderboard sets.

For more information about how to use Leaderboard sets in your app, see [Configure leaderboards sets](https://developer.apple.com/help/app-store-connect/configure-game-center/configure-leaderboard-sets).

## Topics

### Reading leaderboard sets

- [Read Game Center Leaderboard Set Information](get-v2-gamecenterleaderboardsets-_id_.md): Get information about a specific Game Center leaderboard set.
- [List All Leaderboards for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-gamecenterleaderboards.md): Get a list of leaderboards for a specific Game Center leaderboard set.
- [Get All Leaderboard IDs for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Get a list of leaderboard resource IDs for a specific Game Center leaderboard set.
- [List All Versions for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-versions.md): Get a list of versions for a specific Game Center leaderboard set.
- [Get All Version IDs for a Game Center Leaderboard Set](get-v2-gamecenterleaderboardsets-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center leaderboard set.
- [Read Leaderboard Set Information](get-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Read information about a specific leaderboard set.
- [List Leaderboard Information for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-gamecenterleaderboards.md): Deprecated. Read the leadboards that belong to a learderboard set.
- [List Leaderboard Sets in a Group Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-groupleaderboardset.md): Deprecated. List information about leaderboards and leaderboard sets in a group leaderboard set.
- [List All Localizations for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-localizations.md): Deprecated. Get a list of localized metadata for a leaderboard set.
- [List localization IDs for a Game Center leaderboard set](get-v1-gamecenterleaderboardsets-_id_-relationships-localizations.md): Deprecated.
- [Read the Leaderboards in a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. List all leaderboards in a leaderboard set.
- [Read the Group Leaderboard Set in a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset.md): Deprecated. List all the group leaderboard sets in a leaderboard set.
- [List Releases for a Leaderboard Set](get-v1-gamecenterleaderboardsets-_id_-releases.md): Deprecated. Read the state of releases for a leaderboard set and related information.
- [List release IDs for a Game Center leaderboard set](get-v1-gamecenterleaderboardsets-_id_-relationships-releases.md): Deprecated.

### Creating, editing, and deleting leaderboard sets

- [Create a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets.md): Create a Game Center leaderboard set.
- [Add a Leaderboard to a Game Center Leaderboard Set](post-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Add a leaderboard to a Game Center leaderboard set.
- [Modify a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_.md): Update a specific Game Center leaderboard set.
- [Modify the Leaderboards for a Game Center Leaderboard Set](patch-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Update the leaderboards relationship for a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_.md): Delete a specific Game Center leaderboard set.
- [Delete a Game Center Leaderboard Set](delete-v2-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Delete a specific Game Center leaderboard set.
- [Create a Leaderboard Set](post-v1-gamecenterleaderboardsets.md): Deprecated. Add a new leaderboard set to your app.
- [Create a Relationship Between a Leaderboard and a Leaderboard Set](post-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Add a leaderboard to a leaderboard set.
- [Edit a Leaderboard Set](patch-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Modify the metadata for a leaderboard set.
- [Modify the leaderboards in a leaderboard set](patch-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Edit the positions of leaderboards in an existing leaderboard set.
- [Edit the relationship between a leaderboard and a group leaderboard](patch-v1-gamecenterleaderboardsets-_id_-relationships-groupleaderboardset.md): Deprecated. Modify the group leaderboards in a leaderboard set.
- [Delete a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_.md): Deprecated. Delete a specific leaderboard set.
- [Delete the Relationship Between a Leaderboard and a Leaderboard Set](delete-v1-gamecenterleaderboardsets-_id_-relationships-gamecenterleaderboards.md): Deprecated. Remove a leaderboard from a leaderboard set.

### Objects

- [GameCenterLeaderboardSetV2](gamecenterleaderboardsetv2.md): The data structure that represents a Game Center leaderboard set v2 resource.
- [GameCenterLeaderboardSetV2CreateRequest](gamecenterleaderboardsetv2createrequest.md): The request body you use to create a Game Center leaderboard set v2.
- [GameCenterLeaderboardSetV2Response](gamecenterleaderboardsetv2response.md): A response that contains a single Game Center leaderboard set v2 resource.
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
- [GameCenterLeaderboardSetsResponse](gamecenterleaderboardsetsresponse.md): Deprecated. The response body for endpoints that list Game Center leaderboard sets.
- [GameCenterLeaderboardSetLocalizationGameCenterLeaderboardSetImageLinkageResponse](gamecenterleaderboardsetlocalizationgamecenterleaderboardsetimagelinkageresponse.md): Deprecated.
- [GameCenterLeaderboardSetLocalizationsLinkagesResponse](gamecenterleaderboardsetlocalizationslinkagesresponse.md): Deprecated.

## See Also

### Leaderboard sets

- [Game Center leaderboard set localizations](game-center-leaderboard-set-localizations.md): Manage localizations for your Game Center leaderboard sets.
- [Game Center leaderboard set images](game-center-leaderboard-set-images.md): Manage image assets for your Game Center leaderboard sets.
- [Game Center leaderboard set versions](game-center-leaderboard-set-versions.md): Manage versions for your Game Center leaderboard sets.
- [Game Center leaderboard set releases](game-center-leaderboard-set-releases.md): Manage a leaderboard set releases.
- [Game Center leaderboard set member localizations](game-center-leaderboard-set-member-localizations.md): Manage Game Center leaderboard set member localizations.
