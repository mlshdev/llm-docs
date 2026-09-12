> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingrulesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingrulesresponse)

# GameCenterMatchmakingRulesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The response body for endpoints that get multiple rules.

## Declaration

```
object GameCenterMatchmakingRulesResponse
```

## Properties

- `data` — `[GameCenterMatchmakingRule]` (required): The rules that the endpoint gets.
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterMatchmakingRuleSetCreateRequest](gamecentermatchmakingrulesetcreaterequest.md): The request body you use to create a rule set.
- [GameCenterMatchmakingRuleSetUpdateRequest](gamecentermatchmakingrulesetupdaterequest.md): The request body you use to modify a rule set.
- [GameCenterMatchmakingRuleSetResponse](gamecentermatchmakingrulesetresponse.md): The response body for endpoints that create, modify, or get a single rule.
- [GameCenterMatchmakingRuleSetsResponse](gamecentermatchmakingrulesetsresponse.md): The response body for endpoints that get multiple rule sets.
- [GameCenterMatchmakingRuleSet](gamecentermatchmakingruleset.md): A named collection of matchmaking rules and queues that defines the logic for matching players in a Game Center game.
- [GameCenterMatchmakingRuleSetMatchmakingQueuesLinkagesResponse](gamecentermatchmakingrulesetmatchmakingqueueslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetRulesLinkagesResponse](gamecentermatchmakingrulesetruleslinkagesresponse.md)
- [GameCenterMatchmakingRuleSetTeamsLinkagesResponse](gamecentermatchmakingrulesetteamslinkagesresponse.md)
