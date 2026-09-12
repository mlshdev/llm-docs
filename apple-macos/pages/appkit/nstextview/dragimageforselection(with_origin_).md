> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/dragimageforselection(with:origin:)](https://developer.apple.com/documentation/appkit/nstextview/dragimageforselection(with:origin:))

# dragImageForSelection(with:origin:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an appropriate drag image for the drag initiated by the specified event.

## Declaration

```swift
func dragImageForSelection(with event: NSEvent, origin: NSPointPointer?) -> NSImage?
```

## Parameters

- `event`: The event that initiated the drag session.
- `origin`: On return, the lower-left point of the image in view coordinates.

<a id="return-value"></a>

## Return Value

An appropriate drag image for the drag initiated by `event`. May be `nil`, in which case a default icon will be used.

<a id="Discussion"></a>

## Discussion

This method is used by [dragSelection(with:offset:slideBack:)](dragselection%28with_offset_slideback_%29.md). It can be called by others who need such an image, or can be overridden by subclasses to return a different image.

## See Also

### Dragging

- [dragOperation(for:type:)](dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [dragSelection(with:offset:slideBack:)](dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.

# dragImageForSelectionWithEvent:origin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an appropriate drag image for the drag initiated by the specified event.

## Declaration

```objectivec
- (NSImage *) dragImageForSelectionWithEvent:(NSEvent *) event origin:(NSPointPointer) origin;
```

## Parameters

- `event`: The event that initiated the drag session.
- `origin`: On return, the lower-left point of the image in view coordinates.

<a id="return-value"></a>

## Return Value

An appropriate drag image for the drag initiated by `event`. May be `nil`, in which case a default icon will be used.

<a id="Discussion"></a>

## Discussion

This method is used by [dragSelectionWithEvent:offset:slideBack:](dragselection%28with_offset_slideback_%29.md). It can be called by others who need such an image, or can be overridden by subclasses to return a different image.

## See Also

### Dragging

- [dragOperationForDraggingInfo:type:](dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [dragSelectionWithEvent:offset:slideBack:](dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.
