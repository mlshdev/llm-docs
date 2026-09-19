> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol/bypassed

# bypassed

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

## Declaration

```swift
static var bypassed: AVAudioSession.BypassedSpatialExperience { get }
```

## See Also

### Experiences

- [fixed(soundStageSize:)](fixed%28soundstagesize_%29.md): Conforms when `Self` is `AVAudioSession.FixedSpatialExperience`.
- [headTracked(soundStageSize:anchoringStrategy:)](headtracked%28soundstagesize_anchoringstrategy_%29.md): Conforms when `Self` is `AVAudioSession.HeadTrackedSpatialExperience`.
- [AVAudioSession.SoundStageSize](../avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](../avaudiosession/anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
