> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/invalidatecursorrects(for:)](https://developer.apple.com/documentation/appkit/nswindow/invalidatecursorrects(for:))

# invalidateCursorRects(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.

## Declaration

```swift
func invalidateCursorRects(for view: NSView)
```

## Parameters

- `view`: The view in the window’s view hierarchy.

<a id="Discussion"></a>

## Discussion

If the window is current the key window, window resets the cursor rectangles immediately.

## See Also

### Related Documentation

- [resetCursorRects()](../nsview/resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects()](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects()](disablecursorrects%28%29.md) message.
- [disableCursorRects()](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [resetCursorRects()](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

# invalidateCursorRectsForView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.

## Declaration

```objectivec
- (void) invalidateCursorRectsForView:(NSView *) view;
```

## Parameters

- `view`: The view in the window’s view hierarchy.

<a id="Discussion"></a>

## Discussion

If the window is current the key window, window resets the cursor rectangles immediately.

## See Also

### Related Documentation

- [resetCursorRects](../nsview/resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects](disablecursorrects%28%29.md) message.
- [disableCursorRects](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [resetCursorRects](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.
