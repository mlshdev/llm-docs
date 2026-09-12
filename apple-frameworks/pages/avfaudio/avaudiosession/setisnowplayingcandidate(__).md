> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setisnowplayingcandidate(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setisnowplayingcandidate(_:))

# setIsNowPlayingCandidate(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

## Declaration

```swift
func setIsNowPlayingCandidate(_ inValue: Bool) throws
```

## Parameters

- `inValue`: The new state to set.

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
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

# setIsNowPlayingCandidate:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

## Declaration

```objectivec
- (BOOL) setIsNowPlayingCandidate:(BOOL) inValue error:(NSError **) outError;
```

## Parameters

- `inValue`: The new state to set.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

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
- [isNowPlayingCandidate](isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
