> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackgroupcontroller/play()](https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/play())

# play()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Plays the audio resource.

## Declaration

```swift
@MainActor @preconcurrency func play()
```

<a id="discussion"></a>

## Discussion

The controller plays from the beginning of the resource, or from the point at which it was paused if you previously called the [pause()](pause%28%29.md) method during playback. The controller ignores calls to [play()](play%28%29.md) when audio is already playing.
