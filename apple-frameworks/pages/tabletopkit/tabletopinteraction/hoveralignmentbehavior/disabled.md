> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/hoveralignmentbehavior/disabled

# TabletopInteraction.HoverAlignmentBehavior.disabled

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 26.0+

Use this value to disable the behavior.

## Declaration

```swift
case disabled
```

## See Also

### Alignment Behaviors

- [TabletopInteraction.HoverAlignmentBehavior.align(\_:with:)](align%28__with_%29.md): `align` indicates that the equipment should orient itself to align the closest `source` to the target. The equipment’s movement is also limited to prevent it from penetrating the target.
- [TabletopInteraction.HoverAlignmentBehavior.automatic(targets:)](automatic%28targets_%29.md): `automatic` picks a strategy based on the equipment size.
- [TabletopInteraction.HoverAlignmentBehavior.stop(at:)](stop%28at_%29.md): `stop` indicates that the equipment movement should stop when pushed into the target, to avoid penetration. The orientation of the equipment is not affected.
