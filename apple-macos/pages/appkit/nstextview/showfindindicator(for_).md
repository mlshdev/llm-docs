> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/showfindindicator(for:)](https://developer.apple.com/documentation/appkit/nstextview/showfindindicator(for:))

# showFindIndicator(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.

## Declaration

```swift
func showFindIndicator(for charRange: NSRange)
```

## Parameters

- `charRange`: The character range around which indicators appear.

<a id="Discussion"></a>

## Discussion

This method supports lozenge-style indication of find results. The indicators automatically disappear after a certain period of time, or when the method is called again, or when any of a number of changes occur to the view (such as changes to text, view size, or view position).

This method does not itself scroll the specified range to be visible; any desired scrolling should be done before this method is called, first, because the method acts only on the visible portion of the specified range, and, second, because scrolling causes the indicators to disappear. Calling this method with a zero-length range always removes any existing indicators.

## See Also

### Controlling text display

- [setNeedsDisplay(\_:avoidAdditionalLayout:)](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize(\_:)](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation()](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [scrollableDocumentContentTextView()](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView()](scrollabletextview%28%29.md)

# showFindIndicatorForRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.

## Declaration

```objectivec
- (void) showFindIndicatorForRange:(NSRange) charRange;
```

## Parameters

- `charRange`: The character range around which indicators appear.

<a id="Discussion"></a>

## Discussion

This method supports lozenge-style indication of find results. The indicators automatically disappear after a certain period of time, or when the method is called again, or when any of a number of changes occur to the view (such as changes to text, view size, or view position).

This method does not itself scroll the specified range to be visible; any desired scrolling should be done before this method is called, first, because the method acts only on the visible portion of the specified range, and, second, because scrolling causes the indicators to disappear. Calling this method with a zero-length range always removes any existing indicators.

## See Also

### Controlling text display

- [setNeedsDisplayInRect:avoidAdditionalLayout:](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawViewBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize:](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [scrollableDocumentContentTextView](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView](scrollabletextview%28%29.md)
