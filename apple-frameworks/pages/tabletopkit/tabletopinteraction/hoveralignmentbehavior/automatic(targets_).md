> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior/automatic(targets:)](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior/automatic(targets:))

# TabletopInteraction.HoverAlignmentBehavior.automatic(targets:)

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 26.0+

`automatic` picks a strategy based on the equipment size.

## Declaration

```swift
case automatic(targets: TabletopInteraction.CollisionTargets)
```

## See Also

### Alignment Behaviors

- [TabletopInteraction.HoverAlignmentBehavior.align(\_:with:)](align%28__with_%29.md): `align` indicates that the equipment should orient itself to align the closest `source` to the target. The equipment’s movement is also limited to prevent it from penetrating the target.
- [TabletopInteraction.HoverAlignmentBehavior.disabled](disabled.md): Use this value to disable the behavior.
- [TabletopInteraction.HoverAlignmentBehavior.stop(at:)](stop%28at_%29.md): `stop` indicates that the equipment movement should stop when pushed into the target, to avoid penetration. The orientation of the equipment is not affected.
