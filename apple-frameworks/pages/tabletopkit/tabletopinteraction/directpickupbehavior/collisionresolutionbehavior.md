> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/directpickupbehavior/collisionresolutionbehavior](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/directpickupbehavior/collisionresolutionbehavior)

# TabletopInteraction.DirectPickupBehavior.CollisionResolutionBehavior

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

An object that represent the behavior that the object should have when colliding with the collision targets during the pickup phase.

## Declaration

```swift
enum CollisionResolutionBehavior
```

## Topics

### Resolution behaviors

- [TabletopInteraction.DirectPickupBehavior.CollisionResolutionBehavior.automatic](collisionresolutionbehavior/automatic.md): The automatic behavior moves and rotates the object to ensure that it does not penetrate the collision targets.
- [TabletopInteraction.DirectPickupBehavior.CollisionResolutionBehavior.disabled](collisionresolutionbehavior/disabled.md): Use this value to disable collision resolution.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a pickup behavior

- [init(deadZone:collisionResolution:)](init%28deadzone_collisionresolution_%29.md)
