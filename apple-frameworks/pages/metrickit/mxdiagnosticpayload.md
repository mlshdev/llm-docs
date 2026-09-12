> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnosticpayload](https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload)

# MXDiagnosticPayload (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that encapsulates a diagnostic report.

> Use [DiagnosticReport](diagnosticreport.md), and read the [DiagnosticResult.crash(\_:)](diagnosticresult/crash%28__%29.md), [DiagnosticResult.hang(\_:)](diagnosticresult/hang%28__%29.md), [DiagnosticResult.cpuException(\_:)](diagnosticresult/cpuexception%28__%29.md), [DiagnosticResult.diskWriteException(\_:)](diagnosticresult/diskwriteexception%28__%29.md), or [DiagnosticResult.appLaunch(\_:)](diagnosticresult/applaunch%28__%29.md) cases instead.

## Declaration

```swift
class MXDiagnosticPayload
```

<a id="overview"></a>

## Overview

The system delivers a diagnostic report as soon as it’s available.

## Topics

### Reading performance metrics

- [crashDiagnostics](mxdiagnosticpayload/crashdiagnostics.md): Deprecated. The diagnostic reports for app crashes during the reporting period.
- [cpuExceptionDiagnostics](mxdiagnosticpayload/cpuexceptiondiagnostics.md): Deprecated. The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.

### Reading responsiveness metrics

- [appLaunchDiagnostics](mxdiagnosticpayload/applaunchdiagnostics.md): Deprecated. The diagnostic reports for the app launch time.
- [hangDiagnostics](mxdiagnosticpayload/hangdiagnostics.md): Deprecated. The diagnostic reports for times when the app was too busy to handle input responsively during the reporting period.

### Reading disk access metrics

- [diskWriteExceptionDiagnostics](mxdiagnosticpayload/diskwriteexceptiondiagnostics.md): Deprecated. The diagnostic reports for disk write exceptions for the app during the reporting period.

### Generating a report

- [jsonRepresentation()](mxdiagnosticpayload/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the payload in JSON format.
- [dictionaryRepresentation()](mxdiagnosticpayload/dictionaryrepresentation%28%29.md): Deprecated. Returns the results of the payload as a dictionary.

### Reading information about the payload

- [timeStampBegin](mxdiagnosticpayload/timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](mxdiagnosticpayload/timestampend.md): Deprecated. The ending time of the reporting period.

### Initializers

- [init(coder:)](mxdiagnosticpayload/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.

# MXDiagnosticPayload (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that encapsulates a diagnostic report.

> Use [DiagnosticReport](diagnosticreport.md), and read the [DiagnosticResult.crash(\_:)](diagnosticresult/crash%28__%29.md), [DiagnosticResult.hang(\_:)](diagnosticresult/hang%28__%29.md), [DiagnosticResult.cpuException(\_:)](diagnosticresult/cpuexception%28__%29.md), [DiagnosticResult.diskWriteException(\_:)](diagnosticresult/diskwriteexception%28__%29.md), or [DiagnosticResult.appLaunch(\_:)](diagnosticresult/applaunch%28__%29.md) cases instead.

## Declaration

```objectivec
@interface MXDiagnosticPayload : NSObject
```

<a id="overview"></a>

## Overview

The system delivers a diagnostic report as soon as it’s available.

## Topics

### Reading performance metrics

- [crashDiagnostics](mxdiagnosticpayload/crashdiagnostics.md): Deprecated. The diagnostic reports for app crashes during the reporting period.
- [cpuExceptionDiagnostics](mxdiagnosticpayload/cpuexceptiondiagnostics.md): Deprecated. The diagnostic reports for fatal and nonfatal CPU exceptions for the app during the reporting period.

### Reading responsiveness metrics

- [appLaunchDiagnostics](mxdiagnosticpayload/applaunchdiagnostics.md): Deprecated. The diagnostic reports for the app launch time.
- [hangDiagnostics](mxdiagnosticpayload/hangdiagnostics.md): Deprecated. The diagnostic reports for times when the app was too busy to handle input responsively during the reporting period.

### Reading disk access metrics

- [diskWriteExceptionDiagnostics](mxdiagnosticpayload/diskwriteexceptiondiagnostics.md): Deprecated. The diagnostic reports for disk write exceptions for the app during the reporting period.

### Generating a report

- [JSONRepresentation](mxdiagnosticpayload/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the payload in JSON format.
- [dictionaryRepresentation](mxdiagnosticpayload/dictionaryrepresentation%28%29.md): Deprecated. Returns the results of the payload as a dictionary.

### Reading information about the payload

- [timeStampBegin](mxdiagnosticpayload/timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](mxdiagnosticpayload/timestampend.md): Deprecated. The ending time of the reporting period.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.
