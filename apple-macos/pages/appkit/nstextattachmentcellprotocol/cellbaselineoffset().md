> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/cellbaselineoffset()](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/cellbaselineoffset())

# cellBaselineOffset() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.

## Declaration

```swift
nonisolated func cellBaselineOffset() -> NSPoint
```

<a id="Discussion"></a>

## Discussion

The image should be drawn so its lower-left corner lies on this point.

## See Also

### Related Documentation

- [icon](https://developer.apple.com/documentation/foundation/filewrapper/icon): The icon that represents the file wrapper.

### Providing the cell metrics

- [cellSize()](cellsize%28%29.md): Returns the size of the attachment’s icon.
- [cellFrame(for:proposedLineFragment:glyphPosition:characterIndex:)](cellframe%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the frame of the cell to draw at the specified position in a text container.

# cellBaselineOffset (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.

## Declaration

```objectivec
- (NSPoint) cellBaselineOffset;
```

<a id="Discussion"></a>

## Discussion

The image should be drawn so its lower-left corner lies on this point.

## See Also

### Related Documentation

- [icon](https://developer.apple.com/documentation/foundation/filewrapper/icon): The icon that represents the file wrapper.

### Providing the cell metrics

- [cellSize](cellsize%28%29.md): Returns the size of the attachment’s icon.
- [cellFrameForTextContainer:proposedLineFragment:glyphPosition:characterIndex:](cellframe%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the frame of the cell to draw at the specified position in a text container.
