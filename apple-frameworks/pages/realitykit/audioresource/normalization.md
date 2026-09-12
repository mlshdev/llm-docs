> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioresource/normalization](https://developer.apple.com/documentation/realitykit/audioresource/normalization)

# AudioResource.Normalization

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Normalization adjusts the level of an audio file or buffer to be at a defined target.

## Declaration

```swift
struct Normalization
```

<a id="overview"></a>

## Overview

Audio files produced in a production environment where dynamics are already being processed may not need normalization.

Normalization has a CPU cost on *load* for audio file resources that have a loading strategy of [AudioFileResource.LoadingStrategy.preload](../audiofileresource/loadingstrategy-swift.enum/preload.md) and a CPU cost on *playback* for audio files that have a loading strategy of [AudioFileResource.LoadingStrategy.stream](../audiofileresource/loadingstrategy-swift.enum/stream.md).

## Topics

### Type Properties

- [dynamic](normalization/dynamic.md): Performs dynamic compression to normalize the audio source material to a level of -12dBLUFS in real-time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio resources

- [AudioFileResource](../audiofileresource.md): An audio resource that you load from a file or from a URL.
- [AudioFileGroupResource](../audiofilegroupresource.md): An audio file group.
- [AudioBufferResource](../audiobufferresource.md): An audio resource that you load from an [AVAudioBuffer](../../avfaudio/avaudiobuffer.md).
- [AudioLibraryComponent](../audiolibrarycomponent.md): A container for audio resources that you can look up by user-defined names.
- [AudioResource](../audioresource.md): A playable audio resource
- [AudioResource.Calibration](calibration.md): A container for different calibration modes that can be applied for playback.
