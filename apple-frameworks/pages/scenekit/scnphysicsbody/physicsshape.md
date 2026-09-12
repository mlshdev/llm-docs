> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/physicsshape](https://developer.apple.com/documentation/scenekit/scnphysicsbody/physicsshape)

# physicsShape (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that defines the solid volume of the physics body for use in collision detection.

## Declaration

```swift
var physicsShape: SCNPhysicsShape? { get set }
```

<a id="Discussion"></a>

## Discussion

The physics simulation does not use a node’s visible geometry for collision detection—the simulation can run faster when using simple shapes, and it can also be useful to design your app or game using invisible collision shapes for some elements. Typically, you set a body’s physics shape to a bounding box or primitive shape that roughly matches its node’s visible content, but you can use a more detailed shape for more precise collision detection at a cost to performance.

For details on creating physics shapes, see [SCNPhysicsShape](../scnphysicsshape.md).

## See Also

### Defining How Forces Affect a Physics Body

- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [isAffectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.

# physicsShape (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An object that defines the solid volume of the physics body for use in collision detection.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNPhysicsShape * physicsShape;
```

<a id="Discussion"></a>

## Discussion

The physics simulation does not use a node’s visible geometry for collision detection—the simulation can run faster when using simple shapes, and it can also be useful to design your app or game using invisible collision shapes for some elements. Typically, you set a body’s physics shape to a bounding box or primitive shape that roughly matches its node’s visible content, but you can use a more detailed shape for more precise collision detection at a cost to performance.

For details on creating physics shapes, see [SCNPhysicsShape](../scnphysicsshape.md).

## See Also

### Defining How Forces Affect a Physics Body

- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](../scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](type.md) property and when creating a physics body.
- [velocityFactor](velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [affectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.
