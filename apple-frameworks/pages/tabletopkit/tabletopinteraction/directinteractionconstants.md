> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/directinteractionconstants](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/directinteractionconstants)

# TabletopInteraction.DirectInteractionConstants

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An object that represents the parameters of a direct interaction that cannot be changed while the interaction is active.

## Declaration

```swift
struct DirectInteractionConstants
```

## Topics

### Creating a direct interaction

- [init(pickupBehavior:)](directinteractionconstants/init%28pickupbehavior_%29.md)

### Getting the pickup behavior

- [pickupBehavior](directinteractionconstants/pickupbehavior.md): The type of pickup behavior that should be used for this interaction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling collision behavior

- [TabletopInteraction.Constants](constants.md)
- [TabletopInteraction.CollisionTargets](collisiontargets.md): A set of targets for collision behaviors during an interaction
- [TabletopInteraction.DirectPickupBehavior](directpickupbehavior.md): An object that represents the behavior of the pickup phase of the direct interaction. The pickup phase describes how the object moves from its initial pose to the pose it will have when moving rigidly with the input device.
- [TabletopInteraction.IndirectRotationAlignmentBehavior](indirectrotationalignmentbehavior.md): An object that represents how the equipment’s orientation should be automatically aligned during the course of the interaction.
- [TabletopInteraction.IndirectInteractionConstants](indirectinteractionconstants.md): An object that represents the parameters of an indirect interaction that cannot be changed while the interaction is active.
- [TabletopInteraction.HoverAlignmentBehavior](hoveralignmentbehavior.md): An object that describes how the controlled equipment should behave when approaching a target.
- [TabletopInteraction.HoverAlignmentSource](hoveralignmentsource.md): An object representing the types of features that can be auto aligned by the `HoverAlignmentBehavior`
- [TabletopInteraction.ProgrammaticInteractionConstants](programmaticinteractionconstants.md): An object that represents the parameters of a programmatic interaction that cannot be changed while the interaction is active.
