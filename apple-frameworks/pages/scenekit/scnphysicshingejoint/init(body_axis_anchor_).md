> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicshingejoint/init(body:axis:anchor:)](https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/init(body:axis:anchor:))

# init(body:axis:anchor:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a hinge joint that anchors a single physics body in space and lets it rotate around a specific axis.

## Declaration

```swift
convenience init(body: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3)
```

## Parameters

- `body`: The physics body to be controlled by the hinge joint.
- `axis`: The direction of the axis that the body pivots around, relative to the node containing the body.
- `anchor`: The location of the axis in the node containing the body.

<a id="return-value"></a>

## Return Value

A new hinge joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior(\_:)](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Hinge Joint

- [init(bodyA:axisA:anchorA:bodyB:axisB:anchorB:)](init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a hinge joint connecting two physics bodies.

# jointWithBody:axis:anchor: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a hinge joint that anchors a single physics body in space and lets it rotate around a specific axis.

## Declaration

```objectivec
+ (instancetype) jointWithBody:(SCNPhysicsBody *) body axis:(SCNVector3) axis anchor:(SCNVector3) anchor;
```

## Parameters

- `body`: The physics body to be controlled by the hinge joint.
- `axis`: The direction of the axis that the body pivots around, relative to the node containing the body.
- `anchor`: The location of the axis in the node containing the body.

<a id="return-value"></a>

## Return Value

A new hinge joint behavior.

<a id="Discussion"></a>

## Discussion

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior:](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Hinge Joint

- [jointWithBodyA:axisA:anchorA:bodyB:axisB:anchorB:](init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a hinge joint connecting two physics bodies.
