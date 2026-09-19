> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/textdidbeginediting-7lt1k

# textDidBeginEditing

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var textDidBeginEditing: NotificationCenter.BaseMessageIdentifier<UITextField.TextDidBeginEditingMessage> { get }
```

## See Also

### Identifying UIKit text field messages

- [textDidChange](textdidchange-9363k.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidChangeMessage>`.
- [textDidEndEditing](textdidendediting-4r8fw.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidEndEditingMessage>`.
