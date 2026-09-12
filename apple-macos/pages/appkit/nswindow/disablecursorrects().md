> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/disablecursorrects()](https://developer.apple.com/documentation/appkit/nswindow/disablecursorrects())

# disableCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Disables all cursor rectangle management within the window.

## Declaration

```swift
func disableCursorRects()
```

<a id="Discussion"></a>

## Discussion

Use this method when you need to do some special cursor manipulation and you don’t want the Application Kit interfering.

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects()](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects()](disablecursorrects%28%29.md) message.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRects(for:)](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects()](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

# disableCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Disables all cursor rectangle management within the window.

## Declaration

```objectivec
- (void) disableCursorRects;
```

<a id="Discussion"></a>

## Discussion

Use this method when you need to do some special cursor manipulation and you don’t want the Application Kit interfering.

## See Also

### Managing Cursor Rectangles

- [areCursorRectsEnabled](arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects](disablecursorrects%28%29.md) message.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRectsForView:](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.
