> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/evaluation(on:)](https://developer.apple.com/documentation/createml/mltextclassifier/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Computes evaluation metrics.

## Declaration

```swift
func evaluation(on labeledTexts: MLTextClassifier.DataSource) -> MLClassifierMetrics
```

## Parameters

- `labeledTexts`: A data source of labeled texts to evaluate.

<a id="return-value"></a>

## Return Value

Classifier metrics.

## See Also

### Evaluating a text classifier

- [evaluation(on:textColumn:labelColumn:)](evaluation%28on_textcolumn_labelcolumn_%29.md): Computes evaluation metrics.
- [trainingMetrics](trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the classifier’s performance on the validation data set.
