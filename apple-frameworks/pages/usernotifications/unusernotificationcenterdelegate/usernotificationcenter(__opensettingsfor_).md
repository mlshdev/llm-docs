> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:opensettingsfor:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:opensettingsfor:))

# userNotificationCenter(\_:openSettingsFor:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Asks the delegate to display the in-app notification settings.

## Declaration

```swift
optional func userNotificationCenter(_ center: UNUserNotificationCenter, openSettingsFor notification: UNNotification?)
```

# userNotificationCenter:openSettingsForNotification: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Asks the delegate to display the in-app notification settings.

## Declaration

```objectivec
- (void) userNotificationCenter:(UNUserNotificationCenter *) center openSettingsForNotification:(UNNotification *) notification;
```
