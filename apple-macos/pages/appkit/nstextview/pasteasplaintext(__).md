> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/pasteasplaintext(_:)](https://developer.apple.com/documentation/appkit/nstextview/pasteasplaintext(_:))

# pasteAsPlainText(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the contents of the pasteboard into the receiver’s text as plain text.

## Declaration

```swift
func pasteAsPlainText(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

This method behaves analogously to [insertText(\_:)](inserttext%28__%29.md).

## See Also

### Related Documentation

- [insertText(\_:)](inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

### Clicking and pasting

- [clicked(onLink:at:)](clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.
- [pasteAsRichText(\_:)](pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.

# pasteAsPlainText: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the contents of the pasteboard into the receiver’s text as plain text.

## Declaration

```objectivec
- (void) pasteAsPlainText:(id) sender;
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

This method behaves analogously to [insertText:](inserttext%28__%29.md).

## See Also

### Related Documentation

- [insertText:](inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

### Clicking and pasting

- [clickedOnLink:atIndex:](clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.
- [pasteAsRichText:](pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.
