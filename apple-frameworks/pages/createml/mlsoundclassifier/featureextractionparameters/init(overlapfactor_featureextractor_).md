> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/featureextractionparameters/init(overlapfactor:featureextractor:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/featureextractionparameters/init(overlapfactor:featureextractor:))

# init(overlapFactor:featureExtractor:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates the parameters for a feature-extraction session with a default time window size.

## Declaration

```swift
init(overlapFactor: Double = __Defaults.overlapFactor, featureExtractor: MLSoundClassifier.ModelParameters.FeatureExtractorType = __Defaults.featureExtractor)
```

## Parameters

- `overlapFactor`: A portion of overlap between consecutive audio analysis windows. The value must be in the range `[0.0, 1.0)`.
- `featureExtractor`: An algorithm type the session uses to extract features from audio files.

<a id="discussion"></a>

## Discussion

The initializer sets [featureExtractionTimeWindowSize](featureextractiontimewindowsize.md) to a default value.

## See Also

### Creating feature extraction parameters

- [init(overlapFactor:featureExtractor:featureExtractionTimeWindowSize:)](init%28overlapfactor_featureextractor_featureextractiontimewindowsize_%29.md): Creates the parameters for a feature-extraction session.
