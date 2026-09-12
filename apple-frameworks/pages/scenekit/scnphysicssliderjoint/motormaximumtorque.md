> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint/motormaximumtorque](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/motormaximumtorque)

# motorMaximumTorque (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum torque that the joint can apply to its connected bodies, in newton-meters.

## Declaration

```swift
var motorMaximumTorque: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When you change the value of the [motorTargetAngularVelocity](motortargetangularvelocity.md) property, the joint continuously applies a force of no greater than this magnitude until the bodies are rotating around the joint at the target angular velocity. The default value is `1.0`.

## See Also

### Applying Forces and Torques

- [motorTargetLinearVelocity](motortargetlinearvelocity.md): The velocity at which the joint’s connected bodies should slide.
- [motorMaximumForce](motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorTargetAngularVelocity](motortargetangularvelocity.md): The angular velocity at which the joint’s connected bodies should rotate around it.

# motorMaximumTorque (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The maximum torque that the joint can apply to its connected bodies, in newton-meters.

## Declaration

```objectivec
@property (nonatomic) CGFloat motorMaximumTorque;
```

<a id="Discussion"></a>

## Discussion

When you change the value of the [motorTargetAngularVelocity](motortargetangularvelocity.md) property, the joint continuously applies a force of no greater than this magnitude until the bodies are rotating around the joint at the target angular velocity. The default value is `1.0`.

## See Also

### Applying Forces and Torques

- [motorTargetLinearVelocity](motortargetlinearvelocity.md): The velocity at which the joint’s connected bodies should slide.
- [motorMaximumForce](motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorTargetAngularVelocity](motortargetangularvelocity.md): The angular velocity at which the joint’s connected bodies should rotate around it.
