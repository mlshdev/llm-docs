> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/evaluation(on:)](https://developer.apple.com/documentation/createml/mlimageclassifier/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Generates metrics describing the image classifier’s performance on labeled images represented by a data source.

## Declaration

```swift
func evaluation(on labeledImages: MLImageClassifier.DataSource) -> MLClassifierMetrics
```

## Parameters

- `labeledImages`: A set of labeled images in a data source.

<a id="return-value"></a>

## Return Value

The metrics that indicate the performance of the classifier when operating on the input dataset.

## See Also

### Evaluating an image classifier

- [trainingMetrics](trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the image classifier’s performance on the validation dataset.
