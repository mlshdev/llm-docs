> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlcheckpoint/metrics](https://developer.apple.com/documentation/createml/mlcheckpoint/metrics)

# metrics

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Measurements of the model’s performance at the time the session saved the checkpoint.

## Declaration

```swift
var metrics: [MLProgress.Metric : Any] { get set }
```

## See Also

### Assessing a checkpoint

- [MLProgress.Metric](../mlprogress/metric.md): Metrics you use to evaluate a model’s performance during a training session.
