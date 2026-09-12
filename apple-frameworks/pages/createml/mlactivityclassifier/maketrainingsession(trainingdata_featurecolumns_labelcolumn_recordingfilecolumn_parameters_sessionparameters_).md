> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/maketrainingsession(trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/maketrainingsession(trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:sessionparameters:))

# makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates an asynchronous training session for an activity classifier.

## Declaration

```swift
static func makeTrainingSession(trainingData: MLActivityClassifier.DataSource, featureColumns: [String], labelColumn: String, recordingFileColumn: String, parameters: MLActivityClassifier.ModelParameters = .init(), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLTrainingSession<MLActivityClassifier>
```

## Parameters

- `trainingData`: An [MLDataTable](../mldatatable.md) instance that contains a collection of sensor data that groups data entries by activity label.
- `featureColumns`: The feature column names.
- `labelColumn`: The label column name,
- `recordingFileColumn`: The recording file column name.
- `parameters`: An [MLActivityClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLTrainingSession](../mltrainingsession.md) that represents the activity classifier training session.

## See Also

### Training an activity classifier asynchronously

- [train(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](train%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Begins an asynchronous activity classifier training session with a training dataset represented by a data source.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous activity classifier training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier by restoring an existing training session’s state from its parameters.
