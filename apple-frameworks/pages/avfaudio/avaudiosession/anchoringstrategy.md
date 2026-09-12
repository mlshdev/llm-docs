> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/anchoringstrategy](https://developer.apple.com/documentation/avfaudio/avaudiosession/anchoringstrategy)

# AVAudioSession.AnchoringStrategy

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

Constants that specify how to set the origin of audio in a head-tracked spatial experience.

## Declaration

```swift
enum AnchoringStrategy
```

## Topics

### Anchoring strategies

- [AVAudioSession.AnchoringStrategy.automatic](anchoringstrategy/automatic.md): The system determines the anchoring strategy.
- [AVAudioSession.AnchoringStrategy.front](anchoringstrategy/front.md): The audio session anchors to a person’s concept of front.
- [AVAudioSession.AnchoringStrategy.scene(identifier:)](anchoringstrategy/scene%28identifier_%29.md): The audio session anchors to a scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-1bpnq.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience(\_:)](setintendedspatialexperience%28__%29.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-swift.protocol.md)
- [AVAudioSession.SoundStageSize](soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate(\_:)](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
