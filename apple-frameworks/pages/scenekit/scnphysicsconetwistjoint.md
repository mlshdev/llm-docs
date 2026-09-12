> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsconetwistjoint](https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint)

# SCNPhysicsConeTwistJoint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
class SCNPhysicsConeTwistJoint
```

## Topics

### Initializers

- [init(body:frame:)](scnphysicsconetwistjoint/init%28body_frame_%29.md)
- [init(bodyA:frameA:bodyB:frameB:)](scnphysicsconetwistjoint/init%28bodya_framea_bodyb_frameb_%29.md)

### Instance Properties

- [bodyA](scnphysicsconetwistjoint/bodya.md)
- [bodyB](scnphysicsconetwistjoint/bodyb.md)
- [frameA](scnphysicsconetwistjoint/framea.md)
- [frameB](scnphysicsconetwistjoint/frameb.md)
- [maximumAngularLimit1](scnphysicsconetwistjoint/maximumangularlimit1.md)
- [maximumAngularLimit2](scnphysicsconetwistjoint/maximumangularlimit2.md)
- [maximumTwistAngle](scnphysicsconetwistjoint/maximumtwistangle.md)

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Joints

- [SCNPhysicsHingeJoint](scnphysicshingejoint.md): A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md): A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md): A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.

# SCNPhysicsConeTwistJoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
@interface SCNPhysicsConeTwistJoint : SCNPhysicsBehavior
```

## Topics

### Instance Properties

- [bodyA](scnphysicsconetwistjoint/bodya.md)
- [bodyB](scnphysicsconetwistjoint/bodyb.md)
- [frameA](scnphysicsconetwistjoint/framea.md)
- [frameB](scnphysicsconetwistjoint/frameb.md)
- [maximumAngularLimit1](scnphysicsconetwistjoint/maximumangularlimit1.md)
- [maximumAngularLimit2](scnphysicsconetwistjoint/maximumangularlimit2.md)
- [maximumTwistAngle](scnphysicsconetwistjoint/maximumtwistangle.md)

### Type Methods

- [jointWithBody:frame:](scnphysicsconetwistjoint/init%28body_frame_%29.md)
- [jointWithBodyA:frameA:bodyB:frameB:](scnphysicsconetwistjoint/init%28bodya_framea_bodyb_frameb_%29.md)

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

## See Also

### Joints

- [SCNPhysicsHingeJoint](scnphysicshingejoint.md): A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md): A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md): A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.
