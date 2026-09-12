> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/angularvelocityfactor](https://developer.apple.com/documentation/scenekit/scnphysicsbody/angularvelocityfactor)

# angularVelocityFactor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.

## Declaration

```swift
var angularVelocityFactor: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to constrain or restrict the effect of physics simulation on the node containing the physics body. For example, you can force a body to rotate in only one axis by setting its angular velocity factor to `{0.0, 1.0, 0.0}`.

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [isAffectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.

# angularVelocityFactor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 angularVelocityFactor;
```

<a id="Discussion"></a>

## Discussion

Use this property to constrain or restrict the effect of physics simulation on the node containing the physics body. For example, you can force a body to rotate in only one axis by setting its angular velocity factor to `{0.0, 1.0, 0.0}`.

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [affectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.
