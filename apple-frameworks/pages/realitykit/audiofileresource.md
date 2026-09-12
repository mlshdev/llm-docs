> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource](https://developer.apple.com/documentation/realitykit/audiofileresource)

# AudioFileResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An audio resource that you load from a file or from a URL.

## Declaration

```swift
@MainActor @preconcurrency class AudioFileResource
```

<a id="overview"></a>

## Overview

Load an audio file resource, like an audio file stored in .aiff or other format, by calling one of the load functions. Use the resource to create an [AudioPlaybackController](audioplaybackcontroller.md) instance by calling an entity’s [prepareAudio(\_:)](entity/prepareaudio%28__%29.md) or [playAudio(\_:)](entity/playaudio%28__%29.md) function. The controller plays the audio from the location in space of the entity that created the controller.

## Topics

### Loading audio from a bundle

- [init(named:from:in:)](audiofileresource/init%28named_from_in_%29.md): Initializes a preconfigured AudioFileResource asynchronously from a Reality Composer Pro project with the given `name` as the the prim-path of the AudioFile, and the `scene` as the name of the USD file name.
- [init(named:in:configuration:)](audiofileresource/init%28named_in_configuration_%29.md): Initializes an AudioFileResource asynchronously.

### Loading audio from a URL

- [init(contentsOf:withName:configuration:)](audiofileresource/init%28contentsof_withname_configuration_%29.md): Initializes an AudioFileResource asynchronously.

### Describing the resource

- [configuration](audiofileresource/configuration-swift.property.md): The configuration of this `AudioFileResource`.
- [duration](audiofileresource/duration.md): The duration of this `AudioFileResource`.
- [name](audiofileresource/name.md): The name of this `AudioFileResource`.

### Supporting types

- [AudioFileResource.Configuration](audiofileresource/configuration-swift.struct.md): A container for various settings for loading an audio file resource.
- [AudioFileResource.LoadingStrategy](audiofileresource/loadingstrategy-swift.enum.md): A container for different strategies on how to handle resources’ data before and during playback.

### Deprecated

- [load(named:in:inputMode:loadingStrategy:shouldLoop:)](audiofileresource/load%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(named:in:inputMode:loadingStrategy:shouldLoop:)](audiofileresource/loadasync%28named_in_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [load(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](audiofileresource/load%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated. Synchronously loads an audio resource.
- [loadAsync(contentsOf:withName:inputMode:loadingStrategy:shouldLoop:)](audiofileresource/loadasync%28contentsof_withname_inputmode_loadingstrategy_shouldloop_%29.md): Deprecated.
- [loadingStrategy](audiofileresource/loadingstrategy-swift.property.md): Deprecated. The resource’s memory model.
- [shouldLoop](audiofileresource/shouldloop.md): Deprecated. Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.

### Creating an audio resource

- [init(from:configuration:)](audiofileresource/init%28from_configuration_%29.md): Initializes an AudioFileResource from in-memory data asynchronously.

### Operators

- [==(\_:\_:)](audiofileresource/==%28____%29.md)

### Type Methods

- [load(contentsOf:withName:configuration:)](audiofileresource/load%28contentsof_withname_configuration_%29.md): Loads an AudioFileResource synchronously.
- [load(named:from:in:)](audiofileresource/load%28named_from_in_%29.md): Loads a preconfigured AudioFileResource from a Reality Composer Pro project with the given `name` as the the prim-path of the AudioFile, and the `scene` as the name of the USD file name.
- [load(named:in:configuration:)](audiofileresource/load%28named_in_configuration_%29.md): Loads an AudioFileResource synchronously.

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

- [AudioFileGroupResource](audiofilegroupresource.md): An audio file group.
- [AudioBufferResource](audiobufferresource.md): An audio resource that you load from an [AVAudioBuffer](../avfaudio/avaudiobuffer.md).
- [AudioLibraryComponent](audiolibrarycomponent.md): A container for audio resources that you can look up by user-defined names.
- [AudioResource](audioresource.md): A playable audio resource
- [AudioResource.Calibration](audioresource/calibration.md): A container for different calibration modes that can be applied for playback.
- [AudioResource.Normalization](audioresource/normalization.md): Normalization adjusts the level of an audio file or buffer to be at a defined target.
