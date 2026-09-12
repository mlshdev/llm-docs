> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller/play()](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/play())

# play()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Plays the audio resource.

## Declaration

```swift
@MainActor @preconcurrency func play()
```

<a id="discussion"></a>

## Discussion

The controller plays from the beginning of the resource, or from the point at which it was paused if you previously called the [pause()](pause%28%29.md) method during playback. The controller ignores calls to [play()](play%28%29.md) when audio is already playing.

## See Also

### Starting and stopping audio playback

- [pause()](pause%28%29.md): Pauses playback of the audio resource while maintaining the position in the audio stream.
- [stop()](stop%28%29.md): Stops playback of the audio resource and discards the location in the audio stream.
- [isPlaying](isplaying.md): A Boolean value that indicates whether playback is currently active.
