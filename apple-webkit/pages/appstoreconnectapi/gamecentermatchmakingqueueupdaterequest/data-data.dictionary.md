> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueueupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueueupdaterequest/data-data.dictionary)

# GameCenterMatchmakingQueueUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure of the request body you use to modify a queue.

## Declaration

```
object GameCenterMatchmakingQueueUpdateRequest.Data
```

## Properties

- `attributes` — `GameCenterMatchmakingQueueUpdateRequest.Data.Attributes`:
- `id` — `string` (required): The unique identifier for the queue.
- `relationships` — `GameCenterMatchmakingQueueUpdateRequest.Data.Relationships`:
- `type` — `string` (required): The type of resource.
  **Allowed values:** `gameCenterMatchmakingQueues`

## Topics

### Objects

- [GameCenterMatchmakingQueueUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes for a queue that you modify.
- [GameCenterMatchmakingQueueUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The rule sets related to the queue.
