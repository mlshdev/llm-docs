> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/paragraphglyphrange](https://developer.apple.com/documentation/appkit/nsatstypesetter/paragraphglyphrange)

# paragraphGlyphRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current glyph range being processed.

## Declaration

```swift
var paragraphGlyphRange: NSRange { get }
```

## See Also

### Accessing paragraph information

- [attributedString](attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

# paragraphGlyphRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current glyph range being processed.

## Declaration

```objectivec
@property (readonly) NSRange paragraphGlyphRange;
```

## See Also

### Accessing paragraph information

- [attributedString](attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.
