> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueuesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueuesresponse)

# GameCenterMatchmakingQueuesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The response body for endpoints that get multiple queues.

## Declaration

```
object GameCenterMatchmakingQueuesResponse
```

## Properties

- `data` — `[GameCenterMatchmakingQueue]` (required): The queues that the endpoint fetches.
- `included` — `[GameCenterMatchmakingRuleSet]`: The rule sets included in the response.
- `links` — `PagedDocumentLinks` (required): The link representations of the response.
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterMatchmakingQueueCreateRequest](gamecentermatchmakingqueuecreaterequest.md): The request body you use to create a queue.
- [GameCenterMatchmakingQueueUpdateRequest](gamecentermatchmakingqueueupdaterequest.md): The request body you use to modify a queue.
- [GameCenterMatchmakingQueueResponse](gamecentermatchmakingqueueresponse.md): The response body for endpoints that create, modify, or get a single queue.
- [GameCenterMatchmakingQueue](gamecentermatchmakingqueue.md): A queue in Game Center matchmaking that holds players waiting to be matched, governed by a rule set.
