> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_frame_timing_t](https://developer.apple.com/documentation/compositorservices/cp_frame_timing_t)

# cp_frame_timing_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that stores information about a frame’s encoding, rendering, and presentation deadlines.

## Declaration

```objectivec
typedef struct cp_frame_timing * cp_frame_timing_t;
```

<a id="discussion"></a>

## Discussion

Before you start drawing your frame’s content, retrieve the frame’s timing information using [cp_frame_predict_timing](cp_frame_predict_timing.md). That function returns the latest predicted values for you to use during planning. After you retrieve the [cp_drawable_t](cp_drawable_t.md) type for the frame, get the timing information from the drawable instead using [cp_drawable_get_frame_timing](layerrenderer/drawable/frametiming.md).

## See Also

### Getting timing information

- [cp_frame_predict_timing](cp_frame_predict_timing.md): Computes and returns the predicted timing information for the frame.
- [cp_frame_timing_get_optimal_input_time](cp_frame_timing_get_optimal_input_time.md): Returns the optimal time to start the frame submission process.
- [cp_frame_timing_get_rendering_deadline](cp_frame_timing_get_rendering_deadline.md): Returns the time at which you must finish all work for the specified frame.
- [cp_frame_timing_get_presentation_time](cp_frame_timing_get_presentation_time.md): Returns the time at which the system displays the frame.
