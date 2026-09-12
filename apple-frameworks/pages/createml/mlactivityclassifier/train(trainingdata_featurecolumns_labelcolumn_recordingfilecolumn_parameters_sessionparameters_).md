> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/train(trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/train(trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:sessionparameters:))

# train(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Begins an asynchronous activity classifier training session with a training dataset represented by a data source.

## Declaration

```swift
static func train(trainingData: MLActivityClassifier.DataSource, featureColumns: [String], labelColumn: String, recordingFileColumn: String, parameters: MLActivityClassifier.ModelParameters = ModelParameters(validationData: nil), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLJob<MLActivityClassifier>
```

## Parameters

- `trainingData`: An [MLActivityClassifier.DataSource](datasource.md) instance.
- `featureColumns`: The names of the columns in an annotation file that contain sensor data.
- `labelColumn`: The name of the column in an annotation file that contains the activity labels if `trainingData` uses [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](datasource/directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).

  The initializer ignores this parameter if `trainingData` uses [MLActivityClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md).
- `recordingFileColumn`: The name of the column in an annotation file that contains the data filenames if `trainingData` uses [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](datasource/directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).

  The initializer ignores this parameter if `trainingData` uses [MLActivityClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md).
- `parameters`: An [MLActivityClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
- `sessionParameters`: An [MLTrainingSessionParameters](../mltrainingsessionparameters.md) instance you use to configure the training session.

<a id="return-value"></a>

## Return Value

An [MLJob](../mljob.md) that represents the activity classifier training session.

## See Also

### Training an activity classifier asynchronously

- [makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](maketrainingsession%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier.
- [resume(\_:)](resume%28__%29.md): Begins or continues an asynchronous activity classifier training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier by restoring an existing training session’s state from its parameters.
