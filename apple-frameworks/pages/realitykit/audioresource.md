> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioresource](https://developer.apple.com/documentation/realitykit/audioresource)

# AudioResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A playable audio resource

## Declaration

```swift
@MainActor @preconcurrency class AudioResource
```

## Topics

### Deprecated

- [inputMode](audioresource/inputmode-swift.property.md): Deprecated.
- [AudioResource.InputMode](audioresource/inputmode-swift.enum.md): Deprecated.

### Structures

- [AudioResource.Calibration](audioresource/calibration.md): A container for different calibration modes that can be applied for playback.
- [AudioResource.Normalization](audioresource/normalization.md): Normalization adjusts the level of an audio file or buffer to be at a defined target.

## Relationships

### Inherited By

- [AudioBufferResource](audiobufferresource.md)
- [AudioFileGroupResource](audiofilegroupresource.md)
- [AudioFileResource](audiofileresource.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio resources

- [AudioFileResource](audiofileresource.md): An audio resource that you load from a file or from a URL.
- [AudioFileGroupResource](audiofilegroupresource.md): An audio file group.
- [AudioBufferResource](audiobufferresource.md): An audio resource that you load from an [AVAudioBuffer](../avfaudio/avaudiobuffer.md).
- [AudioLibraryComponent](audiolibrarycomponent.md): A container for audio resources that you can look up by user-defined names.
- [AudioResource.Calibration](audioresource/calibration.md): A container for different calibration modes that can be applied for playback.
- [AudioResource.Normalization](audioresource/normalization.md): Normalization adjusts the level of an audio file or buffer to be at a defined target.
