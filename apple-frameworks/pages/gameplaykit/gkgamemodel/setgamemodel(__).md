> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgamemodel/setgamemodel(_:)](https://developer.apple.com/documentation/gameplaykit/gkgamemodel/setgamemodel(_:))

# setGameModel(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the game model’s internal state to that of the specified game model.

## Declaration

```swift
func setGameModel(_ gameModel: any GKGameModel)
```

## Parameters

- `gameModel`: The game model instance from which to copy state.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should efficiently copy the internal state of the specified object into the current game model.

To examine the results of possible future moves, GameplayKit uses several instances of your game model class and calls the [setGameModel(\_:)](setgamemodel%28__%29.md) method many times. For example, in a game where seven possible moves are available on each turn, looking only a few turns ahead requires examining hundreds of thousands of board states. (Rather than continually create new instances of your game state class, GameplayKit reuses existing instances by cloning the state of one into another—this optimization improves memory efficiency.)

> **Important**

>  Because GameplayKit can evaluate thousands of game states each time it plans a move, its performance is limited by the size and complexity of your game model class and its  [setGameModel(\_:)](setgamemodel%28__%29.md) method. Ensure that your class contains only data that minimally describes the state of a game in progress and that your [setGameModel(\_:)](setgamemodel%28__%29.md) method can copy that data quickly (for example, without creating new objects or allocating memory).

The [GKGameModel](../gkgamemodel.md) protocol extends the [NSCopying](../../foundation/nscopying.md) protocol. Because the [setGameModel(\_:)](setgamemodel%28__%29.md) method does the critical work of copying the internal state of your game model, you can use this method to implement the requirements of the the [NSCopying](../../foundation/nscopying.md) protocol:

```objc
- (__nonnull id)copyWithZone:(nullable NSZone *)zone {
    id<GKGameModel> copy = [[[self class] allocWithZone:zone] init];
    [copy setGameModel:self];
    return copy;
}
```

```swift
func copyWithZone(zone: NSZone?) -> AnyObject {
    let copy = self.dynamicType()
    copy.setGameModel(self)
    return copy
}
```

## See Also

### Modifying a Game Model

- [apply(\_:)](apply%28__%29.md): Updates the internal state of the game model to reflect the specified changes.
- [unapplyGameModelUpdate(\_:)](unapplygamemodelupdate%28__%29.md): Updates the internal state of the game model to remove the effect of the specified changes.

# setGameModel: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the game model’s internal state to that of the specified game model.

## Declaration

```objectivec
- (void) setGameModel:(id<GKGameModel>) gameModel;
```

## Parameters

- `gameModel`: The game model instance from which to copy state.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should efficiently copy the internal state of the specified object into the current game model.

To examine the results of possible future moves, GameplayKit uses several instances of your game model class and calls the [setGameModel:](setgamemodel%28__%29.md) method many times. For example, in a game where seven possible moves are available on each turn, looking only a few turns ahead requires examining hundreds of thousands of board states. (Rather than continually create new instances of your game state class, GameplayKit reuses existing instances by cloning the state of one into another—this optimization improves memory efficiency.)

> **Important**

>  Because GameplayKit can evaluate thousands of game states each time it plans a move, its performance is limited by the size and complexity of your game model class and its  [setGameModel:](setgamemodel%28__%29.md) method. Ensure that your class contains only data that minimally describes the state of a game in progress and that your [setGameModel:](setgamemodel%28__%29.md) method can copy that data quickly (for example, without creating new objects or allocating memory).

The [GKGameModel](../gkgamemodel.md) protocol extends the [NSCopying](../../foundation/nscopying.md) protocol. Because the [setGameModel:](setgamemodel%28__%29.md) method does the critical work of copying the internal state of your game model, you can use this method to implement the requirements of the the [NSCopying](../../foundation/nscopying.md) protocol:

```objc
- (__nonnull id)copyWithZone:(nullable NSZone *)zone {
    id<GKGameModel> copy = [[[self class] allocWithZone:zone] init];
    [copy setGameModel:self];
    return copy;
}
```

```swift
func copyWithZone(zone: NSZone?) -> AnyObject {
    let copy = self.dynamicType()
    copy.setGameModel(self)
    return copy
}
```

## See Also

### Modifying a Game Model

- [applyGameModelUpdate:](apply%28__%29.md): Updates the internal state of the game model to reflect the specified changes.
- [unapplyGameModelUpdate:](unapplygamemodelupdate%28__%29.md): Updates the internal state of the game model to remove the effect of the specified changes.
