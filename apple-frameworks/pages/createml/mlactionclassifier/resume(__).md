> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/resume(_:)

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Begins or continues an asynchronous action classifier training session.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLActionClassifier>) throws -> MLJob<MLActionClassifier>
```

## Parameters

- `session`: An [MLTrainingSession](../mltrainingsession.md) instance that represents the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the action classifier training session.

## See Also

### Training an action classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous action classifier training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an action classifier.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an action classifier by restoring an existing training session’s state from its parameters.
