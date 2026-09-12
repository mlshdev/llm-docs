> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/discardcursorrects()](https://developer.apple.com/documentation/appkit/nswindow/discardcursorrects())

# discardCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates all cursor rectangles in the window.

## Declaration

```swift
func discardCursorRects()
```

<a id="Discussion"></a>

## Discussion

This method is invoked by [resetCursorRects()](resetcursorrects%28%29.md) to clear out existing cursor rectangles before resetting them. You shouldn’t invoke it in the code you write, but you might want to override it to change its behavior.

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects()](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects()](disablecursorrects%28%29.md) message.
- [disableCursorRects()](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [invalidateCursorRects(for:)](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects()](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

# discardCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates all cursor rectangles in the window.

## Declaration

```objectivec
- (void) discardCursorRects;
```

<a id="Discussion"></a>

## Discussion

This method is invoked by [resetCursorRects](resetcursorrects%28%29.md) to clear out existing cursor rectangles before resetting them. You shouldn’t invoke it in the code you write, but you might want to override it to change its behavior.

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects](disablecursorrects%28%29.md) message.
- [disableCursorRects](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [invalidateCursorRectsForView:](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.
