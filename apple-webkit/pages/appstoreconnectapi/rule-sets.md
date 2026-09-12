> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/rule-sets](https://developer.apple.com/documentation/appstoreconnectapi/rule-sets)

# Rule sets

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage the rule sets that you add matchmaking rules and teams to.

<a id="overview"></a>

## Overview

The `rule set` resource represents a set of rules associated with a queue that Game Center applies to match requests in the queue. For more information, see [Matchmaking rules](https://developer.apple.com/documentation/gamekit/matchmaking-rules) in the GameKit framework.

## Topics

### Creating, modifying, and deleting rule sets

- [Create a Rule Set](post-v1-gamecentermatchmakingrulesets.md): Create a rule set to contain matchmaking rules and teams.
- [Modify a Rule Set](patch-v1-gamecentermatchmakingrulesets-_id_.md): Update the attributes of a rule set.
- [Delete a Rule Set](delete-v1-gamecentermatchmakingrulesets-_id_.md): Delete a rule set along with its matchmaking rules and teams.

### Reading rule set information

- [List All Rule Sets](get-v1-gamecentermatchmakingrulesets.md): Get information about all rule sets and their associated objects.
- [Read Rule Set Information](get-v1-gamecentermatchmakingrulesets-_id_.md): Get information about a specific rule set and its related objects.
- [List Queues in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-matchmakingqueues.md): Get information about queues that belong to a rule set.
- [List matchmaking queue IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-matchmakingqueues.md)
- [List Rules in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-rules.md): Get information about the rules in a rule set.
- [List rule IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-rules.md)
- [List Teams in a Rule Set](get-v1-gamecentermatchmakingrulesets-_id_-teams.md): Get information about the teams in a rule set.
- [List team IDs for a Game Center matchmaking rule set](get-v1-gamecentermatchmakingrulesets-_id_-relationships-teams.md)

### Objects

- [GameCenterMatchmakingRuleSetCreateRequest](gamecentermatchmakingrulesetcreaterequest.md): The request body you use to create a rule set.
- [GameCenterMatchmakingRuleSetUpdateRequest](gamecentermatchmakingrulesetupdaterequest.md): The request body you use to modify a rule set.
- [GameCenterMatchmakingRuleSetResponse](gamecentermatchmakingrulesetresponse.md): The response body for endpoints that create, modify, or get a single rule.
- [GameCenterMatchmakingRuleSetsResponse](gamecentermatchmakingrulesetsresponse.md): The response body for endpoints that get multiple rule sets.
- [GameCenterMatchmakingRulesResponse](gamecentermatchmakingrulesresponse.md): The response body for endpoints that get multiple rules.
- [GameCenterMatchmakingRuleSet](gamecentermatchmakingruleset.md): A named collection of matchmaking rules and queues that defines the logic for matching players in a Game Center game.
- [GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse](gamecentermatchmakingrulesetmatchmakingqueueslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetRulesLinkagesResponse](gamecentermatchmakingrulesetruleslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetTeamsLinkagesResponse](gamecentermatchmakingrulesetteamslinkagesresponse.md)

## See Also

### Matchmaking rules

- [Rules](rules.md): Manage the matchmaking rules that Game Center uses to find players.
- [Expressions](expressions.md): Write expressions that query the match requests in a queue to find the best players for a match.
- [Queues](queues.md): Manage the queues that contain matchmaking rule sets and that you submit match requests to.
- [Teams](teams.md): Manage the teams that you add to matchmaking rule sets.
- [Testing](testing.md): Test matchmaking rules using sample data.
- [Metrics](metrics.md): Analyze data about matchmaking rules.
