> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/headtrackedspatialaudio](https://developer.apple.com/documentation/audiotoolbox/headtrackedspatialaudio)

# HeadTrackedSpatialAudio

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A spatial experience that takes user motion into account.

## Declaration

```swift
struct HeadTrackedSpatialAudio
```

## Mentioned In

- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md)

<a id="overview"></a>

## Overview

Sounds with a head-tracked experience come from a distinct location in space as defined by their anchoring strategy.

```swift
// Configure an audio player with a scene-anchored spatial audio experience.
myPlayer.intendedSpatialExperience = .headTracked(.scene(identifier: mySceneID))
```

For multi-channel experiences, you might also consider specifying the experience’s sound stage size if a system-specified size is not desirable.

```swift
// Configure an audio player with a front-anchored spatial audio experience
// and a large sound stage size.
myPlayer.intendedSpatialExperience = .headTracked(.front, soundStageSize: .large)
```

## Topics

### Instance Properties

- [anchoringStrategy](headtrackedspatialaudio/anchoringstrategy.md): The experience’s anchoring strategy.
- [soundStageSize](headtrackedspatialaudio/soundstagesize.md): The experience’s sound stage size.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialAudioExperience](spatialaudioexperience.md)
