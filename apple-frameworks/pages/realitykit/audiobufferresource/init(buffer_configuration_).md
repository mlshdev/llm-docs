> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiobufferresource/init(buffer:configuration:)](https://developer.apple.com/documentation/realitykit/audiobufferresource/init(buffer:configuration:))

# init(buffer:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates an `AudioBufferResource` with the given `AVAudioBuffer` and configuration.

## Declaration

```swift
@MainActor @preconcurrency init(buffer: AVAudioBuffer, configuration: AudioBufferResource.Configuration = .init()) throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the given `buffer` is not or cannot be converted to a non-interleaved PCM buffer.
