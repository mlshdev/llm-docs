> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/datasource/labeledsensordata(featurecolumns:labelcolumn:recordingfilecolumn:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/datasource/labeledsensordata(featurecolumns:labelcolumn:recordingfilecolumn:))

# labeledSensorData(featureColumns:labelColumn:recordingFileColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generates a data table from the contents of the data source.

> Use gatherAnnotatedFeatures(featureColumns:labelColumn:recordingFileColumn:)

## Declaration

```swift
func labeledSensorData(featureColumns: [String], labelColumn: String? = nil, recordingFileColumn: String? = nil) throws -> MLDataTable
```

## Parameters

- `featureColumns`: The names of the feature columns the method includes in the [MLDataTable](../../mldatatable.md) it generates.
- `labelColumn`: The name of the label column. This parameter must not be `nil` if the data source uses [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).
- `recordingFileColumn`: The name of the column with the recording file names. This parameter must not be `nil` if the data source uses [MLActivityClassifier.DataSource.directoryWithDataAndAnnotation(at:annotationFileName:timeStampColumn:labelStartTimeColumn:labelEndTimeColumn:)](directorywithdataandannotation%28at_annotationfilename_timestampcolumn_labelstarttimecolumn_labelendtimecolumn_%29.md).

<a id="return-value"></a>

## Return Value

A new [MLDataTable](../../mldatatable.md) instance.

<a id="discussion"></a>

## Discussion

The `labelColumn` and `recordingFileColumn` parameters are optional if the data source is [MLActivityClassifier.DataSource.labeledDirectories(at:)](labeleddirectories%28at_%29.md). If `nil`, the method names the data table’s label column and data file column “label” and “recordingFile”, respectively.

## See Also

### Generating data tables from a data source

- [stratifiedSplit(proportions:seed:featureColumns:labelColumn:recordingFileColumn:)](stratifiedsplit%28proportions_seed_featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.
