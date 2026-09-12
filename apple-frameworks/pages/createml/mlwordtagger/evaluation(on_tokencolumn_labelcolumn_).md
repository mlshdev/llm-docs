> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/evaluation(on:tokencolumn:labelcolumn:)](https://developer.apple.com/documentation/createml/mlwordtagger/evaluation(on:tokencolumn:labelcolumn:))

# evaluation(on:tokenColumn:labelColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Computes evaluation metrics.

## Declaration

```swift
func evaluation(on labeledTokens: DataFrame, tokenColumn: String, labelColumn: String) -> MLWordTaggerMetrics
```

## Parameters

- `labeledTokens`: An data frame containing tokens and labels.
- `tokenColumn`: The name of the token column in the data frame.
- `labelColumn`: The name of the label column in the data frame.

<a id="return-value"></a>

## Return Value

Word tagger metrics.

## See Also

### Evaluating a word tagger

- [evaluation(on:)](evaluation%28on_%29.md): Computes evaluation metrics.
- [trainingMetrics](trainingmetrics.md): Measurements of the tagger’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the tagger’s performance on the validation data set.
- [MLWordTaggerMetrics](../mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.
