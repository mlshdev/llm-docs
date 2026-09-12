> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueuecreaterequest/data-data.dictionary/relationships-data.dictionary/experimentruleset-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueuecreaterequest/data-data.dictionary/relationships-data.dictionary/experimentruleset-data.dictionary/data-data.dictionary)

# GameCenterMatchmakingQueueCreateRequest.Data.Relationships.ExperimentRuleSet.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure of the request body for an experimental rule set.

## Declaration

```
object GameCenterMatchmakingQueueCreateRequest.Data.Relationships.ExperimentRuleSet.Data
```

## Properties

- `id` — `string` (required): The unique identifier for the rule set.
- `type` — `string` (required): The type of resource.
  **Allowed values:** `gameCenterMatchmakingRuleSets`

## See Also

### Objects

- [GameCenterMatchmakingQueueCreateRequest.Data.Relationships.ExperimentRuleSet](../experimentruleset-data.dictionary.md): An experimental rule set for testing this queue.
- [GameCenterMatchmakingQueueCreateRequest.Data.Relationships.RuleSet](../ruleset-data.dictionary.md): The rule set associated with the queue.
