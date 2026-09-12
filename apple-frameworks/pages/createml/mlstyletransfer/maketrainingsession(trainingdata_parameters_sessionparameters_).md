> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/maketrainingsession(trainingdata:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlstyletransfer/maketrainingsession(trainingdata:parameters:sessionparameters:))

# makeTrainingSession(trainingData:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates an asynchronous training session for a style transfer model.

## Declaration

```swift
static func makeTrainingSession(trainingData: MLStyleTransfer.DataSource, parameters: MLStyleTransfer.ModelParameters = .init(), sessionParameters: MLTrainingSessionParameters = .init()) throws -> MLTrainingSession<MLStyleTransfer>
```

## Parameters

- `trainingData`: The style image and content images represented by a data source.
- `parameters`: An [MLStyleTransfer.ModelParameters](modelparameters.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the style transfer model-training session.

## See Also

### Training a style transfer model asynchronously

- [train(trainingData:parameters:sessionParameters:)](train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous style transfer model-training session.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous style transfer model-training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for a style transfer model by restoring an existing training session’s state from its parameters.
