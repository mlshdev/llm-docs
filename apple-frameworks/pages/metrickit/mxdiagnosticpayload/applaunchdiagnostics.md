> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/applaunchdiagnostics

# appLaunchDiagnostics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for the app launch time.

> Use [DiagnosticResult.appLaunch(\_:)](../diagnosticresult/applaunch%28__%29.md) instead.

## Declaration

```swift
var appLaunchDiagnostics: [MXAppLaunchDiagnostic]? { get }
```

## See Also

### Reading responsiveness metrics

- [hangDiagnostics](hangdiagnostics.md): Deprecated. The diagnostic reports for times when the app was too busy to handle input responsively during the reporting period.

# appLaunchDiagnostics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

The diagnostic reports for the app launch time.

> Use [DiagnosticResult.appLaunch(\_:)](../diagnosticresult/applaunch%28__%29.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXAppLaunchDiagnostic *> * appLaunchDiagnostics;
```

## See Also

### Reading responsiveness metrics

- [hangDiagnostics](hangdiagnostics.md): Deprecated. The diagnostic reports for times when the app was too busy to handle input responsively during the reporting period.
