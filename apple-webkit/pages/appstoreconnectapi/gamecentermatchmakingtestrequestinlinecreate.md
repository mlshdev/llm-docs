> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingtestrequestinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingtestrequestinlinecreate)

# GameCenterMatchmakingTestRequestInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

A data structure that represents a sample match request for testing a rule set.

## Declaration

```
object GameCenterMatchmakingTestRequestInlineCreate
```

## Properties

- `attributes` — `GameCenterMatchmakingTestRequestInlineCreate.Attributes`: The object attributes.
- `id` — `string`: A unique identifier for the match request.
- `relationships` — `GameCenterMatchmakingTestRequestInlineCreate.Relationships`: The object relationships.
- `type` — `string` (required): The type of resource object.
  **Allowed values:** `gameCenterMatchmakingTestRequests`

## Topics

### Objects

- [GameCenterMatchmakingTestRequestInlineCreate.Attributes](gamecentermatchmakingtestrequestinlinecreate/attributes-data.dictionary.md): The attributes for a sample match request.
- [GameCenterMatchmakingTestRequestInlineCreate.Relationships](gamecentermatchmakingtestrequestinlinecreate/relationships-data.dictionary.md): The relationships of a match request to other objects.

## See Also

### Objects

- [GameCenterMatchmakingRuleSetTestCreateRequest](gamecentermatchmakingrulesettestcreaterequest.md): The request body for testing the rules in a rule set.
- [GameCenterMatchmakingTestRequest](gamecentermatchmakingtestrequest.md): The type and ID of test matchmaking request.
- [GameCenterMatchmakingRuleSetTestResponse](gamecentermatchmakingrulesettestresponse.md): The response body for testing a rule set.
- [GameCenterMatchmakingRuleSetTest](gamecentermatchmakingrulesettest.md): A test run of a Game Center matchmaking rule set using simulated player properties to validate the rules.
- [GameCenterMatchmakingTestPlayerProperty](gamecentermatchmakingtestplayerproperty.md): A simulated player attribute used when testing Game Center matchmaking rule sets.
- [GameCenterMatchmakingTestPlayerPropertyInlineCreate](gamecentermatchmakingtestplayerpropertyinlinecreate.md): A resource object that represents a player’s properties when you create a request.
- [GameCenterMatchmakingTeamAssignment](gamecentermatchmakingteamassignment.md): The assignment of a player to a specific team during a Game Center matchmaking session.
- [Location](location.md): A representation of a device location.
- [Property](property.md): A representation of a game-specific property.
