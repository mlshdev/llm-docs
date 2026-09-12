> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxerror/code/launchtaskpastdeadline](https://developer.apple.com/documentation/metrickit/mxerror/code/launchtaskpastdeadline)

# MXError.Code.launchTaskPastDeadline (Swift)

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The start call was made too late.

> Use [MetricManager.LaunchTaskError.Reason.pastDeadline](../../metricmanager/launchtaskerror/reason-swift.enum/pastdeadline.md) instead.

## Declaration

```swift
case launchTaskPastDeadline
```

## See Also

### Launch errors

- [MXError.Code.launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXError.Code.launchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXError.Code.launchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXError.Code.launchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXError.Code.launchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.

# MXErrorLaunchTaskPastDeadline (Objective-C)

**Framework:** MetricKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The start call was made too late.

> Use [MetricManager.LaunchTaskError.Reason.pastDeadline](../../metricmanager/launchtaskerror/reason-swift.enum/pastdeadline.md) instead.

## Declaration

```objectivec
MXErrorLaunchTaskPastDeadline
```

## See Also

### Launch errors

- [MXErrorLaunchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXErrorLaunchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXErrorLaunchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXErrorLaunchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXErrorLaunchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.
