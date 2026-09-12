> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/clock/wait(until:tolerance:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/clock/wait(until:tolerance:))

# wait(until:tolerance:)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Blocks the current thread until the specified time.

## Declaration

```swift
func wait(until deadline: LayerRenderer.Clock.Instant, tolerance: Duration? = nil)
```

## Parameters

- `deadline`: The Mach absolute time at which to wake up the thread. Typically, you supply one of the predicted times associated with the current frame, such as the optimal input time.
- `tolerance`: The amount of time before or after the deadline to allow the system to wake up the thread. Specifying a non-zero value lets the system shift the actual deadline to coalesce other work and achieve greater power savings.

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

Use this function to block your render loop while waiting for critical time events. For example, use it to block the thread prior to starting the submission phase for a given frame.
