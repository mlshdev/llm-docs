> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/validationmetrics](https://developer.apple.com/documentation/createml/mlimageclassifier/validationmetrics)

# validationMetrics

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Measurements of the image classifier’s performance on the validation dataset.

## Declaration

```swift
var validationMetrics: MLClassifierMetrics { get }
```

## See Also

### Evaluating an image classifier

- [evaluation(on:)](evaluation%28on_%29.md): Generates metrics describing the image classifier’s performance on labeled images represented by a data source.
- [trainingMetrics](trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
