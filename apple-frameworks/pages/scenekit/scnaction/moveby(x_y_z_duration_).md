> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/moveby(x:y:z:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/moveby(x:y:z:duration:))

# moveBy(x:y:z:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that moves a node relative to its current position.

## Declaration

```swift
class func moveBy(x deltaX: CGFloat, y deltaY: CGFloat, z deltaZ: CGFloat, duration: TimeInterval) -> SCNAction
```

## Parameters

- `deltaX`: The distance to move the node in the X direction of its parent node’s local coordinate space.
- `deltaY`: The distance to move the node in the Y direction of its parent node’s local coordinate space.
- `deltaZ`: The distance to move the node in the Z direction of its parent node’s local coordinate space.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../scnnode/position.md) property animates from its current position to its new position.

This action is reversible; the reverse is created as if the following code had been executed:

```objc
[SCNAction moveByX: -deltaX y: -deltaY z: -deltaZ duration: duration];
```

## See Also

### Creating Actions That Move a Node

- [move(by:duration:)](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](move%28to_duration_%29.md): Creates an action that moves a node to a new position.

# moveByX:y:z:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that moves a node relative to its current position.

## Declaration

```objectivec
+ (SCNAction *) moveByX:(CGFloat) deltaX y:(CGFloat) deltaY z:(CGFloat) deltaZ duration:(NSTimeInterval) duration;
```

## Parameters

- `deltaX`: The distance to move the node in the X direction of its parent node’s local coordinate space.
- `deltaY`: The distance to move the node in the Y direction of its parent node’s local coordinate space.
- `deltaZ`: The distance to move the node in the Z direction of its parent node’s local coordinate space.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../scnnode/position.md) property animates from its current position to its new position.

This action is reversible; the reverse is created as if the following code had been executed:

```objc
[SCNAction moveByX: -deltaX y: -deltaY z: -deltaZ duration: duration];
```

## See Also

### Creating Actions That Move a Node

- [moveBy:duration:](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
