> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxerror/errordomain](https://developer.apple.com/documentation/metrickit/mxerror/errordomain)

# errorDomain

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

> Use MetricManager.LaunchTaskError instead.

## Declaration

```swift
static var errorDomain: String { get }
```

## See Also

### Getting the launch error properties

- [launchTaskDuplicated](launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [launchTaskInternalFailure](launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [launchTaskInvalidID](launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [launchTaskMaxCount](launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [launchTaskPastDeadline](launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [launchTaskUnknown](launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.
- [MXError.Code](code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](../mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
