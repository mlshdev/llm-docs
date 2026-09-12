> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/compositorlayer/init(configuration:renderer:)-2uxn7](https://developer.apple.com/documentation/compositorservices/compositorlayer/init(configuration:renderer:)-2uxn7)

# init(configuration:renderer:)

**Framework:** CompositorServices  
**Kind:** Initializer  
**Availability:** macOS 26.0+ · visionOS 2.0+

Creates a [CompositorLayer](../compositorlayer.md) instance.

## Declaration

```swift
nonisolated init(configuration: any CompositorLayerConfiguration = .default, renderer: @escaping @MainActor (LayerRenderer) -> Void)
```

## Parameters

- `configuration`: The configuration to use when creating the LayerRenderer.
- `renderer`: A closure that receives the layer to use when rendering the content for the immersive space
