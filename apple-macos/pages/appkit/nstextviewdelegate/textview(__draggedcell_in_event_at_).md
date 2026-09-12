> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:draggedcell:in:event:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:draggedcell:in:event:at:))

# textView(\_:draggedCell:in:event:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the user attempts to drag a cell.

## Declaration

```swift
@MainActor optional func textView(_ view: NSTextView, draggedCell cell: any NSTextAttachmentCellProtocol, in rect: NSRect, event: NSEvent, at charIndex: Int)
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell being dragged.
- `rect`: The rectangle from which the cell was dragged.
- `event`: The mouse-down event that preceded the mouse-dragged event.
- `charIndex`: The character position where the mouse button was clicked.

<a id="Discussion"></a>

## Discussion

The delegate can use this message as its cue to initiate a dragging operation.

## See Also

### Related Documentation

- [dragFile(\_:from:slideBack:event:)](../nsview/dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.

# textView:draggedCell:inRect:event:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the user attempts to drag a cell.

## Declaration

```objectivec
- (void) textView:(NSTextView *) view draggedCell:(id<NSTextAttachmentCell>) cell inRect:(NSRect) rect event:(NSEvent *) event atIndex:(NSUInteger) charIndex;
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell being dragged.
- `rect`: The rectangle from which the cell was dragged.
- `event`: The mouse-down event that preceded the mouse-dragged event.
- `charIndex`: The character position where the mouse button was clicked.

<a id="Discussion"></a>

## Discussion

The delegate can use this message as its cue to initiate a dragging operation.

## See Also

### Related Documentation

- [dragImage:at:offset:event:pasteboard:source:slideBack:](../nsview/dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.
- [dragFile:fromRect:slideBack:event:](../nsview/dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
