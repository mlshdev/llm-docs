> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/intendedspatialexperience-1dvhd](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/intendedspatialexperience-1dvhd)

# intendedSpatialExperience

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The AUAudioUnit’s intended spatial experience.

## Declaration

```objectivec
@property (copy, nonnull) CASpatialAudioExperience * intendedSpatialExperience;
```

<a id="discussion"></a>

## Discussion

Only useful for output AUAudioUnits - setting on a non-output AU is a no-op. The default value of CAAutomaticSpatialAudio means the output AUAudioUnit uses its AVAudioSession’s spatial experience. See CASpatialAudioExperience for more details.
