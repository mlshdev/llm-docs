> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/discardcursorrects()](https://developer.apple.com/documentation/appkit/nsview/discardcursorrects())

# discardCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates all cursor rectangles set up using [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md).

## Declaration

```swift
func discardCursorRects()
```

<a id="Discussion"></a>

## Discussion

You need never invoke this method directly; neither is it typically invoked during the invalidation of cursor rectangles.  [NSWindow](../nswindow.md) automatically invalidates cursor rectangles in response to [invalidateCursorRects(for:)](../nswindow/invalidatecursorrects%28for_%29.md) and before the view’s cursor rectangles are reestablished using [resetCursorRects()](resetcursorrects%28%29.md).  This method is invoked just before the view is removed from a window and when the view is deallocated.

## See Also

### Related Documentation

- [discardCursorRects()](../nswindow/discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.

### Responding to Cursor Movements

- [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [removeCursorRect(\_:cursor:)](removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [resetCursorRects()](resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

# discardCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates all cursor rectangles set up using [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md).

## Declaration

```objectivec
- (void) discardCursorRects;
```

<a id="Discussion"></a>

## Discussion

You need never invoke this method directly; neither is it typically invoked during the invalidation of cursor rectangles.  [NSWindow](../nswindow.md) automatically invalidates cursor rectangles in response to [invalidateCursorRectsForView:](../nswindow/invalidatecursorrects%28for_%29.md) and before the view’s cursor rectangles are reestablished using [resetCursorRects](resetcursorrects%28%29.md).  This method is invoked just before the view is removed from a window and when the view is deallocated.

## See Also

### Related Documentation

- [discardCursorRects](../nswindow/discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.

### Responding to Cursor Movements

- [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [removeCursorRect:cursor:](removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [resetCursorRects](resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.
