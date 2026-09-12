> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/notificationusage/bundleidentifier](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/notificationusage/bundleidentifier)

# bundleIdentifier (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The bundle identifier of the app that corresponds to the notification.

## Declaration

```swift
var bundleIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets a value for this property only if the bundle identifier corresponds to an Apple app.

## See Also

### Analyzing Notification Use

- [event](event-swift.property.md): The way that the user interacts with the notification.
- [SRDeviceUsageReport.NotificationUsage.Event](event-swift.enum.md): The ways that a user interacts with notifications.

# bundleIdentifier (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The bundle identifier of the app that corresponds to the notification.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * bundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

The framework sets a value for this property only if the bundle identifier corresponds to an Apple app.

## See Also

### Analyzing Notification Use

- [event](event-swift.property.md): The way that the user interacts with the notification.
- [SRNotificationEvent](event-swift.enum.md): The ways that a user interacts with notifications.
