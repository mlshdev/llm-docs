> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview:doubleclickedoncell:inrect:](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview:doubleclickedoncell:inrect:)

# textView:doubleClickedOnCell:inRect:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sent when the user double-clicks a cell.

> Use textView:doubleClickedOnCell:inRect:atIndex: instead.

## Declaration

```objectivec
- (void) textView:(NSTextView *) textView doubleClickedOnCell:(id<NSTextAttachmentCell>) cell inRect:(NSRect) cellFrame;
```

## Parameters

- `textView`: The text view sending the message.
- `cell`: The cell double-clicked by the user.
- `cellFrame`: The frame of the double-clicked cell.

<a id="Discussion"></a>

## Discussion

This message is only sent if [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md) is not implemented. Implement this method in order to track the mouse after a mouse double-click on a cell.

## See Also

### Related Documentation

- [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.

### Deprecated Methods

- [textView:clickedOnLink:](textview_clickedonlink_.md): Deprecated. Sent after the user clicks on a link.
- [textView:draggedCell:inRect:event:](textview_draggedcell_inrect_event_.md): Deprecated. Sent when the user attempts to drag a cell.
- [textView:clickedOnCell:inRect:](textview_clickedoncell_inrect_.md): Deprecated. Sent when the user clicks a cell.
