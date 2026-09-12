> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingrule](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingrule)

# GameCenterMatchmakingRule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

A JavaScript expression evaluated during Game Center matchmaking to determine player compatibility.

## Declaration

```
object GameCenterMatchmakingRule
```

## Properties

- `attributes` — `GameCenterMatchmakingRule.Attributes`: The attributes of the rule.
- `id` — `string` (required): The unique identifier for the rule.
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `gameCenterMatchmakingRules`

## Topics

### Objects

- [GameCenterMatchmakingRule.Attributes](gamecentermatchmakingrule/attributes-data.dictionary.md): The attributes of a matchmaking rule.

## See Also

### Objects

- [GameCenterMatchmakingRuleCreateRequest](gamecentermatchmakingrulecreaterequest.md): The request body you use to create a rule.
- [GameCenterMatchmakingRuleUpdateRequest](gamecentermatchmakingruleupdaterequest.md): The request body you use to modify a rule.
- [GameCenterMatchmakingRuleResponse](gamecentermatchmakingruleresponse.md): The response body for endpoints that create or modify a rule.
