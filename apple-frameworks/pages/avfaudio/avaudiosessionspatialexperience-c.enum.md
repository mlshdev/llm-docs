> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionspatialexperience-c.enum](https://developer.apple.com/documentation/avfaudio/avaudiosessionspatialexperience-c.enum)

# AVAudioSessionSpatialExperience

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** visionOS

## Declaration

```objectivec
enum AVAudioSessionSpatialExperience : NSInteger;
```

## Topics

### Experiences

- [AVAudioSessionSpatialExperienceBypassed](avaudiosessionspatialexperience-c.enum/avaudiosessionspatialexperiencebypassed.md)
- [AVAudioSessionSpatialExperienceFixed](avaudiosessionspatialexperience-c.enum/avaudiosessionspatialexperiencefixed.md)
- [AVAudioSessionSpatialExperienceHeadTracked](avaudiosessionspatialexperience-c.enum/avaudiosessionspatialexperienceheadtracked.md)

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](avaudiosession/intendedspatialexperience-qlty.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience:options:error:](avaudiosession/setintendedspatialexperience_options_error_.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSoundStageSize](avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [intendedSpatialExperienceOptions](avaudiosession/intendedspatialexperienceoptions.md): A dictionary of options that customize the spatial experience.
- [AVAudioSessionSpatialExperienceOption](avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.
- [isNowPlayingCandidate](avaudiosession/isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate:error:](avaudiosession/setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
