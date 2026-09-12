> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/movedragcaret(to:)](https://developer.apple.com/documentation/webkit/webview-swift.class/movedragcaret(to:))

# moveDragCaret(to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Moves the drag caret that indicates the destination of a drag operation to a given point.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func moveDragCaret(to point: NSPoint)
```

## Parameters

- `point`: The point to move the drag caret to.

## See Also

### Dragging

- [element(at:)](element%28at_%29.md): Deprecated. Returns a dictionary description of the element at a given point in the receiver’s coordinates.
- [removeDragCaret()](removedragcaret%28%29.md): Deprecated. Removes the drag caret that indicates the destination of a drag operation.

# moveDragCaretToPoint: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Moves the drag caret that indicates the destination of a drag operation to a given point.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (void) moveDragCaretToPoint:(NSPoint) point;
```

## Parameters

- `point`: The point to move the drag caret to.

## See Also

### Dragging

- [elementAtPoint:](element%28at_%29.md): Deprecated. Returns a dictionary description of the element at a given point in the receiver’s coordinates.
- [removeDragCaret](removedragcaret%28%29.md): Deprecated. Removes the drag caret that indicates the destination of a drag operation.
