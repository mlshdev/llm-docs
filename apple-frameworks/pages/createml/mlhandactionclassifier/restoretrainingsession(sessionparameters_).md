> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/restoretrainingsession(sessionparameters:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/restoretrainingsession(sessionparameters:))

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Recreates an asynchronous hand action classifier’s training session by restoring its saved state from the file system.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLHandActionClassifier>
```

## Parameters

- `sessionParameters`: The same [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance that created an existing training session.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the hand action classifier training session.

## See Also

### Training a hand action classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous hand action classifier’s training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous hand action classifier’s training session.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous hand action classifier’s training session.
