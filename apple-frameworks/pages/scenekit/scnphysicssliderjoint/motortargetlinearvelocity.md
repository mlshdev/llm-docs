> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint/motortargetlinearvelocity](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/motortargetlinearvelocity)

# motorTargetLinearVelocity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The velocity at which the joint’s connected bodies should slide.

## Declaration

```swift
var motorTargetLinearVelocity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

At the default value of `0.0`, the joint moves only when an external force acts on one of its connected bodies. Changing this value causes the joint to act as a linear motor, continuously applying a force (specified by the [motorMaximumForce](motormaximumforce.md) property) until its connected bodies are moving along the sliding axis of the joint at the new velocity.

## See Also

### Applying Forces and Torques

- [motorMaximumForce](motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorTargetAngularVelocity](motortargetangularvelocity.md): The angular velocity at which the joint’s connected bodies should rotate around it.
- [motorMaximumTorque](motormaximumtorque.md): The maximum torque that the joint can apply to its connected bodies, in newton-meters.

# motorTargetLinearVelocity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The velocity at which the joint’s connected bodies should slide.

## Declaration

```objectivec
@property (nonatomic) CGFloat motorTargetLinearVelocity;
```

<a id="Discussion"></a>

## Discussion

At the default value of `0.0`, the joint moves only when an external force acts on one of its connected bodies. Changing this value causes the joint to act as a linear motor, continuously applying a force (specified by the [motorMaximumForce](motormaximumforce.md) property) until its connected bodies are moving along the sliding axis of the joint at the new velocity.

## See Also

### Applying Forces and Torques

- [motorMaximumForce](motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorTargetAngularVelocity](motortargetangularvelocity.md): The angular velocity at which the joint’s connected bodies should rotate around it.
- [motorMaximumTorque](motormaximumtorque.md): The maximum torque that the joint can apply to its connected bodies, in newton-meters.
