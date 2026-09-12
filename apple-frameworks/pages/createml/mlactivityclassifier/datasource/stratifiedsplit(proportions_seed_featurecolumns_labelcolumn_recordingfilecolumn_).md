> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/datasource/stratifiedsplit(proportions:seed:featurecolumns:labelcolumn:recordingfilecolumn:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/datasource/stratifiedsplit(proportions:seed:featurecolumns:labelcolumn:recordingfilecolumn:))

# stratifiedSplit(proportions:seed:featureColumns:labelColumn:recordingFileColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generates a data table by splitting the data source into strata.

> Use DataFrame.stratifiedSplit(on:by:).

## Declaration

```swift
func stratifiedSplit(proportions: [Double], seed: Int = timestampSeed(), featureColumns: [String], labelColumn: String, recordingFileColumn: String) throws -> MLDataTable
```

## Parameters

- `proportions`: An array of proportions, each in the range `[0.0, 1.0]`.
- `seed`: A seed number for the random-number generator.
- `featureColumns`: The names of the feature columns the method includes in the data table.
- `labelColumn`: The name of the label column the methods stratifies.
- `recordingFileColumn`: The name of the column with the data file names.

<a id="return-value"></a>

## Return Value

A new [MLDataTable](../../mldatatable.md) instance.

## See Also

### Generating data tables from a data source

- [labeledSensorData(featureColumns:labelColumn:recordingFileColumn:)](labeledsensordata%28featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Deprecated. Generates a data table from the contents of the data source.
