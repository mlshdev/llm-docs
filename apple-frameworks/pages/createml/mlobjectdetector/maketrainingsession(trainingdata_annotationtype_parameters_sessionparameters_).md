> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/maketrainingsession(trainingdata:annotationtype:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlobjectdetector/maketrainingsession(trainingdata:annotationtype:parameters:sessionparameters:))

# makeTrainingSession(trainingData:annotationType:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates an asynchronous object-detector training session.

## Declaration

```swift
static func makeTrainingSession(trainingData: MLObjectDetector.DataSource, annotationType: MLObjectDetector.AnnotationType, parameters: MLObjectDetector.ModelParameters = ModelParameters(), sessionParameters: MLTrainingSessionParameters = __Defaults.sessionParameters) throws -> MLTrainingSession<MLObjectDetector>
```

## Parameters

- `trainingData`: The annotated images the task uses to train the object detector.
- `annotationType`: The format type of the image annotations in the data source.
- `parameters`: An [MLObjectDetector.ModelParameters](modelparameters-swift.struct.md) instance you use to set the model configuration settings for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the object-detector training session.

<a id="discussion"></a>

## Discussion

Use [resume(\_:)](resume%28__%29.md) to start the [MLTrainingSession](../mltrainingsession.md) instance you get from this method.

## See Also

### Training an object detector asynchronously

- [train(trainingData:annotationType:parameters:sessionParameters:)](train%28trainingdata_annotationtype_parameters_sessionparameters_%29.md): Begins an asynchronous object-detector training session.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous object-detector training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an object detector by restoring an existing training session’s state from its parameters.
