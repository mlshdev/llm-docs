> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/pasteasrichtext(_:)](https://developer.apple.com/documentation/appkit/nstextview/pasteasrichtext(_:))

# pasteAsRichText(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.

## Declaration

```swift
func pasteAsRichText(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

The text is inserted at the insertion point if there is one, otherwise replacing the selection.

## See Also

### Related Documentation

- [insertText(\_:)](inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

### Clicking and pasting

- [clicked(onLink:at:)](clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.
- [pasteAsPlainText(\_:)](pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.

# pasteAsRichText: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.

## Declaration

```objectivec
- (void) pasteAsRichText:(id) sender;
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

The text is inserted at the insertion point if there is one, otherwise replacing the selection.

## See Also

### Related Documentation

- [insertText:](inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

### Clicking and pasting

- [clickedOnLink:atIndex:](clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.
- [pasteAsPlainText:](pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.
