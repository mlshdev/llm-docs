> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/type](https://developer.apple.com/documentation/scenekit/scnphysicsbody/type)

# type (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constant that determines how the physics body responds to forces and collisions.

## Declaration

```swift
var type: SCNPhysicsBodyType { get set }
```

<a id="Discussion"></a>

## Discussion

See [SCNPhysicsBodyType](../scnphysicsbodytype.md).

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [isAffectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.

# type (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A constant that determines how the physics body responds to forces and collisions.

## Declaration

```objectivec
@property (nonatomic) SCNPhysicsBodyType type;
```

<a id="Discussion"></a>

## Discussion

See [SCNPhysicsBodyType](../scnphysicsbodytype.md).

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [affectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.
