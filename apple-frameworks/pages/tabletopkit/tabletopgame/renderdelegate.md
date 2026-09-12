> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/renderdelegate](https://developer.apple.com/documentation/tabletopkit/tabletopgame/renderdelegate)

# TabletopGame.RenderDelegate

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for the object that renders your entire game.

## Declaration

```swift
protocol RenderDelegate : AnyObject
```

<a id="overview"></a>

## Overview

To provide a renderer, set the [TabletopGame](../tabletopgame.md) object render delegate to an object that conforms to this protocol using the [addRenderDelegate(\_:)](addrenderdelegate%28__%29.md) method. Then implement the [onUpdate(timeInterval:snapshot:visualState:)](renderdelegate/onupdate%28timeinterval_snapshot_visualstate_%29.md) protocol method to render the current state of the game.

## Topics

### Rendering the game

- [onUpdate(timeInterval:snapshot:visualState:)](renderdelegate/onupdate%28timeinterval_snapshot_visualstate_%29.md)
- [updateRootPose(\_:)](renderdelegate/updaterootpose%28__%29.md)

## Relationships

### Inherited By

- [EntityRenderDelegate](../entityrenderdelegate.md)

## See Also

### Rendering the table

- [addRenderDelegate(\_:)](addrenderdelegate%28__%29.md)
- [removeRenderDelegate(\_:)](removerenderdelegate%28__%29.md)
- [EntityRenderDelegate](../entityrenderdelegate.md): A protocol for the object that renders your entire game using RealityKit.
