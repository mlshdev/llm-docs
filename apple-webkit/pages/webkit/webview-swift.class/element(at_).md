> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/element(at:)](https://developer.apple.com/documentation/webkit/webview-swift.class/element(at:))

# element(at:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a dictionary description of the element at a given point in the receiver’s coordinates.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func element(at point: NSPoint) -> [AnyHashable : Any]!
```

## Parameters

- `point`: The point to represent as a dictionary.

<a id="return-value"></a>

## Return Value

A dictionary description of the element at `point` in the receiver’s coordinates.

## See Also

### Dragging

- [moveDragCaret(to:)](movedragcaret%28to_%29.md): Deprecated. Moves the drag caret that indicates the destination of a drag operation to a given point.
- [removeDragCaret()](removedragcaret%28%29.md): Deprecated. Removes the drag caret that indicates the destination of a drag operation.

# elementAtPoint: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a dictionary description of the element at a given point in the receiver’s coordinates.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (NSDictionary *) elementAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The point to represent as a dictionary.

<a id="return-value"></a>

## Return Value

A dictionary description of the element at `point` in the receiver’s coordinates.

## See Also

### Dragging

- [moveDragCaretToPoint:](movedragcaret%28to_%29.md): Deprecated. Moves the drag caret that indicates the destination of a drag operation to a given point.
- [removeDragCaret](removedragcaret%28%29.md): Deprecated. Removes the drag caret that indicates the destination of a drag operation.
