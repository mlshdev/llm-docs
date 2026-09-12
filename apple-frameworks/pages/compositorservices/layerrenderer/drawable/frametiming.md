> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/frametiming](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/frametiming)

# frameTiming (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The timing information for the drawable’s frame.

## Declaration

```swift
var frameTiming: LayerRenderer.Frame.Timing { get }
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This retrieves a frame’s timing information from a drawable instance that represents that frame. For Swift, it’s an alternative to calling a frame’s [predictTiming()](../frame/predicttiming%28%29.md) method. For ObjectiveC, it’s an alternative to calling the [cp_frame_predict_timing](../../cp_frame_predict_timing.md) function.

In ObjectiveC, you can determine when to start updating your data structures by passing a [cp_frame_timing_t](../../cp_frame_timing_t.md) instance to the [cp_frame_timing_get_optimal_input_time](../../cp_frame_timing_get_optimal_input_time.md) function.

## See Also

### Synchronizing the drawing operation

- [presentationFrameIndex](presentationframeindex.md): The sequential index of a drawable’s frame.

# cp_drawable_get_frame_timing (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The timing information for the drawable’s frame.

## Declaration

```objectivec
cp_frame_timing_tcp_drawable_get_frame_timing(cp_drawable_t drawable);
```

## Parameters

- `drawable`: A drawable that represents a frame.

<a id="return-value"></a>

## Return Value

A [cp_frame_timing_t](../../cp_frame_timing_t.md) instance for the drawable’s frame.

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This retrieves a frame’s timing information from a drawable instance that represents that frame. For Swift, it’s an alternative to calling a frame’s [predictTiming()](../frame/predicttiming%28%29.md) method. For ObjectiveC, it’s an alternative to calling the [cp_frame_predict_timing](../../cp_frame_predict_timing.md) function.

In ObjectiveC, you can determine when to start updating your data structures by passing a [cp_frame_timing_t](../../cp_frame_timing_t.md) instance to the [cp_frame_timing_get_optimal_input_time](../../cp_frame_timing_get_optimal_input_time.md) function.

## See Also

### Synchronizing the drawing operation

- [cp_drawable_get_presentation_frame_index](presentationframeindex.md): The sequential index of a drawable’s frame.
