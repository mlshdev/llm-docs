> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlhandactionclassifier/evaluation(on:)

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates metrics describing the hand action classifier’s performance on labeled videos.

## Declaration

```swift
func evaluation(on annotatedVideos: MLHandActionClassifier.DataSource) throws -> MLClassifierMetrics
```

## Parameters

- `annotatedVideos`: An [MLHandActionClassifier.DataSource](datasource.md) instance.

## See Also

### Evaluating a hand action classifier

- [trainingMetrics](trainingmetrics.md): Measurements of the hand action classifier’s performance on the training dataset.
- [validationMetrics](validationmetrics.md): Measurements of the hand action classifier’s performance on the validation dataset.
