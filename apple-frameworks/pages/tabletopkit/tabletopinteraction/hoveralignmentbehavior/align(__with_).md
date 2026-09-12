> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior/align(_:with:)](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior/align(_:with:))

# TabletopInteraction.HoverAlignmentBehavior.align(\_:with:)

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 26.0+

`align` indicates that the equipment should orient itself to align the closest `source` to the target. The equipment’s movement is also limited to prevent it from penetrating the target.

## Declaration

```swift
case align(TabletopInteraction.HoverAlignmentSource, with: TabletopInteraction.CollisionTargets)
```

## See Also

### Alignment Behaviors

- [TabletopInteraction.HoverAlignmentBehavior.automatic(targets:)](automatic%28targets_%29.md): `automatic` picks a strategy based on the equipment size.
- [TabletopInteraction.HoverAlignmentBehavior.disabled](disabled.md): Use this value to disable the behavior.
- [TabletopInteraction.HoverAlignmentBehavior.stop(at:)](stop%28at_%29.md): `stop` indicates that the equipment movement should stop when pushed into the target, to avoid penetration. The orientation of the equipment is not affected.
