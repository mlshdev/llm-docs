> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlprogress/elapsedtime](https://developer.apple.com/documentation/createml/mlprogress/elapsedtime)

# elapsedTime

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The time, in seconds, since the training session started.

## Declaration

```swift
var elapsedTime: TimeInterval
```

## See Also

### Inspecting a session’s progress

- [phase](phase.md): The current phase of the training session.
- [itemCount](itemcount.md): The current number of files processed during a feature extraction phase, or the completed iterations during a training phase.
- [totalItemCount](totalitemcount.md): The total number of files during a feature extraction phase, or total iterations during a training phase.
- [metrics](metrics.md): Measurements of the model’s performance during the training or evaluation phases of a training session.
- [MLProgress.Metric](metric.md): Metrics you use to evaluate a model’s performance during a training session.
