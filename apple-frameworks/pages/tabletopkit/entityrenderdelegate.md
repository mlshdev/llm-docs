> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/entityrenderdelegate

# EntityRenderDelegate

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for the object that renders your entire game using RealityKit.

## Declaration

```swift
protocol EntityRenderDelegate : TabletopGame.RenderDelegate
```

## Topics

### Getting the root entity

- [root](entityrenderdelegate/root.md)

### Rendering the table

- [updateRootPose(\_:)](entityrenderdelegate/updaterootpose%28__%29.md)

## Relationships

### Inherits From

- [TabletopGame.RenderDelegate](tabletopgame/renderdelegate.md)

## See Also

### Rendering the table

- [addRenderDelegate(\_:)](tabletopgame/addrenderdelegate%28__%29.md)
- [removeRenderDelegate(\_:)](tabletopgame/removerenderdelegate%28__%29.md)
- [TabletopGame.RenderDelegate](tabletopgame/renderdelegate.md): A protocol for the object that renders your entire game.
