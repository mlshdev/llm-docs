> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/setneedsdisplay(_:avoidadditionallayout:)](https://developer.apple.com/documentation/appkit/nstextview/setneedsdisplay(_:avoidadditionallayout:))

# setNeedsDisplay(\_:avoidAdditionalLayout:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the receiver as requiring display.

## Declaration

```swift
func setNeedsDisplay(_ rect: NSRect, avoidAdditionalLayout flag: Bool)
```

## Parameters

- `rect`: The rectangle in which display is required.
- `flag`: A value of [true](https://developer.apple.com/documentation/swift/true) causes the receiver to not perform any layout, even if this means that portions of the text view remain empty. Otherwise the receiver performs at least as much layout as needed to display `aRect`.

<a id="Discussion"></a>

## Discussion

`NSTextView` overrides the `NSView` [setNeedsDisplay(\_:)](../nsview/setneedsdisplay%28__%29.md) method to invoke this method with a `flag` argument of [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Controlling text display

- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawBackground(in:)](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize(\_:)](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation()](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicator(for:)](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView()](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView()](scrollabletextview%28%29.md)

# setNeedsDisplayInRect:avoidAdditionalLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the receiver as requiring display.

## Declaration

```objectivec
- (void) setNeedsDisplayInRect:(NSRect) rect avoidAdditionalLayout:(BOOL) flag;
```

## Parameters

- `rect`: The rectangle in which display is required.
- `flag`: A value of [true](https://developer.apple.com/documentation/swift/true) causes the receiver to not perform any layout, even if this means that portions of the text view remain empty. Otherwise the receiver performs at least as much layout as needed to display `aRect`.

<a id="Discussion"></a>

## Discussion

`NSTextView` overrides the `NSView` [setNeedsDisplayInRect:](../nsview/setneedsdisplay%28__%29.md) method to invoke this method with a `flag` argument of [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Controlling text display

- [shouldDrawInsertionPoint](shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawViewBackgroundInRect:](drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize:](setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation](cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicatorForRange:](showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView](scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView](scrollabletextview%28%29.md)
