> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayercomponent/defaultlayer](https://developer.apple.com/documentation/realitykit/renderlayercomponent/defaultlayer)

# defaultLayer

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A render layer component that contains only [defaultLayer](../renderlayer/defaultlayer.md).

## Declaration

```swift
static let defaultLayer: RenderLayerComponent
```

<a id="discussion"></a>

## Discussion

RealityKit treats entities without an explicit [RenderLayerComponent](../renderlayercomponent.md) as if they had this component.

## See Also

### Accessing render layers

- [layers](layers.md): The layers this entity participates in.
