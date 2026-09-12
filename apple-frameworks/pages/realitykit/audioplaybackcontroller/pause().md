> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller/pause()](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/pause())

# pause()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Pauses playback of the audio resource while maintaining the position in the audio stream.

## Declaration

```swift
@MainActor @preconcurrency func pause()
```

<a id="discussion"></a>

## Discussion

Resume playback of a paused audio resource by calling the [play()](play%28%29.md) method.

## See Also

### Starting and stopping audio playback

- [play()](play%28%29.md): Plays the audio resource.
- [stop()](stop%28%29.md): Stops playback of the audio resource and discards the location in the audio stream.
- [isPlaying](isplaying.md): A Boolean value that indicates whether playback is currently active.
