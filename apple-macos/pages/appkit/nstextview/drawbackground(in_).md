> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/drawbackground(in:)](https://developer.apple.com/documentation/appkit/nstextview/drawbackground(in:))

# drawBackground(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the background of the text view.

## Declaration

```swift
func drawBackground(in rect: NSRect)
```

## Parameters

- `rect`: The rectangle in which to draw the background.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to perform additional drawing behind the text.

## See Also

### Controlling text display

- [setNeedsDisplay(\_:avoidAdditionalLayout:)](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [setConstrainedFrameSize(\_:)](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation()](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicator(for:)](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView()](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView()](scrollabletextview%28%29.md)

# drawViewBackgroundInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the background of the text view.

## Declaration

```objectivec
- (void) drawViewBackgroundInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle in which to draw the background.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to perform additional drawing behind the text.

## See Also

### Controlling text display

- [setNeedsDisplayInRect:avoidAdditionalLayout:](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [setConstrainedFrameSize:](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicatorForRange:](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView](scrollabletextview%28%29.md)
