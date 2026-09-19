> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/textdidendediting-6cmke

# textDidEndEditing

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
static var textDidEndEditing: NotificationCenter.BaseMessageIdentifier<UITextView.TextDidEndEditingMessage> { get }
```

## See Also

### Identifying UIKit text view messages

- [textDidBeginEditing](textdidbeginediting-9y8tn.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextView.TextDidBeginEditingMessage>`.
- [textDidChange](textdidchange-8ns63.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UITextView.TextDidChangeMessage>`.
