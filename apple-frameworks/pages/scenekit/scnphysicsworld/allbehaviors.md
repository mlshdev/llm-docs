> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/allbehaviors](https://developer.apple.com/documentation/scenekit/scnphysicsworld/allbehaviors)

# allBehaviors (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The list of behaviors affecting bodies in the physics world.

## Declaration

```swift
var allBehaviors: [SCNPhysicsBehavior] { get }
```

## See Also

### Registering Physics Behaviors

- [addBehavior(\_:)](addbehavior%28__%29.md): Adds a behavior to the physics world.
- [removeBehavior(\_:)](removebehavior%28__%29.md): Removes a behavior from the physics world.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.

# allBehaviors (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The list of behaviors affecting bodies in the physics world.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SCNPhysicsBehavior *> * allBehaviors;
```

## See Also

### Registering Physics Behaviors

- [addBehavior:](addbehavior%28__%29.md): Adds a behavior to the physics world.
- [removeBehavior:](removebehavior%28__%29.md): Removes a behavior from the physics world.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.
