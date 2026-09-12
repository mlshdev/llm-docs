> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior)

# TabletopInteraction.HoverAlignmentBehavior

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

An object that describes how the controlled equipment should behave when approaching a target.

## Declaration

```swift
enum HoverAlignmentBehavior
```

## Topics

### Alignment Behaviors

- [TabletopInteraction.HoverAlignmentBehavior.align(\_:with:)](hoveralignmentbehavior/align%28__with_%29.md): `align` indicates that the equipment should orient itself to align the closest `source` to the target. The equipment’s movement is also limited to prevent it from penetrating the target.
- [TabletopInteraction.HoverAlignmentBehavior.automatic(targets:)](hoveralignmentbehavior/automatic%28targets_%29.md): `automatic` picks a strategy based on the equipment size.
- [TabletopInteraction.HoverAlignmentBehavior.disabled](hoveralignmentbehavior/disabled.md): Use this value to disable the behavior.
- [TabletopInteraction.HoverAlignmentBehavior.stop(at:)](hoveralignmentbehavior/stop%28at_%29.md): `stop` indicates that the equipment movement should stop when pushed into the target, to avoid penetration. The orientation of the equipment is not affected.

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
- [TabletopInteraction.DirectInteractionConstants](directinteractionconstants.md): An object that represents the parameters of a direct interaction that cannot be changed while the interaction is active.
- [TabletopInteraction.IndirectRotationAlignmentBehavior](indirectrotationalignmentbehavior.md): An object that represents how the equipment’s orientation should be automatically aligned during the course of the interaction.
- [TabletopInteraction.IndirectInteractionConstants](indirectinteractionconstants.md): An object that represents the parameters of an indirect interaction that cannot be changed while the interaction is active.
- [TabletopInteraction.HoverAlignmentSource](hoveralignmentsource.md): An object representing the types of features that can be auto aligned by the `HoverAlignmentBehavior`
- [TabletopInteraction.ProgrammaticInteractionConstants](programmaticinteractionconstants.md): An object that represents the parameters of a programmatic interaction that cannot be changed while the interaction is active.
