> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/kaudioservicesdetailintendedspatialexperience

# kAudioServicesDetailIntendedSpatialExperience

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kAudioServicesDetailIntendedSpatialExperience;
```

<a id="discussion"></a>

## Discussion

Keys that are passed in a dictionary to AudioServicesPlaySystemSoundWithDetails

```
            Must be any non-nil CASpatialAudioExperience. The system sound
            will have this spatial experience for the duration of its
            playback and cannot change mid-playback.
```
