> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/beginline(withglyphat:)](https://developer.apple.com/documentation/appkit/nstypesetter/beginline(withglyphat:))

# beginLine(withGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the beginning of a line during typesetting.

## Declaration

```swift
func beginLine(withGlyphAt glyphIndex: Int)
```

## Parameters

- `glyphIndex`: The index of the first glyph to be laid out in the line.

<a id="Discussion"></a>

## Discussion

Concrete subclass implementations of [layoutParagraph(at:)](layoutparagraph%28at_%29.md) should invoke this method at the beginning of each line.

## See Also

### Laying out a paragraph

- [layoutParagraph(at:)](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph()](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph()](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [endLine(withGlyphRange:)](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.

# beginLineWithGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the beginning of a line during typesetting.

## Declaration

```objectivec
- (void) beginLineWithGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The index of the first glyph to be laid out in the line.

<a id="Discussion"></a>

## Discussion

Concrete subclass implementations of [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md) should invoke this method at the beginning of each line.

## See Also

### Laying out a paragraph

- [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [endLineWithGlyphRange:](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.
