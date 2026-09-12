> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/spatialaudioexperiences/soundstagesize](https://developer.apple.com/documentation/audiotoolbox/spatialaudioexperiences/soundstagesize)

# SpatialAudioExperiences.SoundStageSize

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

Configure the distribution of audio channels in 3D space.

## Declaration

```swift
enum SoundStageSize
```

<a id="overview"></a>

## Overview

For multi-channel sounds, the sound stage size describes how the channels are positioned relative to the coordinates described in the sound’s channel layout.

## Topics

### Enumeration Cases

- [SpatialAudioExperiences.SoundStageSize.automatic](soundstagesize/automatic.md): A system-defined sound stage size.
- [SpatialAudioExperiences.SoundStageSize.large](soundstagesize/large.md): Spreads an audio stream’s channels around the user according to the coordinates described in its channel layout.
- [SpatialAudioExperiences.SoundStageSize.medium](soundstagesize/medium.md): Pulls an audio stream’s channels closer to the channel layout’s front.
- [SpatialAudioExperiences.SoundStageSize.small](soundstagesize/small.md): Places all of an audio stream’s channels near the layout’s front.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
