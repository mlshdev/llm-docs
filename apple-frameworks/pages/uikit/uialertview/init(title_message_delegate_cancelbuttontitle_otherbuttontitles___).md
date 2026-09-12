> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/init(title:message:delegate:cancelbuttontitle:otherbuttontitles:_:)](https://developer.apple.com/documentation/uikit/uialertview/init(title:message:delegate:cancelbuttontitle:otherbuttontitles:_:))

# init(title:message:delegate:cancelButtonTitle:otherButtonTitles:\_:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 2.0+ (deprecated in 9.0)

Creates an alert view with the specified values.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String, message: String, delegate: (any UIAlertViewDelegate)?, cancelButtonTitle: String?, otherButtonTitles firstButtonTitle: String, _ moreButtonTitles: String...)
```

## See Also

### Creating alert views

- [init(title:message:delegate:cancelButtonTitle:)](init%28title_message_delegate_cancelbuttontitle_%29.md): Deprecated. Convenience method for initializing an alert view.
- [init(frame:)](init%28frame_%29.md): Deprecated. Creates an alert view with the specified frame.
- [init(coder:)](init%28coder_%29.md): Deprecated. Creates an alert view from data in an unarchiver.
