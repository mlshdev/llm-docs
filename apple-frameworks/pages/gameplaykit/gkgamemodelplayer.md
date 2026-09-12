> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgamemodelplayer](https://developer.apple.com/documentation/gameplaykit/gkgamemodelplayer)

# GKGameModelPlayer (Swift)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.

## Declaration

```swift
protocol GKGameModelPlayer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You adopt this protocol to describe the gameplay of your turn-based game for use by a [GKStrategist](gkstrategist.md) object. The strategist uses your player class, along with other custom classes you implement (adopting the [GKGameModel](gkgamemodel.md) and [GKGameModelUpdate](gkgamemodelupdate.md) protocols) to plan moves in your game.

You use your custom class implementing this protocol in several places:

- In the [players](gkgamemodel/players.md) and [activePlayer](gkgamemodel/activeplayer.md) properties of your game model class, to describe the set of players in your game and indicate which player’s turn it currently is
- In the [gameModelUpdates(for:)](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class, to describe the set of moves currently valid for a specified player
- In the [isWin(for:)](gkgamemodel/iswin%28for_%29.md), [isLoss(for:)](gkgamemodel/isloss%28for_%29.md), and [score(for:)](gkgamemodel/score%28for_%29.md) method of your game model class, to rate the desirability of that particular state of the game model to a specified player
- When calling the [bestMove(for:)](gkminmaxstrategist/bestmove%28for_%29.md) or [randomMove(for:fromNumberOfBestMoves:)](gkminmaxstrategist/randommove%28for_fromnumberofbestmoves_%29.md) method to find an optimal move, to indicate the player for whom GameplayKit should plan moves

Your class that implements this protocol can also contain properties and methods relevant to the implementation of your game—for example, an identifying color or name.

For more information about describing your gameplay model and using a strategist, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Identifying a Player

- [playerId](gkgamemodelplayer/playerid.md): A number uniquely identifying the player.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Strategists

- [GKStrategist](gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMinmaxStrategist](gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelUpdate](gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.

# GKGameModelPlayer (Objective-C)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.

## Declaration

```objectivec
@protocol GKGameModelPlayer <NSObject>
```

<a id="overview"></a>

## Overview

You adopt this protocol to describe the gameplay of your turn-based game for use by a [GKStrategist](gkstrategist.md) object. The strategist uses your player class, along with other custom classes you implement (adopting the [GKGameModel](gkgamemodel.md) and [GKGameModelUpdate](gkgamemodelupdate.md) protocols) to plan moves in your game.

You use your custom class implementing this protocol in several places:

- In the [players](gkgamemodel/players.md) and [activePlayer](gkgamemodel/activeplayer.md) properties of your game model class, to describe the set of players in your game and indicate which player’s turn it currently is
- In the [gameModelUpdatesForPlayer:](gkgamemodel/gamemodelupdates%28for_%29.md) method of your game model class, to describe the set of moves currently valid for a specified player
- In the [isWinForPlayer:](gkgamemodel/iswin%28for_%29.md), [isLossForPlayer:](gkgamemodel/isloss%28for_%29.md), and [scoreForPlayer:](gkgamemodel/score%28for_%29.md) method of your game model class, to rate the desirability of that particular state of the game model to a specified player
- When calling the [bestMoveForPlayer:](gkminmaxstrategist/bestmove%28for_%29.md) or [randomMoveForPlayer:fromNumberOfBestMoves:](gkminmaxstrategist/randommove%28for_fromnumberofbestmoves_%29.md) method to find an optimal move, to indicate the player for whom GameplayKit should plan moves

Your class that implements this protocol can also contain properties and methods relevant to the implementation of your game—for example, an identifying color or name.

For more information about describing your gameplay model and using a strategist, see [The Minmax Strategist](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Minmax.html#//apple_ref/doc/uid/TP40015172-CH2) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Identifying a Player

- [playerId](gkgamemodelplayer/playerid.md): A number uniquely identifying the player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Strategists

- [GKStrategist](gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMinmaxStrategist](gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelUpdate](gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.
