> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/directpickupbehavior](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/directpickupbehavior)

# TabletopInteraction.DirectPickupBehavior

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An object that represents the behavior of the pickup phase of the direct interaction. The pickup phase describes how the object moves from its initial pose to the pose it will have when moving rigidly with the input device.

## Declaration

```swift
struct DirectPickupBehavior
```

## Topics

### Creating a pickup behavior

- [init(deadZone:collisionResolution:)](directpickupbehavior/init%28deadzone_collisionresolution_%29.md)
- [TabletopInteraction.DirectPickupBehavior.CollisionResolutionBehavior](directpickupbehavior/collisionresolutionbehavior.md): An object that represent the behavior that the object should have when colliding with the collision targets during the pickup phase.

### Getting the behavior properties

- [collisionResolution](directpickupbehavior/collisionresolution.md): The collision resolution allows to specify how the object should interaction with the collision targets during the pickup phase.
- [deadZone](directpickupbehavior/deadzone.md): The dead zone allows to specify how much the input device should move from its initial pose to start moving the object.
- [default](directpickupbehavior/default.md): The default behavior

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling collision behavior

- [TabletopInteraction.Constants](constants.md)
- [TabletopInteraction.CollisionTargets](collisiontargets.md): A set of targets for collision behaviors during an interaction
- [TabletopInteraction.DirectInteractionConstants](directinteractionconstants.md): An object that represents the parameters of a direct interaction that cannot be changed while the interaction is active.
- [TabletopInteraction.IndirectRotationAlignmentBehavior](indirectrotationalignmentbehavior.md): An object that represents how the equipment’s orientation should be automatically aligned during the course of the interaction.
- [TabletopInteraction.IndirectInteractionConstants](indirectinteractionconstants.md): An object that represents the parameters of an indirect interaction that cannot be changed while the interaction is active.
- [TabletopInteraction.HoverAlignmentBehavior](hoveralignmentbehavior.md): An object that describes how the controlled equipment should behave when approaching a target.
- [TabletopInteraction.HoverAlignmentSource](hoveralignmentsource.md): An object representing the types of features that can be auto aligned by the `HoverAlignmentBehavior`
- [TabletopInteraction.ProgrammaticInteractionConstants](programmaticinteractionconstants.md): An object that represents the parameters of a programmatic interaction that cannot be changed while the interaction is active.
