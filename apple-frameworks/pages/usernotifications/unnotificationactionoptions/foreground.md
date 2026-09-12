> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionoptions/foreground](https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/foreground)

# foreground (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The action causes the app to launch in the foreground.

## Declaration

```swift
static var foreground: UNNotificationActionOptions { get }
```

<a id="Discussion"></a>

## Discussion

When the user selects an action containing this option, the system brings the app to the foreground, asking the user to unlock the device as needed. Use this option for actions that require the user to interact further with your app. Do not use this option simply to bring your app to the foreground.

## See Also

### Constants

- [authenticationRequired](authenticationrequired.md): The action can be performed only on an unlocked device.
- [destructive](destructive.md): The action performs a destructive task.

# UNNotificationActionOptionForeground (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The action causes the app to launch in the foreground.

## Declaration

```objectivec
UNNotificationActionOptionForeground
```

<a id="Discussion"></a>

## Discussion

When the user selects an action containing this option, the system brings the app to the foreground, asking the user to unlock the device as needed. Use this option for actions that require the user to interact further with your app. Do not use this option simply to bring your app to the foreground.

## See Also

### Constants

- [UNNotificationActionOptionAuthenticationRequired](authenticationrequired.md): The action can be performed only on an unlocked device.
- [UNNotificationActionOptionDestructive](destructive.md): The action performs a destructive task.
