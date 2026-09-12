> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/endupdate()](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/endupdate())

# endUpdate() (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Notifies Compositor Services that you finished updating the app-specific content you need to render the frame.

## Declaration

```swift
func endUpdate()
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This function helps you optimize your app’s rendering efficiency. Before you render a frame, you might need to respond to interactions and update your app’s data structures before you render items in your scene. Call [startUpdate()](startupdate%28%29.md) immediately before you start that work, and call this function as soon as you finish. Compositor Services uses the frame update time to improve its predictions for when to start the frame encoding process.

Move as much work as possible into the update phase to minimize encoding time. Don’t do any work that relies on the current pose information during the update phase. Instead, make any pose-related changes during the submission phase.

## See Also

### Reporting frame update times

- [startUpdate()](startupdate%28%29.md): Notifies Compositor Services that you started updating the app-specific content for the frame.

# cp_frame_end_update (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Notifies Compositor Services that you finished updating the app-specific content you need to render the frame.

## Declaration

```objectivec
void cp_frame_end_update(cp_frame_t frame);
```

## Parameters

- `frame`: The frame you finished updating.

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This function helps you optimize your app’s rendering efficiency. Before you render a frame, you might need to respond to interactions and update your app’s data structures before you render items in your scene. Call [cp_frame_start_update](startupdate%28%29.md) immediately before you start that work, and call this function as soon as you finish. Compositor Services uses the frame update time to improve its predictions for when to start the frame encoding process.

Move as much work as possible into the update phase to minimize encoding time. Don’t do any work that relies on the current pose information during the update phase. Instead, make any pose-related changes during the submission phase.

## See Also

### Reporting frame update times

- [cp_frame_start_update](startupdate%28%29.md): Notifies Compositor Services that you started updating the app-specific content for the frame.
