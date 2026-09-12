> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setintendedspatialexperience:options:error:](https://developer.apple.com/documentation/avfaudio/avaudiosession/setintendedspatialexperience:options:error:)

# setIntendedSpatialExperience:options:error:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Sets the spatial audio experience your app intends to provide the user.

## Declaration

```objectivec
- (BOOL) setIntendedSpatialExperience:(AVAudioSessionSpatialExperience) intendedSpatialExperience options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `intendedSpatialExperience`: The spatial audio experience to set.
- `options`: A dictionary of options that customize the experience.
- `error`: If an error occurs, an object that provides the details of the error.

## Topics

### Options

- [AVAudioSessionSpatialExperienceOptionAnchoringStrategy](../avaudiosessionspatialexperienceoptionanchoringstrategy.md): An option that sets where the audio anchors in a head-tracked spatial experience.
- [AVAudioSessionSpatialExperienceOptionSceneIdentifier](../avaudiosessionspatialexperienceoptionsceneidentifier.md): An option that identifies the scene the audio anchors to.
- [AVAudioSessionSpatialExperienceOptionSoundStageSize](../avaudiosessionspatialexperienceoptionsoundstagesize.md): An option that sets how large the sound stage is in a spatial experience.
- [AVAudioSessionSpatialExperienceOption](../avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.

## See Also

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](intendedspatialexperience-qlty.md): The spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](../avaudiosessionspatialexperience-c.enum.md)
- [AVAudioSessionSoundStageSize](soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [intendedSpatialExperienceOptions](intendedspatialexperienceoptions.md): A dictionary of options that customize the spatial experience.
- [AVAudioSessionSpatialExperienceOption](../avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate:error:](setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
