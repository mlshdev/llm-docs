> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/beginparagraph()](https://developer.apple.com/documentation/appkit/nstypesetter/beginparagraph())

# beginParagraph() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the beginning of a paragraph.

## Declaration

```swift
func beginParagraph()
```

<a id="Discussion"></a>

## Discussion

Concrete subclasses should invoke this method at the beginning of their [layoutParagraph(at:)](layoutparagraph%28at_%29.md) implementation.

## See Also

### Laying out a paragraph

- [layoutParagraph(at:)](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [endParagraph()](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLine(withGlyphAt:)](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLine(withGlyphRange:)](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.

# beginParagraph (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up layout parameters at the beginning of a paragraph.

## Declaration

```objectivec
- (void) beginParagraph;
```

<a id="Discussion"></a>

## Discussion

Concrete subclasses should invoke this method at the beginning of their [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md) implementation.

## See Also

### Laying out a paragraph

- [layoutParagraphAtPoint:](layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [endParagraph](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLineWithGlyphAtIndex:](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLineWithGlyphRange:](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.
