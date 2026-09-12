> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgamemodel/isloss(for:)](https://developer.apple.com/documentation/gameplaykit/gkgamemodel/isloss(for:))

# isLoss(for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the specified player has lost the game.

## Declaration

```swift
optional func isLoss(for player: any GKGameModelPlayer) -> Bool
```

## Parameters

- `player`: An instance of your game’s player class (a custom class implementing the [GKGameModelPlayer](../gkgamemodelplayer.md) protocol) representing the player evaluating the game model.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this game model represents a losing state for the specified player; [false](https://developer.apple.com/documentation/swift/false) if the game has been won or has not yet concluded.

<a id="Discussion"></a>

## Discussion

If the game has been won or lost, a strategist evaluating the game model can avoid evaluating further moves in the game and can therefore plan a successful move more efficiently.

For some games, merely identifying winning and losing states of the game model and using a sufficiently large [maxLookAheadDepth](../gkminmaxstrategist/maxlookaheaddepth.md) value is enough for a strategist to play the game well. However, you can improve both the game performance and the runtime efficiency of move planning by also implementing the [score(for:)](score%28for_%29.md) method to distinguish the relative desirability of non-game-ending states.

> **Note**

>  This method is optional; however, your game model class must implement at least one of the [score(for:)](score%28for_%29.md), [isLoss(for:)](isloss%28for_%29.md), and [isWin(for:)](iswin%28for_%29.md) methods.

## See Also

### Evaluating a Game Model

- [gameModelUpdates(for:)](gamemodelupdates%28for_%29.md): Returns the set of moves available to the specified player.
- [score(for:)](score%28for_%29.md): Returns a number rating the desirability of the game model’s current state from the perspective of the specified player.
- [isWin(for:)](iswin%28for_%29.md): Returns a Boolean value indicating whether the current state of the game model reflects a win for the specified player.

# isLossForPlayer: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the specified player has lost the game.

## Declaration

```objectivec
- (BOOL) isLossForPlayer:(id<GKGameModelPlayer>) player;
```

## Parameters

- `player`: An instance of your game’s player class (a custom class implementing the [GKGameModelPlayer](../gkgamemodelplayer.md) protocol) representing the player evaluating the game model.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this game model represents a losing state for the specified player; [false](https://developer.apple.com/documentation/swift/false) if the game has been won or has not yet concluded.

<a id="Discussion"></a>

## Discussion

If the game has been won or lost, a strategist evaluating the game model can avoid evaluating further moves in the game and can therefore plan a successful move more efficiently.

For some games, merely identifying winning and losing states of the game model and using a sufficiently large [maxLookAheadDepth](../gkminmaxstrategist/maxlookaheaddepth.md) value is enough for a strategist to play the game well. However, you can improve both the game performance and the runtime efficiency of move planning by also implementing the [scoreForPlayer:](score%28for_%29.md) method to distinguish the relative desirability of non-game-ending states.

> **Note**

>  This method is optional; however, your game model class must implement at least one of the [scoreForPlayer:](score%28for_%29.md), [isLossForPlayer:](isloss%28for_%29.md), and [isWinForPlayer:](iswin%28for_%29.md) methods.

## See Also

### Evaluating a Game Model

- [gameModelUpdatesForPlayer:](gamemodelupdates%28for_%29.md): Returns the set of moves available to the specified player.
- [scoreForPlayer:](score%28for_%29.md): Returns a number rating the desirability of the game model’s current state from the perspective of the specified player.
- [isWinForPlayer:](iswin%28for_%29.md): Returns a Boolean value indicating whether the current state of the game model reflects a win for the specified player.
