> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationresponse/notification](https://developer.apple.com/documentation/usernotifications/unnotificationresponse/notification)

# notification (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The notification to which the user responded.

## Declaration

```swift
@NSCopying var notification: UNNotification { get }
```

## See Also

### Getting the Response Information

- [actionIdentifier](actionidentifier.md): The identifier string of the action that the user selected.
- [targetScene](targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.

# notification (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The notification to which the user responded.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UNNotification * notification;
```

```objectivec
@property (atomic, copy, readonly) UNNotification * notification;
```

## See Also

### Getting the Response Information

- [actionIdentifier](actionidentifier.md): The identifier string of the action that the user selected.
- [targetScene](targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.
