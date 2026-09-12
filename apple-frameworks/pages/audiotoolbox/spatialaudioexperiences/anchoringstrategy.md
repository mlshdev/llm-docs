> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/spatialaudioexperiences/anchoringstrategy](https://developer.apple.com/documentation/audiotoolbox/spatialaudioexperiences/anchoringstrategy)

# SpatialAudioExperiences.AnchoringStrategy

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

The center of a head-tracked spatial experience.

## Declaration

```swift
enum AnchoringStrategy
```

<a id="overview"></a>

## Overview

For mono sounds, this defines the sound’s single location. For multi-channel sounds this defines the position of the channel layout’s front with all channels placed around the user relative to that front.

## Topics

### Enumeration Cases

- [SpatialAudioExperiences.AnchoringStrategy.automatic](anchoringstrategy/automatic.md): A system-defined anchoring strategy.
- [SpatialAudioExperiences.AnchoringStrategy.front](anchoringstrategy/front.md): Anchor to the front of the user’s space.
- [SpatialAudioExperiences.AnchoringStrategy.scene(identifier:)](anchoringstrategy/scene%28identifier_%29.md): Anchor to the visual center of a particular UIScene.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
