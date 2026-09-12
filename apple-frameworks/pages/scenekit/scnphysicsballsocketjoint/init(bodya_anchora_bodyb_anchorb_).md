> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsballsocketjoint/init(bodya:anchora:bodyb:anchorb:)](https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/init(bodya:anchora:bodyb:anchorb:))

# init(bodyA:anchorA:bodyB:anchorB:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a ball and socket joint connecting two physics bodies.

## Declaration

```swift
convenience init(bodyA: SCNPhysicsBody, anchorA: SCNVector3, bodyB: SCNPhysicsBody, anchorB: SCNVector3)
```

## Parameters

- `bodyA`: The first physics body to be connected by the joint.
- `anchorA`: The point at which the joint connects, relative to the node containing the first body.
- `bodyB`: The second physics body to be connected by the joint.
- `anchorB`: The point at which the joint connects, relative to the node containing the second body.

<a id="return-value"></a>

## Return Value

A new ball-and-socket-joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior(\_:)](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Ball and Socket Joint

- [init(body:anchor:)](init%28body_anchor_%29.md): Creates a ball and socket joint that anchors a single physics body in space and allows it to rotate freely around an anchor point.

# jointWithBodyA:anchorA:bodyB:anchorB: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a ball and socket joint connecting two physics bodies.

## Declaration

```objectivec
+ (instancetype) jointWithBodyA:(SCNPhysicsBody *) bodyA anchorA:(SCNVector3) anchorA bodyB:(SCNPhysicsBody *) bodyB anchorB:(SCNVector3) anchorB;
```

## Parameters

- `bodyA`: The first physics body to be connected by the joint.
- `anchorA`: The point at which the joint connects, relative to the node containing the first body.
- `bodyB`: The second physics body to be connected by the joint.
- `anchorB`: The point at which the joint connects, relative to the node containing the second body.

<a id="return-value"></a>

## Return Value

A new ball-and-socket-joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior:](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Ball and Socket Joint

- [jointWithBody:anchor:](init%28body_anchor_%29.md): Creates a ball and socket joint that anchors a single physics body in space and allows it to rotate freely around an anchor point.
