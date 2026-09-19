> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlhandposeclassifier/evaluation(on:)

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates metrics that describe the hand pose classifier’s performance with a dataset of labeled images.

## Declaration

```swift
func evaluation(on annotatedImages: MLHandPoseClassifier.DataSource) throws -> MLClassifierMetrics
```

## Parameters

- `annotatedImages`: An [MLHandPoseClassifier.DataSource](datasource.md) instance.

## See Also

### Evaluating a hand pose classifier

- [trainingMetrics](trainingmetrics.md): Measurements of the hand pose classifier’s performance on the training dataset.
- [validationMetrics](validationmetrics.md): Measurements of the hand pose classifier’s performance on the validation dataset.
