> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofilegroupresource](https://developer.apple.com/documentation/realitykit/audiofilegroupresource)

# AudioFileGroupResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

An audio file group.

## Declaration

```swift
@MainActor @preconcurrency class AudioFileGroupResource
```

## Topics

### Creating a resource

- [init(\_:)](audiofilegroupresource/init%28__%29.md): Creates a group resource from an array of audio file resources (backward compatibility).
- [init(named:from:in:)](audiofilegroupresource/init%28named_from_in_%29.md): Initializes an audio resource from a Reality Composer Pro project.
- [load(named:from:in:)](audiofilegroupresource/load%28named_from_in_%29.md): Loads an audio resource from a Reality Composer Pro project.

### Working with the resource contents

- [resources](audiofilegroupresource/resources.md): The `AudioFileResource` objects which comprise this `AudioFileGroupResource`.

### Operators

- [==(\_:\_:)](audiofilegroupresource/==%28____%29.md)

## Relationships

### Inherits From

- [AudioResource](audioresource.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio resources

- [AudioFileResource](audiofileresource.md): An audio resource that you load from a file or from a URL.
- [AudioBufferResource](audiobufferresource.md): An audio resource that you load from an [AVAudioBuffer](../avfaudio/avaudiobuffer.md).
- [AudioLibraryComponent](audiolibrarycomponent.md): A container for audio resources that you can look up by user-defined names.
- [AudioResource](audioresource.md): A playable audio resource
- [AudioResource.Calibration](audioresource/calibration.md): A container for different calibration modes that can be applied for playback.
- [AudioResource.Normalization](audioresource/normalization.md): Normalization adjusts the level of an audio file or buffer to be at a defined target.
