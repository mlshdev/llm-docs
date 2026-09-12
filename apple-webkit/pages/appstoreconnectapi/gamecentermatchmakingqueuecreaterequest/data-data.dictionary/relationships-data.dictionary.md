> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueuecreaterequest/data-data.dictionary/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueuecreaterequest/data-data.dictionary/relationships-data.dictionary)

# GameCenterMatchmakingQueueCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The rule sets that you include when creating a queue.

## Declaration

```
object GameCenterMatchmakingQueueCreateRequest.Data.Relationships
```

## Properties

- `experimentRuleSet` — `GameCenterMatchmakingQueueCreateRequest.Data.Relationships.ExperimentRuleSet`: The experimental rule set to test the associated rules with live match requests.

  If you provide an experimental rule set, Game Center processes the match requests in the queue using both the experimental and the required rule set, except that it doesn’t return the results of the experimental rule set to clients.

  Then compare the results of the experimental rule set with the production rule set using metrics, such as the [List All Queues](../../get-v1-gamecentermatchmakingqueues.md) and [Read Queue Information](../../get-v1-gamecentermatchmakingqueues-_id_.md) endpoints.
- `ruleSet` — `GameCenterMatchmakingQueueCreateRequest.Data.Relationships.RuleSet` (required): The rule set to associate with this queue.

## Topics

### Objects

- [GameCenterMatchmakingQueueCreateRequest.Data.Relationships.ExperimentRuleSet](relationships-data.dictionary/experimentruleset-data.dictionary.md): An experimental rule set for testing this queue.
- [GameCenterMatchmakingQueueCreateRequest.Data.Relationships.ExperimentRuleSet.Data](relationships-data.dictionary/experimentruleset-data.dictionary/data-data.dictionary.md): The data structure of the request body for an experimental rule set.
- [GameCenterMatchmakingQueueCreateRequest.Data.Relationships.RuleSet](relationships-data.dictionary/ruleset-data.dictionary.md): The rule set associated with the queue.

## See Also

### Objects

- [GameCenterMatchmakingQueueCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes for a queue that you create.
