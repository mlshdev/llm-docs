> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlclassifier/validationmetrics

# validationMetrics

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

Measurements of the classifier’s performance on the validation data set.

## Declaration

```swift
var validationMetrics: MLClassifierMetrics { get }
```

## See Also

### Evaluating a classifier

- [evaluation(on:)](evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
