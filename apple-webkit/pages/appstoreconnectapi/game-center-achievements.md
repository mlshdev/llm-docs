> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-achievements](https://developer.apple.com/documentation/appstoreconnectapi/game-center-achievements)

# Game Center achievements

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage achievements for your apps.

<a id="overview"></a>

## Overview

An achievement is a distinction that a player earns for reaching a milestone, or performing an action, defined by you and programmed into your app. After an achievement has gone live for any version of your app, it can’t be removed.

For more information about how to use achievements in your app, see [Manage achievements](https://developer.apple.com/help/app-store-connect/configure-game-center/manage-achievements).

## Topics

### Reading achievements

- [Read Game Center Achievement Information](get-v2-gamecenterachievements-_id_.md): Get information about a specific Game Center achievement.
- [List All Versions for a Game Center Achievement](get-v2-gamecenterachievements-_id_-versions.md): Get a list of versions for a specific Game Center achievement.
- [Get All Version IDs for a Game Center Achievement](get-v2-gamecenterachievements-_id_-relationships-versions.md): Get a list of version resource IDs for a specific Game Center achievement.
- [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md): Deprecated. List all achievement information for a Game Center detail.
- [Read Achievement Information](get-v1-gamecenterachievements-_id_.md): Deprecated. Read information about a specific Game Center achievement.
- [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md): Deprecated. Read information about the release for specific achievement.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [List Associated Group Achievement Information for an Achievement](get-v1-gamecenterachievements-_id_-groupachievement.md): Deprecated. Read information about the group for specific achievement.
- [List Group Achievements for an Achievement](get-v1-gamecenterachievements-_id_-relationships-groupachievement.md): Deprecated. List associated group achievements for a specific achievement.
- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.

### Creating, modifying, and deleting achievements

- [Create a Game Center Achievement](post-v2-gamecenterachievements.md): Create a Game Center achievement.
- [Modify a Game Center Achievement](patch-v2-gamecenterachievements-_id_.md): Update a specific Game Center achievement.
- [Modify the Activity for a Game Center Achievement](patch-v2-gamecenterachievements-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center achievement.
- [Delete a Game Center Achievement](delete-v2-gamecenterachievements-_id_.md): Delete a specific Game Center achievement.
- [Create an Achievement](post-v1-gamecenterachievements.md): Deprecated. Add an achievement to a Game Center detail.
- [Modify an Achievement](patch-v1-gamecenterachievements-_id_.md): Deprecated. Modify properties for a specific achievement.
- [Modify the Group for an Achievement](patch-v1-gamecenterachievements-_id_-relationships-groupachievement.md): Deprecated. Modify the achievement group for a specific achievement.
- [Modify the activity for a Game Center achievement](patch-v1-gamecenterachievements-_id_-relationships-activity.md): Deprecated.
- [Delete an Achievement](delete-v1-gamecenterachievements-_id_.md): Deprecated. Delete a specific achievement.

### Objects

- [GameCenterAchievementV2](gamecenterachievementv2.md): The data structure that represents a Game Center achievement v2 resource.
- [GameCenterAchievementV2CreateRequest](gamecenterachievementv2createrequest.md): The request body you use to create a Game Center achievement v2.
- [GameCenterAchievementV2Response](gamecenterachievementv2response.md): A response that contains a single Game Center achievement v2 resource.
- [GameCenterAchievementV2UpdateRequest](gamecenterachievementv2updaterequest.md): The request body you use to update a Game Center achievement v2.
- [GameCenterAchievementsV2Response](gamecenterachievementsv2response.md): A response that contains a single Game Center achievement v2 resource.
- [GameCenterAchievementV2ActivityLinkageRequest](gamecenterachievementv2activitylinkagerequest.md): The data structure that represents a Game Center achievement v2 activity linkage request resource.
- [GameCenterAchievementV2VersionsLinkagesResponse](gamecenterachievementv2versionslinkagesresponse.md): A response that contains a list of Game Center achievement v2 version linkage resources.
- [GameCenterAchievement](gamecenterachievement.md): Deprecated. A reward in Game Center that players earn by completing specific challenges or milestones in a game.
- [GameCenterAchievementCreateRequest](gamecenterachievementcreaterequest.md): Deprecated. A request body you use to create a Game Center achievement.
- [GameCenterAchievementGroupAchievementLinkageRequest](gamecenterachievementgroupachievementlinkagerequest.md): Deprecated. The request body you use to attach an achievement to an achievement group.
- [GameCenterAchievementGroupAchievementLinkageResponse](gamecenterachievementgroupachievementlinkageresponse.md): Deprecated. A response body that contains the ID of a single related resource.
- [GameCenterAchievementResponse](gamecenterachievementresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center achievement.
- [GameCenterAchievementUpdateRequest](gamecenterachievementupdaterequest.md): Deprecated. The request body you use to update a Game Center achievement.
- [GameCenterAchievementsResponse](gamecenterachievementsresponse.md): Deprecated. The response body for endpoints that list Game Center achievements.
- [GameCenterAchievementActivityLinkageRequest](gamecenterachievementactivitylinkagerequest.md): Deprecated.
- [GameCenterAchievementLocalizationsLinkagesResponse](gamecenterachievementlocalizationslinkagesresponse.md): Deprecated.
- [GameCenterAchievementReleasesLinkagesResponse](gamecenterachievementreleaseslinkagesresponse.md): Deprecated.
- [StringToStringMap](stringtostringmap.md): A dictionary object mapping arbitrary string keys to string values, used for flexible key-value metadata.

## See Also

### Achievements

- [Game Center achievements localizations](game-center-achievements-localizations.md): Manage localizations for your achievements.
- [Game Center achievements images](game-center-achievements-images.md): Manage images for your Game Center achievements.
- [Game Center achievement versions](game-center-achievement-versions.md): Manage versions for your Game Center achievements.
- [Game Center achievement releases](game-center-achievement-releases.md): Manage releases for your Game Center achievements.
- [Game Center player achievements](game-center-player-achievements.md): Manage Game Center achievements by player for your apps.
