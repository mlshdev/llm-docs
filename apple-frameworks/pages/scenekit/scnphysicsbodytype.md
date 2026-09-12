> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbodytype](https://developer.apple.com/documentation/scenekit/scnphysicsbodytype)

# SCNPhysicsBodyType (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Constants that determine how a physics body interacts with forces and other bodies, used by the [type](scnphysicsbody/type.md) property and when creating a physics body.

## Declaration

```swift
enum SCNPhysicsBodyType
```

## Topics

### Constants

- [SCNPhysicsBodyType.static](scnphysicsbodytype/static.md): A physics body that is unaffected by forces or collisions and cannot move.
- [SCNPhysicsBodyType.dynamic](scnphysicsbodytype/dynamic.md): A physics body that can be affected by forces and collisions.
- [SCNPhysicsBodyType.kinematic](scnphysicsbodytype/kinematic.md): A physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

### Initializers

- [init(rawValue:)](scnphysicsbodytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](scnphysicsbody/physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](scnphysicsbody/type.md): A constant that determines how the physics body responds to forces and collisions.
- [velocityFactor](scnphysicsbody/velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](scnphysicsbody/angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [isAffectedByGravity](scnphysicsbody/isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.

# SCNPhysicsBodyType (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Constants that determine how a physics body interacts with forces and other bodies, used by the [type](scnphysicsbody/type.md) property and when creating a physics body.

## Declaration

```objectivec
enum SCNPhysicsBodyType : NSInteger;
```

## Topics

### Constants

- [SCNPhysicsBodyTypeStatic](scnphysicsbodytype/static.md): A physics body that is unaffected by forces or collisions and cannot move.
- [SCNPhysicsBodyTypeDynamic](scnphysicsbodytype/dynamic.md): A physics body that can be affected by forces and collisions.
- [SCNPhysicsBodyTypeKinematic](scnphysicsbodytype/kinematic.md): A physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](scnphysicsbody/physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](scnphysicsbody/type.md): A constant that determines how the physics body responds to forces and collisions.
- [velocityFactor](scnphysicsbody/velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](scnphysicsbody/angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [affectedByGravity](scnphysicsbody/isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.
