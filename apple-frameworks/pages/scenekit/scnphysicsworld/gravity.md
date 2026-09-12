> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/gravity](https://developer.apple.com/documentation/scenekit/scnphysicsworld/gravity)

# gravity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.

## Declaration

```swift
var gravity: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

The components of this vector are measured in meters per second per second. The default value is `(0.0,-9.8,0.0)`.

This property applies a constant acceleration to all physics bodies in the world, simulating the effect of gravity near the surface of the Earth. For more sophisticated gravity effects, including limited areas of effect and strength proportional to distance, use the [SCNPhysicsField](../scnphysicsfield.md) class. When using fields, you may want to set this property to the zero vector so that fields provide all gravity effects in the physics world.

## See Also

### Managing the Physics Simulation

- [speed](speed.md): The rate at which the simulation executes.
- [timeStep](timestep.md): The time interval between updates to the physics simulation.
- [updateCollisionPairs()](updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.

# gravity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 gravity;
```

<a id="Discussion"></a>

## Discussion

The components of this vector are measured in meters per second per second. The default value is `(0.0,-9.8,0.0)`.

This property applies a constant acceleration to all physics bodies in the world, simulating the effect of gravity near the surface of the Earth. For more sophisticated gravity effects, including limited areas of effect and strength proportional to distance, use the [SCNPhysicsField](../scnphysicsfield.md) class. When using fields, you may want to set this property to the zero vector so that fields provide all gravity effects in the physics world.

## See Also

### Managing the Physics Simulation

- [speed](speed.md): The rate at which the simulation executes.
- [timeStep](timestep.md): The time interval between updates to the physics simulation.
- [updateCollisionPairs](updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.
