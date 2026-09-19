> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/cpuexceptiondiagnostics

# cpuExceptionDiagnostics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.

> Use [DiagnosticResult.cpuException(\_:)](../diagnosticresult/cpuexception%28__%29.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXCPUExceptionDiagnostic *> * cpuExceptionDiagnostics;
```

## See Also

### Reading performance metrics

- [crashDiagnostics](crashdiagnostics.md): Deprecated. The diagnostic reports for app crashes during the reporting period.
