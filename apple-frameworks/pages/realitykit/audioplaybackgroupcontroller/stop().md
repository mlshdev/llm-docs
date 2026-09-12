> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackgroupcontroller/stop()](https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/stop())

# stop()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Stops playback of the audio resource and discards the location in the audio stream.

## Declaration

```swift
@MainActor @preconcurrency func stop()
```

<a id="discussion"></a>

## Discussion

The next time you call [play()](play%28%29.md), playback starts at the beginning of the stream.
