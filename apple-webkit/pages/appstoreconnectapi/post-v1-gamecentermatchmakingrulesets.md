> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrulesets](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrulesets)

# Create a Rule Set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Create a rule set to contain matchmaking rules and teams.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingRuleSetCreateRequest`

## Response Codes

- `201` Created — `GameCenterMatchmakingRuleSetResponse`:
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
POST https://api.appstoreconnect.apple.com/v1//gameCenterMatchmakingRuleSets
{
    “data”: {
        “type”: “gameCenterMatchmakingRuleSets”,
        “attributes”: {
            “referenceName”: “com.example.mygame.GameSettingsRuleSet”,
            “ruleLanguageVersion”: 1,
            “minPlayers”: 2,
            “maxPlayers”: 4
        },
        “relationships”: {}
    }
}
```

**Response**

```json
{
    “data”: {
        “type”: “gameCenterMatchmakingRuleSets”,
        “id”: “7353266e-8c6f-4cbe-8f0f-5108332a1146”,
        “attributes”: {
            “referenceName”: “com.example.mygame.GameSettingsRuleSet”,
            “ruleLanguageVersion”: 1,
            “minPlayers”: 2,
            “maxPlayers”: 4
        },
        “relationships”: {
            “teams”: {
                “links”: {
                    “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146/relationships/teams”,
                    “related”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146/teams”
                }
            },
            “rules”: {
                “links”: {
                    “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146/relationships/rules”,
                    “related”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146/rules”
                }
            },
            “matchmakingQueues”: {
                “links”: {
                    “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146/relationships/matchmakingQueues”,
                    “related”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146/matchmakingQueues”
                }
            }
        },
        “links”: {
            “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets/7353266e-8c6f-4cbe-8f0f-5108332a1146”
        }
    },
    “links”: {
        “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRuleSets”
    }
}
```

## See Also

### Creating, modifying, and deleting rule sets

- [Modify a Rule Set](patch-v1-gamecentermatchmakingrulesets-_id_.md): Update the attributes of a rule set.
- [Delete a Rule Set](delete-v1-gamecentermatchmakingrulesets-_id_.md): Delete a rule set along with its matchmaking rules and teams.
