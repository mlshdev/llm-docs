> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/resetcursorrects()](https://developer.apple.com/documentation/appkit/nswindow/resetcursorrects())

# resetCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

## Declaration

```swift
func resetCursorRects()
```

<a id="Discussion"></a>

## Discussion

Invokes [discardCursorRects()](discardcursorrects%28%29.md) to clear the window’s cursor rectangles, then sends [resetCursorRects()](resetcursorrects%28%29.md) to every `NSView` object in the window’s view hierarchy.

This method is typically invoked by the NSApplication object when it detects that the key window’s cursor rectangles are invalid. In program code, it’s more efficient to invoke [invalidateCursorRects(for:)](invalidatecursorrects%28for_%29.md).

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects()](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects()](disablecursorrects%28%29.md) message.
- [disableCursorRects()](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRects(for:)](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.

# resetCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

## Declaration

```objectivec
- (void) resetCursorRects;
```

<a id="Discussion"></a>

## Discussion

Invokes [discardCursorRects](discardcursorrects%28%29.md) to clear the window’s cursor rectangles, then sends [resetCursorRects](resetcursorrects%28%29.md) to every `NSView` object in the window’s view hierarchy.

This method is typically invoked by the NSApplication object when it detects that the key window’s cursor rectangles are invalid. In program code, it’s more efficient to invoke [invalidateCursorRectsForView:](invalidatecursorrects%28for_%29.md).

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects](disablecursorrects%28%29.md) message.
- [disableCursorRects](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRectsForView:](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
