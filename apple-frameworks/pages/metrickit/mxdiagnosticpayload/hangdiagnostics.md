> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnosticpayload/hangdiagnostics](https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/hangdiagnostics)

# hangDiagnostics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The diagnostic reports for times when the app was too busy to handle input responsively during the reporting period.

> Use [DiagnosticResult.hang(\_:)](../diagnosticresult/hang%28__%29.md) instead.

## Declaration

```swift
var hangDiagnostics: [MXHangDiagnostic]? { get }
```

## See Also

### Reading responsiveness metrics

- [appLaunchDiagnostics](applaunchdiagnostics.md): Deprecated. The diagnostic reports for the app launch time.

# hangDiagnostics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The diagnostic reports for times when the app was too busy to handle input responsively during the reporting period.

> Use [DiagnosticResult.hang(\_:)](../diagnosticresult/hang%28__%29.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXHangDiagnostic *> * hangDiagnostics;
```

## See Also

### Reading responsiveness metrics

- [appLaunchDiagnostics](applaunchdiagnostics.md): Deprecated. The diagnostic reports for the app launch time.
