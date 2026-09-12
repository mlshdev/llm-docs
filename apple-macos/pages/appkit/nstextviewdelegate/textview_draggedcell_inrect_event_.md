> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview:draggedcell:inrect:event:](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview:draggedcell:inrect:event:)

# textView:draggedCell:inRect:event:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sent when the user attempts to drag a cell.

> Use textView:draggedCell:inRect:event:atIndex: instead.

## Declaration

```objectivec
- (void) textView:(NSTextView *) view draggedCell:(id<NSTextAttachmentCell>) cell inRect:(NSRect) rect event:(NSEvent *) event;
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell being dragged.
- `rect`: The rectangle from which the cell was dragged.
- `event`: The mouse-down event that preceded the mouse-dragged event.

<a id="Discussion"></a>

## Discussion

This method has been deprecated in favor of [textView:draggedCell:inRect:event:atIndex:](textview%28__draggedcell_in_event_at_%29.md).

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](../nsview/dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.
- [dragFile:fromRect:slideBack:event:](../nsview/dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.

### Deprecated Methods

- [textView:clickedOnLink:](textview_clickedonlink_.md): Deprecated. Sent after the user clicks on a link.
- [textView:clickedOnCell:inRect:](textview_clickedoncell_inrect_.md): Deprecated. Sent when the user clicks a cell.
- [textView:doubleClickedOnCell:inRect:](textview_doubleclickedoncell_inrect_.md): Deprecated. Sent when the user double-clicks a cell.
