> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/keyboardwillhide

# keyboardWillHide

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
static var keyboardWillHide: NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillHideMessage> { get }
```

## See Also

### Identifying UIKit responder messages

- [keyboardWillChangeFrame](keyboardwillchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillChangeFrameMessage>`.
- [keyboardDidChangeFrame](keyboarddidchangeframe.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidChangeFrameMessage>`.
- [keyboardDidHide](keyboarddidhide.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidHideMessage>`.
- [keyboardWillShow](keyboardwillshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardWillShowMessage>`.
- [keyboardDidShow](keyboarddidshow.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UIResponder.KeyboardDidShowMessage>`.
