> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/continuouscollisiondetectionthreshold](https://developer.apple.com/documentation/scenekit/scnphysicsbody/continuouscollisiondetectionthreshold)

# continuousCollisionDetectionThreshold (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

## Declaration

```swift
var continuousCollisionDetectionThreshold: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit’s physics engine can employ two kinds of collision detection:

- With *discrete* collision detection, when SceneKit simulates physics before rendering each frame (see [timeStep](../scnphysicsworld/timestep.md) and [SCNSceneRendererDelegate](../scnscenerendererdelegate.md)), it updates the position of each physics body based on the body’s velocity during that time interval, then checks to see whether the body at its new position intersects other bodies.
- With *continuous* collision detection, SceneKit calculates the volume that will be traversed by a body during each frame, then checks to see whether that volume intersects other bodies.

This property’s value defaults to `0.0`, resulting in discrete collision detection at all times. When this value is nonzero, SceneKit applies continuous collision whenever the body travels more than the specified distance within one [timeStep](../scnphysicsworld/timestep.md).

Discrete collision detection offers high performance, but can lead to inaccurate results for small, fast-moving bodies. Continuous collision detection has a performance cost and works only for spherical physics shapes, but provides more accurate results.

For example, in a game involving projectiles and targets, a small projectile may pass through a target if it moves farther than the target’s thickness within one time step. By setting the projectile’s [continuousCollisionDetectionThreshold](continuouscollisiondetectionthreshold.md) to match its diameter, you ensure that SceneKit always detects collisions between the projectile and other objects.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [SCNPhysicsCollisionCategory](../scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](categorybitmask.md) and [collisionBitMask](collisionbitmask.md) properties.

# continuousCollisionDetectionThreshold (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

## Declaration

```objectivec
@property (nonatomic) CGFloat continuousCollisionDetectionThreshold;
```

<a id="Discussion"></a>

## Discussion

SceneKit’s physics engine can employ two kinds of collision detection:

- With *discrete* collision detection, when SceneKit simulates physics before rendering each frame (see [timeStep](../scnphysicsworld/timestep.md) and [SCNSceneRendererDelegate](../scnscenerendererdelegate.md)), it updates the position of each physics body based on the body’s velocity during that time interval, then checks to see whether the body at its new position intersects other bodies.
- With *continuous* collision detection, SceneKit calculates the volume that will be traversed by a body during each frame, then checks to see whether that volume intersects other bodies.

This property’s value defaults to `0.0`, resulting in discrete collision detection at all times. When this value is nonzero, SceneKit applies continuous collision whenever the body travels more than the specified distance within one [timeStep](../scnphysicsworld/timestep.md).

Discrete collision detection offers high performance, but can lead to inaccurate results for small, fast-moving bodies. Continuous collision detection has a performance cost and works only for spherical physics shapes, but provides more accurate results.

For example, in a game involving projectiles and targets, a small projectile may pass through a target if it moves farther than the target’s thickness within one time step. By setting the projectile’s [continuousCollisionDetectionThreshold](continuouscollisiondetectionthreshold.md) to match its diameter, you ensure that SceneKit always detects collisions between the projectile and other objects.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [SCNPhysicsCollisionCategory](../scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](categorybitmask.md) and [collisionBitMask](collisionbitmask.md) properties.
