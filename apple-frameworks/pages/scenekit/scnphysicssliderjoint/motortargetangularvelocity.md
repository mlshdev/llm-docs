> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint/motortargetangularvelocity](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/motortargetangularvelocity)

# motorTargetAngularVelocity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The angular velocity at which the joint’s connected bodies should rotate around it.

## Declaration

```swift
var motorTargetAngularVelocity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

At the default value of `0.0`, the joint moves only when an external force acts on one of its connected bodies. Changing this value causes the joint to act as a rotary motor, continuously applying a torque (specified by the [motorMaximumTorque](motormaximumtorque.md) property) until its connected bodies are rotating around the joint at the new angular velocity.

## See Also

### Applying Forces and Torques

- [motorTargetLinearVelocity](motortargetlinearvelocity.md): The velocity at which the joint’s connected bodies should slide.
- [motorMaximumForce](motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorMaximumTorque](motormaximumtorque.md): The maximum torque that the joint can apply to its connected bodies, in newton-meters.

# motorTargetAngularVelocity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The angular velocity at which the joint’s connected bodies should rotate around it.

## Declaration

```objectivec
@property (nonatomic) CGFloat motorTargetAngularVelocity;
```

<a id="Discussion"></a>

## Discussion

At the default value of `0.0`, the joint moves only when an external force acts on one of its connected bodies. Changing this value causes the joint to act as a rotary motor, continuously applying a torque (specified by the [motorMaximumTorque](motormaximumtorque.md) property) until its connected bodies are rotating around the joint at the new angular velocity.

## See Also

### Applying Forces and Torques

- [motorTargetLinearVelocity](motortargetlinearvelocity.md): The velocity at which the joint’s connected bodies should slide.
- [motorMaximumForce](motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorMaximumTorque](motormaximumtorque.md): The maximum torque that the joint can apply to its connected bodies, in newton-meters.
