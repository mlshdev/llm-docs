> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/restoretrainingsession(sessionparameters:)](https://developer.apple.com/documentation/createml/mlobjectdetector/restoretrainingsession(sessionparameters:))

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates an asynchronous training session for an object detector by restoring an existing training session’s state from its parameters.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLObjectDetector>
```

## Parameters

- `sessionParameters`: The [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you used to create the training session with [makeTrainingSession(trainingData:annotationType:parameters:sessionParameters:)](maketrainingsession%28trainingdata_annotationtype_parameters_sessionparameters_%29.md).

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the object-detector training session.

<a id="discussion"></a>

## Discussion

Use [resume(\_:)](resume%28__%29.md) to start the [MLTrainingSession](../mltrainingsession.md) instance you get from this method.

## See Also

### Training an object detector asynchronously

- [train(trainingData:annotationType:parameters:sessionParameters:)](train%28trainingdata_annotationtype_parameters_sessionparameters_%29.md): Begins an asynchronous object-detector training session.
- [makeTrainingSession(trainingData:annotationType:parameters:sessionParameters:)](maketrainingsession%28trainingdata_annotationtype_parameters_sessionparameters_%29.md): Creates an asynchronous object-detector training session.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous object-detector training session.
