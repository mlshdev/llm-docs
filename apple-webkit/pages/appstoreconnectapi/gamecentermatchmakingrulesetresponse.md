> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingrulesetresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingrulesetresponse)

# GameCenterMatchmakingRuleSetResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The response body for endpoints that create, modify, or get a single rule.

## Declaration

```
object GameCenterMatchmakingRuleSetResponse
```

## Properties

- `data` — `GameCenterMatchmakingRuleSet` (required): The rule set that you create, modify, or get.
- `included` — `[*]`: The related objects included in the response.
  **Allowed types:** `GameCenterMatchmakingQueue`, `GameCenterMatchmakingRule`, `GameCenterMatchmakingTeam`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterMatchmakingRuleSetCreateRequest](gamecentermatchmakingrulesetcreaterequest.md): The request body you use to create a rule set.
- [GameCenterMatchmakingRuleSetUpdateRequest](gamecentermatchmakingrulesetupdaterequest.md): The request body you use to modify a rule set.
- [GameCenterMatchmakingRuleSetsResponse](gamecentermatchmakingrulesetsresponse.md): The response body for endpoints that get multiple rule sets.
- [GameCenterMatchmakingRulesResponse](gamecentermatchmakingrulesresponse.md): The response body for endpoints that get multiple rules.
- [GameCenterMatchmakingRuleSet](gamecentermatchmakingruleset.md): A named collection of matchmaking rules and queues that defines the logic for matching players in a Game Center game.
- [GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse](gamecentermatchmakingrulesetmatchmakingqueueslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetRulesLinkagesResponse](gamecentermatchmakingrulesetruleslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetTeamsLinkagesResponse](gamecentermatchmakingrulesetteamslinkagesresponse.md)
