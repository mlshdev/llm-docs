> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol/headtracked(soundstagesize:anchoringstrategy:)

# headTracked(soundStageSize:anchoringStrategy:)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

## Declaration

```swift
static func headTracked(soundStageSize: AVAudioSession.SoundStageSize, anchoringStrategy: AVAudioSession.AnchoringStrategy) -> Self
```

## See Also

### Experiences

- [fixed(soundStageSize:)](fixed%28soundstagesize_%29.md): Conforms when `Self` is `AVAudioSession.FixedSpatialExperience`.
- [bypassed](bypassed.md): Conforms when `Self` is `AVAudioSession.BypassedSpatialExperience`.
- [AVAudioSession.SoundStageSize](../avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](../avaudiosession/anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
