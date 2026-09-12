> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionoptions/destructive](https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/destructive)

# destructive (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The action performs a destructive task.

## Declaration

```swift
static var destructive: UNNotificationActionOptions { get }
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)

<a id="Discussion"></a>

## Discussion

Use this option for actions that delete user data or change the app irrevocably. The action button is displayed with special highlighting to indicate that it performs a destructive task.

## See Also

### Constants

- [authenticationRequired](authenticationrequired.md): The action can be performed only on an unlocked device.
- [foreground](foreground.md): The action causes the app to launch in the foreground.

# UNNotificationActionOptionDestructive (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The action performs a destructive task.

## Declaration

```objectivec
UNNotificationActionOptionDestructive
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)

<a id="Discussion"></a>

## Discussion

Use this option for actions that delete user data or change the app irrevocably. The action button is displayed with special highlighting to indicate that it performs a destructive task.

## See Also

### Constants

- [UNNotificationActionOptionAuthenticationRequired](authenticationrequired.md): The action can be performed only on an unlocked device.
- [UNNotificationActionOptionForeground](foreground.md): The action causes the app to launch in the foreground.
