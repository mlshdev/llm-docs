> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/featureextractionparameters/featureextractiontimewindowsize](https://developer.apple.com/documentation/createml/mlsoundclassifier/featureextractionparameters/featureextractiontimewindowsize)

# featureExtractionTimeWindowSize

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A time duration, in seconds, that determines how much audio data the feature-extraction session reads each time it samples an audio file.

## Declaration

```swift
var featureExtractionTimeWindowSize: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The time-window size defaults to `0.975` seconds and must be in the range `[0.5, 15.0]`.

Feature-extraction sessions that use [MLSoundClassifier.ModelParameters.FeatureExtractorType.vggish(revision:)](../modelparameters-swift.struct/featureextractortype/vggish%28revision_%29.md) ignore this value and always use a time-window size of `0.975` seconds.

## See Also

### Accessing feature extraction parameters

- [overlapFactor](overlapfactor.md): The proportion of overlap that the feature-extraction session uses to analyze two consecutive windows in the audio data.
- [featureExtractor](featureextractor.md): The algorithm type the session uses to extract features from audio files.
