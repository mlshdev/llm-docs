> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/compositorframeindex](https://developer.apple.com/documentation/compositorservices/compositorframeindex)

# CompositorFrameIndex (Swift)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

The sequential index for a frame in the compositor’s timeline.

## Declaration

```swift
typealias CompositorFrameIndex = UInt64
```

<a id="discussion"></a>

## Discussion

During the creation of your content, the compositor creates frames for you to render your content. This type stores the index the compositor assigns to that frame. The compositor presents frames sequentially based on their indexes.

## See Also

### Getting frame-related details

- [frameIndex](layerrenderer/frame/frameindex.md): The sequential index number of a frame.
- [LayerFrameIndex](layerframeindex.md): A frame index in the layer’s timeline.

# cp_compositor_frame_index_t (Objective-C)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

The sequential index for a frame in the compositor’s timeline.

## Declaration

```objectivec
typedef uint64_t cp_compositor_frame_index_t;
```

<a id="discussion"></a>

## Discussion

During the creation of your content, the compositor creates frames for you to render your content. This type stores the index the compositor assigns to that frame. The compositor presents frames sequentially based on their indexes.

## See Also

### Getting frame-related details

- [cp_frame_get_frame_index](layerrenderer/frame/frameindex.md): The sequential index number of a frame.
- [cp_layer_frame_index_t](layerframeindex.md): A frame index in the layer’s timeline.
