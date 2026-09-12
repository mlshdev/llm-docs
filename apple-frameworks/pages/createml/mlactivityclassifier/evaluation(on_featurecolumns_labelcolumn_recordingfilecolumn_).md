> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/evaluation(on:featurecolumns:labelcolumn:recordingfilecolumn:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/evaluation(on:featurecolumns:labelcolumn:recordingfilecolumn:))

# evaluation(on:featureColumns:labelColumn:recordingFileColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Generates metrics describing the activity classifier’s performance on labeled activities in a data source.

## Declaration

```swift
func evaluation(on testingData: MLActivityClassifier.DataSource, featureColumns: [String], labelColumn: String? = nil, recordingFileColumn: String? = nil) -> MLClassifierMetrics
```

## Parameters

- `testingData`: The activity data that you provide to test this model, contained in an [MLActivityClassifier.DataSource](datasource.md).
- `featureColumns`: The names of the columns that contain sensor data.
- `labelColumn`: The name of the column that contain the activity labels. The method ignores this parameter if the data source uses a labeled directory.
- `recordingFileColumn`: The name of the column that contain the recording file names. The method ignores this parameter if the data source uses a labeled directory.

<a id="return-value"></a>

## Return Value

An [MLClassifierMetrics](../mlclassifiermetrics.md) instance.

## See Also

### Evaluating an activity classifier

- [trainingMetrics](trainingmetrics.md): Measurements of the activity classifier’s performance on the training dataset.
- [validationMetrics](validationmetrics.md): Measurements of the activity classifier’s performance on the validation dataset.
