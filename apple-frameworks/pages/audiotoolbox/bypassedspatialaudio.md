> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/bypassedspatialaudio

# BypassedSpatialAudio

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An experience in which the system does not apply spatial processing to the audio stream.

## Declaration

```swift
struct BypassedSpatialAudio
```

<a id="overview"></a>

## Overview

Use this if implementing your own spatial audio rendering or designing an experience that should not have spatial audio.

```swift
// Configure an audio player with a bypassed spatial audio experience.
myPlayer.intendedSpatialExperience = .bypassed
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
