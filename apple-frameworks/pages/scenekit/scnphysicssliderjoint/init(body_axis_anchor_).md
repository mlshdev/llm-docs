> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint/init(body:axis:anchor:)](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/init(body:axis:anchor:))

# init(body:axis:anchor:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a slider joint that anchors a single physics body in space and allows it to slide along a specific axis.

## Declaration

```swift
convenience init(body: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3)
```

## Parameters

- `body`: The physics body to be controlled by the joint.
- `axis`: The axis along which the first body can slide, relative to the node containing it.
- `anchor`: The point at which the body is pinned, in the local coordinate system of the node containing it.

<a id="return-value"></a>

## Return Value

A new slider joint behavior.

<a id="Discussion"></a>

## Discussion

This method defines the location where the body is anchored in the coordinate system of the node containing it. To define its sliding or rotation motion relative to that point, use the properties listed in Limiting the Motion of a Slider Joint.

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior(\_:)](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Slider Joint

- [init(bodyA:axisA:anchorA:bodyB:axisB:anchorB:)](init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a slider joint connecting two physics bodies.

# jointWithBody:axis:anchor: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a slider joint that anchors a single physics body in space and allows it to slide along a specific axis.

## Declaration

```objectivec
+ (instancetype) jointWithBody:(SCNPhysicsBody *) body axis:(SCNVector3) axis anchor:(SCNVector3) anchor;
```

## Parameters

- `body`: The physics body to be controlled by the joint.
- `axis`: The axis along which the first body can slide, relative to the node containing it.
- `anchor`: The point at which the body is pinned, in the local coordinate system of the node containing it.

<a id="return-value"></a>

## Return Value

A new slider joint behavior.

<a id="Discussion"></a>

## Discussion

This method defines the location where the body is anchored in the coordinate system of the node containing it. To define its sliding or rotation motion relative to that point, use the properties listed in Limiting the Motion of a Slider Joint.

For a behavior to take effect, add it to the physics simulation by calling the [addBehavior:](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object. The physics bodies constrained by the joint must be attached to nodes in the scene.

## See Also

### Creating a Slider Joint

- [jointWithBodyA:axisA:anchorA:bodyB:axisB:anchorB:](init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a slider joint connecting two physics bodies.
