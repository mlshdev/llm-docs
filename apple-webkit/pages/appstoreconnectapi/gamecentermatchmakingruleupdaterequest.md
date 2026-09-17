> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingruleupdaterequest

# GameCenterMatchmakingRuleUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The request body you use to modify a rule.

## Declaration

```
object GameCenterMatchmakingRuleUpdateRequest
```

## Properties

- `data` — `GameCenterMatchmakingRuleUpdateRequest.Data` (required): The data structure of the request body.

## Topics

### Objects

- [GameCenterMatchmakingRuleUpdateRequest.Data](gamecentermatchmakingruleupdaterequest/data-data.dictionary.md): The data structure of the request body you use to modify a rule.

## See Also

### Objects

- [GameCenterMatchmakingRuleCreateRequest](gamecentermatchmakingrulecreaterequest.md): The request body you use to create a rule.
- [GameCenterMatchmakingRuleResponse](gamecentermatchmakingruleresponse.md): The response body for endpoints that create or modify a rule.
- [GameCenterMatchmakingRule](gamecentermatchmakingrule.md): A JavaScript expression evaluated during Game Center matchmaking to determine player compatibility.
