> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiobufferresource](https://developer.apple.com/documentation/realitykit/audiobufferresource)

# AudioBufferResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An audio resource that you load from an [AVAudioBuffer](../avfaudio/avaudiobuffer.md).

## Declaration

```swift
@MainActor @preconcurrency class AudioBufferResource
```

<a id="overview"></a>

## Overview

Use the resource to create an [AudioPlaybackController](audioplaybackcontroller.md) instance by calling an entity’s [prepareAudio(\_:)](entity/prepareaudio%28__%29.md) or [playAudio(\_:)](entity/playaudio%28__%29.md) function. The controller plays the audio from the location in space of the entity that created the controller.

## Topics

### Creating an audio buffer resource

- [init(buffer:configuration:)](audiobufferresource/init%28buffer_configuration_%29.md): Creates an `AudioBufferResource` with the given `AVAudioBuffer` and configuration.

### Describing the resource

- [configuration](audiobufferresource/configuration-swift.property.md): The configuration for this `AudioBufferResource`.
- [duration](audiobufferresource/duration.md): The duration of this `AudioBufferResource`.

### Supporting types

- [AudioBufferResource.Configuration](audiobufferresource/configuration-swift.struct.md)

### Deprecated

- [init(buffer:inputMode:shouldLoop:)](audiobufferresource/init%28buffer_inputmode_shouldloop_%29.md): Deprecated. Init an AudioBufferResource from an `AVAudioBuffer` instead of a file location. This is intended for use with `AVSpeechSynthesisVoice`.
- [shouldLoop](audiobufferresource/shouldloop.md): Deprecated. Whether or not this file loops during playback. This should be set for assets that are prepared as seamless loops. A looping resource will play forever until it is explicitly told to stop.

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
- [AudioFileGroupResource](audiofilegroupresource.md): An audio file group.
- [AudioLibraryComponent](audiolibrarycomponent.md): A container for audio resources that you can look up by user-defined names.
- [AudioResource](audioresource.md): A playable audio resource
- [AudioResource.Calibration](audioresource/calibration.md): A container for different calibration modes that can be applied for playback.
- [AudioResource.Normalization](audioresource/normalization.md): Normalization adjusts the level of an audio file or buffer to be at a defined target.
