> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/dragselection(with:offset:slideback:)](https://developer.apple.com/documentation/appkit/nstextview/dragselection(with:offset:slideback:))

# dragSelection(with:offset:slideBack:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Begins dragging the current selected text range.

## Declaration

```swift
func dragSelection(with event: NSEvent, offset mouseOffset: NSSize, slideBack: Bool) -> Bool
```

## Parameters

- `event`: The event that initiated dragging the selection.
- `mouseOffset`: The cursor’s current location relative to the mouse-down `event`.
- `slideBack`: [true](https://developer.apple.com/documentation/swift/true) if the image being dragged should slide back to its original position if the drag does not succeed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag can be successfully initiated, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Primarily for subclasses, who can override it to intervene at the beginning of a drag.

## See Also

### Dragging

- [dragImageForSelection(with:origin:)](dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragOperation(for:type:)](dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.

# dragSelectionWithEvent:offset:slideBack: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Begins dragging the current selected text range.

## Declaration

```objectivec
- (BOOL) dragSelectionWithEvent:(NSEvent *) event offset:(NSSize) mouseOffset slideBack:(BOOL) slideBack;
```

## Parameters

- `event`: The event that initiated dragging the selection.
- `mouseOffset`: The cursor’s current location relative to the mouse-down `event`.
- `slideBack`: [true](https://developer.apple.com/documentation/swift/true) if the image being dragged should slide back to its original position if the drag does not succeed, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag can be successfully initiated, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Primarily for subclasses, who can override it to intervene at the beginning of a drag.

## See Also

### Dragging

- [dragImageForSelectionWithEvent:origin:](dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragOperationForDraggingInfo:type:](dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.
