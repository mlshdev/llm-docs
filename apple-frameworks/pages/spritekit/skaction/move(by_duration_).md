> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/move(by:duration:)](https://developer.apple.com/documentation/spritekit/skaction/move(by:duration:))

# move(by:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node relative to its current position.

## Declaration

```swift
class func move(by delta: CGVector, duration: TimeInterval) -> SKAction
```

## Parameters

- `delta`: A vector that describes the change to apply to the node’s position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) property animates from its current position to its new position.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let negDelta = CGVector(dx: -deltaX, dy: -deltaY)
let action = SKAction.move(by: negDelta, duration: sec)
```

**Obj-C**

```objc
CGVector negDelta = CGVectorMake(-delta.dx,-delta.dy);
[SKAction moveBy: negDelta duration: sec];
```

## See Also

### Animating a Node’s Position in a Linear Path

- [moveBy(x:y:duration:)](moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveTo(x:duration:)](moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveTo(y:duration:)](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.

# moveBy:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node relative to its current position.

## Declaration

```objectivec
+ (SKAction *) moveBy:(CGVector) delta duration:(NSTimeInterval) duration;
```

## Parameters

- `delta`: A vector that describes the change to apply to the node’s position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) property animates from its current position to its new position.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let negDelta = CGVector(dx: -deltaX, dy: -deltaY)
let action = SKAction.move(by: negDelta, duration: sec)
```

**Obj-C**

```objc
CGVector negDelta = CGVectorMake(-delta.dx,-delta.dy);
[SKAction moveBy: negDelta duration: sec];
```

## See Also

### Animating a Node’s Position in a Linear Path

- [moveByX:y:duration:](moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveToX:duration:](moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveToY:duration:](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.
