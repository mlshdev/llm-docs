> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackcontroller/isplaying](https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/isplaying)

# isPlaying

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean value that indicates whether playback is currently active.

## Declaration

```swift
@MainActor @preconcurrency var isPlaying: Bool { get }
```

<a id="discussion"></a>

## Discussion

You may experience a small delay between when you call the [play()](play%28%29.md) method and when the [isPlaying](isplaying.md) property reports `true`.

## See Also

### Starting and stopping audio playback

- [play()](play%28%29.md): Plays the audio resource.
- [pause()](pause%28%29.md): Pauses playback of the audio resource while maintaining the position in the audio stream.
- [stop()](stop%28%29.md): Stops playback of the audio resource and discards the location in the audio stream.
