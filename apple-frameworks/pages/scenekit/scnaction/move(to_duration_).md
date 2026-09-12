> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/move(to:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/move(to:duration:))

# move(to:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that moves a node to a new position.

## Declaration

```swift
class func move(to location: SCNVector3, duration: TimeInterval) -> SCNAction
```

## Parameters

- `location`: The coordinates for the node’s new position in its parent node’s local coordinate space.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../scnnode/position.md) property animates from its current position to its new position.

This action is not reversible; the reverse of this action has the same duration but does not move the node.

## See Also

### Creating Actions That Move a Node

- [moveBy(x:y:z:duration:)](moveby%28x_y_z_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(by:duration:)](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.

# moveTo:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that moves a node to a new position.

## Declaration

```objectivec
+ (SCNAction *) moveTo:(SCNVector3) location duration:(NSTimeInterval) duration;
```

## Parameters

- `location`: The coordinates for the node’s new position in its parent node’s local coordinate space.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../scnnode/position.md) property animates from its current position to its new position.

This action is not reversible; the reverse of this action has the same duration but does not move the node.

## See Also

### Creating Actions That Move a Node

- [moveByX:y:z:duration:](moveby%28x_y_z_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveBy:duration:](move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
