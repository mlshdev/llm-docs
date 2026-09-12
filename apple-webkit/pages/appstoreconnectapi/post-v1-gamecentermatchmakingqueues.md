> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecentermatchmakingqueues](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingqueues)

# Create a Queue

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Create a queue and add it to a rule set.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingQueueCreateRequest`

## Response Codes

- `201` Created — `GameCenterMatchmakingQueueResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues
{
    “data”: {
        “type”: “gameCenterMatchmakingQueues”,
        “attributes”: {
            “referenceName”: “com.example.mygame.GameSettingsQueue”
        },
        “relationships”: {
            “ruleSet”: {
                “data”: {
                    “type”: “gameCenterMatchmakingRuleSets”,
                    “id”: “7353266e-8c6f-4cbe-8f0f-5108332a1146”
                }
            }
        }
    }
}
```

**Response**

```json
{
    “data”: {
        “type”: “gameCenterMatchmakingQueues”,
        “id”: “aa1c1e6b-f8a9-4bad-b969-860dfd1485c5”,
        “attributes”: {
            “referenceName”: “com.example.mygame.GameSettingsQueue”
        },
        “links”: {
            “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues/aa1c1e6b-f8a9-4bad-b969-860dfd1485c5”
        }
    },
    “links”: {
        “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues”
    }
}
```

## See Also

### Creating, modifying, and deleting queues

- [Modify a Queue](patch-v1-gamecentermatchmakingqueues-_id_.md): Update the properties of a specific queue.
- [Delete a Queue](delete-v1-gamecentermatchmakingqueues-_id_.md): Delete a specific queue in a rule set.
