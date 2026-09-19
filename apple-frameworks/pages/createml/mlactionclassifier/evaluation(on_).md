> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/evaluation(on:)

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Generates metrics describing the action classifier’s performance on labeled videos represented by a data source.

## Declaration

```swift
func evaluation(on annotatedVideos: MLActionClassifier.DataSource) throws -> MLClassifierMetrics
```

## Parameters

- `annotatedVideos`: A collection of labeled videos represented by a data source.

## See Also

### Evaluating an action classifier

- [trainingMetrics](trainingmetrics.md): Measurements of the action classifier’s performance on the training dataset.
- [validationMetrics](validationmetrics.md): Measurements of the action classifier’s performance on the validation dataset.
