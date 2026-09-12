> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/isnowplayingcandidate](https://developer.apple.com/documentation/avfaudio/avaudiosession/isnowplayingcandidate)

# isNowPlayingCandidate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

## Declaration

```swift
var isNowPlayingCandidate: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Only a single audio session for an app can be a Now Playing candidate. Designating multiple audio sessions for the same app as Now Playing candidates results in none of them being eligible.

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-1bpnq.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience(\_:)](setintendedspatialexperience%28__%29.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-swift.protocol.md)
- [AVAudioSession.SoundStageSize](soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
- [setIsNowPlayingCandidate(\_:)](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

# isNowPlayingCandidate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

## Declaration

```objectivec
@property (readonly) BOOL isNowPlayingCandidate;
```

<a id="Discussion"></a>

## Discussion

Only a single audio session for an app can be a Now Playing candidate. Designating multiple audio sessions for the same app as Now Playing candidates results in none of them being eligible.

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-qlty.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience:options:error:](setintendedspatialexperience_options_error_.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-c.enum.md)
- [AVAudioSessionSoundStageSize](soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [intendedSpatialExperienceOptions](intendedspatialexperienceoptions.md): A dictionary of options that customize the spatial experience.
- [AVAudioSessionSpatialExperienceOption](../avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.
- [setIsNowPlayingCandidate:error:](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
