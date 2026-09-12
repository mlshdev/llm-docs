> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/teams](https://developer.apple.com/documentation/appstoreconnectapi/teams)

# Teams

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage the teams that you add to matchmaking rule sets.

<a id="overview"></a>

## Overview

The `team` resource represents an optional game-specific team that Game Center assigns to players using team rules. For more information, see [Assigning players to teams using rules](https://developer.apple.com/documentation/gamekit/assigning-players-to-teams-using-rules).

## Topics

### Creating, modifying, and deleting teams

- [Create a Team](post-v1-gamecentermatchmakingteams.md): Add a game-specific team to a rule set.
- [Modify a Team](patch-v1-gamecentermatchmakingteams-_id_.md): Update a specific team in a rule set.
- [Delete a Team](delete-v1-gamecentermatchmakingteams-_id_.md): Delete a game-specific team in a rule set.

### Objects

- [GameCenterMatchmakingTeamCreateRequest](gamecentermatchmakingteamcreaterequest.md): The request body you use to create a team.
- [GameCenterMatchmakingTeamUpdateRequest](gamecentermatchmakingteamupdaterequest.md): The request body you use to modify a team.
- [GameCenterMatchmakingTeamResponse](gamecentermatchmakingteamresponse.md): The response body for endpoints that create or modify a team.
- [GameCenterMatchmakingTeamsResponse](gamecentermatchmakingteamsresponse.md): The response body for endpoints that get multiple teams.
- [GameCenterMatchmakingTeam](gamecentermatchmakingteam.md): A team configuration within a Game Center matchmaking rule set, defining team size and composition rules.

## See Also

### Matchmaking rules

- [Rules](rules.md): Manage the matchmaking rules that Game Center uses to find players.
- [Expressions](expressions.md): Write expressions that query the match requests in a queue to find the best players for a match.
- [Rule sets](rule-sets.md): Manage the rule sets that you add matchmaking rules and teams to.
- [Queues](queues.md): Manage the queues that contain matchmaking rule sets and that you submit match requests to.
- [Testing](testing.md): Test matchmaking rules using sample data.
- [Metrics](metrics.md): Analyze data about matchmaking rules.
