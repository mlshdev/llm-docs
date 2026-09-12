> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/evaluation(on:)](https://developer.apple.com/documentation/createml/mlwordtagger/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Computes evaluation metrics.

## Declaration

```swift
func evaluation(on labeledTokens: [(tokens: [MLWordTagger.Token], labels: [String])]) -> MLWordTaggerMetrics
```

## Parameters

- `labeledTokens`: An array of token and label pairs.

<a id="return-value"></a>

## Return Value

Word tagger metrics.

## See Also

### Evaluating a word tagger

- [evaluation(on:tokenColumn:labelColumn:)](evaluation%28on_tokencolumn_labelcolumn_%29.md): Computes evaluation metrics.
- [trainingMetrics](trainingmetrics.md): Measurements of the tagger’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the tagger’s performance on the validation data set.
- [MLWordTaggerMetrics](../mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.
