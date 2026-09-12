> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlprogress/metric](https://developer.apple.com/documentation/createml/mlprogress/metric)

# MLProgress.Metric

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Metrics you use to evaluate a model’s performance during a training session.

## Declaration

```swift
enum Metric
```

## Topics

### Retrieving metric keys

- [MLProgress.Metric.accuracy](metric/accuracy.md): The metric for the model’s accuracy.
- [MLProgress.Metric.contentLoss](metric/contentloss.md): The metric for the style transfer model’s content loss.
- [MLProgress.Metric.loss](metric/loss.md): The metric for the model’s loss.
- [MLProgress.Metric.maximumError](metric/maximumerror.md): The metric for the model’s maximum error.
- [MLProgress.Metric.rootMeanSquaredError](metric/rootmeansquarederror.md): The metric for the model’s root mean squared error (RMSE).
- [MLProgress.Metric.styleLoss](metric/styleloss.md): The metric for the style transfer model’s style loss.
- [MLProgress.Metric.stylizedImageURL](metric/stylizedimageurl.md): The location of the stylized image content in the file system.
- [MLProgress.Metric.validationAccuracy](metric/validationaccuracy.md): The metric for the model’s validation accuracy.
- [MLProgress.Metric.validationLoss](metric/validationloss.md): The metric for the model’s validation loss.
- [MLProgress.Metric.validationMaximumError](metric/validationmaximumerror.md): The metric for the model’s validation maximum error.
- [MLProgress.Metric.validationRootMeanSquaredError](metric/validationrootmeansquarederror.md): The metric for the model’s validation root mean squared error (RMSE).

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assessing a checkpoint

- [metrics](../mlcheckpoint/metrics.md): Measurements of the model’s performance at the time the session saved the checkpoint.
