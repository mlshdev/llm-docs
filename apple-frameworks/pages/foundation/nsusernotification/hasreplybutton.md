> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/hasreplybutton](https://developer.apple.com/documentation/foundation/nsusernotification/hasreplybutton)

# hasReplyButton (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 11.0)

A Boolean value that specifies whether the notification displays a reply button.

## Declaration

```swift
var hasReplyButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set to [true](https://developer.apple.com/documentation/swift/true) if the notification has a reply button. The default value is [false](https://developer.apple.com/documentation/swift/false). If this property and [hasActionButton](hasactionbutton.md) are both [true](https://developer.apple.com/documentation/swift/true), the reply button is shown.

## See Also

### Displayed Notification Buttons

- [hasActionButton](hasactionbutton.md): Deprecated. A Boolean value that specifies whether the notification displays an action button.
- [actionButtonTitle](actionbuttontitle.md): Deprecated. Specifies the title of the action button displayed in the notification.
- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.

# hasReplyButton (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 11.0)

A Boolean value that specifies whether the notification displays a reply button.

## Declaration

```objectivec
@property BOOL hasReplyButton;
```

<a id="Discussion"></a>

## Discussion

Set to [true](https://developer.apple.com/documentation/swift/true) if the notification has a reply button. The default value is [false](https://developer.apple.com/documentation/swift/false). If this property and [hasActionButton](hasactionbutton.md) are both [true](https://developer.apple.com/documentation/swift/true), the reply button is shown.

## See Also

### Displayed Notification Buttons

- [hasActionButton](hasactionbutton.md): Deprecated. A Boolean value that specifies whether the notification displays an action button.
- [actionButtonTitle](actionbuttontitle.md): Deprecated. Specifies the title of the action button displayed in the notification.
- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
