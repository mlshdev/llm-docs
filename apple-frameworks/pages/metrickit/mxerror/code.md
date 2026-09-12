> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxerror/code](https://developer.apple.com/documentation/metrickit/mxerror/code)

# MXError.Code (Swift)

**Framework:** MetricKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Error codes for error values from app metrics.

> Use [MetricManager.LaunchTaskError](../metricmanager/launchtaskerror.md) instead.

## Declaration

```swift
enum Code
```

## Topics

### Launch errors

- [MXError.Code.launchTaskDuplicated](code/launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXError.Code.launchTaskInternalFailure](code/launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXError.Code.launchTaskInvalidID](code/launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXError.Code.launchTaskMaxCount](code/launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXError.Code.launchTaskPastDeadline](code/launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [MXError.Code.launchTaskUnknown](code/launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MXCallStackTree](../mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](../mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](../mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](../mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](../mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](../mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](../mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXError](../mxerror.md): Deprecated. Error domain for error handling of app metrics.
- [MXErrorDomain](../mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](../mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](../mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](../mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](../mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXErrorCode (Objective-C)

**Framework:** MetricKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Error codes for error values from app metrics.

> Use [MetricManager.LaunchTaskError](../metricmanager/launchtaskerror.md) instead.

## Declaration

```objectivec
enum MXErrorCode : NSInteger;
```

## Topics

### Launch errors

- [MXErrorLaunchTaskDuplicated](code/launchtaskduplicated.md): Deprecated. A task with the same ID has already been started.
- [MXErrorLaunchTaskInternalFailure](code/launchtaskinternalfailure.md): Deprecated. Internal failures happened inside the framework.
- [MXErrorLaunchTaskInvalidID](code/launchtaskinvalidid.md): Deprecated. The task ID is a `null` value or exceeds the maximum 128 character length.
- [MXErrorLaunchTaskMaxCount](code/launchtaskmaxcount.md): Deprecated. Exceeded the maximum number of tasks.
- [MXErrorLaunchTaskPastDeadline](code/launchtaskpastdeadline.md): Deprecated. The start call was made too late.
- [MXErrorLaunchTaskUnknown](code/launchtaskunknown.md): Deprecated. The task hasn’t been started or has already been finished.

## See Also

### Supporting types

- [MXCallStackTree](../mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](../mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](../mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](../mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](../mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](../mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](../mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXErrorDomain](../mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](../mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](../mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](../mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](../mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
