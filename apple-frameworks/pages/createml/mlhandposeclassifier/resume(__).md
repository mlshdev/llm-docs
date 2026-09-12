> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/resume(_:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/resume(_:))

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Begins or continues an asynchronous hand pose classifier’s training session.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLHandPoseClassifier>) throws -> MLJob<MLHandPoseClassifier>
```

## Parameters

- `session`: An [MLTrainingSession](../mltrainingsession.md) instance that represents the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the hand pose training session.

## See Also

### Training a hand pose classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous hand pose classifier’s training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous hand pose classifier’s training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Recreates an asynchronous hand pose classifier’s training session by restoring its saved state from the file system.
