> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgamemodelupdate](https://developer.apple.com/documentation/gameplaykit/gkgamemodelupdate)

# GKGameModelUpdate (Swift)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.

## Declaration

```swift
protocol GKGameModelUpdate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You adopt this protocol in a custom class that describes a move in your game. You use that class, along with another custom class implementing the [GKGameModel](gkgamemodel.md) protocol, to describe your gameplay to a [GKStrategist](gkstrategist.md) object. You can then use the strategist to find optimal moves during gameplay—for example, to create a computer-controlled player, or to offer hints to a human player.

Your implementation of this protocol should add properties or methods that describe a move in terms of your game. For example, in a Tic-Tac-Toe game, a move class might record which of the nine spaces gets marked in that move. In a chess game, a move class might describe the piece being moved, its original location, and its destination.

You then use your move class in three places:

- In the [gameModelUpdates(for:)](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class, you create instances of your move class representing each of the possible moves for the specified player. GameplayKit calls this method to determine what moves are possible and speculate about the effects of possible moves on the game’s outcome.
- In the [apply(\_:)](gkgamemodel/apply%28__%29.md) method of your game model class, you use the information in the specified move object to update the state of the game model. GameplayKit calls this method when evaluating the effects of possible moves in order to select the best move.
- When you call the strategist’s [bestMove(for:)](gkminmaxstrategist/bestmove%28for_%29.md) or [randomMove(for:fromNumberOfBestMoves:)](gkminmaxstrategist/randommove%28for_fromnumberofbestmoves_%29.md) method to find an optimal move, the return value is one of the move objects you created in your [gameModelUpdates(for:)](gkgamemodel/gamemodelupdates%28for_%29.md) method. Use the information in that object to perform the move (if creating a computer-controlled player) or indicate the move in your game’s user interface (if offering hints to a human player).

For more information about describing your gameplay model and using a strategist, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Storing a Move Value

- [value](gkgamemodelupdate/value.md): A value assigned and read by GameplayKit to rate the desirability of a move in your game.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Strategists

- [GKStrategist](gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMinmaxStrategist](gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.

# GKGameModelUpdate (Objective-C)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.

## Declaration

```objectivec
@protocol GKGameModelUpdate <NSObject>
```

<a id="overview"></a>

## Overview

You adopt this protocol in a custom class that describes a move in your game. You use that class, along with another custom class implementing the [GKGameModel](gkgamemodel.md) protocol, to describe your gameplay to a [GKStrategist](gkstrategist.md) object. You can then use the strategist to find optimal moves during gameplay—for example, to create a computer-controlled player, or to offer hints to a human player.

Your implementation of this protocol should add properties or methods that describe a move in terms of your game. For example, in a Tic-Tac-Toe game, a move class might record which of the nine spaces gets marked in that move. In a chess game, a move class might describe the piece being moved, its original location, and its destination.

You then use your move class in three places:

- In the [gameModelUpdatesForPlayer:](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class, you create instances of your move class representing each of the possible moves for the specified player. GameplayKit calls this method to determine what moves are possible and speculate about the effects of possible moves on the game’s outcome.
- In the [applyGameModelUpdate:](gkgamemodel/apply%28__%29.md) method of your game model class, you use the information in the specified move object to update the state of the game model. GameplayKit calls this method when evaluating the effects of possible moves in order to select the best move.
- When you call the strategist’s [bestMoveForPlayer:](gkminmaxstrategist/bestmove%28for_%29.md) or [randomMoveForPlayer:fromNumberOfBestMoves:](gkminmaxstrategist/randommove%28for_fromnumberofbestmoves_%29.md) method to find an optimal move, the return value is one of the move objects you created in your [gameModelUpdatesForPlayer:](gkgamemodel/gamemodelupdates%28for_%29.md) method. Use the information in that object to perform the move (if creating a computer-controlled player) or indicate the move in your game’s user interface (if offering hints to a human player).

For more information about describing your gameplay model and using a strategist, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Storing a Move Value

- [value](gkgamemodelupdate/value.md): A value assigned and read by GameplayKit to rate the desirability of a move in your game.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Strategists

- [GKStrategist](gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMinmaxStrategist](gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
