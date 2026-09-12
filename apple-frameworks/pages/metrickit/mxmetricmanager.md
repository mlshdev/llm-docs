> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager](https://developer.apple.com/documentation/metrickit/mxmetricmanager)

# MXMetricManager (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.

> Use [MetricManager](metricmanager.md) instead.

## Declaration

```swift
class MXMetricManager
```

<a id="overview"></a>

## Overview

The `MXMetricManager` shared object manages your subscription for receiving on-device daily metrics. It receives daily metric reports when the device your app is installed on is running iOS 13 and later or macOS 26 and later.

MetricKit starts accumulating reports for your app after calling [shared](mxmetricmanager/shared.md) for the first time. To receive the reports, call [add(\_:)](mxmetricmanager/add%28__%29.md) with an object that adopts the [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md) protocol. The system delivers metric reports at most once per day per metric source, and diagnostic reports immediately in iOS 15 and later and macOS 12 and later. Some metrics originate from different system sources and arrive in a separate payload, so your app may receive more than one metric payload per day. The reports contain the metrics from the past 24 hours and any previously undelivered daily reports. To pause receiving reports, call [remove(\_:)](mxmetricmanager/remove%28__%29.md).

Calls to add a subscriber and to receive reports are safe to use in performance-sensitive code, such as during app launch.

The following example shows a class that subscribes to and receives MetricKit reports.

```swift
class AppMetrics: NSObject, MXMetricManagerSubscriber {
    func receiveReports() {
       let manager = MXMetricManager.shared
       manager.add(self)
    }

    func pauseReports() {
       let manager = MXMetricManager.shared
       manager.remove(self)
    }

    // Receive daily metrics.
    func didReceive(_ payloads: [MXMetricPayload]) {
       // Process metrics.
    }

    // Receive diagnostics immediately when available.
    func didReceive(_ payloads: [MXDiagnosticPayload]) {
       // Process diagnostics.
    }
}

```

> **Note**

> To test MetricKit in your app, run your app on a physical device to receive metric reports and `didReceive(_:)` callbacks.

## Topics

### Getting the shared metrics manager

- [shared](mxmetricmanager/shared.md): Deprecated. An object that returns the shared metrics manager instance.

### Subscribing to reports

- [add(\_:)](mxmetricmanager/add%28__%29.md): Deprecated. Registers to receive a daily report of app metrics from the metrics manager.
- [remove(\_:)](mxmetricmanager/remove%28__%29.md): Deprecated. Unsubscribes from daily reports of app metrics.

### Retrieving previous reports

- [pastPayloads](mxmetricmanager/pastpayloads.md): Deprecated. Returns an array of the daily metrics reports generated since the last allocation of the shared manager instance.
- [pastDiagnosticPayloads](mxmetricmanager/pastdiagnosticpayloads.md): Deprecated. The diagnostic reports since the last initialization of the shared manager instance.

### Creating custom metric logs

- [makeLogHandle(category:)](mxmetricmanager/makeloghandle%28category_%29.md): Deprecated. Returns a log handle used for writing custom metric events.

### Measuring an extended launch

- [extendLaunchMeasurement(forTaskID:)](mxmetricmanager/extendlaunchmeasurement%28fortaskid_%29.md): Deprecated. Starts to measure an extended launch task with the given task identifier.
- [finishExtendedLaunchMeasurement(forTaskID:)](mxmetricmanager/finishextendedlaunchmeasurement%28fortaskid_%29.md): Deprecated. Signals the end of an extended launch task.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Metric and diagnostic reports

- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.

# MXMetricManager (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.

> Use [MetricManager](metricmanager.md) instead.

## Declaration

```objectivec
@interface MXMetricManager : NSObject
```

<a id="overview"></a>

## Overview

The `MXMetricManager` shared object manages your subscription for receiving on-device daily metrics. It receives daily metric reports when the device your app is installed on is running iOS 13 and later or macOS 26 and later.

MetricKit starts accumulating reports for your app after calling [sharedManager](mxmetricmanager/shared.md) for the first time. To receive the reports, call [addSubscriber:](mxmetricmanager/add%28__%29.md) with an object that adopts the [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md) protocol. The system delivers metric reports at most once per day per metric source, and diagnostic reports immediately in iOS 15 and later and macOS 12 and later. Some metrics originate from different system sources and arrive in a separate payload, so your app may receive more than one metric payload per day. The reports contain the metrics from the past 24 hours and any previously undelivered daily reports. To pause receiving reports, call [removeSubscriber:](mxmetricmanager/remove%28__%29.md).

Calls to add a subscriber and to receive reports are safe to use in performance-sensitive code, such as during app launch.

The following example shows a class that subscribes to and receives MetricKit reports.

```swift
class AppMetrics: NSObject, MXMetricManagerSubscriber {
    func receiveReports() {
       let manager = MXMetricManager.shared
       manager.add(self)
    }

    func pauseReports() {
       let manager = MXMetricManager.shared
       manager.remove(self)
    }

    // Receive daily metrics.
    func didReceive(_ payloads: [MXMetricPayload]) {
       // Process metrics.
    }

    // Receive diagnostics immediately when available.
    func didReceive(_ payloads: [MXDiagnosticPayload]) {
       // Process diagnostics.
    }
}

```

> **Note**

> To test MetricKit in your app, run your app on a physical device to receive metric reports and `didReceive(_:)` callbacks.

## Topics

### Getting the shared metrics manager

- [sharedManager](mxmetricmanager/shared.md): Deprecated. An object that returns the shared metrics manager instance.

### Subscribing to reports

- [addSubscriber:](mxmetricmanager/add%28__%29.md): Deprecated. Registers to receive a daily report of app metrics from the metrics manager.
- [removeSubscriber:](mxmetricmanager/remove%28__%29.md): Deprecated. Unsubscribes from daily reports of app metrics.

### Retrieving previous reports

- [pastPayloads](mxmetricmanager/pastpayloads.md): Deprecated. Returns an array of the daily metrics reports generated since the last allocation of the shared manager instance.
- [pastDiagnosticPayloads](mxmetricmanager/pastdiagnosticpayloads.md): Deprecated. The diagnostic reports since the last initialization of the shared manager instance.

### Creating custom metric logs

- [makeLogHandleWithCategory:](mxmetricmanager/makeloghandle%28category_%29.md): Deprecated. Returns a log handle used for writing custom metric events.

### Measuring an extended launch

- [extendLaunchMeasurementForTaskID:error:](mxmetricmanager/extendlaunchmeasurement%28fortaskid_%29.md): Deprecated. Starts to measure an extended launch task with the given task identifier.
- [finishExtendedLaunchMeasurementForTaskID:error:](mxmetricmanager/finishextendedlaunchmeasurement%28fortaskid_%29.md): Deprecated. Signals the end of an extended launch task.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metric and diagnostic reports

- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.
