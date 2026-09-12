> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/move(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/move(to:duration:))

# move(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node to a new position.

## Declaration

```swift
class func move(to location: CGPoint, duration: TimeInterval) -> SKAction
```

## Parameters

- `location`: The coordinates for the node’s new position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Detecting Changes at Each Step of an Animation](../detecting-changes-at-each-step-of-an-animation.md)

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) property animates from its current position to its new position.

This action is not reversible; the reverse of this action has the same duration but does not move the node.

## See Also

### Animating a Node’s Position in a Linear Path

- [moveBy(x:y:duration:)](moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(by:duration:)](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo(x:duration:)](moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveTo(y:duration:)](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.

# moveTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node to a new position.

## Declaration

```objectivec
+ (SKAction *) moveTo:(CGPoint) location duration:(NSTimeInterval) duration;
```

## Parameters

- `location`: The coordinates for the node’s new position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Detecting Changes at Each Step of an Animation](../detecting-changes-at-each-step-of-an-animation.md)

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) property animates from its current position to its new position.

This action is not reversible; the reverse of this action has the same duration but does not move the node.

## See Also

### Animating a Node’s Position in a Linear Path

- [moveByX:y:duration:](moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveBy:duration:](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveToX:duration:](moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveToY:duration:](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.
