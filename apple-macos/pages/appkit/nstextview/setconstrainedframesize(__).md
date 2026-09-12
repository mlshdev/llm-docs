> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/setconstrainedframesize(_:)](https://developer.apple.com/documentation/appkit/nstextview/setconstrainedframesize(_:))

# setConstrainedFrameSize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to set the frame size as if by user action.

## Declaration

```swift
func setConstrainedFrameSize(_ desiredSize: NSSize)
```

## Parameters

- `desiredSize`: The new desired size.

<a id="Discussion"></a>

## Discussion

This method respects the receiver’s existing minimum and maximum sizes and by whether resizing is permitted.

## See Also

### Related Documentation

- [minSize](../nstext/minsize.md): The receiver’s minimum size.
- [isVerticallyResizable](../nstext/isverticallyresizable.md): A Boolean that controls whether the receiver changes its height to fit the height of its text.
- [isHorizontallyResizable](../nstext/ishorizontallyresizable.md): A Boolean that controls whether the receiver changes its width to fit the width of its text.
- [maxSize](../nstext/maxsize.md): The receiver’s maximum size.

### Controlling text display

- [setNeedsDisplay(\_:avoidAdditionalLayout:)](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the text view.
- [cleanUpAfterDragOperation()](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicator(for:)](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView()](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView()](scrollabletextview%28%29.md)

# setConstrainedFrameSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to set the frame size as if by user action.

## Declaration

```objectivec
- (void) setConstrainedFrameSize:(NSSize) desiredSize;
```

## Parameters

- `desiredSize`: The new desired size.

<a id="Discussion"></a>

## Discussion

This method respects the receiver’s existing minimum and maximum sizes and by whether resizing is permitted.

## See Also

### Related Documentation

- [minSize](../nstext/minsize.md): The receiver’s minimum size.
- [verticallyResizable](../nstext/isverticallyresizable.md): A Boolean that controls whether the receiver changes its height to fit the height of its text.
- [horizontallyResizable](../nstext/ishorizontallyresizable.md): A Boolean that controls whether the receiver changes its width to fit the width of its text.
- [maxSize](../nstext/maxsize.md): The receiver’s maximum size.

### Controlling text display

- [setNeedsDisplayInRect:avoidAdditionalLayout:](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawViewBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the text view.
- [cleanUpAfterDragOperation](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicatorForRange:](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView](scrollabletextview%28%29.md)
