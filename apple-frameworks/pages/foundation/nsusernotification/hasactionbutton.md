> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/hasactionbutton](https://developer.apple.com/documentation/foundation/nsusernotification/hasactionbutton)

# hasActionButton (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

A Boolean value that specifies whether the notification displays an action button.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var hasActionButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set to [false](https://developer.apple.com/documentation/swift/false) if the notification has no action button. This is the case for notifications that are purely for information and have no user action. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Displayed Notification Buttons

- [actionButtonTitle](actionbuttontitle.md): Deprecated. Specifies the title of the action button displayed in the notification.
- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
- [hasReplyButton](hasreplybutton.md): Deprecated. A Boolean value that specifies whether the notification displays a reply button.

# hasActionButton (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

A Boolean value that specifies whether the notification displays an action button.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property BOOL hasActionButton;
```

<a id="Discussion"></a>

## Discussion

Set to [false](https://developer.apple.com/documentation/swift/false) if the notification has no action button. This is the case for notifications that are purely for information and have no user action. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Displayed Notification Buttons

- [actionButtonTitle](actionbuttontitle.md): Deprecated. Specifies the title of the action button displayed in the notification.
- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
- [hasReplyButton](hasreplybutton.md): Deprecated. A Boolean value that specifies whether the notification displays a reply button.
