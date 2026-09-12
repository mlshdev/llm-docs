> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:))

# makeTrainingSession(trainingData:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates an asynchronous training session for a sound classifier.

## Declaration

```swift
static func makeTrainingSession(trainingData: MLSoundClassifier.DataSource, parameters: MLSoundClassifier.ModelParameters = .init(), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLTrainingSession<MLSoundClassifier>
```

## Parameters

- `trainingData`: A collection of labeled audio files represented by an [MLSoundClassifier.DataSource](datasource.md).
- `parameters`: An [MLSoundClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the sound classifier training session.

## See Also

### Training a sound classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous sound classifier training session with a training dataset represented by a data source.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous training session for a sound classifier.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for a sound classifier by restoring an existing training session’s state from its parameters.
- [extractFeatures(trainingData:parameters:sessionParameters:)](extractfeatures%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous session that extracts sound features from a data source of sound files.
- [MLSoundClassifier.FeatureExtractionParameters](featureextractionparameters.md): Parameters that affect the process of extracting sound features from audio files.
