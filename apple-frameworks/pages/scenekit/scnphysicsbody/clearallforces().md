> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/clearallforces()](https://developer.apple.com/documentation/scenekit/scnphysicsbody/clearallforces())

# clearAllForces() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Cancels all continuous forces and torques acting on the physics body during the current simulation step.

## Declaration

```swift
func clearAllForces()
```

<a id="Discussion"></a>

## Discussion

When you pass [false](https://developer.apple.com/documentation/swift/false) for the `impulse` parameter in the [applyForce(\_:asImpulse:)](applyforce%28__asimpulse_%29.md), [applyForce(\_:at:asImpulse:)](applyforce%28__at_asimpulse_%29.md), or [applyTorque(\_:asImpulse:)](applytorque%28__asimpulse_%29.md) method, SceneKit waits until the end of the current simulation step before applying its effect. At that time, SceneKit sums all forces and torques applied during that simulation step and changes the velocity or angular velocity of the body according to the net effect of those forces and torques.

Call [clearAllForces()](clearallforces%28%29.md) to cancel any forces and torques previously applied during the current simulation step.

## See Also

### Applying Forces, Impulses, and Torques

- [applyForce(\_:asImpulse:)](applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyForce(\_:at:asImpulse:)](applyforce%28__at_asimpulse_%29.md): Applies a force or impulse to the body at a specific point.
- [applyTorque(\_:asImpulse:)](applytorque%28__asimpulse_%29.md): Applies a net torque or a change in angular momentum to the body.

# clearAllForces (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Cancels all continuous forces and torques acting on the physics body during the current simulation step.

## Declaration

```objectivec
- (void) clearAllForces;
```

<a id="Discussion"></a>

## Discussion

When you pass [false](https://developer.apple.com/documentation/swift/false) for the `impulse` parameter in the [applyForce:impulse:](applyforce%28__asimpulse_%29.md), [applyForce:atPosition:impulse:](applyforce%28__at_asimpulse_%29.md), or [applyTorque:impulse:](applytorque%28__asimpulse_%29.md) method, SceneKit waits until the end of the current simulation step before applying its effect. At that time, SceneKit sums all forces and torques applied during that simulation step and changes the velocity or angular velocity of the body according to the net effect of those forces and torques.

Call [clearAllForces](clearallforces%28%29.md) to cancel any forces and torques previously applied during the current simulation step.

## See Also

### Applying Forces, Impulses, and Torques

- [applyForce:impulse:](applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyForce:atPosition:impulse:](applyforce%28__at_asimpulse_%29.md): Applies a force or impulse to the body at a specific point.
- [applyTorque:impulse:](applytorque%28__asimpulse_%29.md): Applies a net torque or a change in angular momentum to the body.
