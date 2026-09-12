> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_frame_timing_get_optimal_input_time](https://developer.apple.com/documentation/compositorservices/cp_frame_timing_get_optimal_input_time)

# cp_frame_timing_get_optimal_input_time

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the optimal time to start the frame submission process.

## Declaration

```objectivec
cp_time_t cp_frame_timing_get_optimal_input_time(cp_frame_timing_t frame_timing);
```

## Parameters

- `frame_timing`: The frame’s timing information. Fetch this information using the [cp_frame_predict_timing](cp_frame_predict_timing.md) function. After you retrieve the frame’s drawable type, get the information using [cp_drawable_get_frame_timing](layerrenderer/drawable/frametiming.md) instead.

<a id="return-value"></a>

## Return Value

The Mach absolute time at which to query the input for your frame.

<a id="discussion"></a>

## Discussion

The optimal input time is the time at which to call the [cp_frame_start_submission](layerrenderer/frame/startsubmission%28%29.md) function. Use the time before the input time to update your app’s data structures and prepare for rendering. Call [cp_time_wait_until](cp_time_wait_until.md) to suspend your app until the optimal time arrives. When it does, fetch the current device pose and finish rendering and the frame and commit your Metal command buffers.

## See Also

### Getting timing information

- [cp_frame_predict_timing](cp_frame_predict_timing.md): Computes and returns the predicted timing information for the frame.
- [cp_frame_timing_get_rendering_deadline](cp_frame_timing_get_rendering_deadline.md): Returns the time at which you must finish all work for the specified frame.
- [cp_frame_timing_get_presentation_time](cp_frame_timing_get_presentation_time.md): Returns the time at which the system displays the frame.
- [cp_frame_timing_t](cp_frame_timing_t.md): A type that stores information about a frame’s encoding, rendering, and presentation deadlines.
