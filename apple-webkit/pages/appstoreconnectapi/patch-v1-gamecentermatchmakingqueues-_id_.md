> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingqueues-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-gamecentermatchmakingqueues-_id_)

# Modify a Queue

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Update the properties of a specific queue.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the queue.

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingQueueUpdateRequest`

## Response Codes

- `200` OK — `GameCenterMatchmakingQueueResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting queues

- [Create a Queue](post-v1-gamecentermatchmakingqueues.md): Create a queue and add it to a rule set.
- [Delete a Queue](delete-v1-gamecentermatchmakingqueues-_id_.md): Delete a specific queue in a rule set.
