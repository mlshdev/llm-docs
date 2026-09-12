> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:clickedon:in:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:clickedon:in:at:))

# textView(\_:clickedOn:in:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the user clicks a cell.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, clickedOn cell: any NSTextAttachmentCellProtocol, in cellFrame: NSRect, at charIndex: Int)
```

## Parameters

- `textView`: The text view sending the message.
- `cell`: The cell clicked by the user.
- `cellFrame`: The frame of the clicked cell.
- `charIndex`: The character index of the clicked cell.

<a id="Discussion"></a>

## Discussion

The delegate can use this message as its cue to perform an action or select the attachment cell’s character. `aTextView` is the first text view in a series shared by a layout manager, not necessarily the one that draws `cell`.

The delegate may subsequently receive a [textView(\_:doubleClickedOn:in:at:)](textview%28__doubleclickedon_in_at_%29.md) message if the user continues to perform a double click.

## See Also

### Clicking and Pasting

- [textView(\_:doubleClickedOn:in:at:)](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
- [textView(\_:clickedOnLink:at:)](textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.

# textView:clickedOnCell:inRect:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the user clicks a cell.

## Declaration

```objectivec
- (void) textView:(NSTextView *) textView clickedOnCell:(id<NSTextAttachmentCell>) cell inRect:(NSRect) cellFrame atIndex:(NSUInteger) charIndex;
```

## Parameters

- `textView`: The text view sending the message.
- `cell`: The cell clicked by the user.
- `cellFrame`: The frame of the clicked cell.
- `charIndex`: The character index of the clicked cell.

<a id="Discussion"></a>

## Discussion

The delegate can use this message as its cue to perform an action or select the attachment cell’s character. `aTextView` is the first text view in a series shared by a layout manager, not necessarily the one that draws `cell`.

The delegate may subsequently receive a [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md) message if the user continues to perform a double click.

## See Also

### Clicking and Pasting

- [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
- [textView:clickedOnLink:atIndex:](textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.
