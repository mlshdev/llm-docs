> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingteamassignment](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingteamassignment)

# GameCenterMatchmakingTeamAssignment

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The assignment of a player to a specific team during a Game Center matchmaking session.

## Declaration

```
object GameCenterMatchmakingTeamAssignment
```

## Properties

- `playerId` — `string`: A unique identifier for the player.
- `team` — `string`: The name of the team that Game Center assigned the player to.

## See Also

### Objects

- [GameCenterMatchmakingRuleSetTestCreateRequest](gamecentermatchmakingrulesettestcreaterequest.md): The request body for testing the rules in a rule set.
- [GameCenterMatchmakingTestRequest](gamecentermatchmakingtestrequest.md): The type and ID of test matchmaking request.
- [GameCenterMatchmakingRuleSetTestResponse](gamecentermatchmakingrulesettestresponse.md): The response body for testing a rule set.
- [GameCenterMatchmakingRuleSetTest](gamecentermatchmakingrulesettest.md): A test run of a Game Center matchmaking rule set using simulated player properties to validate the rules.
- [GameCenterMatchmakingTestRequestInlineCreate](gamecentermatchmakingtestrequestinlinecreate.md): A data structure that represents a sample match request for testing a rule set.
- [GameCenterMatchmakingTestPlayerProperty](gamecentermatchmakingtestplayerproperty.md): A simulated player attribute used when testing Game Center matchmaking rule sets.
- [GameCenterMatchmakingTestPlayerPropertyInlineCreate](gamecentermatchmakingtestplayerpropertyinlinecreate.md): A resource object that represents a player’s properties when you create a request.
- [Location](location.md): A representation of a device location.
- [Property](property.md): A representation of a game-specific property.
