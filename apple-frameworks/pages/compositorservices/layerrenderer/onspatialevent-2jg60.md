> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/onspatialevent-2jg60](https://developer.apple.com/documentation/compositorservices/layerrenderer/onspatialevent-2jg60)

# onSpatialEvent

**Framework:** CompositorServices  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A closure that receives the spatial events updates from the LayerRenderer

## Declaration

```swift
@MainActor var onSpatialEvent: @MainActor (SpatialEventCollection) -> Void { get set }
```
