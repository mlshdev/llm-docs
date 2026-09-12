> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/minplayers](https://developer.apple.com/documentation/gamekit/gkmatchrequest/minplayers)

# minPlayers (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The minimum number of players that can join the match.

## Declaration

```swift
var minPlayers: Int { get set }
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The possible values range from `2` to the value returned by the [maxPlayersAllowedForMatch(of:)](maxplayersallowedformatch%28of_%29.md) method. To set the maximum number of players, use the [maxPlayers](maxplayers.md) property.

If you use matchmaking rules, the rule set’s `minPlayers` field constrains this value. Set this property to a value in the range of the rule set’s `minPlayers` and `maxPlayers` fields. The default value is the rule set’s `minPlayers` field.

## See Also

### Related Documentation

- [Create a Rule Set](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrulesets): Create a rule set to contain matchmaking rules and teams.

### Restricting the number of players

- [maxPlayersAllowedForMatch(of:)](maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [GKMatchType](../gkmatchtype.md): The kind of match managed by Game Center.
- [maxPlayers](maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](defaultnumberofplayers.md): The default number of players for the match.

# minPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The minimum number of players that can join the match.

## Declaration

```objectivec
@property (assign) NSUInteger minPlayers;
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The possible values range from `2` to the value returned by the [maxPlayersAllowedForMatchOfType:](maxplayersallowedformatch%28of_%29.md) method. To set the maximum number of players, use the [maxPlayers](maxplayers.md) property.

If you use matchmaking rules, the rule set’s `minPlayers` field constrains this value. Set this property to a value in the range of the rule set’s `minPlayers` and `maxPlayers` fields. The default value is the rule set’s `minPlayers` field.

## See Also

### Related Documentation

- [Create a Rule Set](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrulesets): Create a rule set to contain matchmaking rules and teams.

### Restricting the number of players

- [maxPlayersAllowedForMatchOfType:](maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [GKMatchType](../gkmatchtype.md): The kind of match managed by Game Center.
- [maxPlayers](maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](defaultnumberofplayers.md): The default number of players for the match.
