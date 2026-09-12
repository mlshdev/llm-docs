> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/move(by:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/move(by:duration:))

# move(by:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that moves a node relative to its current position.

## Declaration

```swift
class func move(by delta: SCNVector3, duration: TimeInterval) -> SCNAction
```

## Parameters

- `delta`: A vector that describes the change to be applied to the node’s position.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../scnnode/position.md) property animates from its current position to its new position.

This action is reversible; the reverse is created as if the following code had been executed:

```objc
SCNVector3 reverseDelta = SCNVector3Make(-delta.x, -delta.y, -delta.z);
[SCNAction moveBy: reverseDelta duration: duration];
```

## See Also

### Creating Actions That Move a Node

- [moveBy(x:y:z:duration:)](moveby%28x_y_z_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](move%28to_duration_%29.md): Creates an action that moves a node to a new position.

# moveBy:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that moves a node relative to its current position.

## Declaration

```objectivec
+ (SCNAction *) moveBy:(SCNVector3) delta duration:(NSTimeInterval) duration;
```

## Parameters

- `delta`: A vector that describes the change to be applied to the node’s position.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../scnnode/position.md) property animates from its current position to its new position.

This action is reversible; the reverse is created as if the following code had been executed:

```objc
SCNVector3 reverseDelta = SCNVector3Make(-delta.x, -delta.y, -delta.z);
[SCNAction moveBy: reverseDelta duration: duration];
```

## See Also

### Creating Actions That Move a Node

- [moveByX:y:z:duration:](moveby%28x_y_z_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](move%28to_duration_%29.md): Creates an action that moves a node to a new position.
