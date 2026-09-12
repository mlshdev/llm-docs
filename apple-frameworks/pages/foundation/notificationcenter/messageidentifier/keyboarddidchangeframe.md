> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/keyboarddidchangeframe](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/keyboarddidchangeframe)

# keyboardDidChangeFrame

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
static var keyboardDidChangeFrame: NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidChangeFrameMessage> { get }
```

## See Also

### Identifying UIKit responder messages

- [keyboardWillChangeFrame](keyboardwillchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillChangeFrameMessage>`.
- [keyboardWillHide](keyboardwillhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillHideMessage>`.
- [keyboardDidHide](keyboarddidhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidHideMessage>`.
- [keyboardWillShow](keyboardwillshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillShowMessage>`.
- [keyboardDidShow](keyboarddidshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidShowMessage>`.
