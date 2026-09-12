> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/layoutparagraph(at:)](https://developer.apple.com/documentation/appkit/nstypesetter/layoutparagraph(at:))

# layoutParagraph(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Lays out glyphs in the current glyph range until the next paragraph separator is reached.

## Declaration

```swift
func layoutParagraph(at lineFragmentOrigin: NSPointPointer) -> Int
```

## Parameters

- `lineFragmentOrigin`: The upper-left corner of line fragment rectangle. On return, `lineFragmentOrigin` contains the next origin.

<a id="return-value"></a>

## Return Value

The next glyph index; usually the index right after the paragraph separator, but it can be inside the paragraph range if, for example, the end of the text container is reached before the paragraph separator.

<a id="Discussion"></a>

## Discussion

Concrete subclasses must implement this method. A concrete implementation must invoke [beginParagraph()](beginparagraph%28%29.md), [beginLine(withGlyphAt:)](beginline%28withglyphat_%29.md), [endLine(withGlyphRange:)](endline%28withglyphrange_%29.md), and [endParagraph()](endparagraph%28%29.md).

## See Also

### Laying out a paragraph

- [beginParagraph()](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph()](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLine(withGlyphAt:)](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLine(withGlyphRange:)](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.

# layoutParagraphAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Lays out glyphs in the current glyph range until the next paragraph separator is reached.

## Declaration

```objectivec
- (NSUInteger) layoutParagraphAtPoint:(NSPointPointer) lineFragmentOrigin;
```

## Parameters

- `lineFragmentOrigin`: The upper-left corner of line fragment rectangle. On return, `lineFragmentOrigin` contains the next origin.

<a id="return-value"></a>

## Return Value

The next glyph index; usually the index right after the paragraph separator, but it can be inside the paragraph range if, for example, the end of the text container is reached before the paragraph separator.

<a id="Discussion"></a>

## Discussion

Concrete subclasses must implement this method. A concrete implementation must invoke [beginParagraph](beginparagraph%28%29.md), [beginLineWithGlyphAtIndex:](beginline%28withglyphat_%29.md), [endLineWithGlyphRange:](endline%28withglyphrange_%29.md), and [endParagraph](endparagraph%28%29.md).

## See Also

### Laying out a paragraph

- [beginParagraph](beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph](endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLineWithGlyphAtIndex:](beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLineWithGlyphRange:](endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.
