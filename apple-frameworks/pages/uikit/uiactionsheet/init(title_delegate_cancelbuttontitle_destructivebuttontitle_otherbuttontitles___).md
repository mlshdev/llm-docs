> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/init(title:delegate:cancelbuttontitle:destructivebuttontitle:otherbuttontitles:_:)](https://developer.apple.com/documentation/uikit/uiactionsheet/init(title:delegate:cancelbuttontitle:destructivebuttontitle:otherbuttontitles:_:))

# init(title:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:\_:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 2.0+ (deprecated in 8.3)

Creates an action sheet with the specified values.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String?, delegate: (any UIActionSheetDelegate)?, cancelButtonTitle: String?, destructiveButtonTitle: String?, otherButtonTitles firstButtonTitle: String, _ moreButtonTitles: String...)
```

## See Also

### Creating action sheets

- [init(title:delegate:cancelButtonTitle:destructiveButtonTitle:)](init%28title_delegate_cancelbuttontitle_destructivebuttontitle_%29.md): Deprecated. Initializes the action sheet using the specified starting parameters.
