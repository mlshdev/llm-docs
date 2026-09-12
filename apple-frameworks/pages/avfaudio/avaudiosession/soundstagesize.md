> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/soundstagesize](https://developer.apple.com/documentation/avfaudio/avaudiosession/soundstagesize)

# AVAudioSession.SoundStageSize (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** visionOS

Constants that specify the perceived size of sounds the audio session plays.

## Declaration

```swift
enum SoundStageSize
```

## Topics

### Sound stage sizes

- [AVAudioSession.SoundStageSize.automatic](soundstagesize/automatic.md): The system sets the sound stage size.
- [AVAudioSession.SoundStageSize.small](soundstagesize/small.md): A small sound stage.
- [AVAudioSession.SoundStageSize.medium](soundstagesize/medium.md): A medium sound stage.
- [AVAudioSession.SoundStageSize.large](soundstagesize/large.md): A large sound stage.

### Initializers

- [init(rawValue:)](soundstagesize/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-1bpnq.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience(\_:)](setintendedspatialexperience%28__%29.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-swift.protocol.md)
- [AVAudioSession.AnchoringStrategy](anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate(\_:)](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

# AVAudioSessionSoundStageSize (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** visionOS

Constants that specify the perceived size of sounds the audio session plays.

## Declaration

```objectivec
enum AVAudioSessionSoundStageSize : NSInteger;
```

## Topics

### Sound stage sizes

- [AVAudioSessionSoundStageSizeAutomatic](soundstagesize/automatic.md): The system sets the sound stage size.
- [AVAudioSessionSoundStageSizeSmall](soundstagesize/small.md): A small sound stage.
- [AVAudioSessionSoundStageSizeMedium](soundstagesize/medium.md): A medium sound stage.
- [AVAudioSessionSoundStageSizeLarge](soundstagesize/large.md): A large sound stage.

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-qlty.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience:options:error:](setintendedspatialexperience_options_error_.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-c.enum.md)
- [intendedSpatialExperienceOptions](intendedspatialexperienceoptions.md): A dictionary of options that customize the spatial experience.
- [AVAudioSessionSpatialExperienceOption](../avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate:error:](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
