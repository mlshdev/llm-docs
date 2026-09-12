> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/onspatialevent-inq8](https://developer.apple.com/documentation/compositorservices/layerrenderer/onspatialevent-inq8)

# onSpatialEvent

**Framework:** CompositorServices  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A closure that receives the spatial events updates from the LayerRenderer

## Declaration

```swift
@MainActor @preconcurrency var onSpatialEvent: @MainActor (SpatialEventCollection) -> Void { get set }
```
