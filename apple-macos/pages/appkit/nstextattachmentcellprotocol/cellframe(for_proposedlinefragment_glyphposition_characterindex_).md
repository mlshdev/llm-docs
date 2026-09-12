> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/cellframe(for:proposedlinefragment:glyphposition:characterindex:)](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/cellframe(for:proposedlinefragment:glyphposition:characterindex:))

# cellFrame(for:proposedLineFragment:glyphPosition:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the frame of the cell to draw at the specified position in a text container.

## Declaration

```swift
nonisolated func cellFrame(for textContainer: NSTextContainer, proposedLineFragment lineFrag: NSRect, glyphPosition position: NSPoint, characterIndex charIndex: Int) -> NSRect
```

## Parameters

- `textContainer`: The text container that contains the glyph.
- `lineFrag`: The line fragment that contains the glyph.
- `position`: The position of the glyph in the text container.
- `charIndex`: The index of the character.

<a id="Discussion"></a>

## Discussion

The proposed line fragment is specified by `lineFrag`.

## See Also

### Providing the cell metrics

- [cellSize()](cellsize%28%29.md): Returns the size of the attachment’s icon.
- [cellBaselineOffset()](cellbaselineoffset%28%29.md): Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.

# cellFrameForTextContainer:proposedLineFragment:glyphPosition:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the frame of the cell to draw at the specified position in a text container.

## Declaration

```objectivec
- (NSRect) cellFrameForTextContainer:(NSTextContainer *) textContainer proposedLineFragment:(NSRect) lineFrag glyphPosition:(NSPoint) position characterIndex:(NSUInteger) charIndex;
```

## Parameters

- `textContainer`: The text container that contains the glyph.
- `lineFrag`: The line fragment that contains the glyph.
- `position`: The position of the glyph in the text container.
- `charIndex`: The index of the character.

<a id="Discussion"></a>

## Discussion

The proposed line fragment is specified by `lineFrag`.

## See Also

### Providing the cell metrics

- [cellSize](cellsize%28%29.md): Returns the size of the attachment’s icon.
- [cellBaselineOffset](cellbaselineoffset%28%29.md): Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.
