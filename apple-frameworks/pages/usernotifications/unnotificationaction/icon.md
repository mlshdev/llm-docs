> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationaction/icon](https://developer.apple.com/documentation/usernotifications/unnotificationaction/icon)

# icon (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The icon associated with the action.

## Declaration

```swift
@NSCopying var icon: UNNotificationActionIcon? { get }
```

<a id="Discussion"></a>

## Discussion

The system displays this icon in the notification interface to help the user identify the app associated with the action.

## See Also

### Getting Information

- [identifier](identifier.md): The unique string that your app uses to identify the action.
- [title](title.md): The localized string to use as the title of the action.

# icon (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The icon associated with the action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UNNotificationActionIcon * icon;
```

```objectivec
@property (atomic, copy, readonly, nullable) UNNotificationActionIcon * icon;
```

<a id="Discussion"></a>

## Discussion

The system displays this icon in the notification interface to help the user identify the app associated with the action.

## See Also

### Getting Information

- [identifier](identifier.md): The unique string that your app uses to identify the action.
- [title](title.md): The localized string to use as the title of the action.
