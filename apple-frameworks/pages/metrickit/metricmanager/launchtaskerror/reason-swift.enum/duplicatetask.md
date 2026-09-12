> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum/duplicatetask](https://developer.apple.com/documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum/duplicatetask)

# MetricManager.LaunchTaskError.Reason.duplicateTask

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A task with the same ID has already been started.

## Declaration

```swift
case duplicateTask
```

## See Also

### Error reasons

- [MetricManager.LaunchTaskError.Reason.invalidID](invalidid.md): The task ID is a null value or exceeds the maximum 128 character length.
- [MetricManager.LaunchTaskError.Reason.maxCountExceeded](maxcountexceeded.md): Exceeded the maximum number of tasks.
- [MetricManager.LaunchTaskError.Reason.pastDeadline](pastdeadline.md): The start call was made too late.
- [MetricManager.LaunchTaskError.Reason.taskUnknown](taskunknown.md): The task hasn’t been started or has already been finished.
- [MetricManager.LaunchTaskError.Reason.internalFailure](internalfailure.md): Internal failures happened inside the framework.
