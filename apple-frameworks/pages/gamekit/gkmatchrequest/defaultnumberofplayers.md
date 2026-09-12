> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/defaultnumberofplayers](https://developer.apple.com/documentation/gamekit/gkmatchrequest/defaultnumberofplayers)

# defaultNumberOfPlayers (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The default number of players for the match.

## Declaration

```swift
var defaultNumberOfPlayers: Int { get set }
```

<a id="Discussion"></a>

## Discussion

GameKit uses the default number of players to present the available slots in the matchmaking user interface. The player can choose to override this to add or remove slots. If you don’t set this property, GameKit uses the value of the [maxPlayers](maxplayers.md) property as the default number of players.

## See Also

### Restricting the number of players

- [maxPlayersAllowedForMatch(of:)](maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [GKMatchType](../gkmatchtype.md): The kind of match managed by Game Center.
- [minPlayers](minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](maxplayers.md): The maximum number of players that can join the match.

# defaultNumberOfPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The default number of players for the match.

## Declaration

```objectivec
@property (assign) NSUInteger defaultNumberOfPlayers;
```

<a id="Discussion"></a>

## Discussion

GameKit uses the default number of players to present the available slots in the matchmaking user interface. The player can choose to override this to add or remove slots. If you don’t set this property, GameKit uses the value of the [maxPlayers](maxplayers.md) property as the default number of players.

## See Also

### Restricting the number of players

- [maxPlayersAllowedForMatchOfType:](maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [GKMatchType](../gkmatchtype.md): The kind of match managed by Game Center.
- [minPlayers](minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](maxplayers.md): The maximum number of players that can join the match.
