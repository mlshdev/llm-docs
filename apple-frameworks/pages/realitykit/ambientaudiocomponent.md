> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ambientaudiocomponent](https://developer.apple.com/documentation/realitykit/ambientaudiocomponent)

# AmbientAudioComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A component that configures the ambient rendering of sounds from an entity.

## Declaration

```swift
struct AmbientAudioComponent
```

<a id="overview"></a>

## Overview

Ambient audio sources emit each channel of an audio resource from an angle projected from the entity, without reverberation. Ambient audio sources take into account the relative orientation of the source and the listener. Position is not taken into account; the channels do not get louder as the user moves toward them.

The audio resource’s front channels (e.g., mono, center) are projected into the entity’s -Z direction, with the rear channels projected into +Z. The left channels are laid out in -X and the right channels are laid out in +X.

```swift
let entity = Entity()
let resource = try AudioFileResource.load(named: "MyAudioFile")
entity.ambientAudio = AmbientAudioComponent()
entity.playAudio(resource)
```

The `AmbientAudioComponent` allows you to set the overall level of all sounds played from the entity with the `gain` property, in relative Decibels, in the range `-.infinity ... .zero` where `-infinity` is silent and `.zero` is nominal.

```swift
entity.ambientAudio?.gain = -10
```

Ambient audio sources are well suited to play back multichannel content which captures the acoustics of its originating environment in the recording process (e.g., multichannel field recordings of outdoor environments).

## Topics

### Initializers

- [init(gain:)](ambientaudiocomponent/init%28gain_%29.md): Configure the behavior of an ambient audio source.

### Instance Properties

- [gain](ambientaudiocomponent/gain.md): The overall level for all sounds emitted from an entity.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Audio source components

- [Creating a Spaceship game](creating-a-spaceship-game.md): Build an immersive game using RealityKit audio, simulation, and rendering features.
- [Playing spatial audio](../visionos/playing-spatial-audio-in-visionos.md): Create and adjust spatial audio in visionOS with RealityKit.
- [SpatialAudioComponent](spatialaudiocomponent.md): A component that configures how sounds emit from an entity into a person’s environment.
- [ChannelAudioComponent](channelaudiocomponent.md): A component that configures channel-based rendering of sounds from an entity.
