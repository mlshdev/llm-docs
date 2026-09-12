> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/addbehavior(_:)](https://developer.apple.com/documentation/scenekit/scnphysicsworld/addbehavior(_:))

# addBehavior(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds a behavior to the physics world.

## Declaration

```swift
func addBehavior(_ behavior: SCNPhysicsBehavior)
```

## Parameters

- `behavior`: The behavior to be added.

<a id="Discussion"></a>

## Discussion

Physics behaviors constrain or modify the effects of the physics simulation on sets of physics bodies. For example, the [SCNPhysicsHingeJoint](../scnphysicshingejoint.md) behavior causes two bodies to move as if connected by a hinge that pivots around a specific axis, and the [SCNPhysicsVehicle](../scnphysicsvehicle.md) behavior causes a body to roll like a car or other wheeled vehicle.

To use a behavior in your scene, follow these steps:

1. Create [SCNPhysicsBody](../scnphysicsbody.md) objects and attach them to each node that participates in the behavior.
2. Create and configure a behavior object joining the physics bodies. See [SCNPhysicsBehavior](../scnphysicsbehavior.md) for a list of behavior classes.
3. Call [addBehavior(\_:)](addbehavior%28__%29.md) on your scene’s physics world object to add the behavior to the physics simulation.

## See Also

### Registering Physics Behaviors

- [removeBehavior(\_:)](removebehavior%28__%29.md): Removes a behavior from the physics world.
- [allBehaviors](allbehaviors.md): The list of behaviors affecting bodies in the physics world.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.

# addBehavior: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Adds a behavior to the physics world.

## Declaration

```objectivec
- (void) addBehavior:(SCNPhysicsBehavior *) behavior;
```

## Parameters

- `behavior`: The behavior to be added.

<a id="Discussion"></a>

## Discussion

Physics behaviors constrain or modify the effects of the physics simulation on sets of physics bodies. For example, the [SCNPhysicsHingeJoint](../scnphysicshingejoint.md) behavior causes two bodies to move as if connected by a hinge that pivots around a specific axis, and the [SCNPhysicsVehicle](../scnphysicsvehicle.md) behavior causes a body to roll like a car or other wheeled vehicle.

To use a behavior in your scene, follow these steps:

1. Create [SCNPhysicsBody](../scnphysicsbody.md) objects and attach them to each node that participates in the behavior.
2. Create and configure a behavior object joining the physics bodies. See [SCNPhysicsBehavior](../scnphysicsbehavior.md) for a list of behavior classes.
3. Call [addBehavior:](addbehavior%28__%29.md) on your scene’s physics world object to add the behavior to the physics simulation.

## See Also

### Registering Physics Behaviors

- [removeBehavior:](removebehavior%28__%29.md): Removes a behavior from the physics world.
- [allBehaviors](allbehaviors.md): The list of behaviors affecting bodies in the physics world.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.
