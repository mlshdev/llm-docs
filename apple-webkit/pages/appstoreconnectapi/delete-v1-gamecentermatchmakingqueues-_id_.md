> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingqueues-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecentermatchmakingqueues-_id_)

# Delete a Queue

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Delete a specific queue in a rule set.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the queue.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, modifying, and deleting queues

- [Create a Queue](post-v1-gamecentermatchmakingqueues.md): Create a queue and add it to a rule set.
- [Modify a Queue](patch-v1-gamecentermatchmakingqueues-_id_.md): Update the properties of a specific queue.
