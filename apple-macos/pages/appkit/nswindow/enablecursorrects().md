> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/enablecursorrects()](https://developer.apple.com/documentation/appkit/nswindow/enablecursorrects())

# enableCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reenables cursor rectangle management within the window after a [disableCursorRects()](disablecursorrects%28%29.md) message.

## Declaration

```swift
func enableCursorRects()
```

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [disableCursorRects()](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRects(for:)](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects()](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

# enableCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reenables cursor rectangle management within the window after a [disableCursorRects](disablecursorrects%28%29.md) message.

## Declaration

```objectivec
- (void) enableCursorRects;
```

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [disableCursorRects](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRectsForView:](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.
