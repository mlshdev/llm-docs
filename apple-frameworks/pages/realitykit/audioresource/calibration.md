> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioresource/calibration](https://developer.apple.com/documentation/realitykit/audioresource/calibration)

# AudioResource.Calibration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A container for different calibration modes that can be applied for playback.

## Declaration

```swift
struct Calibration
```

## Topics

### Type Methods

- [absolute(dBSPL:)](calibration/absolute%28dbspl_%29.md): The reference level (-12dBLUFS) of the audio source material will be reproduced at the given `dBSPL` level on known audio output hardware.
- [relative(dBSPL:)](calibration/relative%28dbspl_%29.md): Relative adjustment of the resource from the default level of the audio output hardware.

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
- [AudioResource.Normalization](normalization.md): Normalization adjusts the level of an audio file or buffer to be at a defined target.
