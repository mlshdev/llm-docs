> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/applytorque(_:asimpulse:)](https://developer.apple.com/documentation/scenekit/scnphysicsbody/applytorque(_:asimpulse:))

# applyTorque(\_:asImpulse:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Applies a net torque or a change in angular momentum to the body.

## Declaration

```swift
func applyTorque(_ torque: SCNVector4, asImpulse impulse: Bool)
```

## Parameters

- `torque`: The direction and magnitude of the torque (in newton-meters) or of the change of angular momentum (in newton-meter-seconds), relative to the world coordinate space of the scene.
- `impulse`: [true](https://developer.apple.com/documentation/swift/true) to apply an instantaneous change in angular momentum; [false](https://developer.apple.com/documentation/swift/false) to apply a torque that affects the body at the end of the simulation step.

<a id="Discussion"></a>

## Discussion

Applying a torque to a body changes its angular velocity by an amount related to its mass and shape, rotating it without affecting its linear acceleration. Each component of the torque vector relates to rotation about the corresponding axis in the local coordinate system of the [SCNNode](../scnnode.md) object containing the physics body. For example, applying a torque of `{0.0, 0.0, 1.0}` causes a node to spin counterclockwise around the world-space z-axis.

The `impulse` parameter determines how this method contributes to the physics simulation:

- If you specify [true](https://developer.apple.com/documentation/swift/true), SceneKit treats the `direction` parameter as an instantaneous change in angular momentum, measured in newton-meter-seconds.
- If you specify [false](https://developer.apple.com/documentation/swift/false), SceneKit treats the `direction` parameter as a torque, measured in newton-meters. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces and torques applied to the physics body during that step and accelerates the body according to the net effect of those forces and torques. Use this option when you want to simulate gradual acceleration by calling [applyTorque(\_:asImpulse:)](applytorque%28__asimpulse_%29.md) on each simulation step.

> **Note**

>  The `impulse` parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.

As with all physical quantities in SceneKit, you need not use realistic force and torque measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Applying Forces, Impulses, and Torques

- [applyForce(\_:asImpulse:)](applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyForce(\_:at:asImpulse:)](applyforce%28__at_asimpulse_%29.md): Applies a force or impulse to the body at a specific point.
- [clearAllForces()](clearallforces%28%29.md): Cancels all continuous forces and torques acting on the physics body during the current simulation step.

# applyTorque:impulse: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Applies a net torque or a change in angular momentum to the body.

## Declaration

```objectivec
- (void) applyTorque:(SCNVector4) torque impulse:(BOOL) impulse;
```

## Parameters

- `torque`: The direction and magnitude of the torque (in newton-meters) or of the change of angular momentum (in newton-meter-seconds), relative to the world coordinate space of the scene.
- `impulse`: [true](https://developer.apple.com/documentation/swift/true) to apply an instantaneous change in angular momentum; [false](https://developer.apple.com/documentation/swift/false) to apply a torque that affects the body at the end of the simulation step.

<a id="Discussion"></a>

## Discussion

Applying a torque to a body changes its angular velocity by an amount related to its mass and shape, rotating it without affecting its linear acceleration. Each component of the torque vector relates to rotation about the corresponding axis in the local coordinate system of the [SCNNode](../scnnode.md) object containing the physics body. For example, applying a torque of `{0.0, 0.0, 1.0}` causes a node to spin counterclockwise around the world-space z-axis.

The `impulse` parameter determines how this method contributes to the physics simulation:

- If you specify [true](https://developer.apple.com/documentation/swift/true), SceneKit treats the `direction` parameter as an instantaneous change in angular momentum, measured in newton-meter-seconds.
- If you specify [false](https://developer.apple.com/documentation/swift/false), SceneKit treats the `direction` parameter as a torque, measured in newton-meters. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces and torques applied to the physics body during that step and accelerates the body according to the net effect of those forces and torques. Use this option when you want to simulate gradual acceleration by calling [applyTorque:impulse:](applytorque%28__asimpulse_%29.md) on each simulation step.

> **Note**

>  The `impulse` parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.

As with all physical quantities in SceneKit, you need not use realistic force and torque measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Applying Forces, Impulses, and Torques

- [applyForce:impulse:](applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyForce:atPosition:impulse:](applyforce%28__at_asimpulse_%29.md): Applies a force or impulse to the body at a specific point.
- [clearAllForces](clearallforces%28%29.md): Cancels all continuous forces and torques acting on the physics body during the current simulation step.
