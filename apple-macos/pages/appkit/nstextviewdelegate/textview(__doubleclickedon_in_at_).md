> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:doubleclickedon:in:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:doubleclickedon:in:at:))

# textView(\_:doubleClickedOn:in:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the user double-clicks a cell.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, doubleClickedOn cell: any NSTextAttachmentCellProtocol, in cellFrame: NSRect, at charIndex: Int)
```

## Parameters

- `textView`: The text view sending the message.
- `cell`: The cell double-clicked by the user.
- `cellFrame`: The frame of the double-clicked cell.
- `charIndex`: The character index of the double-clicked cell.

<a id="Discussion"></a>

## Discussion

The delegate can use this message as its cue to perform an action, such as opening the file represented by the attachment. `aTextView` is the first text view in a series shared by a layout manager, not necessarily the one that draws `cell`.

## See Also

### Clicking and Pasting

- [textView(\_:clickedOn:in:at:)](textview%28__clickedon_in_at_%29.md): Sent when the user clicks a cell.
- [textView(\_:clickedOnLink:at:)](textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.

# textView:doubleClickedOnCell:inRect:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the user double-clicks a cell.

## Declaration

```objectivec
- (void) textView:(NSTextView *) textView doubleClickedOnCell:(id<NSTextAttachmentCell>) cell inRect:(NSRect) cellFrame atIndex:(NSUInteger) charIndex;
```

## Parameters

- `textView`: The text view sending the message.
- `cell`: The cell double-clicked by the user.
- `cellFrame`: The frame of the double-clicked cell.
- `charIndex`: The character index of the double-clicked cell.

<a id="Discussion"></a>

## Discussion

The delegate can use this message as its cue to perform an action, such as opening the file represented by the attachment. `aTextView` is the first text view in a series shared by a layout manager, not necessarily the one that draws `cell`.

## See Also

### Clicking and Pasting

- [textView:clickedOnCell:inRect:atIndex:](textview%28__clickedon_in_at_%29.md): Sent when the user clicks a cell.
- [textView:clickedOnLink:atIndex:](textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.
