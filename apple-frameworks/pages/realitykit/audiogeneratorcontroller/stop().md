> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiogeneratorcontroller/stop()](https://developer.apple.com/documentation/realitykit/audiogeneratorcontroller/stop())

# stop()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Stops playback of the render handler.

## Declaration

```swift
@MainActor func stop()
```

<a id="discussion"></a>

## Discussion

Callbacks to the render handler stop after calling [stop()](stop%28%29.md). There may be a short delay between when you call `stop` and when the callbacks actually stop.
