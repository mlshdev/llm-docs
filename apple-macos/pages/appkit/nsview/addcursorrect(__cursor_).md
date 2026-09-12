> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addcursorrect(_:cursor:)](https://developer.apple.com/documentation/appkit/nsview/addcursorrect(_:cursor:))

# addCursorRect(\_:cursor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Establishes  the cursor to be used when the mouse pointer lies within a specified region.

## Declaration

```swift
func addCursorRect(_ rect: NSRect, cursor object: NSCursor)
```

## Parameters

- `rect`: A rectangle defining a region of the view.
- `object`: An object representing a cursor.

<a id="Discussion"></a>

## Discussion

Cursor rectangles aren’t subject to clipping by superviews, nor are they intended for use with rotated views. You should explicitly confine a cursor rectangle to the view’s visible rectangle to prevent improper behavior.

This method is intended to be invoked only by the [resetCursorRects()](resetcursorrects%28%29.md) method. If invoked in any other way, the resulting cursor rectangle will be discarded the next time the view’s cursor rectangles are rebuilt.

## See Also

### Related Documentation

- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.

### Responding to Cursor Movements

- [removeCursorRect(\_:cursor:)](removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md).
- [resetCursorRects()](resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

# addCursorRect:cursor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Establishes  the cursor to be used when the mouse pointer lies within a specified region.

## Declaration

```objectivec
- (void) addCursorRect:(NSRect) rect cursor:(NSCursor *) object;
```

## Parameters

- `rect`: A rectangle defining a region of the view.
- `object`: An object representing a cursor.

<a id="Discussion"></a>

## Discussion

Cursor rectangles aren’t subject to clipping by superviews, nor are they intended for use with rotated views. You should explicitly confine a cursor rectangle to the view’s visible rectangle to prevent improper behavior.

This method is intended to be invoked only by the [resetCursorRects](resetcursorrects%28%29.md) method. If invoked in any other way, the resulting cursor rectangle will be discarded the next time the view’s cursor rectangles are rebuilt.

## See Also

### Related Documentation

- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.

### Responding to Cursor Movements

- [removeCursorRect:cursor:](removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md).
- [resetCursorRects](resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.
