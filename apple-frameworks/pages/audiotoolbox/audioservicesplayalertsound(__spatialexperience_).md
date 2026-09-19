> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audioservicesplayalertsound(_:spatialexperience:)

# AudioServicesPlayAlertSound(\_:spatialExperience:)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** visionOS 26.0+

Play an alert sound with the provided spatial audio experience.

## Declaration

```swift
func AudioServicesPlayAlertSound(_ systemSoundID: SystemSoundID, spatialExperience: any SpatialAudioExperience) async
```

## Mentioned In

- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md)

<a id="discussion"></a>

## Discussion

The alert sound has this spatial experience for the duration of its playback and cannot change mid-playback.
