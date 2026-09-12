> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum/internalfailure](https://developer.apple.com/documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum/internalfailure)

# MetricManager.LaunchTaskError.Reason.internalFailure

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Internal failures happened inside the framework.

## Declaration

```swift
case internalFailure
```

## See Also

### Error reasons

- [MetricManager.LaunchTaskError.Reason.invalidID](invalidid.md): The task ID is a null value or exceeds the maximum 128 character length.
- [MetricManager.LaunchTaskError.Reason.maxCountExceeded](maxcountexceeded.md): Exceeded the maximum number of tasks.
- [MetricManager.LaunchTaskError.Reason.pastDeadline](pastdeadline.md): The start call was made too late.
- [MetricManager.LaunchTaskError.Reason.duplicateTask](duplicatetask.md): A task with the same ID has already been started.
- [MetricManager.LaunchTaskError.Reason.taskUnknown](taskunknown.md): The task hasn’t been started or has already been finished.
