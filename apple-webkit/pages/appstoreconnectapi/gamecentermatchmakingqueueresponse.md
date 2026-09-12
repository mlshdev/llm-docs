> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueueresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueueresponse)

# GameCenterMatchmakingQueueResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The response body for endpoints that create, modify, or get a single queue.

## Declaration

```
object GameCenterMatchmakingQueueResponse
```

## Properties

- `data` — `GameCenterMatchmakingQueue` (required): The queue that you create, modify, or get.
- `included` — `[GameCenterMatchmakingRuleSet]`: The rule sets included in the response.
- `links` — `DocumentLinks` (required): The link representations of the response.

## See Also

### Objects

- [GameCenterMatchmakingQueueCreateRequest](gamecentermatchmakingqueuecreaterequest.md): The request body you use to create a queue.
- [GameCenterMatchmakingQueueUpdateRequest](gamecentermatchmakingqueueupdaterequest.md): The request body you use to modify a queue.
- [GameCenterMatchmakingQueuesResponse](gamecentermatchmakingqueuesresponse.md): The response body for endpoints that get multiple queues.
- [GameCenterMatchmakingQueue](gamecentermatchmakingqueue.md): A queue in Game Center matchmaking that holds players waiting to be matched, governed by a rule set.
