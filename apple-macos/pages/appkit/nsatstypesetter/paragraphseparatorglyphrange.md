> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/paragraphseparatorglyphrange](https://developer.apple.com/documentation/appkit/nsatstypesetter/paragraphseparatorglyphrange)

# paragraphSeparatorGlyphRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

## Declaration

```swift
var paragraphSeparatorGlyphRange: NSRange { get }
```

## See Also

### Accessing paragraph information

- [attributedString](attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphGlyphRange](paragraphglyphrange.md): The current glyph range being processed.

# paragraphSeparatorGlyphRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

## Declaration

```objectivec
@property (readonly) NSRange paragraphSeparatorGlyphRange;
```

## See Also

### Accessing paragraph information

- [attributedString](attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphGlyphRange](paragraphglyphrange.md): The current glyph range being processed.
