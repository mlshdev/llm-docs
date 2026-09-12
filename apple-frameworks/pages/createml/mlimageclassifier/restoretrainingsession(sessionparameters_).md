> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/restoretrainingsession(sessionparameters:)](https://developer.apple.com/documentation/createml/mlimageclassifier/restoretrainingsession(sessionparameters:))

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates an asynchronous training session for an image classifier by restoring an existing training session’s state from its parameters.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLImageClassifier>
```

## Parameters

- `sessionParameters`: Training session parameters. See `MLTrainingSessionParameters` for the defaults.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the image classifier training session.

## See Also

### Training an image classifier asynchronously

- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous image classifier training session with a training dataset represented by a data source.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous image classifier training session.
