> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrules](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrules)

# Create a Rule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Add a matchmaking rule to a rule set.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterMatchmakingRuleCreateRequest`

## Response Codes

- `201` Created — `GameCenterMatchmakingRuleResponse`:
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
POST https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules
{
    “data”: {
        “type”: “gameCenterMatchmakingRules”,
        “attributes”: {
            “type”: “COMPATIBLE”,
            “description”: “Check whether the players use the same game settings.”,
            “referenceName”: “SameTheme”,
            “expression”: “requests[0].properties.theme == requests[1].properties.theme”
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
        “type”: “gameCenterMatchmakingRules”,
        “id”: “2fd4bb73-3cca-46ca-aced-395c54ab11bc”,
        “attributes”: {
            “referenceName”: “SameTheme”,
            “description”: “Check whether the players use the same game settings.”,
            “type”: “COMPATIBLE”,
            “expression”: “requests[0].properties.theme == requests[1].properties.theme”,
            “weight”: null
        },
        “links”: {
            “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules/2fd4bb73-3cca-46ca-aced-395c54ab11bc”
        }
    },
    “links”: {
        “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules”
    }
}
```

## See Also

### Creating, modifying, and deleting rules

- [Modify a Rule](patch-v1-gamecentermatchmakingrules-_id_.md): Update a specific matchmaking rule in a rule set.
- [Delete a Rule](delete-v1-gamecentermatchmakingrules-_id_.md): Delete a matchmaking rule in a rule set.
