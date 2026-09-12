> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueue](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueue)

# GameCenterMatchmakingQueue

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

A queue in Game Center matchmaking that holds players waiting to be matched, governed by a rule set.

## Declaration

```
object GameCenterMatchmakingQueue
```

## Properties

- `attributes` — `GameCenterMatchmakingQueue.Attributes`: The attributes of the queue.
- `id` — `string` (required): The unique identifier for the rule.
- `links` — `ResourceLinks`: The link representations of the object.
- `relationships` — `GameCenterMatchmakingQueue.Relationships`: The relationships of the queue.
- `type` — `string` (required): The type of resource.
  **Allowed values:** `gameCenterMatchmakingQueues`

## Mentioned In

- [App Store Connect API 3.2 release notes](app-store-connect-api-3-2-release-notes.md)

## Topics

### Objects

- [GameCenterMatchmakingQueue.Attributes](gamecentermatchmakingqueue/attributes-data.dictionary.md): The attributes of the rule set.
- [GameCenterMatchmakingQueue.Relationships](gamecentermatchmakingqueue/relationships-data.dictionary.md): The rule sets associated with the queue.

## See Also

### Objects

- [GameCenterMatchmakingQueueCreateRequest](gamecentermatchmakingqueuecreaterequest.md): The request body you use to create a queue.
- [GameCenterMatchmakingQueueUpdateRequest](gamecentermatchmakingqueueupdaterequest.md): The request body you use to modify a queue.
- [GameCenterMatchmakingQueueResponse](gamecentermatchmakingqueueresponse.md): The response body for endpoints that create, modify, or get a single queue.
- [GameCenterMatchmakingQueuesResponse](gamecentermatchmakingqueuesresponse.md): The response body for endpoints that get multiple queues.
