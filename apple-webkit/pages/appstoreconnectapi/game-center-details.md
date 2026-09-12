> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-details](https://developer.apple.com/documentation/appstoreconnectapi/game-center-details)

# Game Center details

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage enablement, achievement, leaderboard, and localization details for your apps.

<a id="overview"></a>

## Overview

Game Center details is the top-level endpoint for Game Center information for your apps. Use this resource to:

- Enable Game Center for an app.
- Read information about specific types of Game Center data, including achievements, leaderboards, and localizations.

To enable Game Center, begin by calling [Enable game center for an app](post-v1-gamecenterdetails.md). Then you can create and configure achievements, leaderboards, leaderboard sets, and more.

## Topics

### Reading Game Center details

- [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md): Get Game Center detail information for an app.
- [Read game center details](get-v1-gamecenterdetails-_id_.md): Read a specific Game Center detail and related information.
- [Read app versions for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterappversions.md): Get a list of app versions for a Game Center detail.
- [List Game Center app version IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterappversions.md)
- [Read the groups in a game center detail](get-v1-gamecenterdetails-_id_-gamecentergroup.md): Get a list of groups in a Game Center detail.
- [Get the Game Center group ID for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecentergroup.md)
- [Read the challenges for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterchallenges.md): Get challenge information for a specific Game Center detail.
- [Read challenge ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterchallenges.md): List all the challenge IDs for a specific Game Center detail.

### Creating and editing Game Center details

- [Enable game center for an app](post-v1-gamecenterdetails.md): Create a Game Center detail for an app.
- [Modify a game center detail for an app](patch-v1-gamecenterdetails-_id_.md): Edit challenge state, default leaderboards, and groups.
- [Modify the Achievements for a Game Center Detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterachievementsv2.md): Update the achievements relationship for a specific Game Center detail.
- [Modify the Leaderboard Sets for a Game Center Detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsetsv2.md): Update the leaderboard sets relationship for a specific Game Center detail.
- [Modify the Leaderboards for a Game Center Detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsv2.md): Update the leaderboards relationship for a specific Game Center detail.
- [Modify the associated leaderboard sets for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. Edit the associated leaderboard sets for a Game Center detail.
- [Modify the associated leaderboards for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboards.md): Deprecated. Edit the associated leaderboards for a Game Center detail.
- [Modify the challenges minimum platform version for a game center detail](patch-v1-gamecenterdetails-_id_-relationships-challengesminimumplatformversions.md): Update the relationship between a challenges minimum platform version and a specific Game Center detail.

### Reading and editing Game Center detail achievements

- [List All Game Center Achievements for a Game Center Detail](get-v1-gamecenterdetails-_id_-gamecenterachievementsv2.md): Get a list of achievements for a specific Game Center detail.
- [Get All Achievement IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterachievementsv2.md): Get a list of achievement resource IDs for a specific Game Center detail.
- [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md): Deprecated. List all achievement information for a Game Center detail.
- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
- [List Achievements](get-v1-gamecenterdetails-_id_-relationships-gamecenterachievements.md): Deprecated. List the achievements for a Game Center detail.
- [Modify Associated Achievements](patch-v1-gamecenterdetails-_id_-relationships-gamecenterachievements.md): Deprecated. Modify the achievements for a Game Center detail.

### Reading and editing Game Center detail leaderboards

- [List All Game Center Leaderboards for a Game Center Detail](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsv2.md): Get a list of leaderboards for a specific Game Center detail.
- [Get All Leaderboard IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsv2.md): Get a list of leaderboard resource IDs for a specific Game Center detail.
- [Read Leaderboard Releases](get-v1-gamecenterdetails-_id_-leaderboardreleases.md): Deprecated. List all leaderboard releases for a Game Center detail.
- [List leaderboard release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-leaderboardreleases.md): Deprecated.
- [Get leaderboards information](get-v1-gamecenterdetails-_id_-gamecenterleaderboards.md): Deprecated. Get all leaderboards and related information for a Game Center detail.
- [List Leaderboards](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboards.md): Deprecated. ​List all leaderboards for a Game Center detail.

### Reading and editing leaderboard sets in a Game Center detail

- [List All Game Center Leaderboard Sets for a Game Center Detail](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsetsv2.md): Get a list of leaderboard sets for a specific Game Center detail.
- [Get All Leaderboard Set IDs for a Game Center Detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsetsv2.md): Get a list of leaderboard set resource IDs for a specific Game Center detail.
- [Get leaderboard sets information](get-v1-gamecenterdetails-_id_-gamecenterleaderboardsets.md): Deprecated. Get all leaderboard sets and related information for a Game Center detail.
- [List Leaderboard Sets](get-v1-gamecenterdetails-_id_-relationships-gamecenterleaderboardsets.md): Deprecated. List all leaderboards for a Game Center detail.
- [Get leaderboard set releases information](get-v1-gamecenterdetails-_id_-leaderboardsetreleases.md): Deprecated. List all leaderboard set releases for a Game Center detail.
- [List leaderboard set release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-leaderboardsetreleases.md): Deprecated.

### Reading Game center activity information

- [Get activity releases for a game center detail](get-v1-gamecenterdetails-_id_-activityreleases.md): Deprecated. List all activity release information for a specific Game Center detail.
- [Get activity release ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-activityreleases.md): Deprecated. List all activity release IDs for a specific Game Center detail.

### Reading Game center challenge information

- [Get challenge releases for a game center detail](get-v1-gamecenterdetails-_id_-challengereleases.md): Deprecated. List all challenge release information for a specific Game Center detail.
- [Read challenge release ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-challengereleases.md): Deprecated. List all the challenge release IDs for a specific Game Center detail.

### Objects

- [GameCenterDetail](gamecenterdetail.md): The Game Center configuration for an app, linking it to leaderboards, achievement sets, and groups.
- [GameCenterDetailCreateRequest](gamecenterdetailcreaterequest.md): The request body you use to create a Game Center detail.
- [GameCenterDetailGameCenterAchievementsV2LinkagesRequest](gamecenterdetailgamecenterachievementsv2linkagesrequest.md): The data structure that represents a Game Center detail Game Center achievement linkage request resource.
- [GameCenterDetailGameCenterAchievementsV2LinkagesResponse](gamecenterdetailgamecenterachievementsv2linkagesresponse.md): A response that contains a list of Game Center detail Game Center achievement linkage resources.
- [GameCenterDetailGameCenterLeaderboardSetsV2LinkagesRequest](gamecenterdetailgamecenterleaderboardsetsv2linkagesrequest.md): The data structure that represents a Game Center detail Game Center leaderboard set linkage request resource.
- [GameCenterDetailGameCenterLeaderboardSetsV2LinkagesResponse](gamecenterdetailgamecenterleaderboardsetsv2linkagesresponse.md): A response that contains a list of Game Center detail Game Center leaderboard set linkage resources.
- [GameCenterDetailGameCenterLeaderboardsV2LinkagesRequest](gamecenterdetailgamecenterleaderboardsv2linkagesrequest.md): The data structure that represents a Game Center detail Game Center leaderboard linkage request resource.
- [GameCenterDetailGameCenterLeaderboardsV2LinkagesResponse](gamecenterdetailgamecenterleaderboardsv2linkagesresponse.md): A response that contains a list of Game Center detail Game Center leaderboard linkage resources.
- [GameCenterDetailGameCenterAchievementsLinkagesRequest](gamecenterdetailgamecenterachievementslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a Game Center detail and an achievement.
- [GameCenterDetailGameCenterAchievementsLinkagesResponse](gamecenterdetailgamecenterachievementslinkagesresponse.md): Deprecated. A response that confirms a relationship between a Game Center detail and an achievement.
- [GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest](gamecenterdetailgamecenterleaderboardsetslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a Game Center detail and a leaderboard set.
- [GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse](gamecenterdetailgamecenterleaderboardsetslinkagesresponse.md): Deprecated. A response that confirms a relationship between a Game Center detail and leaderboard set.
- [GameCenterDetailGameCenterLeaderboardsLinkagesRequest](gamecenterdetailgamecenterleaderboardslinkagesrequest.md): Deprecated. The request body you use to create a relationship between a Game Center detail and a leaderboard.
- [GameCenterDetailGameCenterLeaderboardsLinkagesResponse](gamecenterdetailgamecenterleaderboardslinkagesresponse.md): Deprecated. A response that confirms a relationship between a Game Center detail and a leaderboard.
- [GameCenterDetailChallengesMinimumPlatformVersionsLinkagesRequest](gamecenterdetailchallengesminimumplatformversionslinkagesrequest.md): The request body for updating the minimum platform versions required for challenges in a Game Center detail.
- [GameCenterDetailResponse](gamecenterdetailresponse.md): The response body for endpoints that read or modify the Game Center details for an app.
- [GameCenterDetailUpdateRequest](gamecenterdetailupdaterequest.md): The request body you use to update a Game Center detail.
- [GameCenterDetailsResponse](gamecenterdetailsresponse.md): The response body for endpoints that list Game Center details resources.
- [AppGameCenterDetailLinkageResponse](appgamecenterdetaillinkageresponse.md)
- [GameCenterDetailAchievementReleasesLinkagesResponse](gamecenterdetailachievementreleaseslinkagesresponse.md): Deprecated.
- [GameCenterDetailActivityReleasesLinkagesResponse](gamecenterdetailactivityreleaseslinkagesresponse.md): Deprecated.
- [GameCenterDetailChallengeReleasesLinkagesResponse](gamecenterdetailchallengereleaseslinkagesresponse.md): Deprecated. A response containing the resource identifiers of challenge releases associated with a Game Center detail.
- [GameCenterDetailGameCenterActivitiesLinkagesResponse](gamecenterdetailgamecenteractivitieslinkagesresponse.md)
- [GameCenterDetailGameCenterAppVersionsLinkagesResponse](gamecenterdetailgamecenterappversionslinkagesresponse.md)
- [GameCenterDetailGameCenterChallengesLinkagesResponse](gamecenterdetailgamecenterchallengeslinkagesresponse.md)
- [GameCenterDetailGameCenterGroupLinkageResponse](gamecenterdetailgamecentergrouplinkageresponse.md)
- [GameCenterDetailLeaderboardReleasesLinkagesResponse](gamecenterdetailleaderboardreleaseslinkagesresponse.md): Deprecated.
- [GameCenterDetailLeaderboardSetReleasesLinkagesResponse](gamecenterdetailleaderboardsetreleaseslinkagesresponse.md): Deprecated.

## See Also

### Details and groups

- [Game Center groups](game-center-groups.md): Manage groups between your apps.
