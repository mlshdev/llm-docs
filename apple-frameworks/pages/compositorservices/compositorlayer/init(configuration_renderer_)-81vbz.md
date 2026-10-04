> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/compositorlayer/init(configuration:renderer:)-81vbz

# init(configuration:renderer:)

**Framework:** CompositorServices  
**Kind:** Initializer  
**Availability:** macOS 26.0+

## Declaration

```swift
nonisolated init(configuration: any CompositorLayerConfiguration = .default, renderer: @escaping @MainActor (LayerRenderer, NWEndpoint?) -> Void)
```
