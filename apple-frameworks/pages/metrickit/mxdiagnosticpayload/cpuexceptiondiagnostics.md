> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnosticpayload/cpuexceptiondiagnostics](https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/cpuexceptiondiagnostics)

# cpuExceptionDiagnostics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.

> Use [DiagnosticResult.cpuException(\_:)](../diagnosticresult/cpuexception%28__%29.md) instead.

## Declaration

```swift
var cpuExceptionDiagnostics: [MXCPUExceptionDiagnostic]? { get }
```

## See Also

### Reading performance metrics

- [crashDiagnostics](crashdiagnostics.md): Deprecated. The diagnostic reports for app crashes during the reporting period.

# cpuExceptionDiagnostics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.

> Use [DiagnosticResult.cpuException(\_:)](../diagnosticresult/cpuexception%28__%29.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXCPUExceptionDiagnostic *> * cpuExceptionDiagnostics;
```

## See Also

### Reading performance metrics

- [crashDiagnostics](crashdiagnostics.md): Deprecated. The diagnostic reports for app crashes during the reporting period.
