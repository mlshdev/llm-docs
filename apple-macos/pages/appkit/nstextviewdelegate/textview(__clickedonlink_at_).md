> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:clickedonlink:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:clickedonlink:at:))

# textView(\_:clickedOnLink:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent after the user clicks a link.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, clickedOnLink link: Any, at charIndex: Int) -> Bool
```

## Parameters

- `textView`: The text view sending the message.
- `link`: The link that was clicked; the value of [link](https://developer.apple.com/documentation/foundation/nsattributedstring/key/link).
- `charIndex`: The character index where the click occurred, indexed within the text storage.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the click was handled; otherwise, [false](https://developer.apple.com/documentation/swift/false) to allow the next responder to handle it.

<a id="Discussion"></a>

## Discussion

The delegate can use this method to handle the click on the link. It is invoked by [clicked(onLink:at:)](../nstextview/clicked%28onlink_at_%29.md).

The `charIndex` parameter is a character index somewhere in the range of the link attribute. If the user actually physically clicked the link, then it should be the character that was originally clicked. In some cases a link may be opened indirectly or programmatically, in which case a character index somewhere in the range of the link attribute is supplied.

## See Also

### Related Documentation

- [clicked(onLink:at:)](../nstextview/clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.

### Clicking and Pasting

- [textView(\_:clickedOn:in:at:)](textview%28__clickedon_in_at_%29.md): Sent when the user clicks a cell.
- [textView(\_:doubleClickedOn:in:at:)](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.

# textView:clickedOnLink:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent after the user clicks a link.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) textView clickedOnLink:(id) link atIndex:(NSUInteger) charIndex;
```

## Parameters

- `textView`: The text view sending the message.
- `link`: The link that was clicked; the value of [link](https://developer.apple.com/documentation/foundation/nsattributedstring/key/link).
- `charIndex`: The character index where the click occurred, indexed within the text storage.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the click was handled; otherwise, [false](https://developer.apple.com/documentation/swift/false) to allow the next responder to handle it.

<a id="Discussion"></a>

## Discussion

The delegate can use this method to handle the click on the link. It is invoked by [clickedOnLink:atIndex:](../nstextview/clicked%28onlink_at_%29.md).

The `charIndex` parameter is a character index somewhere in the range of the link attribute. If the user actually physically clicked the link, then it should be the character that was originally clicked. In some cases a link may be opened indirectly or programmatically, in which case a character index somewhere in the range of the link attribute is supplied.

## See Also

### Related Documentation

- [clickedOnLink:atIndex:](../nstextview/clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.

### Clicking and Pasting

- [textView:clickedOnCell:inRect:atIndex:](textview%28__clickedon_in_at_%29.md): Sent when the user clicks a cell.
- [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
