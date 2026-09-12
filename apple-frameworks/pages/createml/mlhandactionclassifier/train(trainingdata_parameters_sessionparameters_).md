> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/train(trainingdata:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/train(trainingdata:parameters:sessionparameters:))

# train(trainingData:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Begins an asynchronous hand action classifier’s training session.

## Declaration

```swift
static func train(trainingData: MLHandActionClassifier.DataSource, parameters: MLHandActionClassifier.ModelParameters = ModelParameters(), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLJob<MLHandActionClassifier>
```

## Parameters

- `trainingData`: An [MLHandActionClassifier.DataSource](datasource.md) instance.
- `parameters`: An [MLHandActionClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the hand action classifier’s training session.

## See Also

### Training a hand action classifier asynchronously

- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous hand action classifier’s training session.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous hand action classifier’s training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Recreates an asynchronous hand action classifier’s training session by restoring its saved state from the file system.
