> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/intendedspatialexperience-1bpnq](https://developer.apple.com/documentation/avfaudio/avaudiosession/intendedspatialexperience-1bpnq)

# intendedSpatialExperience

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The spatial audio experience your app intends to provide the user.

## Declaration

```swift
@nonobjc var intendedSpatialExperience: any AVAudioSessionSpatialExperience { get }
```

## See Also

### Configuring the spatial experience in visionOS

- [setIntendedSpatialExperience(\_:)](setintendedspatialexperience%28__%29.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-swift.protocol.md)
- [AVAudioSession.SoundStageSize](soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate(\_:)](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
