> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/speed](https://developer.apple.com/documentation/scenekit/scnphysicsworld/speed)

# speed (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The rate at which the simulation executes.

## Declaration

```swift
var speed: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, which means that the simulation runs at normal speed. A value other than the default changes the rate at which time passes in the physics simulation. For example, a speed value of `2.0` indicates that time in the physics simulation passes twice as fast as the scene’s simulation time. A value of `0.0` pauses the physics simulation.

> **Note**

>  Increasing the speed of the physics simulation reduces its accuracy.

## See Also

### Managing the Physics Simulation

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [timeStep](timestep.md): The time interval between updates to the physics simulation.
- [updateCollisionPairs()](updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.

# speed (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The rate at which the simulation executes.

## Declaration

```objectivec
@property (nonatomic) CGFloat speed;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, which means that the simulation runs at normal speed. A value other than the default changes the rate at which time passes in the physics simulation. For example, a speed value of `2.0` indicates that time in the physics simulation passes twice as fast as the scene’s simulation time. A value of `0.0` pauses the physics simulation.

> **Note**

>  Increasing the speed of the physics simulation reduces its accuracy.

## See Also

### Managing the Physics Simulation

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [timeStep](timestep.md): The time interval between updates to the physics simulation.
- [updateCollisionPairs](updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.
