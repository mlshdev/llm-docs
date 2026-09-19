> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactivityclassifier/datasource/gatherannotatedfeatures(featurecolumns:labelcolumn:recordingfilecolumn:)

# gatherAnnotatedFeatures(featureColumns:labelColumn:recordingFileColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Processes the data source and returns a data frame that contains features, labels and file names.

## Declaration

```swift
func gatherAnnotatedFeatures(featureColumns: [String], labelColumn: String = "label", recordingFileColumn: String? = nil) throws -> DataFrame
```

## Parameters

- `featureColumns`: The names of the feature columns.
- `labelColumn`: The name of the column with the labels.
- `recordingFileColumn`: The name of the column with the recording file names, if any.
