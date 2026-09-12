> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/drawinsertionpoint(in:color:turnedon:)](https://developer.apple.com/documentation/appkit/nstextview/drawinsertionpoint(in:color:turnedon:))

# drawInsertionPoint(in:color:turnedOn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws or erases the insertion point.

## Declaration

```swift
func drawInsertionPoint(in rect: NSRect, color: NSColor, turnedOn flag: Bool)
```

## Parameters

- `rect`: The rectangle in which to draw the insertion point.
- `color`: The color with which to draw the insertion point.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) to draw the insertion point, [false](https://developer.apple.com/documentation/swift/false) to erase it.

<a id="Discussion"></a>

## Discussion

The focus must be locked on the receiver when this method is invoked. You should not need to invoke this method directly.

## See Also

### Related Documentation

- [backgroundColor](backgroundcolor.md): The receiver’s background color.
- [lockFocus()](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.

### Controlling text display

- [setNeedsDisplay(\_:avoidAdditionalLayout:)](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize(\_:)](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation()](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicator(for:)](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView()](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView()](scrollabletextview%28%29.md)

# drawInsertionPointInRect:color:turnedOn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws or erases the insertion point.

## Declaration

```objectivec
- (void) drawInsertionPointInRect:(NSRect) rect color:(NSColor *) color turnedOn:(BOOL) flag;
```

## Parameters

- `rect`: The rectangle in which to draw the insertion point.
- `color`: The color with which to draw the insertion point.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) to draw the insertion point, [false](https://developer.apple.com/documentation/swift/false) to erase it.

<a id="Discussion"></a>

## Discussion

The focus must be locked on the receiver when this method is invoked. You should not need to invoke this method directly.

## See Also

### Related Documentation

- [backgroundColor](backgroundcolor.md): The receiver’s background color.
- [lockFocus](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [insertionPointColor](insertionpointcolor.md): The color of the insertion point.

### Controlling text display

- [setNeedsDisplayInRect:avoidAdditionalLayout:](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawViewBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize:](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicatorForRange:](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView](scrollabletextview%28%29.md)
