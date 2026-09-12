> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/evaluation(on:textcolumn:labelcolumn:)](https://developer.apple.com/documentation/createml/mltextclassifier/evaluation(on:textcolumn:labelcolumn:))

# evaluation(on:textColumn:labelColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Computes evaluation metrics.

## Declaration

```swift
func evaluation(on dataFrame: DataFrame, textColumn: String, labelColumn: String) -> MLClassifierMetrics
```

## Parameters

- `dataFrame`: A data frame containing labeled examples.
- `textColumn`: The name of the text column.
- `labelColumn`: The name of the label column.

<a id="return-value"></a>

## Return Value

The computed metrics or an error message.

## See Also

### Evaluating a text classifier

- [evaluation(on:)](evaluation%28on_%29.md): Computes evaluation metrics.
- [trainingMetrics](trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the classifier’s performance on the validation data set.
