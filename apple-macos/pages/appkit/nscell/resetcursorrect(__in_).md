> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/resetcursorrect(_:in:)](https://developer.apple.com/documentation/appkit/nscell/resetcursorrect(_:in:))

# resetCursorRect(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the receiver to show the I-beam cursor while it tracks the mouse.

## Declaration

```swift
func resetCursorRect(_ cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `cellFrame`: The rectangle in which to display the I-beam cursor.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

The receiver must be an enabled and selectable (or editable) text-type cell.

This method is invoked by [resetCursorRects()](../nsview/resetcursorrects%28%29.md) and in general you do not need to call this method unless you have a custom `NSView` that uses a cell.

# resetCursorRect:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the receiver to show the I-beam cursor while it tracks the mouse.

## Declaration

```objectivec
- (void) resetCursorRect:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The rectangle in which to display the I-beam cursor.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

The receiver must be an enabled and selectable (or editable) text-type cell.

This method is invoked by [resetCursorRects](../nsview/resetcursorrects%28%29.md) and in general you do not need to call this method unless you have a custom `NSView` that uses a cell.
