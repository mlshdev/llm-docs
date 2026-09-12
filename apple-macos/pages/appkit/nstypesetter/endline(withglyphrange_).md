> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/endline(withglyphrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/endline(withglyphrange:))

# endLine(withGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the end of a line during typesetting.

## Declaration

```swift
func endLine(withGlyphRange lineGlyphRange: NSRange)
```

## Parameters

- `lineGlyphRange`: The range of glyphs laid out in the line.

<a id="Discussion"></a>

## Discussion

Concrete subclass implementations of [layoutParagraph(at:)](layoutparagraph%28at_%29.md) should invoke this method at the end of each line.

## See Also

### Laying out a paragraph

- [layoutParagraph(at:)](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph()](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph()](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLine(withGlyphAt:)](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.

# endLineWithGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the end of a line during typesetting.

## Declaration

```objectivec
- (void) endLineWithGlyphRange:(NSRange) lineGlyphRange;
```

## Parameters

- `lineGlyphRange`: The range of glyphs laid out in the line.

<a id="Discussion"></a>

## Discussion

Concrete subclass implementations of [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md) should invoke this method at the end of each line.

## See Also

### Laying out a paragraph

- [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLineWithGlyphAtIndex:](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
