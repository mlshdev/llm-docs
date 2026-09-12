> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/resetcursorrects()](https://developer.apple.com/documentation/appkit/nsview/resetcursorrects())

# resetCursorRects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to define their default cursor rectangles.

## Declaration

```swift
func resetCursorRects()
```

<a id="Discussion"></a>

## Discussion

A subclass’s implementation must invoke [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md) for each cursor rectangle it wants to establish. The default implementation does nothing.

Application code should never invoke this method directly; it’s invoked automatically as described in “[Responding to User Events and Actions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/SubclassingNSView/SubclassingNSView.html#//apple_ref/doc/uid/TP40002978-CH7-SW26).” Use the [invalidateCursorRects(for:)](../nswindow/invalidatecursorrects%28for_%29.md) method instead to explicitly rebuild cursor rectangles.

## See Also

### Related Documentation

- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.

### Responding to Cursor Movements

- [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [removeCursorRect(\_:cursor:)](removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md).

# resetCursorRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to define their default cursor rectangles.

## Declaration

```objectivec
- (void) resetCursorRects;
```

<a id="Discussion"></a>

## Discussion

A subclass’s implementation must invoke [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md) for each cursor rectangle it wants to establish. The default implementation does nothing.

Application code should never invoke this method directly; it’s invoked automatically as described in “[Responding to User Events and Actions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/SubclassingNSView/SubclassingNSView.html#//apple_ref/doc/uid/TP40002978-CH7-SW26).” Use the [invalidateCursorRectsForView:](../nswindow/invalidatecursorrects%28for_%29.md) method instead to explicitly rebuild cursor rectangles.

## See Also

### Related Documentation

- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.

### Responding to Cursor Movements

- [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [removeCursorRect:cursor:](removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md).
