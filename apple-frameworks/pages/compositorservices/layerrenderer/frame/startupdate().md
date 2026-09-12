> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/startupdate()](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/startupdate())

# startUpdate() (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Notifies Compositor Services that you started updating the app-specific content for the frame.

## Declaration

```swift
func startUpdate()
```

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This function helps you optimize your app’s rendering efficiency. Before you render a frame, you might need to respond to interactions with your content and update your app’s data structures before you render items in your scene. Call this function immediately before you start that work, and call [endUpdate()](endupdate%28%29.md)  as soon as you finish. Compositor Services uses the time difference to improve its predictions for when to start the frame encoding process.

Move as much work as possible into the update phase to minimize encoding time. Don’t do any work that relies on the current pose information during the update phase. Instead, make any pose-related changes during the submission phase.

## See Also

### Reporting frame update times

- [endUpdate()](endupdate%28%29.md): Notifies Compositor Services that you finished updating the app-specific content you need to render the frame.

# cp_frame_start_update (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Notifies Compositor Services that you started updating the app-specific content for the frame.

## Declaration

```objectivec
void cp_frame_start_update(cp_frame_t frame);
```

## Parameters

- `frame`: The frame you’re ready to update.

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

This function helps you optimize your app’s rendering efficiency. Before you render a frame, you might need to respond to interactions with your content and update your app’s data structures before you render items in your scene. Call this function immediately before you start that work, and call [cp_frame_end_update](endupdate%28%29.md)  as soon as you finish. Compositor Services uses the time difference to improve its predictions for when to start the frame encoding process.

Move as much work as possible into the update phase to minimize encoding time. Don’t do any work that relies on the current pose information during the update phase. Instead, make any pose-related changes during the submission phase.

## See Also

### Reporting frame update times

- [cp_frame_end_update](endupdate%28%29.md): Notifies Compositor Services that you finished updating the app-specific content you need to render the frame.
