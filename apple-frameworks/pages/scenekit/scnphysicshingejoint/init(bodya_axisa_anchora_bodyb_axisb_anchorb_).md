> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicshingejoint/init(bodya:axisa:anchora:bodyb:axisb:anchorb:)](https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/init(bodya:axisa:anchora:bodyb:axisb:anchorb:))

# init(bodyA:axisA:anchorA:bodyB:axisB:anchorB:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a hinge joint connecting two physics bodies.

## Declaration

```swift
convenience init(bodyA: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3)
```

## Parameters

- `bodyA`: The first physics body to be connected by the joint.
- `axisA`: The axis that the hinge pivots around, relative to the node containing the first body.
- `anchorA`: The point at which the hinge connects, relative to the node containing the first body.
- `bodyB`: The second physics body to be connected by the joint.
- `axisB`: The axis that the hinge pivots around, relative to the node containing the second body.
- `anchorB`: The point at which the hinge connects, relative to the node containing the second body.

<a id="return-value"></a>

## Return Value

A new hinge joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior(\_:)](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Hinge Joint

- [init(body:axis:anchor:)](init%28body_axis_anchor_%29.md): Creates a hinge joint that anchors a single physics body in space and lets it rotate around a specific axis.

# jointWithBodyA:axisA:anchorA:bodyB:axisB:anchorB: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a hinge joint connecting two physics bodies.

## Declaration

```objectivec
+ (instancetype) jointWithBodyA:(SCNPhysicsBody *) bodyA axisA:(SCNVector3) axisA anchorA:(SCNVector3) anchorA bodyB:(SCNPhysicsBody *) bodyB axisB:(SCNVector3) axisB anchorB:(SCNVector3) anchorB;
```

## Parameters

- `bodyA`: The first physics body to be connected by the joint.
- `axisA`: The axis that the hinge pivots around, relative to the node containing the first body.
- `anchorA`: The point at which the hinge connects, relative to the node containing the first body.
- `bodyB`: The second physics body to be connected by the joint.
- `axisB`: The axis that the hinge pivots around, relative to the node containing the second body.
- `anchorB`: The point at which the hinge connects, relative to the node containing the second body.

<a id="return-value"></a>

## Return Value

A new hinge joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior:](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Hinge Joint

- [jointWithBody:axis:anchor:](init%28body_axis_anchor_%29.md): Creates a hinge joint that anchors a single physics body in space and lets it rotate around a specific axis.
