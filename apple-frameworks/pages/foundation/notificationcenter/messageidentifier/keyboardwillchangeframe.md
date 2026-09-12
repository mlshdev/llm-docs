> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/keyboardwillchangeframe](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/keyboardwillchangeframe)

# keyboardWillChangeFrame

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
static var keyboardWillChangeFrame: NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillChangeFrameMessage> { get }
```

## See Also

### Identifying UIKit responder messages

- [keyboardDidChangeFrame](keyboarddidchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidChangeFrameMessage>`.
- [keyboardWillHide](keyboardwillhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillHideMessage>`.
- [keyboardDidHide](keyboarddidhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidHideMessage>`.
- [keyboardWillShow](keyboardwillshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillShowMessage>`.
- [keyboardDidShow](keyboarddidshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidShowMessage>`.
