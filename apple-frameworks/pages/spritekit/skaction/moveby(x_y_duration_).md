> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/moveby(x:y:duration:)](https://developer.apple.com/documentation/spritekit/skaction/moveby(x:y:duration:))

# moveBy(x:y:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node relative to its current position.

## Declaration

```swift
class func moveBy(x deltaX: CGFloat, y deltaY: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `deltaX`: The x-value, in points, to add to the node’s position.
- `deltaY`: The y-value, in points, to add to the node’s position.
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
let action = SKAction.moveBy(x: -deltaX, y: -deltaX, duration: sec)
```

**Obj-C**

```objc
[SKAction moveByX: -deltaX y: -deltaY duration: sec];
```

## See Also

### Animating a Node’s Position in a Linear Path

- [move(by:duration:)](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveTo(x:duration:)](moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveTo(y:duration:)](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.

# moveByX:y:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves a node relative to its current position.

## Declaration

```objectivec
+ (SKAction *) moveByX:(CGFloat) deltaX y:(CGFloat) deltaY duration:(NSTimeInterval) duration;
```

## Parameters

- `deltaX`: The x-value, in points, to add to the node’s position.
- `deltaY`: The y-value, in points, to add to the node’s position.
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
let action = SKAction.moveBy(x: -deltaX, y: -deltaX, duration: sec)
```

**Obj-C**

```objc
[SKAction moveByX: -deltaX y: -deltaY duration: sec];
```

## See Also

### Animating a Node’s Position in a Linear Path

- [moveBy:duration:](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveToX:duration:](moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveToY:duration:](moveto%28y_duration_%29.md): Creates an action that moves a node vertically.
