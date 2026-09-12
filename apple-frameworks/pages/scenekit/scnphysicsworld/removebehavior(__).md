> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/removebehavior(_:)](https://developer.apple.com/documentation/scenekit/scnphysicsworld/removebehavior(_:))

# removeBehavior(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes a behavior from the physics world.

## Declaration

```swift
func removeBehavior(_ behavior: SCNPhysicsBehavior)
```

## Parameters

- `behavior`: The behavior to be removed.

## See Also

### Registering Physics Behaviors

- [addBehavior(\_:)](addbehavior%28__%29.md): Adds a behavior to the physics world.
- [allBehaviors](allbehaviors.md): The list of behaviors affecting bodies in the physics world.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.

# removeBehavior: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Removes a behavior from the physics world.

## Declaration

```objectivec
- (void) removeBehavior:(SCNPhysicsBehavior *) behavior;
```

## Parameters

- `behavior`: The behavior to be removed.

## See Also

### Registering Physics Behaviors

- [addBehavior:](addbehavior%28__%29.md): Adds a behavior to the physics world.
- [allBehaviors](allbehaviors.md): The list of behaviors affecting bodies in the physics world.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.
