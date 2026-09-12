> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/isaffectedbygravity](https://developer.apple.com/documentation/scenekit/scnphysicsbody/isaffectedbygravity)

# isAffectedByGravity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the constant gravity of a scene accelerates the body.

## Declaration

```swift
var isAffectedByGravity: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true) (the default), and the type of the body is [SCNPhysicsBodyType.dynamic](../scnphysicsbodytype/dynamic.md), the [gravity](../scnphysicsworld/gravity.md) property of the scene’s [physicsWorld](../scnscene/physicsworld.md) object causes the body to accelerate.

If this property is [false](https://developer.apple.com/documentation/swift/false), the body is not affected by scene gravity. This option can be useful when making physics bodies whose behavior should be governed by [SCNPhysicsField](../scnphysicsfield.md) objects instead of a constant global acceleration.

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.

# affectedByGravity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the constant gravity of a scene accelerates the body.

## Declaration

```objectivec
@property (nonatomic, getter=isAffectedByGravity) BOOL affectedByGravity;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true) (the default), and the type of the body is [SCNPhysicsBodyTypeDynamic](../scnphysicsbodytype/dynamic.md), the [gravity](../scnphysicsworld/gravity.md) property of the scene’s [physicsWorld](../scnscene/physicsworld.md) object causes the body to accelerate.

If this property is [false](https://developer.apple.com/documentation/swift/false), the body is not affected by scene gravity. This option can be useful when making physics bodies whose behavior should be governed by [SCNPhysicsField](../scnphysicsfield.md) objects instead of a constant global acceleration.

## See Also

### Defining How Forces Affect a Physics Body

- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
