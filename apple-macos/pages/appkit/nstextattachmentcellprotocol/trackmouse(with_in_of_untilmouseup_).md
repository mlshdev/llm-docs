> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/trackmouse(with:in:of:untilmouseup:)](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/trackmouse(with:in:of:untilmouseup:))

# trackMouse(with:in:of:untilMouseUp:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event

## Declaration

```swift
@MainActor func trackMouse(with theEvent: NSEvent, in cellFrame: NSRect, of controlView: NSView?, untilMouseUp flag: Bool) -> Bool
```

## Parameters

- `theEvent`: The mouse-down event.
- `cellFrame`: The region of an [NSTextView](../nstextview.md) in which to track further mouse events.
- `controlView`: The view that received the event. Typically, this view is an [NSTextView](../nstextview.md) object and is focused.
- `flag`: A Boolean value that indicates whether to track the mouse until a mouse-up event occurs. If this parameter is [false](https://developer.apple.com/documentation/swift/false), stop tracking when a mouse-dragged event occurs outside of `cellFrame`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell successfully finished tracking the mouse, or [false](https://developer.apple.com/documentation/swift/false) if tracking was unsuccessful.

<a id="Discussion"></a>

## Discussion

The [NSTextAttachmentCell](../nstextattachmentcell-swift.class.md) implementation of this method calls upon `aTextView`’s delegate to handle the event. If `theEvent` is a mouse-up event for a double click, the text attachment cell calls the [textView(\_:doubleClickedOn:in:at:)](../nstextviewdelegate/textview%28__doubleclickedon_in_at_%29.md) method of its delegate and returns [true](https://developer.apple.com/documentation/swift/true). Otherwise, depending on whether the user clicks or drags the cell, it sends the delegate a [textView(\_:clickedOn:in:at:)](../nstextviewdelegate/textview%28__clickedon_in_at_%29.md): or a [textView(\_:draggedCell:in:event:at:)](../nstextviewdelegate/textview%28__draggedcell_in_event_at_%29.md) message and returns [true](https://developer.apple.com/documentation/swift/true). The [NSTextAttachmentCell](../nstextattachmentcell-swift.class.md) implementation returns [false](https://developer.apple.com/documentation/swift/false) only if `flag` is [false](https://developer.apple.com/documentation/swift/false) and the mouse is dragged outside of `cellFrame`. The delegate methods are invoked only if the delegate responds.

## See Also

### Related Documentation

- [trackMouse(with:in:of:untilMouseUp:)](../nscell/trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [lockFocus()](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Responding to mouse events

- [wantsToTrackMouse()](wantstotrackmouse%28%29.md): Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.
- [wantsToTrackMouse(for:in:of:atCharacterIndex:)](wantstotrackmouse%28for_in_of_atcharacterindex_%29.md): Allows an attachment to specify the events for which it tracks the mouse.
- [trackMouse(with:in:of:atCharacterIndex:untilMouseUp:)](trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.

# trackMouse:inRect:ofView:untilMouseUp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event

## Declaration

```objectivec
- (BOOL) trackMouse:(NSEvent *) theEvent inRect:(NSRect) cellFrame ofView:(NSView *) controlView untilMouseUp:(BOOL) flag;
```

## Parameters

- `theEvent`: The mouse-down event.
- `cellFrame`: The region of an [NSTextView](../nstextview.md) in which to track further mouse events.
- `controlView`: The view that received the event. Typically, this view is an [NSTextView](../nstextview.md) object and is focused.
- `flag`: A Boolean value that indicates whether to track the mouse until a mouse-up event occurs. If this parameter is [false](https://developer.apple.com/documentation/swift/false), stop tracking when a mouse-dragged event occurs outside of `cellFrame`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell successfully finished tracking the mouse, or [false](https://developer.apple.com/documentation/swift/false) if tracking was unsuccessful.

<a id="Discussion"></a>

## Discussion

The [NSTextAttachmentCell](../nstextattachmentcell-swift.class.md) implementation of this method calls upon `aTextView`’s delegate to handle the event. If `theEvent` is a mouse-up event for a double click, the text attachment cell calls the [textView:doubleClickedOnCell:inRect:atIndex:](../nstextviewdelegate/textview%28__doubleclickedon_in_at_%29.md) method of its delegate and returns [true](https://developer.apple.com/documentation/swift/true). Otherwise, depending on whether the user clicks or drags the cell, it sends the delegate a [textView:clickedOnCell:inRect:atIndex:](../nstextviewdelegate/textview%28__clickedon_in_at_%29.md): or a [textView:draggedCell:inRect:event:atIndex:](../nstextviewdelegate/textview%28__draggedcell_in_event_at_%29.md) message and returns [true](https://developer.apple.com/documentation/swift/true). The [NSTextAttachmentCell](../nstextattachmentcell-swift.class.md) implementation returns [false](https://developer.apple.com/documentation/swift/false) only if `flag` is [false](https://developer.apple.com/documentation/swift/false) and the mouse is dragged outside of `cellFrame`. The delegate methods are invoked only if the delegate responds.

## See Also

### Related Documentation

- [trackMouse:inRect:ofView:untilMouseUp:](../nscell/trackmouse%28with_in_of_untilmouseup_%29.md): Initiates the mouse tracking behavior in a cell.
- [lockFocus](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Responding to mouse events

- [wantsToTrackMouse](wantstotrackmouse%28%29.md): Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.
- [wantsToTrackMouseForEvent:inRect:ofView:atCharacterIndex:](wantstotrackmouse%28for_in_of_atcharacterindex_%29.md): Allows an attachment to specify the events for which it tracks the mouse.
- [trackMouse:inRect:ofView:atCharacterIndex:untilMouseUp:](trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.
