> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/textdidchange-9363k

# textDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var textDidChange: NotificationCenter.BaseMessageIdentifier<UITextField.TextDidChangeMessage> { get }
```

## See Also

### Identifying UIKit text field messages

- [textDidBeginEditing](textdidbeginediting-7lt1k.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidBeginEditingMessage>`.
- [textDidEndEditing](textdidendediting-4r8fw.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextField.TextDidEndEditingMessage>`.
