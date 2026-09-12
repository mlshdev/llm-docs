> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/scrollabletextview()](https://developer.apple.com/documentation/appkit/nstextview/scrollabletextview())

# scrollableTextView() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.14+

## Declaration

```swift
class func scrollableTextView() -> NSScrollView
```

## See Also

### Controlling text display

- [setNeedsDisplay(\_:avoidAdditionalLayout:)](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize(\_:)](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation()](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicator(for:)](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView()](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](scrollableplaindocumentcontenttextview%28%29.md)

# scrollableTextView (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.14+

## Declaration

```objectivec
+ (NSScrollView *) scrollableTextView;
```

## See Also

### Controlling text display

- [setNeedsDisplayInRect:avoidAdditionalLayout:](setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawViewBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize:](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicatorForRange:](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](scrollableplaindocumentcontenttextview%28%29.md)
