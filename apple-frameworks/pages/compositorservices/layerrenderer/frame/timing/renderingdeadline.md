> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/timing/renderingdeadline](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/timing/renderingdeadline)

# renderingDeadline

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The time at which you must finish all work for the specified frame.

## Declaration

```swift
var renderingDeadline: LayerRenderer.Clock.Instant { get }
```

<a id="discussion"></a>

## Discussion

This value reflects the time you need to finish your work and deliver the frame to Compositor Services.  Finish all CPU tasks, commit your Metal command buffers, and call [endSubmission()](../endsubmission%28%29.md) by the specified time. This time is before the actual presentation time of the frame, because it accounts for the Compositor Services overhead needed to render your frame and display it.
