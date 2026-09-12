> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/applyforce(_:at:asimpulse:)](https://developer.apple.com/documentation/scenekit/scnphysicsbody/applyforce(_:at:asimpulse:))

# applyForce(\_:at:asImpulse:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Applies a force or impulse to the body at a specific point.

## Declaration

```swift
func applyForce(_ direction: SCNVector3, at position: SCNVector3, asImpulse impulse: Bool)
```

## Parameters

- `direction`: The direction and magnitude of the force (in newtons) or of the impulse (in newton-seconds).
- `position`: The point on the body where the force or impulse should be applied, in the local coordinate system of the [SCNNode](../scnnode.md) object containing the physics body.
- `impulse`: [true](https://developer.apple.com/documentation/swift/true) to apply an instantaneous change in momentum; [false](https://developer.apple.com/documentation/swift/false) to apply a force that affects the body at the end of the simulation step.

<a id="Discussion"></a>

## Discussion

Applying a force or impulse to a body at a position other than its center of mass may impart both linear and angular acceleration, depending on how the body is situated in the physics world and the other forces acting upon it.

The `impulse` parameter determines how this method contributes to the physics simulation:

- If you specify [true](https://developer.apple.com/documentation/swift/true), SceneKit treats the `direction` parameter as an impulse, measured in newton-seconds, and accelerates the physics body immediately. Use this option to simulate instantaneous effects such as launching a projectile.
- If you specify [false](https://developer.apple.com/documentation/swift/false), SceneKit treats the `direction` parameter as a force, measured in newtons. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces applied to the physics body during that step and accelerates the body according to the net effect of those forces. Use this option when you want to simulate continuous forces on the body by calling [applyForce(\_:at:asImpulse:)](applyforce%28__at_asimpulse_%29.md) on each simulation step.

> **Note**

>  The `impulse` parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.

As with all physical quantities in SceneKit, you need not use realistic force measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Applying Forces, Impulses, and Torques

- [applyForce(\_:asImpulse:)](applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyTorque(\_:asImpulse:)](applytorque%28__asimpulse_%29.md): Applies a net torque or a change in angular momentum to the body.
- [clearAllForces()](clearallforces%28%29.md): Cancels all continuous forces and torques acting on the physics body during the current simulation step.

# applyForce:atPosition:impulse: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Applies a force or impulse to the body at a specific point.

## Declaration

```objectivec
- (void) applyForce:(SCNVector3) direction atPosition:(SCNVector3) position impulse:(BOOL) impulse;
```

## Parameters

- `direction`: The direction and magnitude of the force (in newtons) or of the impulse (in newton-seconds).
- `position`: The point on the body where the force or impulse should be applied, in the local coordinate system of the [SCNNode](../scnnode.md) object containing the physics body.
- `impulse`: [true](https://developer.apple.com/documentation/swift/true) to apply an instantaneous change in momentum; [false](https://developer.apple.com/documentation/swift/false) to apply a force that affects the body at the end of the simulation step.

<a id="Discussion"></a>

## Discussion

Applying a force or impulse to a body at a position other than its center of mass may impart both linear and angular acceleration, depending on how the body is situated in the physics world and the other forces acting upon it.

The `impulse` parameter determines how this method contributes to the physics simulation:

- If you specify [true](https://developer.apple.com/documentation/swift/true), SceneKit treats the `direction` parameter as an impulse, measured in newton-seconds, and accelerates the physics body immediately. Use this option to simulate instantaneous effects such as launching a projectile.
- If you specify [false](https://developer.apple.com/documentation/swift/false), SceneKit treats the `direction` parameter as a force, measured in newtons. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces applied to the physics body during that step and accelerates the body according to the net effect of those forces. Use this option when you want to simulate continuous forces on the body by calling [applyForce:atPosition:impulse:](applyforce%28__at_asimpulse_%29.md) on each simulation step.

> **Note**

>  The `impulse` parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.

As with all physical quantities in SceneKit, you need not use realistic force measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Applying Forces, Impulses, and Torques

- [applyForce:impulse:](applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyTorque:impulse:](applytorque%28__asimpulse_%29.md): Applies a net torque or a change in angular momentum to the body.
- [clearAllForces](clearallforces%28%29.md): Cancels all continuous forces and torques acting on the physics body during the current simulation step.
