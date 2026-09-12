> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsballsocketjoint/init(body:anchor:)](https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/init(body:anchor:))

# init(body:anchor:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a ball and socket joint that anchors a single physics body in space and allows it to rotate freely around an anchor point.

## Declaration

```swift
convenience init(body: SCNPhysicsBody, anchor: SCNVector3)
```

## Parameters

- `body`: The physics body to be controlled by the joint.
- `anchor`: The point the body pivots around, relative to the node containing it.

<a id="return-value"></a>

## Return Value

A new ball-and-socket-joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior(\_:)](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Ball and Socket Joint

- [init(bodyA:anchorA:bodyB:anchorB:)](init%28bodya_anchora_bodyb_anchorb_%29.md): Creates a ball and socket joint connecting two physics bodies.

# jointWithBody:anchor: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a ball and socket joint that anchors a single physics body in space and allows it to rotate freely around an anchor point.

## Declaration

```objectivec
+ (instancetype) jointWithBody:(SCNPhysicsBody *) body anchor:(SCNVector3) anchor;
```

## Parameters

- `body`: The physics body to be controlled by the joint.
- `anchor`: The point the body pivots around, relative to the node containing it.

<a id="return-value"></a>

## Return Value

A new ball-and-socket-joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior:](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Ball and Socket Joint

- [jointWithBodyA:anchorA:bodyB:anchorB:](init%28bodya_anchora_bodyb_anchorb_%29.md): Creates a ball and socket joint connecting two physics bodies.
