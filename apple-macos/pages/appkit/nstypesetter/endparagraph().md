> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/endparagraph()](https://developer.apple.com/documentation/appkit/nstypesetter/endparagraph())

# endParagraph() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the end of a paragraph.

## Declaration

```swift
func endParagraph()
```

<a id="Discussion"></a>

## Discussion

Concrete subclasses should invoke this method at the end of their [layoutParagraph(at:)](layoutparagraph%28at_%29.md) implementation.

## See Also

### Laying out a paragraph

- [layoutParagraph(at:)](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph()](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [beginLine(withGlyphAt:)](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLine(withGlyphRange:)](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.

# endParagraph (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the end of a paragraph.

## Declaration

```objectivec
- (void) endParagraph;
```

<a id="Discussion"></a>

## Discussion

Concrete subclasses should invoke this method at the end of their [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md) implementation.

## See Also

### Laying out a paragraph

- [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [beginLineWithGlyphAtIndex:](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLineWithGlyphRange:](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.
