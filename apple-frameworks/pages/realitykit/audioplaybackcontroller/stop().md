> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/stop()

# stop()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Stops playback of the audio resource and discards the location in the audio stream.

## Declaration

```swift
@MainActor @preconcurrency func stop()
```

<a id="discussion"></a>

## Discussion

The next time you call [play()](play%28%29.md), playback starts at the beginning of the stream.

## See Also

### Starting and stopping audio playback

- [play()](play%28%29.md): Plays the audio resource.
- [pause()](pause%28%29.md): Pauses playback of the audio resource while maintaining the position in the audio stream.
- [isPlaying](isplaying.md): A Boolean value that indicates whether playback is currently active.
