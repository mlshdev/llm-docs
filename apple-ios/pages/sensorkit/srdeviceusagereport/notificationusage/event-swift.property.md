> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/notificationusage/event-swift.property](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/notificationusage/event-swift.property)

# event (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The way that the user interacts with the notification.

## Declaration

```swift
var event: SRDeviceUsageReport.NotificationUsage.Event { get }
```

## See Also

### Analyzing Notification Use

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app that corresponds to the notification.
- [SRDeviceUsageReport.NotificationUsage.Event](event-swift.enum.md): The ways that a user interacts with notifications.

# event (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The way that the user interacts with the notification.

## Declaration

```objectivec
@property (readonly) SRNotificationEvent event;
```

## See Also

### Analyzing Notification Use

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app that corresponds to the notification.
- [SRNotificationEvent](event-swift.enum.md): The ways that a user interacts with notifications.
