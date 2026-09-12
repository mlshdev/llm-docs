> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlimageclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:))

# makeTrainingSession(trainingData:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates or restores a training session.

## Declaration

```swift
static func makeTrainingSession(trainingData: MLImageClassifier.DataSource, parameters: MLImageClassifier.ModelParameters = ModelParameters(
            validation: .split(strategy: .automatic),
            augmentation: [],
            algorithm: .transferLearning(
                featureExtractor: .scenePrint(revision: 1),
                classifier: .logisticRegressor
            )
        ), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLTrainingSession<MLImageClassifier>
```

## Parameters

- `trainingData`: Data source for training.
- `parameters`: Model training parameters. See [MLImageClassifier.ModelParameters](modelparameters-swift.struct.md) for the defaults.
- `sessionParameters`: Training session parameters. See [MLTrainingSessionParameters](../mltrainingsessionparameters.md) for the defaults.

<a id="return-value"></a>

## Return Value

A `MLTrainingSession` that can be used to start or resume training.

## See Also

### Training an image classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous image classifier training session with a training dataset represented by a data source.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous image classifier training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an image classifier by restoring an existing training session’s state from its parameters.
