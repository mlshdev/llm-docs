> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkminmaxstrategist/randommove(for:fromnumberofbestmoves:)](https://developer.apple.com/documentation/gameplaykit/gkminmaxstrategist/randommove(for:fromnumberofbestmoves:))

# randomMove(for:fromNumberOfBestMoves:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Computes several of the best possible moves for the specified player, and returns a move randomly selected from among them.

## Declaration

```swift
func randomMove(for player: any GKGameModelPlayer, fromNumberOfBestMoves numMovesToConsider: Int) -> (any GKGameModelUpdate)?
```

## Parameters

- `player`: The player for whom the strategist should plan a move. This object must be in the current game model’s [players](../gkgamemodel/players.md) array.
- `numMovesToConsider`: The number of moves from which to randomize the selection.

<a id="return-value"></a>

## Return Value

An object describing the move found by the strategist.

<a id="Discussion"></a>

## Discussion

This method looks ahead at the possible moves for the specified player, as well as possible future moves by other players on subsequent turns (according to the [maxLookAheadDepth](maxlookaheaddepth.md) property) and examines the state of the game model resulting from each possible move. Your game model class provides a score for each state in its [score(for:)](../gkgamemodel/score%28for_%29.md) method, allowing the strategist to find and rank sequences of future moves that maximize the score for the specified player. This method then returns a random selection representing the first move in one of the most highly ranked sequences.

The object returned is an instance of your custom class implementing the [GKGameModelUpdate](../gkgamemodelupdate.md) protocol. This object was created in your game model’s [gameModelUpdates(for:)](../gkgamemodel/gamemodelupdates%28for_%29.md) method, describing in your game’s terms a possible move—examine that information to make use of the strategist’s selection. For example, you could implement a computer-controlled player by performing the selected move.

If the [randomSource](../gkstrategist/randomsource.md) property is `nil`, this method does not randomize its selection, but instead behaves identically to the [bestMove(for:)](bestmove%28for_%29.md) method.

This method returns `nil` if the specified player is invalid or has no available moves.

## See Also

### Planning Game Moves

- [bestMove(for:)](bestmove%28for_%29.md): Computes and returns the best possible move for the specified player.

# randomMoveForPlayer:fromNumberOfBestMoves: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Computes several of the best possible moves for the specified player, and returns a move randomly selected from among them.

## Declaration

```objectivec
- (id<GKGameModelUpdate>) randomMoveForPlayer:(id<GKGameModelPlayer>) player fromNumberOfBestMoves:(NSInteger) numMovesToConsider;
```

## Parameters

- `player`: The player for whom the strategist should plan a move. This object must be in the current game model’s [players](../gkgamemodel/players.md) array.
- `numMovesToConsider`: The number of moves from which to randomize the selection.

<a id="return-value"></a>

## Return Value

An object describing the move found by the strategist.

<a id="Discussion"></a>

## Discussion

This method looks ahead at the possible moves for the specified player, as well as possible future moves by other players on subsequent turns (according to the [maxLookAheadDepth](maxlookaheaddepth.md) property) and examines the state of the game model resulting from each possible move. Your game model class provides a score for each state in its [scoreForPlayer:](../gkgamemodel/score%28for_%29.md) method, allowing the strategist to find and rank sequences of future moves that maximize the score for the specified player. This method then returns a random selection representing the first move in one of the most highly ranked sequences.

The object returned is an instance of your custom class implementing the [GKGameModelUpdate](../gkgamemodelupdate.md) protocol. This object was created in your game model’s [gameModelUpdatesForPlayer:](../gkgamemodel/gamemodelupdates%28for_%29.md) method, describing in your game’s terms a possible move—examine that information to make use of the strategist’s selection. For example, you could implement a computer-controlled player by performing the selected move.

If the [randomSource](../gkstrategist/randomsource.md) property is `nil`, this method does not randomize its selection, but instead behaves identically to the [bestMoveForPlayer:](bestmove%28for_%29.md) method.

This method returns `nil` if the specified player is invalid or has no available moves.

## See Also

### Planning Game Moves

- [bestMoveForPlayer:](bestmove%28for_%29.md): Computes and returns the best possible move for the specified player.
