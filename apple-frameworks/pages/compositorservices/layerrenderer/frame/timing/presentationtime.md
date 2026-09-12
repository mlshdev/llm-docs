> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/timing/presentationtime](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/timing/presentationtime)

# presentationTime

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The time at which the system displays the frame onscreen.

## Declaration

```swift
var presentationTime: LayerRenderer.Clock.Instant { get }
```

<a id="discussion"></a>

## Discussion

You can use the presentation time as a synchronization point for other parts of your app. For example, if you play an audio clip when the frame appears, configure your code to start playing the clip at the specified time.
