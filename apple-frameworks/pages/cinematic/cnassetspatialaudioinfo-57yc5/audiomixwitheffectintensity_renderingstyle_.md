> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetspatialaudioinfo-57yc5/audiomixwitheffectintensity:renderingstyle:](https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/audiomixwitheffectintensity:renderingstyle:)

# audioMixWithEffectIntensity:renderingStyle:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS

## Declaration

```objectivec
- (AVAudioMix *) audioMixWithEffectIntensity:(float) effectIntensity renderingStyle:(CNSpatialAudioRenderingStyle) renderingStyle;
```

<a id="discussion"></a>

## Discussion

Returns an instance of `AVAudioMix` encapsulating all spatial audio related data with specified effect intensity and rendering style.

Returns an `AVAudioMix` containing all the necessary state to operate on the asset with Spatial Audio effects enabled
