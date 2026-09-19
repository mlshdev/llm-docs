> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactivityclassifier/trainingmetrics

# trainingMetrics

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

Measurements of the activity classifier’s performance on the training dataset.

## Declaration

```swift
var trainingMetrics: MLClassifierMetrics { get }
```

## See Also

### Evaluating an activity classifier

- [evaluation(on:featureColumns:labelColumn:recordingFileColumn:)](evaluation%28on_featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Generates metrics describing the activity classifier’s performance on labeled activities in a data source.
- [validationMetrics](validationmetrics.md): Measurements of the activity classifier’s performance on the validation dataset.
- [evaluation(on:featureColumns:labelColumn:recordingFileColumn:)](evaluation%28on_featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Generates metrics describing the activity classifier’s performance on labeled activities in a data source.
