> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/intendedspatialexperienceoptions](https://developer.apple.com/documentation/avfaudio/avaudiosession/intendedspatialexperienceoptions)

# intendedSpatialExperienceOptions

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A dictionary of options that customize the spatial experience.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * intendedSpatialExperienceOptions;
```

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-qlty.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience:options:error:](setintendedspatialexperience_options_error_.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-c.enum.md)
- [AVAudioSessionSoundStageSize](soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSessionSpatialExperienceOption](../avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate:error:](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
