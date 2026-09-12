> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/automaticspatialaudio](https://developer.apple.com/documentation/audiotoolbox/automaticspatialaudio)

# AutomaticSpatialAudio

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A spatial audio experience determined by the system.

## Declaration

```swift
struct AutomaticSpatialAudio
```

<a id="overview"></a>

## Overview

Sounds with an automatic spatial audio experience that belong to an [AVAudioSession](../avfaudio/avaudiosession.md) inherit its doc://com.apple.documentation/documentation/avfaudio/avaudiosession/intendedspatialexperience-1qwbe.

```swift
// Configure an audio player with an automatic spatial audio experience.
myPlayer.intendedSpatialExperience = .automatic
```

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialAudioExperience](spatialaudioexperience.md)
