> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/restoretrainingsession(sessionparameters:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/restoretrainingsession(sessionparameters:))

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates an asynchronous training session for an activity classifier by restoring an existing training session’s state from its parameters.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLActivityClassifier>
```

## Parameters

- `sessionParameters`: The [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you used to create the training session with `MLActivityClassifier/makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)-(DataSource,_,_,_,_,_)` or [makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/maketrainingsession%28trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:sessionparameters:%29-3ic8k).

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the activity classifier training session.

## See Also

### Training an activity classifier asynchronously

- [train(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](train%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Begins an asynchronous activity classifier training session with a training dataset represented by a data source.
- [makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](maketrainingsession%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous activity classifier training session.
