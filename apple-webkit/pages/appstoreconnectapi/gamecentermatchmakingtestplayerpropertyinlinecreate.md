> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingtestplayerpropertyinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingtestplayerpropertyinlinecreate)

# GameCenterMatchmakingTestPlayerPropertyInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

A resource object that represents a player’s properties when you create a request.

## Declaration

```
object GameCenterMatchmakingTestPlayerPropertyInlineCreate
```

## Properties

- `attributes` — `GameCenterMatchmakingTestPlayerPropertyInlineCreate.Attributes`: The attributes of the resource object.
- `id` — `string`: The identifier for the resource object.
- `type` — `string` (required): The type of the resource object.
  **Allowed values:** `gameCenterMatchmakingTestPlayerProperties`

## Topics

### Objects

- [GameCenterMatchmakingTestPlayerPropertyInlineCreate.Attributes](gamecentermatchmakingtestplayerpropertyinlinecreate/attributes-data.dictionary.md): The attributes for sample player properties.

## See Also

### Objects

- [GameCenterMatchmakingRuleSetTestCreateRequest](gamecentermatchmakingrulesettestcreaterequest.md): The request body for testing the rules in a rule set.
- [GameCenterMatchmakingTestRequest](gamecentermatchmakingtestrequest.md): The type and ID of test matchmaking request.
- [GameCenterMatchmakingRuleSetTestResponse](gamecentermatchmakingrulesettestresponse.md): The response body for testing a rule set.
- [GameCenterMatchmakingRuleSetTest](gamecentermatchmakingrulesettest.md): A test run of a Game Center matchmaking rule set using simulated player properties to validate the rules.
- [GameCenterMatchmakingTestRequestInlineCreate](gamecentermatchmakingtestrequestinlinecreate.md): A data structure that represents a sample match request for testing a rule set.
- [GameCenterMatchmakingTestPlayerProperty](gamecentermatchmakingtestplayerproperty.md): A simulated player attribute used when testing Game Center matchmaking rule sets.
- [GameCenterMatchmakingTeamAssignment](gamecentermatchmakingteamassignment.md): The assignment of a player to a specific team during a Game Center matchmaking session.
- [Location](location.md): A representation of a device location.
- [Property](property.md): A representation of a game-specific property.
