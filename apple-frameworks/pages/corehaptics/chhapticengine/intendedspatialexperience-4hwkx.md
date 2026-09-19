> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehaptics/chhapticengine/intendedspatialexperience-4hwkx

# intendedSpatialExperience

**Interface language:** Objective-C

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

## Declaration

```objectivec
@property (copy, nonnull) CASpatialAudioExperience * intendedSpatialExperience;
```

<a id="discussion"></a>

## Discussion

The CHHapticEngine’s intended `CASpatialAudioExperience`.

Only useful for engines that have audio output. If unspecified, the property value defaults to `CAAutomaticSpatialAudio`.
