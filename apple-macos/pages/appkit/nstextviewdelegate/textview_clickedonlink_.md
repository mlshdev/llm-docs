> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview:clickedonlink:](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview:clickedonlink:)

# textView:clickedOnLink:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sent after the user clicks on a link.

> Use textView:clickedOnLink:atIndex: instead.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) textView clickedOnLink:(id) link;
```

## Parameters

- `textView`: The text view sending the message.
- `link`: The link that was clicked.

<a id="Discussion"></a>

## Discussion

This message is only sent if textView:clickedOnLink:atIndex: is not implemented.

## See Also

### Related Documentation

- [textView:clickedOnLink:atIndex:](textview%28__clickedonlink_at_%29.md): Sent after the user clicks a link.
- [clickedOnLink:atIndex:](../nstextview/clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.

### Deprecated Methods

- [textView:draggedCell:inRect:event:](textview_draggedcell_inrect_event_.md): Deprecated. Sent when the user attempts to drag a cell.
- [textView:clickedOnCell:inRect:](textview_clickedoncell_inrect_.md): Deprecated. Sent when the user clicks a cell.
- [textView:doubleClickedOnCell:inRect:](textview_doubleclickedoncell_inrect_.md): Deprecated. Sent when the user double-clicks a cell.
