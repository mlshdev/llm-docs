> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/datasource](https://developer.apple.com/documentation/createml/mlactivityclassifier/datasource)

# MLActivityClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A data source for an activity classifier.

## Declaration

```swift
enum DataSource
```

## Topics

### Creating a data source

- [MLActivityClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): An activity classifier data source that uses a directory of directories that contain sensor data files.
- [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](datasource/directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md): An activity classifier data source that uses a directory that contains sensor data files and one annotation file.

### Generating data tables from a data source

- [labeledSensorData(featureColumns:labelColumn:recordingFileColumn:)](datasource/labeledsensordata%28featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Deprecated. Generates a data table from the contents of the data source.
- [stratifiedSplit(proportions:seed:featureColumns:labelColumn:recordingFileColumn:)](datasource/stratifiedsplit%28proportions_seed_featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.

### Gathering annotated features

- [gatherAnnotatedFeatures(featureColumns:labelColumn:recordingFileColumn:)](datasource/gatherannotatedfeatures%28featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Processes the data source and returns a data frame that contains features, labels and file names.

### Getting the data frame

- [MLActivityClassifier.DataSource.dataFrame(\_:)](datasource/dataframe%28__%29.md): An activity classifier data source that uses a data frame containing sensor features and labels.

## See Also

### Supporting types

- [MLActivityClassifier.ModelParameters](modelparameters-swift.struct.md): Model training parameters that direct the training process for an activity classifier model.
