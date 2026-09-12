> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/testing](https://developer.apple.com/documentation/appstoreconnectapi/testing)

# Testing

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Test matchmaking rules using sample data.

<a id="overview"></a>

## Overview

Use the Testing APIs to apply matchmaking rules to sample match requests and player properties. For more information, see [Testing matchmaking rules](https://developer.apple.com/documentation/gamekit/testing-matchmaking-rules).

## Topics

### Applying rule sets to sample requests

- [Test a Rule Set](post-v1-gamecentermatchmakingrulesettests.md): Apply the given rule set to the given sample match requests.

### Objects

- [GameCenterMatchmakingRuleSetTestCreateRequest](gamecentermatchmakingrulesettestcreaterequest.md): The request body for testing the rules in a rule set.
- [GameCenterMatchmakingTestRequest](gamecentermatchmakingtestrequest.md): The type and ID of test matchmaking request.
- [GameCenterMatchmakingRuleSetTestResponse](gamecentermatchmakingrulesettestresponse.md): The response body for testing a rule set.
- [GameCenterMatchmakingRuleSetTest](gamecentermatchmakingrulesettest.md): A test run of a Game Center matchmaking rule set using simulated player properties to validate the rules.
- [GameCenterMatchmakingTestRequestInlineCreate](gamecentermatchmakingtestrequestinlinecreate.md): A data structure that represents a sample match request for testing a rule set.
- [GameCenterMatchmakingTestPlayerProperty](gamecentermatchmakingtestplayerproperty.md): A simulated player attribute used when testing Game Center matchmaking rule sets.
- [GameCenterMatchmakingTestPlayerPropertyInlineCreate](gamecentermatchmakingtestplayerpropertyinlinecreate.md): A resource object that represents a player’s properties when you create a request.
- [GameCenterMatchmakingTeamAssignment](gamecentermatchmakingteamassignment.md): The assignment of a player to a specific team during a Game Center matchmaking session.
- [Location](location.md): A representation of a device location.
- [Property](property.md): A representation of a game-specific property.

## See Also

### Matchmaking rules

- [Rules](rules.md): Manage the matchmaking rules that Game Center uses to find players.
- [Expressions](expressions.md): Write expressions that query the match requests in a queue to find the best players for a match.
- [Rule sets](rule-sets.md): Manage the rule sets that you add matchmaking rules and teams to.
- [Queues](queues.md): Manage the queues that contain matchmaking rule sets and that you submit match requests to.
- [Teams](teams.md): Manage the teams that you add to matchmaking rule sets.
- [Metrics](metrics.md): Analyze data about matchmaking rules.
