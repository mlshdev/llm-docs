> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/moveto(x:duration:)](https://developer.apple.com/documentation/spritekit/skaction/moveto(x:duration:))

# moveTo(x:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node horizontally.

## Declaration

```swift
class func moveTo(x: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `x`: The x-value for the node’s new position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) property animates from its current position to its new position.

This action is not reversible; the reverse of this action has the same duration but does not move the node.

## See Also

### Animating a Node’s Position in a Linear Path

- [moveBy(x:y:duration:)](moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(by:duration:)](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveTo(y:duration:)](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.

# moveToX:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node horizontally.

## Declaration

```objectivec
+ (SKAction *) moveToX:(CGFloat) x duration:(NSTimeInterval) duration;
```

## Parameters

- `x`: The x-value for the node’s new position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) property animates from its current position to its new position.

This action is not reversible; the reverse of this action has the same duration but does not move the node.

## See Also

### Animating a Node’s Position in a Linear Path

- [moveByX:y:duration:](moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveBy:duration:](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveToY:duration:](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.
