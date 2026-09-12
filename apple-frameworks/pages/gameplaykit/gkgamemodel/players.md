> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgamemodel/players](https://developer.apple.com/documentation/gameplaykit/gkgamemodel/players)

# players (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The players currently in the game.

## Declaration

```swift
var players: [any GKGameModelPlayer]? { get }
```

<a id="Discussion"></a>

## Discussion

This array should contain instances of your player class (a custom class implementing the [GKGameModelPlayer](../gkgamemodelplayer.md) protocol) representing the players in the game. When you use the [GKMinmaxStrategist](../gkminmaxstrategist.md) class to find an optimal move for a specific player, GameplayKit uses this array to rate the moves of that player’s opponent(s).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Keeping Track of Players

- [activePlayer](activeplayer.md): The player whose turn it currently is in the game.

# players (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The players currently in the game.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<id<GKGameModelPlayer>> * players;
```

<a id="Discussion"></a>

## Discussion

This array should contain instances of your player class (a custom class implementing the [GKGameModelPlayer](../gkgamemodelplayer.md) protocol) representing the players in the game. When you use the [GKMinmaxStrategist](../gkminmaxstrategist.md) class to find an optimal move for a specific player, GameplayKit uses this array to rate the moves of that player’s opponent(s).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Keeping Track of Players

- [activePlayer](activeplayer.md): The player whose turn it currently is in the game.
