> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/restoretrainingsession(sessionparameters:)

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates an asynchronous training session for an action classifier by restoring an existing training session’s state from its parameters.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLActionClassifier>
```

## Parameters

- `sessionParameters`: The [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you used to create the training session using [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md).

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the action classifier training session.

## See Also

### Training an action classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous action classifier training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an action classifier.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous action classifier training session.
