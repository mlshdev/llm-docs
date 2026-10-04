> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/compositorlayer/init(configuration:renderer:)-2uxn7

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
