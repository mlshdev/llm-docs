> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol](https://developer.apple.com/documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol)

# AVAudioSessionSpatialExperience

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** visionOS 1.0+

## Declaration

```swift
protocol AVAudioSessionSpatialExperience
```

## Topics

### Experiences

- [fixed(soundStageSize:)](avaudiosessionspatialexperience-swift.protocol/fixed%28soundstagesize_%29.md): Conforms when `Self` is `AVAudioSession.FixedSpatialExperience`.
- [headTracked(soundStageSize:anchoringStrategy:)](avaudiosessionspatialexperience-swift.protocol/headtracked%28soundstagesize_anchoringstrategy_%29.md): Conforms when `Self` is `AVAudioSession.HeadTrackedSpatialExperience`.
- [bypassed](avaudiosessionspatialexperience-swift.protocol/bypassed.md): Conforms when `Self` is `AVAudioSession.BypassedSpatialExperience`.
- [AVAudioSession.SoundStageSize](avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](avaudiosession/anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.

## Relationships

### Conforming Types

- [AVAudioSession.BypassedSpatialExperience](avaudiosession/bypassedspatialexperience.md)
- [AVAudioSession.FixedSpatialExperience](avaudiosession/fixedspatialexperience.md)
- [AVAudioSession.HeadTrackedSpatialExperience](avaudiosession/headtrackedspatialexperience.md)

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](avaudiosession/intendedspatialexperience-1bpnq.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience(\_:)](avaudiosession/setintendedspatialexperience%28__%29.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSession.SoundStageSize](avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](avaudiosession/anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
- [isNowPlayingCandidate](avaudiosession/isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate(\_:)](avaudiosession/setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
