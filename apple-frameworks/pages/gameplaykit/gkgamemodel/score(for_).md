> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgamemodel/score(for:)](https://developer.apple.com/documentation/gameplaykit/gkgamemodel/score(for:))

# score(for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a number rating the desirability of the game model’s current state from the perspective of the specified player.

## Declaration

```swift
optional func score(for player: any GKGameModelPlayer) -> Int
```

## Parameters

- `player`: An instance of your game’s player class (a custom class implementing the [GKGameModelPlayer](../gkgamemodelplayer.md) protocol) representing the player evaluating the game model.

<a id="return-value"></a>

## Return Value

A value indicating the specified player’s evaluation of the game model’s current state. Higher values indicate that a state is more desirable than lower values.

<a id="Discussion"></a>

## Discussion

The score you return from this method is the primary heuristic by which the [GKMinmaxStrategist](../gkminmaxstrategist.md) class evaluates possible moves. GameplayKit speculates about the effects of possible future moves by making copies of the active game model, applying possible moves to that model, and calling your [score(for:)](score%28for_%29.md) method to rate the effects of those moves. Returning a high rating from your score method indicates a state of the game model that is advantageous to the given player; a low rating indicates a state that is less advantageous. GameplayKit then collects and sorts the scores resulting from many possible moves (including future moves that follow the move currently being planned) to find the most advantageous move for the active player’s current turn.

Exactly how you calculate scores to return from this method depends on the rules of your game and your strategy for evaluating possible game states. The gameplay performance of the [GKMinmaxStrategist](../gkminmaxstrategist.md) strategist depends largely on the soundness of your metric in describing the relative advantage of different game positions. For example, if your metric can distinguish between a move that is likely to result in a win after a few turns and a move that is likely to result in a win after many turns, the strategist will be better able to predict winning moves.

This method should return [NSIntegerMin](../../objectivec/nsintegermin.md) if the specified player is not valid.

> **Note**

>  This method is optional; however, your game model class must implement at least one of the [score(for:)](score%28for_%29.md), [isLoss(for:)](isloss%28for_%29.md), and [isWin(for:)](iswin%28for_%29.md) methods.

## See Also

### Evaluating a Game Model

- [gameModelUpdates(for:)](gamemodelupdates%28for_%29.md): Returns the set of moves available to the specified player.
- [isLoss(for:)](isloss%28for_%29.md): Returns a Boolean value indicating whether the specified player has lost the game.
- [isWin(for:)](iswin%28for_%29.md): Returns a Boolean value indicating whether the current state of the game model reflects a win for the specified player.

# scoreForPlayer: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a number rating the desirability of the game model’s current state from the perspective of the specified player.

## Declaration

```objectivec
- (NSInteger) scoreForPlayer:(id<GKGameModelPlayer>) player;
```

## Parameters

- `player`: An instance of your game’s player class (a custom class implementing the [GKGameModelPlayer](../gkgamemodelplayer.md) protocol) representing the player evaluating the game model.

<a id="return-value"></a>

## Return Value

A value indicating the specified player’s evaluation of the game model’s current state. Higher values indicate that a state is more desirable than lower values.

<a id="Discussion"></a>

## Discussion

The score you return from this method is the primary heuristic by which the [GKMinmaxStrategist](../gkminmaxstrategist.md) class evaluates possible moves. GameplayKit speculates about the effects of possible future moves by making copies of the active game model, applying possible moves to that model, and calling your [scoreForPlayer:](score%28for_%29.md) method to rate the effects of those moves. Returning a high rating from your score method indicates a state of the game model that is advantageous to the given player; a low rating indicates a state that is less advantageous. GameplayKit then collects and sorts the scores resulting from many possible moves (including future moves that follow the move currently being planned) to find the most advantageous move for the active player’s current turn.

Exactly how you calculate scores to return from this method depends on the rules of your game and your strategy for evaluating possible game states. The gameplay performance of the [GKMinmaxStrategist](../gkminmaxstrategist.md) strategist depends largely on the soundness of your metric in describing the relative advantage of different game positions. For example, if your metric can distinguish between a move that is likely to result in a win after a few turns and a move that is likely to result in a win after many turns, the strategist will be better able to predict winning moves.

This method should return [NSIntegerMin](../../objectivec/nsintegermin.md) if the specified player is not valid.

> **Note**

>  This method is optional; however, your game model class must implement at least one of the [scoreForPlayer:](score%28for_%29.md), [isLossForPlayer:](isloss%28for_%29.md), and [isWinForPlayer:](iswin%28for_%29.md) methods.

## See Also

### Evaluating a Game Model

- [gameModelUpdatesForPlayer:](gamemodelupdates%28for_%29.md): Returns the set of moves available to the specified player.
- [isLossForPlayer:](isloss%28for_%29.md): Returns a Boolean value indicating whether the specified player has lost the game.
- [isWinForPlayer:](iswin%28for_%29.md): Returns a Boolean value indicating whether the current state of the game model reflects a win for the specified player.
