> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/clicked(onlink:at:)](https://developer.apple.com/documentation/appkit/nstextview/clicked(onlink:at:))

# clicked(onLink:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.

## Declaration

```swift
func clicked(onLink link: Any, at charIndex: Int)
```

## Parameters

- `link`: The link that was clicked; the value of [link](https://developer.apple.com/documentation/foundation/nsattributedstring/key/link).
- `charIndex`: The character index where the click occurred, indexed within the text storage.

<a id="Discussion"></a>

## Discussion

If, for instance, you have a special attachment cell that can follow links, you can use this method to ask the text view to follow a link once you decide it should. In addition, this method is invoked by the text view during mouse tracking if the user clicks a link.

The `charIndex` parameter is a character index somewhere in the range of the link attribute. If the user actually physically clicked the link, then it should be the character that was originally clicked. In some cases a link may be opened indirectly or programmatically, in which case a character index somewhere in the range of the link attribute is supplied.

This method sends the [textView(\_:clickedOnLink:at:)](../nstextviewdelegate/textview%28__clickedonlink_at_%29.md) delegate message if the delegate implements it, so that the delegate can handle the click.

## See Also

### Related Documentation

- [textView(\_:clickedOnLink:at:)](../nstextviewdelegate/textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.

### Clicking and pasting

- [pasteAsPlainText(\_:)](pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.
- [pasteAsRichText(\_:)](pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.

# clickedOnLink:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.

## Declaration

```objectivec
- (void) clickedOnLink:(id) link atIndex:(NSUInteger) charIndex;
```

## Parameters

- `link`: The link that was clicked; the value of [link](https://developer.apple.com/documentation/foundation/nsattributedstring/key/link).
- `charIndex`: The character index where the click occurred, indexed within the text storage.

<a id="Discussion"></a>

## Discussion

If, for instance, you have a special attachment cell that can follow links, you can use this method to ask the text view to follow a link once you decide it should. In addition, this method is invoked by the text view during mouse tracking if the user clicks a link.

The `charIndex` parameter is a character index somewhere in the range of the link attribute. If the user actually physically clicked the link, then it should be the character that was originally clicked. In some cases a link may be opened indirectly or programmatically, in which case a character index somewhere in the range of the link attribute is supplied.

This method sends the [textView:clickedOnLink:atIndex:](../nstextviewdelegate/textview%28__clickedonlink_at_%29.md) delegate message if the delegate implements it, so that the delegate can handle the click.

## See Also

### Related Documentation

- [textView:clickedOnLink:atIndex:](../nstextviewdelegate/textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.

### Clicking and pasting

- [pasteAsPlainText:](pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.
- [pasteAsRichText:](pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.
