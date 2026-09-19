> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlsoundclassifier/featureextractionparameters/featureextractor

# featureExtractor

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The algorithm type the session uses to extract features from audio files.

## Declaration

```swift
var featureExtractor: MLSoundClassifier.ModelParameters.FeatureExtractorType
```

## See Also

### Accessing feature extraction parameters

- [overlapFactor](overlapfactor.md): The proportion of overlap that the feature-extraction session uses to analyze two consecutive windows in the audio data.
- [featureExtractionTimeWindowSize](featureextractiontimewindowsize.md): A time duration, in seconds, that determines how much audio data the feature-extraction session reads each time it samples an audio file.
