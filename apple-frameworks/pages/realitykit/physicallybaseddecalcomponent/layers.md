> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybaseddecalcomponent/layers](https://developer.apple.com/documentation/realitykit/physicallybaseddecalcomponent/layers)

# layers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The layers this decal affects. Only entities whose [layers](../renderlayercomponent/layers.md) intersect with these layers will be affected.

## Declaration

```swift
var layers: RenderLayer.Set
```

## See Also

### Controlling decal rendering

- [sortOrder](sortorder.md): The sort layer for the decal. Higher layers show up on top of lower layers.
- [receiverEntities](receiverentities.md): An optional set of receiver entities that are not part of any layers. The limit on the number of receiver entities is 8, extra entities are ignored.
