> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingruleset](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingruleset)

# GameCenterMatchmakingRuleSet

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

A named collection of matchmaking rules and queues that defines the logic for matching players in a Game Center game.

## Declaration

```
object GameCenterMatchmakingRuleSet
```

## Properties

- `attributes` — `GameCenterMatchmakingRuleSet.Attributes`: The attributes of the rule set.
- `id` — `string` (required): The unique identifier for the rule set.
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterMatchmakingRuleSet.Relationships`: The relationships to other objects belonging to the rule set.
- `type` — `string` (required): The type of resource.
  **Allowed values:** `gameCenterMatchmakingRuleSets`

## Topics

### Objects

- [GameCenterMatchmakingRuleSet.Attributes](gamecentermatchmakingruleset/attributes-data.dictionary.md): The attributes of the rule set.
- [GameCenterMatchmakingRuleSet.Relationships](gamecentermatchmakingruleset/relationships-data.dictionary.md): The relationships to other objects belonging to the rule set.

## See Also

### Objects

- [GameCenterMatchmakingRuleSetCreateRequest](gamecentermatchmakingrulesetcreaterequest.md): The request body you use to create a rule set.
- [GameCenterMatchmakingRuleSetUpdateRequest](gamecentermatchmakingrulesetupdaterequest.md): The request body you use to modify a rule set.
- [GameCenterMatchmakingRuleSetResponse](gamecentermatchmakingrulesetresponse.md): The response body for endpoints that create, modify, or get a single rule.
- [GameCenterMatchmakingRuleSetsResponse](gamecentermatchmakingrulesetsresponse.md): The response body for endpoints that get multiple rule sets.
- [GameCenterMatchmakingRulesResponse](gamecentermatchmakingrulesresponse.md): The response body for endpoints that get multiple rules.
- [GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse](gamecentermatchmakingrulesetmatchmakingqueueslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetRulesLinkagesResponse](gamecentermatchmakingrulesetruleslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetTeamsLinkagesResponse](gamecentermatchmakingrulesetteamslinkagesresponse.md)
