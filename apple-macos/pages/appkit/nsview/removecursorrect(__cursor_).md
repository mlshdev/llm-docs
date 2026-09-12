> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removecursorrect(_:cursor:)](https://developer.apple.com/documentation/appkit/nsview/removecursorrect(_:cursor:))

# removeCursorRect(\_:cursor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Completely removes a cursor rectangle from the view.

## Declaration

```swift
func removeCursorRect(_ rect: NSRect, cursor object: NSCursor)
```

## Parameters

- `rect`: A rectangle defining a region of the view. Must match a value previously specified using [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md).
- `object`: An object representing a cursor. Must match a value previously specified using [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md).

<a id="Discussion"></a>

## Discussion

You should rarely need to use this method. The [resetCursorRects()](resetcursorrects%28%29.md) method, which is called when the cursor rectangles need to be rebuilt, should establish only the cursor rectangles needed. If you implement [resetCursorRects()](resetcursorrects%28%29.md) in this way, you can then simply modify the state that [resetCursorRects()](resetcursorrects%28%29.md) uses to build its cursor rectangles and then invoke the `NSWindow` method [invalidateCursorRects(for:)](../nswindow/invalidatecursorrects%28for_%29.md).

## See Also

### Responding to Cursor Movements

- [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md).
- [resetCursorRects()](resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

# removeCursorRect:cursor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Completely removes a cursor rectangle from the view.

## Declaration

```objectivec
- (void) removeCursorRect:(NSRect) rect cursor:(NSCursor *) object;
```

## Parameters

- `rect`: A rectangle defining a region of the view. Must match a value previously specified using [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md).
- `object`: An object representing a cursor. Must match a value previously specified using [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md).

<a id="Discussion"></a>

## Discussion

You should rarely need to use this method. The [resetCursorRects](resetcursorrects%28%29.md) method, which is called when the cursor rectangles need to be rebuilt, should establish only the cursor rectangles needed. If you implement [resetCursorRects](resetcursorrects%28%29.md) in this way, you can then simply modify the state that [resetCursorRects](resetcursorrects%28%29.md) uses to build its cursor rectangles and then invoke the `NSWindow` method [invalidateCursorRectsForView:](../nswindow/invalidatecursorrects%28for_%29.md).

## See Also

### Responding to Cursor Movements

- [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md).
- [resetCursorRects](resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.
