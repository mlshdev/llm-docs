> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationresponse/actionidentifier](https://developer.apple.com/documentation/usernotifications/unnotificationresponse/actionidentifier)

# actionIdentifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier string of the action that the user selected.

## Declaration

```swift
var actionIdentifier: String { get }
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)
- [Handling notifications and notification-related actions](../handling-notifications-and-notification-related-actions.md)

<a id="Discussion"></a>

## Discussion

This parameter may contain one the identifier of one of your [UNNotificationAction](../unnotificationaction.md) objects or it may contain a system-defined identifier. The system defined identifiers are [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md) and [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md), which indicate that the user opened the app or dismissed the notification without any further actions.

For more information about defining custom actions, see [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md).

## See Also

### Getting the Response Information

- [notification](notification.md): The notification to which the user responded.
- [targetScene](targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.

# actionIdentifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The identifier string of the action that the user selected.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * actionIdentifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * actionIdentifier;
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)
- [Handling notifications and notification-related actions](../handling-notifications-and-notification-related-actions.md)

<a id="Discussion"></a>

## Discussion

This parameter may contain one the identifier of one of your [UNNotificationAction](../unnotificationaction.md) objects or it may contain a system-defined identifier. The system defined identifiers are [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md) and [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md), which indicate that the user opened the app or dismissed the notification without any further actions.

For more information about defining custom actions, see [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md).

## See Also

### Getting the Response Information

- [notification](notification.md): The notification to which the user responded.
- [targetScene](targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.
