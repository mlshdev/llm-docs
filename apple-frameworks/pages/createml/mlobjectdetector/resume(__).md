> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/resume(_:)](https://developer.apple.com/documentation/createml/mlobjectdetector/resume(_:))

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Begins or continues an asynchronous object-detector training session.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLObjectDetector>) throws -> MLJob<MLObjectDetector>
```

## Parameters

- `session`: An [MLTrainingSession](../mltrainingsession.md) instance that represents the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the object-detector training session.

<a id="discussion"></a>

## Discussion

Use this method to start or resume a training session you get from [makeTrainingSession(trainingData:annotationType:parameters:sessionParameters:)](maketrainingsession%28trainingdata_annotationtype_parameters_sessionparameters_%29.md) or [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md).

## See Also

### Training an object detector asynchronously

- [train(trainingData:annotationType:parameters:sessionParameters:)](train%28trainingdata_annotationtype_parameters_sessionparameters_%29.md): Begins an asynchronous object-detector training session.
- [makeTrainingSession(trainingData:annotationType:parameters:sessionParameters:)](maketrainingsession%28trainingdata_annotationtype_parameters_sessionparameters_%29.md): Creates an asynchronous object-detector training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an object detector by restoring an existing training session’s state from its parameters.
