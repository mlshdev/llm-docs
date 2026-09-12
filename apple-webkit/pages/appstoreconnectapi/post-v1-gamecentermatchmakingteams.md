> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecentermatchmakingteams](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingteams)

# Create a Team

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Add a game-specific team to a rule set.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingTeams
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingTeamCreateRequest`

## Response Codes

- `201` Created — `GameCenterMatchmakingTeamResponse`:
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
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingTeams
{
    “data”: {
        “type”: “gameCenterMatchmakingTeams”,
        “attributes”: {
            “minPlayers”: 2,
            “maxPlayers”: 4,
            “referenceName”: “blue”
        },
        “relationships”: {
            “ruleSet”: {
                “data”: {
                    “type”: “gameCenterMatchmakingRuleSets”,
                    “id”: “50d7eed2-8016-441a-a919-db3d863f433c”
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
        “type”: “gameCenterMatchmakingTeams”,
        “id”: “2a68632b-0129-4c07-8e84-6da57a76499d”,
        “attributes”: {
            “referenceName”: “blue”,
            “minPlayers”: 2,
            “maxPlayers”: 4
        },
        “links”: {
            “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingTeams/2a68632b-0129-4c07-8e84-6da57a76499d”
        }
    },
    “links”: {
        “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingTeams”
    }
}
```

## See Also

### Creating, modifying, and deleting teams

- [Modify a Team](patch-v1-gamecentermatchmakingteams-_id_.md): Update a specific team in a rule set.
- [Delete a Team](delete-v1-gamecentermatchmakingteams-_id_.md): Delete a game-specific team in a rule set.
