> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionoptions/authenticationrequired](https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/authenticationrequired)

# authenticationRequired (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The action can be performed only on an unlocked device.

## Declaration

```swift
static var authenticationRequired: UNNotificationActionOptions { get }
```

<a id="Discussion"></a>

## Discussion

When the user selects an action with this option, the system prompts the user to unlock the device. After unlocking, the system notifies your app of the selected action. You might use option to perform actions that require accessing data that is encrypted while the device is locked.

## See Also

### Constants

- [destructive](destructive.md): The action performs a destructive task.
- [foreground](foreground.md): The action causes the app to launch in the foreground.

# UNNotificationActionOptionAuthenticationRequired (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The action can be performed only on an unlocked device.

## Declaration

```objectivec
UNNotificationActionOptionAuthenticationRequired
```

<a id="Discussion"></a>

## Discussion

When the user selects an action with this option, the system prompts the user to unlock the device. After unlocking, the system notifies your app of the selected action. You might use option to perform actions that require accessing data that is encrypted while the device is locked.

## See Also

### Constants

- [UNNotificationActionOptionDestructive](destructive.md): The action performs a destructive task.
- [UNNotificationActionOptionForeground](foreground.md): The action causes the app to launch in the foreground.
