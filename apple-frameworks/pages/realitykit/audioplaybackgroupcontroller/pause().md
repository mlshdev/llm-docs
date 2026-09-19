> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/pause()

# pause()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Pauses playback of the audio resource while maintaining the position in the audio stream.

## Declaration

```swift
@MainActor @preconcurrency func pause()
```

<a id="discussion"></a>

## Discussion

Resume playback of a paused audio resource by calling the [play()](play%28%29.md) method.
