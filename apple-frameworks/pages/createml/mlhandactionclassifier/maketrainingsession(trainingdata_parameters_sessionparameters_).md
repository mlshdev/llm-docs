> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:))

# makeTrainingSession(trainingData:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates an asynchronous hand action classifier’s training session.

## Declaration

```swift
static func makeTrainingSession(trainingData: MLHandActionClassifier.DataSource, parameters: MLHandActionClassifier.ModelParameters = .init(), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLTrainingSession<MLHandActionClassifier>
```

## Parameters

- `trainingData`: An [MLHandActionClassifier.DataSource](datasource.md) instance.
- `parameters`: An [MLHandActionClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the action classifier training session.

## See Also

### Training a hand action classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous hand action classifier’s training session.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous hand action classifier’s training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Recreates an asynchronous hand action classifier’s training session by restoring its saved state from the file system.
