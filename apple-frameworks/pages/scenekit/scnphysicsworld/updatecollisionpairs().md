> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/updatecollisionpairs()](https://developer.apple.com/documentation/scenekit/scnphysicsworld/updatecollisionpairs())

# updateCollisionPairs() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Forces the physics engine to reevaluate possible collisions between physics bodies.

## Declaration

```swift
func updateCollisionPairs()
```

<a id="Discussion"></a>

## Discussion

By default, SceneKit checks for collisions between physics bodies only once per simulation step. If you directly change the positions of any physics bodies outside of a [SCNPhysicsContactDelegate](../scnphysicscontactdelegate.md) method, call the [updateCollisionPairs()](updatecollisionpairs%28%29.md) method before using any of the methods listed in Searching for Physics Bodies Detecting Contacts Between Physics Bodies.

## See Also

### Related Documentation

- [contactDelegate](contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.

### Managing the Physics Simulation

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](speed.md): The rate at which the simulation executes.
- [timeStep](timestep.md): The time interval between updates to the physics simulation.

# updateCollisionPairs (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Forces the physics engine to reevaluate possible collisions between physics bodies.

## Declaration

```objectivec
- (void) updateCollisionPairs;
```

<a id="Discussion"></a>

## Discussion

By default, SceneKit checks for collisions between physics bodies only once per simulation step. If you directly change the positions of any physics bodies outside of a [SCNPhysicsContactDelegate](../scnphysicscontactdelegate.md) method, call the [updateCollisionPairs](updatecollisionpairs%28%29.md) method before using any of the methods listed in Searching for Physics Bodies Detecting Contacts Between Physics Bodies.

## See Also

### Related Documentation

- [contactDelegate](contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.

### Managing the Physics Simulation

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](speed.md): The rate at which the simulation executes.
- [timeStep](timestep.md): The time interval between updates to the physics simulation.
