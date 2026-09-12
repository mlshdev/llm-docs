> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/layers](https://developer.apple.com/documentation/realitykit/spotlightcomponent/layers)

# layers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The layers this light illuminates.

## Declaration

```swift
var layers: RenderLayer.Set { get set }
```

<a id="discussion"></a>

## Discussion

A spotlight illuminates an entity when the layers of the entity’s [RenderLayerComponent](../renderlayercomponent.md) intersect with this set. Entities without a [RenderLayerComponent](../renderlayercomponent.md) belong to [defaultLayer](../renderlayer/defaultlayer.md), which is the only member of `layers` by default.

For an example of layer-based light linking, see [layers](../directionallightcomponent/layers.md).

Lights can be restricted by layer on devices with Apple6 GPU family feature support.
