> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/arecursorrectsenabled](https://developer.apple.com/documentation/appkit/nswindow/arecursorrectsenabled)

# areCursorRectsEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window’s cursor rectangles are enabled.

## Declaration

```swift
var areCursorRectsEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when cursor rectangles are enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [addCursorRect(\_:cursor:)](../nsview/addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.

### Managing Cursor Rectangles

- [enableCursorRects()](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects()](disablecursorrects%28%29.md) message.
- [disableCursorRects()](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects()](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRects(for:)](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects()](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.

# areCursorRectsEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window’s cursor rectangles are enabled.

## Declaration

```objectivec
@property (readonly) BOOL areCursorRectsEnabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when cursor rectangles are enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [addCursorRect:cursor:](../nsview/addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.

### Managing Cursor Rectangles

- [enableCursorRects](enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects](disablecursorrects%28%29.md) message.
- [disableCursorRects](disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects](discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRectsForView:](invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects](resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](../nsview.md) objects in its view hierarchy.
