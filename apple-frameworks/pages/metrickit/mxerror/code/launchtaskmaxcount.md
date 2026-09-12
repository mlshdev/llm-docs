> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxerror/code/launchtaskmaxcount](https://developer.apple.com/documentation/metrickit/mxerror/code/launchtaskmaxcount)

# MXError.Code.launchTaskMaxCount (Swift)

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Exceeded the maximum number of tasks.

> Use [MetricManager.LaunchTaskError.Reason.maxCountExceeded](../../metricmanager/launchtaskerror/reason-swift.enum/maxcountexceeded.md) instead.

## Declaration

```swift
case launchTaskMaxCount
```

## See Also

### Launch errors

- [MXError.Code.launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXError.Code.launchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXError.Code.launchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXError.Code.launchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [MXError.Code.launchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.

# MXErrorLaunchTaskMaxCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Exceeded the maximum number of tasks.

> Use [MetricManager.LaunchTaskError.Reason.maxCountExceeded](../../metricmanager/launchtaskerror/reason-swift.enum/maxcountexceeded.md) instead.

## Declaration

```objectivec
MXErrorLaunchTaskMaxCount
```

## See Also

### Launch errors

- [MXErrorLaunchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXErrorLaunchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXErrorLaunchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXErrorLaunchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [MXErrorLaunchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.
