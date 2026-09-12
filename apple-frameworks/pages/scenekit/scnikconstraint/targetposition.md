> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnikconstraint/targetposition](https://developer.apple.com/documentation/scenekit/scnikconstraint/targetposition)

# targetPosition (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The desired position for the constrained node, in the scene’s world coordinate space. Animatable.

## Declaration

```swift
var targetPosition: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

When you set this property, SceneKit attempts to move the end effector node (the node whose [constraints](../scnnode/constraints.md) property references the constraint) to this position. SceneKit moves this node toward the target point by rotating it relative to its parent node (and rotating its parent and ancestor nodes, up the chain ending with the `chainRoot` node) until the node is at the target position or until it is as close to the target position as possible given the rotational limits of each joint in the chain.

Typically, you animate changes to this property’s value, creating an animation that shows the chain of nodes moving toward the new target position. See [Animating SceneKit Content](../animating-scenekit-content.md).

# targetPosition (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The desired position for the constrained node, in the scene’s world coordinate space. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 targetPosition;
```

<a id="Discussion"></a>

## Discussion

When you set this property, SceneKit attempts to move the end effector node (the node whose [constraints](../scnnode/constraints.md) property references the constraint) to this position. SceneKit moves this node toward the target point by rotating it relative to its parent node (and rotating its parent and ancestor nodes, up the chain ending with the `chainRoot` node) until the node is at the target position or until it is as close to the target position as possible given the rotational limits of each joint in the chain.

Typically, you animate changes to this property’s value, creating an animation that shows the chain of nodes moving toward the new target position. See [Animating SceneKit Content](../animating-scenekit-content.md).
