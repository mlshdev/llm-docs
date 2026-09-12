> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview:clickedoncell:inrect:](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview:clickedoncell:inrect:)

# textView:clickedOnCell:inRect:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sent when the user clicks a cell.

> Use textView:clickedOnCell:inRect:atIndex: instead.

## Declaration

```objectivec
- (void) textView:(NSTextView *) textView clickedOnCell:(id<NSTextAttachmentCell>) cell inRect:(NSRect) cellFrame;
```

## Parameters

- `textView`: The text view sending the message.
- `cell`: The cell clicked by the user.
- `cellFrame`: The frame of the clicked cell.

<a id="Discussion"></a>

## Discussion

This message is only sent if textView:clickedOnCell:inRect:atIndex: is not implemented. Implement this method in order to track the mouse after a mouse click on a cell.

## See Also

### Deprecated Methods

- [textView:clickedOnLink:](textview_clickedonlink_.md): Deprecated. Sent after the user clicks on a link.
- [textView:draggedCell:inRect:event:](textview_draggedcell_inrect_event_.md): Deprecated. Sent when the user attempts to drag a cell.
- [textView:doubleClickedOnCell:inRect:](textview_doubleclickedoncell_inrect_.md): Deprecated. Sent when the user double-clicks a cell.
