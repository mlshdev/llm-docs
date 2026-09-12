> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/presentationframeindex](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/presentationframeindex)

# presentationFrameIndex (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The sequential index of a drawable’s frame.

## Declaration

```swift
var presentationFrameIndex: CompositorFrameIndex { get }
```

<a id="discussion"></a>

## Discussion

When your immersive space becomes visible, you start drawing frames of content. Compositor Services assigns a sequential index to each frame to indicate its position in the final output. You can use these indexes to differentiate frames during drawing or predict future frame indexes. For example, you might start playback of an audio file when a specific frame appears.

## See Also

### Synchronizing the drawing operation

- [frameTiming](frametiming.md): The timing information for the drawable’s frame.

# cp_drawable_get_presentation_frame_index (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The sequential index of a drawable’s frame.

## Declaration

```objectivec
cp_compositor_frame_index_t cp_drawable_get_presentation_frame_index(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

The presentation index of the frame.

<a id="discussion"></a>

## Discussion

When your immersive space becomes visible, you start drawing frames of content. Compositor Services assigns a sequential index to each frame to indicate its position in the final output. You can use these indexes to differentiate frames during drawing or predict future frame indexes. For example, you might start playback of an audio file when a specific frame appears.

## See Also

### Synchronizing the drawing operation

- [cp_drawable_get_frame_timing](frametiming.md): The timing information for the drawable’s frame.
