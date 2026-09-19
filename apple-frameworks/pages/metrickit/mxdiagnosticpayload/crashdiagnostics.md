> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/crashdiagnostics

# crashDiagnostics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for app crashes during the reporting period.

> Use [DiagnosticResult.crash(\_:)](../diagnosticresult/crash%28__%29.md) instead.

## Declaration

```swift
var crashDiagnostics: [MXCrashDiagnostic]? { get }
```

## See Also

### Reading performance metrics

- [cpuExceptionDiagnostics](cpuexceptiondiagnostics.md): Deprecated. The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.

# crashDiagnostics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for app crashes during the reporting period.

> Use [DiagnosticResult.crash(\_:)](../diagnosticresult/crash%28__%29.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXCrashDiagnostic *> * crashDiagnostics;
```

## See Also

### Reading performance metrics

- [cpuExceptionDiagnostics](cpuexceptiondiagnostics.md): Deprecated. The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.
