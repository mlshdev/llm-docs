> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange)

# NSProcessInfoPowerStateDidChange (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posts when the power state of a device changes.

## Declaration

```swift
static let NSProcessInfoPowerStateDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

After your observer receives this notification, query the [isLowPowerModeEnabled](../../processinfo/islowpowermodeenabled.md) property to determine the current power state of the device. If Low Power Mode is active, take appropriate steps to reduce activity in your app. Otherwise, your app can resume normal operations.

The notification object is a [ProcessInfo](../../processinfo.md) instance.

## See Also

### Related Documentation

- [addObserver(\_:selector:name:object:)](../../notificationcenter/addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center to call the provided selector with the notification.
- [isLowPowerModeEnabled](../../processinfo/islowpowermodeenabled.md): A Boolean value that indicates the current state of Low Power Mode.
- [NotificationCenter](../../notificationcenter.md): A notification dispatch mechanism that enables the broadcast of information to registered observers.

### Working with notifications

- [thermalStateDidChangeNotification](../../processinfo/thermalstatedidchangenotification.md): Posts when the thermal state of the system changes.

# NSProcessInfoPowerStateDidChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posts when the power state of a device changes.

## Declaration

```objectivec
extern NSNotificationName const NSProcessInfoPowerStateDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

After your observer receives this notification, query the [lowPowerModeEnabled](../../processinfo/islowpowermodeenabled.md) property to determine the current power state of the device. If Low Power Mode is active, take appropriate steps to reduce activity in your app. Otherwise, your app can resume normal operations.

The notification object is a [NSProcessInfo](../../processinfo.md) instance.

## See Also

### Related Documentation

- [addObserver:selector:name:object:](../../notificationcenter/addobserver%28__selector_name_object_%29.md): Adds an entry to the notification center to call the provided selector with the notification.
- [lowPowerModeEnabled](../../processinfo/islowpowermodeenabled.md): A Boolean value that indicates the current state of Low Power Mode.
- [NSNotificationCenter](../../notificationcenter.md): A notification dispatch mechanism that enables the broadcast of information to registered observers.

### Working with notifications

- [NSProcessInfoThermalStateDidChangeNotification](../../processinfo/thermalstatedidchangenotification.md): Posts when the thermal state of the system changes.
