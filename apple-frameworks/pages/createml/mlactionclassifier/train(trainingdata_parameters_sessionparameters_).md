> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/train(trainingdata:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlactionclassifier/train(trainingdata:parameters:sessionparameters:))

# train(trainingData:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Begins an asynchronous action classifier training session.

## Declaration

```swift
static func train(trainingData: MLActionClassifier.DataSource, parameters: MLActionClassifier.ModelParameters = ModelParameters(), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLJob<MLActionClassifier>
```

## Parameters

- `trainingData`: A collection of labeled videos represented by a data source.
- `parameters`: An [MLActionClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the action classifier training session.

## See Also

### Training an action classifier asynchronously

- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an action classifier.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous action classifier training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an action classifier by restoring an existing training session’s state from its parameters.
