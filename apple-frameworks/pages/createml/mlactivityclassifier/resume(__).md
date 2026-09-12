> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/resume(_:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/resume(_:))

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Begins or continues an asynchronous activity classifier training session.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLActivityClassifier>) throws -> MLJob<MLActivityClassifier>
```

## Parameters

- `session`: An [MLTrainingSession](../mltrainingsession.md) instance that represents the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the activity classifier training session.

## See Also

### Training an activity classifier asynchronously

- [train(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](train%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Begins an asynchronous activity classifier training session with a training dataset represented by a data source.
- [makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](maketrainingsession%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier by restoring an existing training session’s state from its parameters.
