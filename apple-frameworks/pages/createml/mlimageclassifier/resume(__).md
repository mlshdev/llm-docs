> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/resume(_:)](https://developer.apple.com/documentation/createml/mlimageclassifier/resume(_:))

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Begins or continues an asynchronous image classifier training session.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLImageClassifier>) throws -> MLJob<MLImageClassifier>
```

## Parameters

- `session`: An [MLTrainingSession](../mltrainingsession.md) instance that represents the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the image classifier training session.

## See Also

### Training an image classifier asynchronously

- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous image classifier training session with a training dataset represented by a data source.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an image classifier by restoring an existing training session’s state from its parameters.
