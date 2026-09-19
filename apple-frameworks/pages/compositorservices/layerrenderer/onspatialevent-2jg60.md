> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/onspatialevent-2jg60

# onSpatialEvent

**Framework:** CompositorServices  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A closure that receives the spatial events updates from the LayerRenderer

## Declaration

```swift
@MainActor var onSpatialEvent: @MainActor (SpatialEventCollection) -> Void { get set }
```
