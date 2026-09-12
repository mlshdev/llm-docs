> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/evaluation(on:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Generates metrics by evaluating the sound classifier’s performance on a dataset represented by a data source.

## Declaration

```swift
func evaluation(on testingData: MLSoundClassifier.DataSource) -> MLClassifierMetrics
```

## Parameters

- `testingData`: A collection of labeled audio files represented by an [MLSoundClassifier.DataSource](datasource.md).

<a id="return-value"></a>

## Return Value

An [MLClassifierMetrics](../mlclassifiermetrics.md) instance that contains the evaluation results.

## See Also

### Evaluating a sound classifier

- [trainingMetrics](trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the image classifier’s performance on the validation dataset.
