> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiobufferresource/shouldloop](https://developer.apple.com/documentation/realitykit/audiobufferresource/shouldloop)

# shouldLoop

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.

> Use AudioBufferResource.init(buffer:configuration:) instead.

## Declaration

```swift
@MainActor @preconcurrency var shouldLoop: Bool { get }
```

## See Also

### Deprecated

- [init(buffer:inputMode:shouldLoop:)](init%28buffer_inputmode_shouldloop_%29.md): Deprecated. Init an AudioBufferResource from an `AVAudioBuffer` instead of a file location. This is intended for use with `AVSpeechSynthesisVoice`.
