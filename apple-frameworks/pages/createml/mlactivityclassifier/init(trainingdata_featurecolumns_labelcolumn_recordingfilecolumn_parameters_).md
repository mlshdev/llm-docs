> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/init(trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/init(trainingdata:featurecolumns:labelcolumn:recordingfilecolumn:parameters:))

# init(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an activity classifier with a training dataset represented by a data source.

## Declaration

```swift
init(trainingData: MLActivityClassifier.DataSource, featureColumns: [String], labelColumn: String? = nil, recordingFileColumn: String? = nil, parameters: MLActivityClassifier.ModelParameters = ModelParameters(validationData: nil)) throws
```

## Parameters

- `trainingData`: An [MLActivityClassifier.DataSource](datasource.md) instance.
- `featureColumns`: The names of the columns in an annotation file that contain sensor data.
- `labelColumn`: The name of the column in an annotation file that contains the activity labels if `trainingData` uses [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](datasource/directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).

  The initializer ignores this parameter if `trainingData` uses [MLActivityClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md).
- `recordingFileColumn`: The name of the column in an annotation file that contains the data filenames if `trainingData` uses [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](datasource/directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).

  The initializer ignores this parameter if `trainingData` uses [MLActivityClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md).
- `parameters`: An [MLActivityClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.

<a id="discussion"></a>

## Discussion

Use this initializer to create an activity classifier with an [MLActivityClassifier.DataSource](datasource.md). To configure the training process, initialize the activity classifier with an [MLActivityClassifier.ModelParameters](modelparameters-swift.struct.md) instance. For example, you can explicitly define the validation dataset instead of allowing the model to choose a random selection of your training data. Alternatively, set [validationData](modelparameters-swift.struct/validationdata.md) to `nil` to allow the activity classifier to choose the validation data for you from among your training data. This lets you set other parameters — like [maximumIterations](modelparameters-swift.struct/maximumiterations.md) and [batchSize](modelparameters-swift.struct/batchsize.md) — to nondefault values.
