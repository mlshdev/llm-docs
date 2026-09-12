> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/actionbuttontitle](https://developer.apple.com/documentation/foundation/nsusernotification/actionbuttontitle)

# actionButtonTitle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the title of the action button displayed in the notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var actionButtonTitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

This value should be localized as it is presented to the user. The string is truncated to a length appropriate for display and the property is modified to reflect the truncation.

## See Also

### Displayed Notification Buttons

- [hasActionButton](hasactionbutton.md): Deprecated. A Boolean value that specifies whether the notification displays an action button.
- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
- [hasReplyButton](hasreplybutton.md): Deprecated. A Boolean value that specifies whether the notification displays a reply button.

# actionButtonTitle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the title of the action button displayed in the notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy) NSString * actionButtonTitle;
```

<a id="Discussion"></a>

## Discussion

This value should be localized as it is presented to the user. The string is truncated to a length appropriate for display and the property is modified to reflect the truncation.

## See Also

### Displayed Notification Buttons

- [hasActionButton](hasactionbutton.md): Deprecated. A Boolean value that specifies whether the notification displays an action button.
- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
- [hasReplyButton](hasreplybutton.md): Deprecated. A Boolean value that specifies whether the notification displays a reply button.
