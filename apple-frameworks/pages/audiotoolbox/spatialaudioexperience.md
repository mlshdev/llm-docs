> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/spatialaudioexperience](https://developer.apple.com/documentation/audiotoolbox/spatialaudioexperience)

# SpatialAudioExperience

**Framework:** Audio Toolbox  
**Kind:** Protocol  
**Availability:** visionOS 26.0+

Configure an audio stream for spatial computing.

## Declaration

```swift
protocol SpatialAudioExperience : Decodable, Encodable, Hashable, Sendable
```

## Mentioned In

- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md)

<a id="overview"></a>

## Overview

All audio playback APIs support 3D spatial rendering using SpatialAudioExperience. For example, with [AVAudioPlayer](../avfaudio/avaudioplayer.md):

```swift
// Create a player.
let myPlayer = try AVAudioPlayer(contentsOf: myAudioFileURL)

// Configure an audio player with a head-tracked spatial audio experience
// so that it's audible from a distinct location in space.
myPlayer.intendedSpatialExperience = .headTracked

// Play sound with the configured spatial audio experience.
player.play()
```

> **See Also**

> - [SpatialAudioExperiences.AnchoringStrategy](spatialaudioexperiences/anchoringstrategy.md)
> - [SpatialAudioExperiences.SoundStageSize](spatialaudioexperiences/soundstagesize.md)

## Topics

### Type Properties

- [automatic](spatialaudioexperience/automatic.md): Conforms when `Self` is `AutomaticSpatialAudio`. An automatic spatial experience.
- [bypassed](spatialaudioexperience/bypassed.md): Conforms when `Self` is `BypassedSpatialAudio`. A bypassed spatial audio experience.
- [fixed](spatialaudioexperience/fixed.md): Conforms when `Self` is `FixedSpatialAudio`. A fixed spatial audio experience with an automatic sound stage size.
- [headTracked](spatialaudioexperience/headtracked.md): Conforms when `Self` is `HeadTrackedSpatialAudio`. A head-tracked spatial audio experience with an automatic anchoring strategy and automatic sound stage size.

### Type Methods

- [fixed(soundStageSize:)](spatialaudioexperience/fixed%28soundstagesize_%29.md): Conforms when `Self` is `FixedSpatialAudio`. Create a fixed spatial audio experience with a specific sound stage size.
- [headTracked(\_:soundStageSize:)](spatialaudioexperience/headtracked%28__soundstagesize_%29.md): Conforms when `Self` is `HeadTrackedSpatialAudio`. Create a head-tracked spatial audio experience with a specific anchoring strategy and sound stage size.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AutomaticSpatialAudio](automaticspatialaudio.md)
- [BypassedSpatialAudio](bypassedspatialaudio.md)
- [FixedSpatialAudio](fixedspatialaudio.md)
- [HeadTrackedSpatialAudio](headtrackedspatialaudio.md)
