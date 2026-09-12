> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/dragoperation(for:type:)](https://developer.apple.com/documentation/appkit/nstextview/dragoperation(for:type:))

# dragOperation(for:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of drag operation that should be performed if the image were released now.

## Declaration

```swift
func dragOperation(for dragInfo: any NSDraggingInfo, type: NSPasteboard.PasteboardType) -> NSDragOperation
```

## Parameters

- `dragInfo`: The drag information.
- `type`: The pasteboard type that will be read from the dragging pasteboard.

<a id="return-value"></a>

## Return Value

The drag operation that should be performed if the image were released now.

<a id="Discussion"></a>

## Discussion

The returned value should be one of the following:

| Option | Meaning |
| --- | --- |
| `NSDragOperationCopy` | The data represented by the image will be copied. |
| `NSDragOperationLink` | The data will be shared. |
| `NSDragOperationGeneric` | The operation will be defined by the destination. |
| `NSDragOperationPrivate` | The operation is negotiated privately between the source and the destination. |

If none of the operations is appropriate, this method should return `NSDragOperationNone`.

This method is called repeatedly from [draggingEntered(\_:)](../nsdraggingdestination/draggingentered%28__%29.md) and [draggingUpdated(\_:)](../nsdraggingdestination/draggingupdated%28__%29.md) as the user drags the image.

## See Also

### Related Documentation

- [draggingUpdated(\_:)](../nsdraggingdestination/draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingEntered(\_:)](../nsdraggingdestination/draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.

### Dragging

- [dragImageForSelection(with:origin:)](dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragSelection(with:offset:slideBack:)](dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.

# dragOperationForDraggingInfo:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of drag operation that should be performed if the image were released now.

## Declaration

```objectivec
- (NSDragOperation) dragOperationForDraggingInfo:(id<NSDraggingInfo>) dragInfo type:(NSPasteboardType) type;
```

## Parameters

- `dragInfo`: The drag information.
- `type`: The pasteboard type that will be read from the dragging pasteboard.

<a id="return-value"></a>

## Return Value

The drag operation that should be performed if the image were released now.

<a id="Discussion"></a>

## Discussion

The returned value should be one of the following:

| Option | Meaning |
| --- | --- |
| `NSDragOperationCopy` | The data represented by the image will be copied. |
| `NSDragOperationLink` | The data will be shared. |
| `NSDragOperationGeneric` | The operation will be defined by the destination. |
| `NSDragOperationPrivate` | The operation is negotiated privately between the source and the destination. |

If none of the operations is appropriate, this method should return `NSDragOperationNone`.

This method is called repeatedly from [draggingEntered:](../nsdraggingdestination/draggingentered%28__%29.md) and [draggingUpdated:](../nsdraggingdestination/draggingupdated%28__%29.md) as the user drags the image.

## See Also

### Related Documentation

- [draggingUpdated:](../nsdraggingdestination/draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingEntered:](../nsdraggingdestination/draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.

### Dragging

- [dragImageForSelectionWithEvent:origin:](dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragSelectionWithEvent:offset:slideBack:](dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.
