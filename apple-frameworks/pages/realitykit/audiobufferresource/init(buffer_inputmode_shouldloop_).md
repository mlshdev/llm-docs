> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiobufferresource/init(buffer:inputmode:shouldloop:)](https://developer.apple.com/documentation/realitykit/audiobufferresource/init(buffer:inputmode:shouldloop:))

# init(buffer:inputMode:shouldLoop:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0)

Init an AudioBufferResource from an `AVAudioBuffer` instead of a file location. This is intended for use with `AVSpeechSynthesisVoice`.

> Use AudioBufferResource.init(buffer:configuration:) instead.

## Declaration

```swift
@MainActor @preconcurrency init(buffer: AVAudioBuffer, inputMode: AudioResource.InputMode = .spatial, shouldLoop: Bool = false) throws
```

## Parameters

- `inputMode`: How the audio engine processes a resource. nonSpatial, spatial, ambient
- `shouldLoop`: Bool value to decide if the audio clip should loop

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws an error when the `AVAudioBuffer`  cannot be cast or converted to `AVAudioPCMBuffer`.

## See Also

### Deprecated

- [shouldLoop](shouldloop.md): Deprecated. Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.
