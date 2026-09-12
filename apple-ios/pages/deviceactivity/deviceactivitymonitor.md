> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitymonitor](https://developer.apple.com/documentation/deviceactivity/deviceactivitymonitor)

# DeviceActivityMonitor

**Framework:** Device Activity  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The object that monitors scheduled device activity.

## Declaration

```swift
@objc class DeviceActivityMonitor
```

<a id="overview"></a>

## Overview

`DeviceActivityMonitor` provides the entry point into a device activity monitor extension. You should subclass `DeviceActivityMonitor` and designate your subclass as the principal class of your app extension.

The following code implements `DeviceActivityMonitor` in an app:

```swift
class MyMonitorExtension: DeviceActivityMonitor {
  let store = ManagedSettingsStore()

  // You can use the `store` property to shield apps when an interval starts, ends, or meets a threshold.
  override func intervalDidStart(for activity: DeviceActivityName) {
      super.intervalDidStart(for: activity)

      // Shield selected applications.
      let model = MyModel()
      let applications = model.selectionToShield.applications
      store.shield.applications = applications.isEmpty ? nil : applications
   }
```

> **Note**

> Shielding an app dims the app’s icon on the homescreen and applies an hourglass symbol. When the app launches, the system covers it with a view that your app can configure.

## Topics

### Configuring a Monitor

- [init()](deviceactivitymonitor/init%28%29.md): Creates a new monitor instance implemented by subclasses.

### Monitoring Scheduled Intervals

- [intervalDidEnd(for:)](deviceactivitymonitor/intervaldidend%28for_%29.md): Indicates that the device activity interval ended.
- [intervalDidStart(for:)](deviceactivitymonitor/intervaldidstart%28for_%29.md): Indicates that the device activity interval started.
- [intervalWillEndWarning(for:)](deviceactivitymonitor/intervalwillendwarning%28for_%29.md): Warns your app of an ongoing activity’s conclusion a specified time before the activity ends.
- [intervalWillStartWarning(for:)](deviceactivitymonitor/intervalwillstartwarning%28for_%29.md): Warns your app of an upcoming activity a specified time before the activity starts.

### Monitoring Event Thresholds

- [eventDidReachThreshold(\_:activity:)](deviceactivitymonitor/eventdidreachthreshold%28__activity_%29.md): Indicates that the activity reached its threshold.
- [eventWillReachThresholdWarning(\_:activity:)](deviceactivitymonitor/eventwillreachthresholdwarning%28__activity_%29.md): Warns your app that an activity is about to reach its threshold.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
