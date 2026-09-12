> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxerror/code/launchtaskunknown](https://developer.apple.com/documentation/metrickit/mxerror/code/launchtaskunknown)

# MXError.Code.launchTaskUnknown (Swift)

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The task hasn’t been started or has already been finished.

> Use [MetricManager.LaunchTaskError.Reason.taskUnknown](../../metricmanager/launchtaskerror/reason-swift.enum/taskunknown.md) instead.

## Declaration

```swift
case launchTaskUnknown
```

## See Also

### Launch errors

- [MXError.Code.launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXError.Code.launchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXError.Code.launchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXError.Code.launchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXError.Code.launchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.

# MXErrorLaunchTaskUnknown (Objective-C)

**Framework:** MetricKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The task hasn’t been started or has already been finished.

> Use [MetricManager.LaunchTaskError.Reason.taskUnknown](../../metricmanager/launchtaskerror/reason-swift.enum/taskunknown.md) instead.

## Declaration

```objectivec
MXErrorLaunchTaskUnknown
```

## See Also

### Launch errors

- [MXErrorLaunchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXErrorLaunchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXErrorLaunchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXErrorLaunchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXErrorLaunchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
