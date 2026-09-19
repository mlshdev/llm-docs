> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unnotificationresponse/targetscene

# targetScene (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The scene where the system reflects the user’s response to a notification.

## Declaration

```swift
var targetScene: UIScene? { get }
```

## See Also

### Getting the Response Information

- [actionIdentifier](actionidentifier.md): The identifier string of the action that the user selected.
- [notification](notification.md): The notification to which the user responded.
- [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.

# targetScene (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The scene where the system reflects the user’s response to a notification.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIScene * targetScene;
```

## See Also

### Getting the Response Information

- [actionIdentifier](actionidentifier.md): The identifier string of the action that the user selected.
- [notification](notification.md): The notification to which the user responded.
- [UNNotificationDefaultActionIdentifier](../unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](../unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.
