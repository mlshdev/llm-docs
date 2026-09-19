> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum/maxcountexceeded

# MetricManager.LaunchTaskError.Reason.maxCountExceeded

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Exceeded the maximum number of tasks.

## Declaration

```swift
case maxCountExceeded
```

## See Also

### Error reasons

- [MetricManager.LaunchTaskError.Reason.invalidID](invalidid.md): The task ID is a null value or exceeds the maximum 128 character length.
- [MetricManager.LaunchTaskError.Reason.pastDeadline](pastdeadline.md): The start call was made too late.
- [MetricManager.LaunchTaskError.Reason.duplicateTask](duplicatetask.md): A task with the same ID has already been started.
- [MetricManager.LaunchTaskError.Reason.taskUnknown](taskunknown.md): The task hasn’t been started or has already been finished.
- [MetricManager.LaunchTaskError.Reason.internalFailure](internalfailure.md): Internal failures happened inside the framework.
