> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/diskwriteexceptiondiagnostics

# diskWriteExceptionDiagnostics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for disk write exceptions for the app during the reporting period.

> Use [DiagnosticResult.diskWriteException(\_:)](../diagnosticresult/diskwriteexception%28__%29.md) instead.

## Declaration

```swift
var diskWriteExceptionDiagnostics: [MXDiskWriteExceptionDiagnostic]? { get }
```

# diskWriteExceptionDiagnostics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for disk write exceptions for the app during the reporting period.

> Use [DiagnosticResult.diskWriteException(\_:)](../diagnosticresult/diskwriteexception%28__%29.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXDiskWriteExceptionDiagnostic *> * diskWriteExceptionDiagnostics;
```
