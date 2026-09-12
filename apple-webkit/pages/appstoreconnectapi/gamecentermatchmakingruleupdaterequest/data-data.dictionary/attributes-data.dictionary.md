> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingruleupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingruleupdaterequest/data-data.dictionary/attributes-data.dictionary)

# GameCenterMatchmakingRuleUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The attributes of a rule that you modify.

## Declaration

```
object GameCenterMatchmakingRuleUpdateRequest.Data.Attributes
```

## Properties

- `description` — `string`: A human-readable description of the rule.
- `expression` — `string`: Code that returns a Boolean or numeric value that the matchmaking rules algorithm executes to compare or filter match requests.
- `weight` — `number`: A numeric value for the rule when `type` is either `DISTANCE` or `MATCH`.
