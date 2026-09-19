> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxerror/code/launchtaskinternalfailure

# MXError.Code.launchTaskInternalFailure (Swift)

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

Internal failures happened inside the framework.

> Use [MetricManager.LaunchTaskError.Reason.internalFailure](../../metricmanager/launchtaskerror/reason-swift.enum/internalfailure.md) instead.

## Declaration

```swift
case launchTaskInternalFailure
```

## See Also

### Launch errors

- [MXError.Code.launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXError.Code.launchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXError.Code.launchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXError.Code.launchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [MXError.Code.launchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.

# MXErrorLaunchTaskInternalFailure (Objective-C)

**Framework:** MetricKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

Internal failures happened inside the framework.

> Use [MetricManager.LaunchTaskError.Reason.internalFailure](../../metricmanager/launchtaskerror/reason-swift.enum/internalfailure.md) instead.

## Declaration

```objectivec
MXErrorLaunchTaskInternalFailure
```

## See Also

### Launch errors

- [MXErrorLaunchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXErrorLaunchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXErrorLaunchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXErrorLaunchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [MXErrorLaunchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.
