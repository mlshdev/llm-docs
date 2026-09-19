> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxerror/launchtaskinternalfailure

# launchTaskInternalFailure

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

Internal failures happened inside the framework.

> Use [MetricManager.LaunchTaskError.Reason.internalFailure](../metricmanager/launchtaskerror/reason-swift.enum/internalfailure.md) instead.

## Declaration

```swift
static var launchTaskInternalFailure: MXError.Code { get }
```

## See Also

### Getting the launch error properties

- [errorDomain](errordomain.md): Deprecated.
- [launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [launchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [launchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [launchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [launchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.
- [MXError.Code](code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](../mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
