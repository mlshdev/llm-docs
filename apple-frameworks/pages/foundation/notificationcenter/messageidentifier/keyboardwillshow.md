> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/keyboardwillshow

# keyboardWillShow

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
static var keyboardWillShow: NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillShowMessage> { get }
```

## See Also

### Identifying UIKit responder messages

- [keyboardWillChangeFrame](keyboardwillchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillChangeFrameMessage>`.
- [keyboardDidChangeFrame](keyboarddidchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidChangeFrameMessage>`.
- [keyboardWillHide](keyboardwillhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillHideMessage>`.
- [keyboardDidHide](keyboarddidhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidHideMessage>`.
- [keyboardDidShow](keyboarddidshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidShowMessage>`.
