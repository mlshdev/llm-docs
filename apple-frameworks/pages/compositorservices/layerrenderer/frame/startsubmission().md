> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/startsubmission()](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/startsubmission())

# startSubmission() (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Notifies Compositor Services that you’re ready to generate the Metal commands to render the specified frame.

## Declaration

```swift
func startSubmission()
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This function helps you optimize your app’s rendering efficiency. Call it before you start any of the GPU work that depends on the device pose. Call [endSubmission()](endsubmission%28%29.md) after you build your Metal command buffers and are ready to commit the frame to the GPU. Compositor Services uses the time difference to improve its predictions for when to start the frame submission process. Those predictions help you schedule the encoding process at a more optimal time for the system.

## See Also

### Reporting frame submission times

- [endSubmission()](endsubmission%28%29.md): Notifies Compositor Services that you finished generating the GPU commands to render the specified frame.

# cp_frame_start_submission (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Notifies Compositor Services that you’re ready to generate the Metal commands to render the specified frame.

## Declaration

```objectivec
void cp_frame_start_submission(cp_frame_t frame);
```

## Parameters

- `frame`: The frame you’re ready to encode and send to the GPU.

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This function helps you optimize your app’s rendering efficiency. Call it before you start any of the GPU work that depends on the device pose. Call [cp_frame_end_submission](endsubmission%28%29.md) after you build your Metal command buffers and are ready to commit the frame to the GPU. Compositor Services uses the time difference to improve its predictions for when to start the frame submission process. Those predictions help you schedule the encoding process at a more optimal time for the system.

## See Also

### Reporting frame submission times

- [cp_frame_end_submission](endsubmission%28%29.md): Notifies Compositor Services that you finished generating the GPU commands to render the specified frame.
