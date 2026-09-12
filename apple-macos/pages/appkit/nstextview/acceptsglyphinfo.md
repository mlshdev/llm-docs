> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/acceptsglyphinfo](https://developer.apple.com/documentation/appkit/nstextview/acceptsglyphinfo)

# acceptsGlyphInfo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver accepts the glyph info attribute.

## Declaration

```swift
var acceptsGlyphInfo: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver accepts the `NSGlyphInfoAttributeName` attribute from text input sources such as input methods and the pasteboard, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Dragging

- [dragImageForSelection(with:origin:)](dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragOperation(for:type:)](dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [dragSelection(with:offset:slideBack:)](dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.

# acceptsGlyphInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver accepts the glyph info attribute.

## Declaration

```objectivec
@property BOOL acceptsGlyphInfo;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver accepts the `NSGlyphInfoAttributeName` attribute from text input sources such as input methods and the pasteboard, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Dragging

- [dragImageForSelectionWithEvent:origin:](dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragOperationForDraggingInfo:type:](dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [dragSelectionWithEvent:offset:slideBack:](dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
