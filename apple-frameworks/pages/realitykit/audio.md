> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio](https://developer.apple.com/documentation/realitykit/audio)

# Audio

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A namespace for types that are used commonly in audio.

## Declaration

```swift
enum Audio
```

## Topics

### Playing audio resources

- [playAudio(\_:)](audio/playaudio%28__%29.md): Prepares and plays multiple audio resources for synchronized playback
- [playAudio(\_:at:)](audio/playaudio%28__at_%29.md): Prepares and plays multiple audio resources for synchronized playback at a specified time.
- [prepareAudio(\_:)](audio/prepareaudio%28__%29.md): Prepares multiple audio resources for synchronized playback without starting them.

### Defining acoustic properties

- [Audio.Material](audio/material.md): A type that describes the acoustic characteristics of a surface.
- [Audio.Absorption](audio/absorption.md): An object that holds a set of absorption data.
- [Audio.Scattering](audio/scattering.md): An object that holds a set of scattering data.

### Type Aliases

- [Audio.Decibel](audio/decibel.md): The unit for measuring intensity of sound on a logarithmic scale.
- [Audio.GeneratorRenderHandler](audio/generatorrenderhandler.md): A handler that generates real-time audio.

### Enumerations

- [Audio.Directivity](audio/directivity.md): The radiation pattern of sound emitted from an entity.
- [Audio.DistanceAttenuation](audio/distanceattenuation.md): The different ways that audio intensity diminishes as the distance between the listener and the sound source increases.

## See Also

### Audio types

- [Audio.Decibel](audio/decibel.md): The unit for measuring intensity of sound on a logarithmic scale.
- [Audio.Directivity](audio/directivity.md): The radiation pattern of sound emitted from an entity.
- [Audio.DistanceAttenuation](audio/distanceattenuation.md): The different ways that audio intensity diminishes as the distance between the listener and the sound source increases.
