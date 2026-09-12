> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol/fixed(soundstagesize:)](https://developer.apple.com/documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol/fixed(soundstagesize:))

# fixed(soundStageSize:)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

## Declaration

```swift
static func fixed(soundStageSize: AVAudioSession.SoundStageSize) -> Self
```

## See Also

### Experiences

- [headTracked(soundStageSize:anchoringStrategy:)](headtracked%28soundstagesize_anchoringstrategy_%29.md): Conforms when `Self` is `AVAudioSession.HeadTrackedSpatialExperience`.
- [bypassed](bypassed.md): Conforms when `Self` is `AVAudioSession.BypassedSpatialExperience`.
- [AVAudioSession.SoundStageSize](../avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](../avaudiosession/anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
