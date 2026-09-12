> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/notificationusage/event-swift.enum](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/notificationusage/event-swift.enum)

# SRDeviceUsageReport.NotificationUsage.Event (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The ways that a user interacts with notifications.

## Declaration

```swift
enum Event
```

## Topics

### Events

- [SRDeviceUsageReport.NotificationUsage.Event.appLaunch](event-swift.enum/applaunch.md): A notification of an app launch.
- [SRDeviceUsageReport.NotificationUsage.Event.bannerPulldown](event-swift.enum/bannerpulldown.md): A notification of a banner pull down.
- [SRDeviceUsageReport.NotificationUsage.Event.clear](event-swift.enum/clear.md): A notification of a clear event.
- [SRDeviceUsageReport.NotificationUsage.Event.deduped](event-swift.enum/deduped.md): A notification of a deduped event.
- [SRDeviceUsageReport.NotificationUsage.Event.defaultAction](event-swift.enum/defaultaction.md): A notification of a default action.
- [SRDeviceUsageReport.NotificationUsage.Event.deviceActivated](event-swift.enum/deviceactivated.md): A notification of device activation.
- [SRDeviceUsageReport.NotificationUsage.Event.deviceUnlocked](event-swift.enum/deviceunlocked.md): A notification of a device unlock.
- [SRDeviceUsageReport.NotificationUsage.Event.expired](event-swift.enum/expired.md): A notification of an expiration event.
- [SRDeviceUsageReport.NotificationUsage.Event.hide](event-swift.enum/hide.md): A notification of a hide event.
- [SRDeviceUsageReport.NotificationUsage.Event.longLook](event-swift.enum/longlook.md): A notification of a long look.
- [SRDeviceUsageReport.NotificationUsage.Event.notificationCenterClearAll](event-swift.enum/notificationcenterclearall.md): A notification of clear-all event.
- [SRDeviceUsageReport.NotificationUsage.Event.received](event-swift.enum/received.md): A notification of a received event.
- [SRDeviceUsageReport.NotificationUsage.Event.removed](event-swift.enum/removed.md): A notification of a removed event.
- [SRDeviceUsageReport.NotificationUsage.Event.silence](event-swift.enum/silence.md): A notification of a silence event.
- [SRDeviceUsageReport.NotificationUsage.Event.supplementaryAction](event-swift.enum/supplementaryaction.md): A notification of a supplementary action.
- [SRDeviceUsageReport.NotificationUsage.Event.tapCoalesce](event-swift.enum/tapcoalesce.md): A notification of a tap-coalesce event.
- [SRDeviceUsageReport.NotificationUsage.Event.unknown](event-swift.enum/unknown.md): A notification of an unknown event.

### Initializers

- [init(rawValue:)](event-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Analyzing Notification Use

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app that corresponds to the notification.
- [event](event-swift.property.md): The way that the user interacts with the notification.

# SRNotificationEvent (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The ways that a user interacts with notifications.

## Declaration

```objectivec
enum SRNotificationEvent : NSInteger;
```

## Topics

### Events

- [SRNotificationEventAppLaunch](event-swift.enum/applaunch.md): A notification of an app launch.
- [SRNotificationEventBannerPulldown](event-swift.enum/bannerpulldown.md): A notification of a banner pull down.
- [SRNotificationEventClear](event-swift.enum/clear.md): A notification of a clear event.
- [SRNotificationEventDeduped](event-swift.enum/deduped.md): A notification of a deduped event.
- [SRNotificationEventDefaultAction](event-swift.enum/defaultaction.md): A notification of a default action.
- [SRNotificationEventDeviceActivated](event-swift.enum/deviceactivated.md): A notification of device activation.
- [SRNotificationEventDeviceUnlocked](event-swift.enum/deviceunlocked.md): A notification of a device unlock.
- [SRNotificationEventExpired](event-swift.enum/expired.md): A notification of an expiration event.
- [SRNotificationEventHide](event-swift.enum/hide.md): A notification of a hide event.
- [SRNotificationEventLongLook](event-swift.enum/longlook.md): A notification of a long look.
- [SRNotificationEventNotificationCenterClearAll](event-swift.enum/notificationcenterclearall.md): A notification of clear-all event.
- [SRNotificationEventReceived](event-swift.enum/received.md): A notification of a received event.
- [SRNotificationEventRemoved](event-swift.enum/removed.md): A notification of a removed event.
- [SRNotificationEventSilence](event-swift.enum/silence.md): A notification of a silence event.
- [SRNotificationEventSupplementaryAction](event-swift.enum/supplementaryaction.md): A notification of a supplementary action.
- [SRNotificationEventTapCoalesce](event-swift.enum/tapcoalesce.md): A notification of a tap-coalesce event.
- [SRNotificationEventUnknown](event-swift.enum/unknown.md): A notification of an unknown event.

## See Also

### Analyzing Notification Use

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app that corresponds to the notification.
- [event](event-swift.property.md): The way that the user interacts with the notification.
