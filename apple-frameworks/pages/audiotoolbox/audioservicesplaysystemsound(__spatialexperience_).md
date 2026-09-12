> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesplaysystemsound(_:spatialexperience:)](https://developer.apple.com/documentation/audiotoolbox/audioservicesplaysystemsound(_:spatialexperience:))

# AudioServicesPlaySystemSound(\_:spatialExperience:)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** visionOS 26.0+

Play a system sound with the provided spatial audio experience.

## Declaration

```swift
func AudioServicesPlaySystemSound(_ systemSoundID: SystemSoundID, spatialExperience: any SpatialAudioExperience) async
```

## Mentioned In

- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md)

<a id="discussion"></a>

## Discussion

The system sound has this spatial experience for the duration of its playback and cannot change mid-playback.
