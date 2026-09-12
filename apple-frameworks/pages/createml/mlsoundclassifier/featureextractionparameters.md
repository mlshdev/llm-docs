> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/featureextractionparameters](https://developer.apple.com/documentation/createml/mlsoundclassifier/featureextractionparameters)

# MLSoundClassifier.FeatureExtractionParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Parameters that affect the process of extracting sound features from audio files.

## Declaration

```swift
struct FeatureExtractionParameters
```

## Topics

### Creating feature extraction parameters

- [init(overlapFactor:featureExtractor:featureExtractionTimeWindowSize:)](featureextractionparameters/init%28overlapfactor_featureextractor_featureextractiontimewindowsize_%29.md): Creates the parameters for a feature-extraction session.
- [init(overlapFactor:featureExtractor:)](featureextractionparameters/init%28overlapfactor_featureextractor_%29.md): Creates the parameters for a feature-extraction session with a default time window size.

### Accessing feature extraction parameters

- [overlapFactor](featureextractionparameters/overlapfactor.md): The proportion of overlap that the feature-extraction session uses to analyze two consecutive windows in the audio data.
- [featureExtractor](featureextractionparameters/featureextractor.md): The algorithm type the session uses to extract features from audio files.
- [featureExtractionTimeWindowSize](featureextractionparameters/featureextractiontimewindowsize.md): A time duration, in seconds, that determines how much audio data the feature-extraction session reads each time it samples an audio file.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Training a sound classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous sound classifier training session with a training dataset represented by a data source.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for a sound classifier.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous training session for a sound classifier.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for a sound classifier by restoring an existing training session’s state from its parameters.
- [extractFeatures(trainingData:parameters:sessionParameters:)](extractfeatures%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous session that extracts sound features from a data source of sound files.
