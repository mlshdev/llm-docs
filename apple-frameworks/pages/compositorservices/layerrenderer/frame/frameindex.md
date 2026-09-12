> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/frameindex](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/frameindex)

# frameIndex (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The sequential index number of a frame.

## Declaration

```swift
var frameIndex: LayerFrameIndex { get }
```

<a id="discussion"></a>

## Discussion

The layer assigns a unique index number to each frame, starting at the first frame and incrementing the index by `1` for each new frame.

## See Also

### Getting frame-related details

- [LayerFrameIndex](../../layerframeindex.md): A frame index in the layer’s timeline.
- [CompositorFrameIndex](../../compositorframeindex.md): The sequential index for a frame in the compositor’s timeline.

# cp_frame_get_frame_index (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The sequential index number of a frame.

## Declaration

```objectivec
cp_layer_frame_index_t cp_frame_get_frame_index(cp_frame_t frame);
```

## Parameters

- `frame`: The frame to query.

<a id="return-value"></a>

## Return Value

The sequential index of the frame, which is always a positive integer.

<a id="discussion"></a>

## Discussion

The layer assigns a unique index number to each frame, starting at the first frame and incrementing the index by `1` for each new frame.

## See Also

### Getting frame-related details

- [cp_layer_frame_index_t](../../layerframeindex.md): A frame index in the layer’s timeline.
- [cp_compositor_frame_index_t](../../compositorframeindex.md): The sequential index for a frame in the compositor’s timeline.
