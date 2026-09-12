> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstrategist](https://developer.apple.com/documentation/gameplaykit/gkstrategist)

# GKStrategist (Swift)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.

## Declaration

```swift
protocol GKStrategist : NSObjectProtocol
```

<a id="overview"></a>

## Overview

GameplayKit provides two strategist classes, and you can also use this protocol to implement your own. You provide information about your game model to a strategist by implementing the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols in your custom classes, then use the strategist’s methods to find optimal moves.

<a id="Choosing-a-Strategist"></a>

### Choosing a Strategist

GameplayKit provides two strategist classes:

- The [GKMinmaxStrategist](gkminmaxstrategist.md) class uses a numeric score for each possible game model state, and performs an exhaustive tree search to find moves that maximize the player’s score while minimizing opponent scores. This strategy can result in optimal gameplay, but requires a scoring method for game models and has a performance cost that increases greatly with game complexity.
- The [GKMonteCarloStrategist](gkmontecarlostrategist.md) class performs a randomized, probabilistic search for winning end states. This strategy doesn’t always choose the *best* possible move, but is likely to choose *good* moves, and has a low performance cost even for very complex games. In addition, the Monte Carlo strategy is concerned only with whether a game model state represents a win, so you don’t need to implement a scoring method.

<a id="Using-a-Strategist"></a>

### Using a Strategist

Using a strategist in a game requires the following steps:

1. Create classes describing your gameplay model, adopting the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols.
2. Choose a strategist class (one that adopts the [GKStrategist](gkstrategist.md) protocol), create an instance of that class, and configure its properties to determine its gameplay behavior.
3. Point the strategist’s [gameModel](gkstrategist/gamemodel.md) property at the instance of your game model class representing the current state of the game in play.
4. Use the [bestMoveForActivePlayer()](gkstrategist/bestmoveforactiveplayer%28%29.md) method to select the best possible move for the current player. This method returns a move object (that is, an instance of the custom class you create to adopt the [GKGameModelUpdate](gkgamemodelupdate.md) protocol).
5. Examine the move object to make use of the move selected by the strategist. You created this instance in the [gameModelUpdates(for:)](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class to describe a possible move in your game, so examining the object gives you the information needed to perform that move.

For more information about describing your gameplay model and using strategists, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Specifying the Game Model

- [gameModel](gkstrategist/gamemodel.md): The model representing the current state of the game.

### Configuring a Strategist

- [randomSource](gkstrategist/randomsource.md): A randomizer object to be used when the strategist randomly selects a move.

### Planning Game Moves

- [bestMoveForActivePlayer()](gkstrategist/bestmoveforactiveplayer%28%29.md): Computes and returns the best possible move for the current player.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GKMinmaxStrategist](gkminmaxstrategist.md)
- [GKMonteCarloStrategist](gkmontecarlostrategist.md)

## See Also

### Strategists

- [GKMinmaxStrategist](gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
- [GKGameModelUpdate](gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.

# GKStrategist (Objective-C)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.

## Declaration

```objectivec
@protocol GKStrategist <NSObject>
```

<a id="overview"></a>

## Overview

GameplayKit provides two strategist classes, and you can also use this protocol to implement your own. You provide information about your game model to a strategist by implementing the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols in your custom classes, then use the strategist’s methods to find optimal moves.

<a id="Choosing-a-Strategist"></a>

### Choosing a Strategist

GameplayKit provides two strategist classes:

- The [GKMinmaxStrategist](gkminmaxstrategist.md) class uses a numeric score for each possible game model state, and performs an exhaustive tree search to find moves that maximize the player’s score while minimizing opponent scores. This strategy can result in optimal gameplay, but requires a scoring method for game models and has a performance cost that increases greatly with game complexity.
- The [GKMonteCarloStrategist](gkmontecarlostrategist.md) class performs a randomized, probabilistic search for winning end states. This strategy doesn’t always choose the *best* possible move, but is likely to choose *good* moves, and has a low performance cost even for very complex games. In addition, the Monte Carlo strategy is concerned only with whether a game model state represents a win, so you don’t need to implement a scoring method.

<a id="Using-a-Strategist"></a>

### Using a Strategist

Using a strategist in a game requires the following steps:

1. Create classes describing your gameplay model, adopting the [GKGameModel](gkgamemodel.md), [GKGameModelPlayer](gkgamemodelplayer.md), and [GKGameModelUpdate](gkgamemodelupdate.md) protocols.
2. Choose a strategist class (one that adopts the [GKStrategist](gkstrategist.md) protocol), create an instance of that class, and configure its properties to determine its gameplay behavior.
3. Point the strategist’s [gameModel](gkstrategist/gamemodel.md) property at the instance of your game model class representing the current state of the game in play.
4. Use the [bestMoveForActivePlayer](gkstrategist/bestmoveforactiveplayer%28%29.md) method to select the best possible move for the current player. This method returns a move object (that is, an instance of the custom class you create to adopt the [GKGameModelUpdate](gkgamemodelupdate.md) protocol).
5. Examine the move object to make use of the move selected by the strategist. You created this instance in the [gameModelUpdatesForPlayer:](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class to describe a possible move in your game, so examining the object gives you the information needed to perform that move.

For more information about describing your gameplay model and using strategists, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Specifying the Game Model

- [gameModel](gkstrategist/gamemodel.md): The model representing the current state of the game.

### Configuring a Strategist

- [randomSource](gkstrategist/randomsource.md): A randomizer object to be used when the strategist randomly selects a move.

### Planning Game Moves

- [bestMoveForActivePlayer](gkstrategist/bestmoveforactiveplayer%28%29.md): Computes and returns the best possible move for the current player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GKMinmaxStrategist](gkminmaxstrategist.md)
- [GKMonteCarloStrategist](gkmontecarlostrategist.md)

## See Also

### Strategists

- [GKMinmaxStrategist](gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
- [GKGameModelUpdate](gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.
