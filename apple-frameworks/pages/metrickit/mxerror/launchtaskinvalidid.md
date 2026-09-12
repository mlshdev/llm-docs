> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxerror/launchtaskinvalidid](https://developer.apple.com/documentation/metrickit/mxerror/launchtaskinvalidid)

# launchTaskInvalidID

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The task ID is a `null` value or exceeds the maximum 128 character length.

> Use [MetricManager.LaunchTaskError.Reason.invalidID](../metricmanager/launchtaskerror/reason-swift.enum/invalidid.md) instead.

## Declaration

```swift
static var launchTaskInvalidID: MXError.Code { get }
```

## See Also

### Getting the launch error properties

- [errorDomain](errordomain.md): Deprecated.
- [launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [launchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [launchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [launchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [launchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.
- [MXError.Code](code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](../mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
