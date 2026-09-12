> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload](https://developer.apple.com/documentation/metrickit/mxmetricpayload)

# MXMetricPayload (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that encapsulates a daily metrics report.

> Use [MetricReport](metricreport.md) instead.

## Declaration

```swift
class MXMetricPayload
```

## Topics

### Reading battery metrics

- [cellularConditionMetrics](mxmetricpayload/cellularconditionmetrics.md): Deprecated. The cellular condition measurements for the reporting period.
- [cpuMetrics](mxmetricpayload/cpumetrics.md): Deprecated. The CPU metrics for the reporting period.
- [displayMetrics](mxmetricpayload/displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](mxmetricpayload/gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [locationActivityMetrics](mxmetricpayload/locationactivitymetrics.md): Deprecated. The location-tracking activity for the reporting period.
- [networkTransferMetrics](mxmetricpayload/networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.

### Reading performance metrics

- [applicationExitMetrics](mxmetricpayload/applicationexitmetrics.md): Deprecated. The app foreground and background exit metrics for the reporting period.
- [applicationTimeMetrics](mxmetricpayload/applicationtimemetrics.md): Deprecated. The app foreground and background time metrics for the reporting period.
- [memoryMetrics](mxmetricpayload/memorymetrics.md): Deprecated. The memory metrics for the reporting period.

### Reading responsiveness metrics

- [applicationLaunchMetrics](mxmetricpayload/applicationlaunchmetrics.md): Deprecated. The app launch and resume metrics for the reporting period.
- [animationMetrics](mxmetricpayload/animationmetrics.md): Deprecated. The metrics for the responsiveness of app animations for the reporting period.
- [applicationResponsivenessMetrics](mxmetricpayload/applicationresponsivenessmetrics.md): Deprecated. The metrics indicating an app’s responsiveness to user interaction for the reporting period.

### Reading disk access metrics

- [diskIOMetrics](mxmetricpayload/diskiometrics.md): Deprecated. The storage metrics for the reporting period.

### Reading custom metrics

- [signpostMetrics](mxmetricpayload/signpostmetrics.md): Deprecated. An array of the custom metrics for the reporting period.

### Generating a report

- [jsonRepresentation()](mxmetricpayload/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the payload in JSON format.
- [dictionaryRepresentation()](mxmetricpayload/dictionaryrepresentation%28%29.md): Deprecated. Returns the results of the payload as a dictionary.

### Reading information about the payload

- [timeStampBegin](mxmetricpayload/timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](mxmetricpayload/timestampend.md): Deprecated. The ending time of the reporting period.
- [includesMultipleApplicationVersions](mxmetricpayload/includesmultipleapplicationversions.md): Deprecated. A Boolean indicating if the version of the app changed at least once during the reporting period.
- [latestApplicationVersion](mxmetricpayload/latestapplicationversion.md): Deprecated. The version of the app on the device at the end of the reporting period.
- [metaData](mxmetricpayload/metadata.md): Deprecated. A set of system-level information for the device.

### Initializers

- [init(coder:)](mxmetricpayload/init%28coder_%29.md): Deprecated.

### Instance Properties

- [diskSpaceUsageMetrics](mxmetricpayload/diskspaceusagemetrics.md): Deprecated. An object containing disk space usage metrics for this application.

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
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.

# MXMetricPayload (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that encapsulates a daily metrics report.

> Use [MetricReport](metricreport.md) instead.

## Declaration

```objectivec
@interface MXMetricPayload : NSObject
```

## Topics

### Reading battery metrics

- [cellularConditionMetrics](mxmetricpayload/cellularconditionmetrics.md): Deprecated. The cellular condition measurements for the reporting period.
- [cpuMetrics](mxmetricpayload/cpumetrics.md): Deprecated. The CPU metrics for the reporting period.
- [displayMetrics](mxmetricpayload/displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](mxmetricpayload/gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [locationActivityMetrics](mxmetricpayload/locationactivitymetrics.md): Deprecated. The location-tracking activity for the reporting period.
- [networkTransferMetrics](mxmetricpayload/networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.

### Reading performance metrics

- [applicationExitMetrics](mxmetricpayload/applicationexitmetrics.md): Deprecated. The app foreground and background exit metrics for the reporting period.
- [applicationTimeMetrics](mxmetricpayload/applicationtimemetrics.md): Deprecated. The app foreground and background time metrics for the reporting period.
- [memoryMetrics](mxmetricpayload/memorymetrics.md): Deprecated. The memory metrics for the reporting period.

### Reading responsiveness metrics

- [applicationLaunchMetrics](mxmetricpayload/applicationlaunchmetrics.md): Deprecated. The app launch and resume metrics for the reporting period.
- [animationMetrics](mxmetricpayload/animationmetrics.md): Deprecated. The metrics for the responsiveness of app animations for the reporting period.
- [applicationResponsivenessMetrics](mxmetricpayload/applicationresponsivenessmetrics.md): Deprecated. The metrics indicating an app’s responsiveness to user interaction for the reporting period.

### Reading disk access metrics

- [diskIOMetrics](mxmetricpayload/diskiometrics.md): Deprecated. The storage metrics for the reporting period.

### Reading custom metrics

- [signpostMetrics](mxmetricpayload/signpostmetrics.md): Deprecated. An array of the custom metrics for the reporting period.

### Generating a report

- [JSONRepresentation](mxmetricpayload/jsonrepresentation%28%29.md): Deprecated. Returns the contents of the payload in JSON format.
- [dictionaryRepresentation](mxmetricpayload/dictionaryrepresentation%28%29.md): Deprecated. Returns the results of the payload as a dictionary.

### Reading information about the payload

- [timeStampBegin](mxmetricpayload/timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](mxmetricpayload/timestampend.md): Deprecated. The ending time of the reporting period.
- [includesMultipleApplicationVersions](mxmetricpayload/includesmultipleapplicationversions.md): Deprecated. A Boolean indicating if the version of the app changed at least once during the reporting period.
- [latestApplicationVersion](mxmetricpayload/latestapplicationversion.md): Deprecated. The version of the app on the device at the end of the reporting period.
- [metaData](mxmetricpayload/metadata.md): Deprecated. A set of system-level information for the device.

### Instance Properties

- [diskSpaceUsageMetrics](mxmetricpayload/diskspaceusagemetrics.md): Deprecated. An object containing disk space usage metrics for this application.

### Instance Methods

- [DictionaryRepresentation](mxmetricpayload/dictionaryrepresentation-1nrgx.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.
