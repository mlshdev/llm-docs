> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/fixedspatialaudio](https://developer.apple.com/documentation/audiotoolbox/fixedspatialaudio)

# FixedSpatialAudio

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A spatial experience that does not take user motion into account.

## Declaration

```swift
struct FixedSpatialAudio
```

<a id="overview"></a>

## Overview

The lack of spatial tracking gives the impression of a “fixed” spatial experience locked to the user’s frame of reference.

```swift
// Configure an audio player with a fixed spatial audio experience.
myPlayer.intendedSpatialExperience = .fixed
```

For multi-channel experiences, you might also consider specifying the experience’s sound stage size if a system-specified size is not desirable.

```swift
// Configure an audio player with a fixed spatial audio experience
// that has a large sound stage size.
myPlayer.intendedSpatialExperience = .fixed(soundStageSize: .large)
```

## Topics

### Instance Properties

- [soundStageSize](fixedspatialaudio/soundstagesize.md): The experience’s sound stage size.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialAudioExperience](spatialaudioexperience.md)
