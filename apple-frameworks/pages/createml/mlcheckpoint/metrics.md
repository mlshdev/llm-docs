> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlcheckpoint/metrics

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
