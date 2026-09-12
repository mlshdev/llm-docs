> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkminmaxstrategist](https://developer.apple.com/documentation/gameplaykit/gkminmaxstrategist)

# GKMinmaxStrategist (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An AI that chooses moves in turn-based games using a *deterministic* strategy.

## Declaration

```swift
class GKMinmaxStrategist
```

<a id="overview"></a>

## Overview

To use this strategy, you provide scores that rate possible states of your game model for their desirability to a player, and the strategist exhaustively searches all possible game model states in order to make choices that maximize the rating for its own moves and minimize the rating for an opponent’s moves. You provide information about your game model to the strategist by implementing the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols in your custom classes, and then use the strategist’s methods to find optimal moves.

<a id="Choosing-a-Strategist"></a>

### Choosing a Strategist

GameplayKit provides multiple strategist classes. The advantage of the [GKMinmaxStrategist](gkminmaxstrategist.md) class is its deterministic, exhaustive strategy: If allowed, the minmax strategist searches the entire space of possible moves and the game states they lead to, so it can find the best possible move at any time. The cost of this strategy is performance: searching every possible game state takes time, especially for complex games where many moves are possible at any given time. Additionally, this strategy requires that your game model implement the [score(for:)](gkgamemodel/score%28for_%29.md) method to rate the desirability of each game state.

See the [GKStrategist](gkstrategist.md) protocol for alternate strategies, as well as the methods and properties supported by all strategist classes.

<a id="Using-a-Minmax-Strategist"></a>

### Using a Minmax Strategist

Using the minmax strategist in a game requires the following steps:

1. Create classes describing your gameplay model, adopting the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols.
2. Create [GKMinmaxStrategist](gkminmaxstrategist.md) instance and configure its properties [maxLookAheadDepth](gkminmaxstrategist/maxlookaheaddepth.md) and [randomSource](gkstrategist/randomsource.md) to determine its gameplay behavior.
3. Point the minmax strategist’s [gameModel](gkstrategist/gamemodel.md) property at the instance of your game model class (that is, your class that implements the [GKGameModel](gkgamemodel.md) protocol) representing the current state of the game in play.
4. Use the [bestMoveForActivePlayer()](gkstrategist/bestmoveforactiveplayer%28%29.md) method to select the best possible move for the current player. This method returns a move object (that is, an instance of the custom class you create to adopt the [GKGameModelUpdate](gkgamemodelupdate.md) protocol).
5. Examine the move object to make use of the move selected by the strategist. You created this instance in the [gameModelUpdates(for:)](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class to describe a possible move in your game, so examining the object gives you the information needed to perform that move.

For more information about describing your gameplay model and using strategists, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Configuring a Strategist

- [maxLookAheadDepth](gkminmaxstrategist/maxlookaheaddepth.md): The number of future turns for the strategist to consider when planning moves.

### Planning Game Moves

- [bestMove(for:)](gkminmaxstrategist/bestmove%28for_%29.md): Computes and returns the best possible move for the specified player.
- [randomMove(for:fromNumberOfBestMoves:)](gkminmaxstrategist/randommove%28for_fromnumberofbestmoves_%29.md): Computes several of the best possible moves for the specified player, and returns a move randomly selected from among them.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GKStrategist](gkstrategist.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Strategists

- [GKStrategist](gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
- [GKGameModelUpdate](gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.

# GKMinmaxStrategist (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An AI that chooses moves in turn-based games using a *deterministic* strategy.

## Declaration

```objectivec
@interface GKMinmaxStrategist : NSObject
```

<a id="overview"></a>

## Overview

To use this strategy, you provide scores that rate possible states of your game model for their desirability to a player, and the strategist exhaustively searches all possible game model states in order to make choices that maximize the rating for its own moves and minimize the rating for an opponent’s moves. You provide information about your game model to the strategist by implementing the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols in your custom classes, and then use the strategist’s methods to find optimal moves.

<a id="Choosing-a-Strategist"></a>

### Choosing a Strategist

GameplayKit provides multiple strategist classes. The advantage of the [GKMinmaxStrategist](gkminmaxstrategist.md) class is its deterministic, exhaustive strategy: If allowed, the minmax strategist searches the entire space of possible moves and the game states they lead to, so it can find the best possible move at any time. The cost of this strategy is performance: searching every possible game state takes time, especially for complex games where many moves are possible at any given time. Additionally, this strategy requires that your game model implement the [scoreForPlayer:](gkgamemodel/score%28for_%29.md) method to rate the desirability of each game state.

See the [GKStrategist](gkstrategist.md) protocol for alternate strategies, as well as the methods and properties supported by all strategist classes.

<a id="Using-a-Minmax-Strategist"></a>

### Using a Minmax Strategist

Using the minmax strategist in a game requires the following steps:

1. Create classes describing your gameplay model, adopting the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols.
2. Create [GKMinmaxStrategist](gkminmaxstrategist.md) instance and configure its properties [maxLookAheadDepth](gkminmaxstrategist/maxlookaheaddepth.md) and [randomSource](gkstrategist/randomsource.md) to determine its gameplay behavior.
3. Point the minmax strategist’s [gameModel](gkstrategist/gamemodel.md) property at the instance of your game model class (that is, your class that implements the [GKGameModel](gkgamemodel.md) protocol) representing the current state of the game in play.
4. Use the [bestMoveForActivePlayer](gkstrategist/bestmoveforactiveplayer%28%29.md) method to select the best possible move for the current player. This method returns a move object (that is, an instance of the custom class you create to adopt the [GKGameModelUpdate](gkgamemodelupdate.md) protocol).
5. Examine the move object to make use of the move selected by the strategist. You created this instance in the [gameModelUpdatesForPlayer:](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class to describe a possible move in your game, so examining the object gives you the information needed to perform that move.

For more information about describing your gameplay model and using strategists, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Configuring a Strategist

- [maxLookAheadDepth](gkminmaxstrategist/maxlookaheaddepth.md): The number of future turns for the strategist to consider when planning moves.

### Planning Game Moves

- [bestMoveForPlayer:](gkminmaxstrategist/bestmove%28for_%29.md): Computes and returns the best possible move for the specified player.
- [randomMoveForPlayer:fromNumberOfBestMoves:](gkminmaxstrategist/randommove%28for_fromnumberofbestmoves_%29.md): Computes several of the best possible moves for the specified player, and returns a move randomly selected from among them.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [GKStrategist](gkstrategist.md)

## See Also

### Strategists

- [GKStrategist](gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
- [GKGameModelUpdate](gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.
