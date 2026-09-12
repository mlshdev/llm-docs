> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/cellsize()](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/cellsize())

# cellSize() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the size of the attachment’s icon.

## Declaration

```swift
nonisolated func cellSize() -> NSSize
```

## See Also

### Related Documentation

- [icon](https://developer.apple.com/documentation/foundation/filewrapper/icon): The icon that represents the file wrapper.
- [fileWrapper](../nstextattachment/filewrapper.md): The text attachment’s file wrapper.

### Providing the cell metrics

- [cellBaselineOffset()](cellbaselineoffset%28%29.md): Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.
- [cellFrame(for:proposedLineFragment:glyphPosition:characterIndex:)](cellframe%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the frame of the cell to draw at the specified position in a text container.

# cellSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the size of the attachment’s icon.

## Declaration

```objectivec
- (NSSize) cellSize;
```

## See Also

### Related Documentation

- [icon](https://developer.apple.com/documentation/foundation/filewrapper/icon): The icon that represents the file wrapper.
- [fileWrapper](../nstextattachment/filewrapper.md): The text attachment’s file wrapper.

### Providing the cell metrics

- [cellBaselineOffset](cellbaselineoffset%28%29.md): Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.
- [cellFrameForTextContainer:proposedLineFragment:glyphPosition:characterIndex:](cellframe%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the frame of the cell to draw at the specified position in a text container.
