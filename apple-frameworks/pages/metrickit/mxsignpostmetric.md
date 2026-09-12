> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpostmetric](https://developer.apple.com/documentation/metrickit/mxsignpostmetric)

# MXSignpostMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a custom metric.

> Use [SignpostIntervalMetric](signpostintervalmetric.md) instead.

## Declaration

```swift
class MXSignpostMetric
```

<a id="overview"></a>

## Overview

A custom metric is an event type with a developer-defined name and category. You can add custom metrics to daily reports to capture information specific to your app.

Custom metrics are a type of signpost saved to custom OS logs created using [makeLogHandle(category:)](mxmetricmanager/makeloghandle%28category_%29.md). The daily report contains information about the number and duration of custom events, as well as the power and performance impact of those events. Only custom metric events logged using MetricKit utility functions capture additional power and performance data.

> **Note**

>  The system limits the number of custom signpost metrics saved to the log in order to reduce on-device memory overhead. Limit use of custom metrics to critical sections of code.

## Topics

### Logging custom metrics

- [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](mxsignpost%28__dso_log_name_signpostid_____%29.md): Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.

### Reading custom metric data

- [signpostIntervalData](mxsignpostmetric/signpostintervaldata.md): Deprecated. The data captured for a custom metric.
- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.

### Reading data about the custom metric

- [signpostName](mxsignpostmetric/signpostname.md): Deprecated. The developer-specified name of the custom metric represented by the object.
- [signpostCategory](mxsignpostmetric/signpostcategory.md): Deprecated. The developer-specified category of the custom metric represented by the object.
- [totalCount](mxsignpostmetric/totalcount.md): Deprecated. The total number of occurrences of the captured custom metric.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

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

### Related Documentation

- [Logging](../os/logging.md): Capture telemetry from your app for debugging and performance analysis using the unified logging system.

### Signpost metrics

- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.
- [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](mxsignpost%28__dso_log_name_signpostid_____%29.md): Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.

# MXSignpostMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing a custom metric.

> Use [SignpostIntervalMetric](signpostintervalmetric.md) instead.

## Declaration

```objectivec
@interface MXSignpostMetric : MXMetric
```

<a id="overview"></a>

## Overview

A custom metric is an event type with a developer-defined name and category. You can add custom metrics to daily reports to capture information specific to your app.

Custom metrics are a type of signpost saved to custom OS logs created using [makeLogHandleWithCategory:](mxmetricmanager/makeloghandle%28category_%29.md). The daily report contains information about the number and duration of custom events, as well as the power and performance impact of those events. Only custom metric events logged using MetricKit utility functions capture additional power and performance data.

> **Note**

>  The system limits the number of custom signpost metrics saved to the log in order to reduce on-device memory overhead. Limit use of custom metrics to critical sections of code.

## Topics

### Logging custom metrics

- [MXSignpostEventEmit](mxsignposteventemit.md): Post a custom metric event to a metric kit log.
- [MXSignpostIntervalBegin](mxsignpostintervalbegin.md): Post the start time of a custom metric event to a metric kit log.
- [MXSignpostIntervalEnd](mxsignpostintervalend.md): Post the end time of a custom metric event to a metric kit log.

### Reading custom metric data

- [signpostIntervalData](mxsignpostmetric/signpostintervaldata.md): Deprecated. The data captured for a custom metric.
- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.

### Reading data about the custom metric

- [signpostName](mxsignpostmetric/signpostname.md): Deprecated. The developer-specified name of the custom metric represented by the object.
- [signpostCategory](mxsignpostmetric/signpostcategory.md): Deprecated. The developer-specified category of the custom metric represented by the object.
- [totalCount](mxsignpostmetric/totalcount.md): Deprecated. The total number of occurrences of the captured custom metric.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Related Documentation

- [Logging](../os/logging.md): Capture telemetry from your app for debugging and performance analysis using the unified logging system.

### Signpost metrics

- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.
- [MXSignpostEventEmit](mxsignposteventemit.md): Post a custom metric event to a metric kit log.
- [MXSignpostAnimationIntervalBegin](mxsignpostanimationintervalbegin.md)
- [MXSignpostIntervalBegin](mxsignpostintervalbegin.md): Post the start time of a custom metric event to a metric kit log.
- [MXSignpostIntervalEnd](mxsignpostintervalend.md): Post the end time of a custom metric event to a metric kit log.
