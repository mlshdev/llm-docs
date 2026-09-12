> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerframeindex](https://developer.apple.com/documentation/compositorservices/layerframeindex)

# LayerFrameIndex (Swift)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A frame index in the layer’s timeline.

## Declaration

```swift
typealias LayerFrameIndex = UInt64
```

## See Also

### Getting frame-related details

- [frameIndex](layerrenderer/frame/frameindex.md): The sequential index number of a frame.
- [CompositorFrameIndex](compositorframeindex.md): The sequential index for a frame in the compositor’s timeline.

# cp_layer_frame_index_t (Objective-C)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A frame index in the layer’s timeline.

## Declaration

```objectivec
typedef uint64_t cp_layer_frame_index_t;
```

## See Also

### Getting frame-related details

- [cp_frame_get_frame_index](layerrenderer/frame/frameindex.md): The sequential index number of a frame.
- [cp_compositor_frame_index_t](compositorframeindex.md): The sequential index for a frame in the compositor’s timeline.
