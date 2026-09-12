> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayercomponent/layers](https://developer.apple.com/documentation/realitykit/renderlayercomponent/layers)

# layers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The layers this entity participates in.

## Declaration

```swift
var layers: RenderLayer.Set
```

<a id="discussion"></a>

## Discussion

A layer is either a custom layer you define in an extension to [RenderLayer](../renderlayer.md) or [defaultLayer](../renderlayer/defaultlayer.md). Common conventions include:

- [defaultLayer](../renderlayer/defaultlayer.md) for general entities
- `RenderLayer("com.myapp.hero")` for main character objects
- `RenderLayer("com.myapp.background")` for background elements
- `RenderLayer("com.myapp.props")` for scene props

## See Also

### Accessing render layers

- [defaultLayer](defaultlayer.md): A render layer component that contains only [defaultLayer](../renderlayer/defaultlayer.md).
