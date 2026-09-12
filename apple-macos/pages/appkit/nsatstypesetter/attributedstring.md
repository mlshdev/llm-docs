> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/attributedstring](https://developer.apple.com/documentation/appkit/nsatstypesetter/attributedstring)

# attributedString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The backing store that contains the text on which this typesetter operates.

## Declaration

```swift
unowned(unsafe) var attributedString: NSAttributedString? { get set }
```

## See Also

### Accessing paragraph information

- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphGlyphRange](paragraphglyphrange.md): The current glyph range being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

# attributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The backing store that contains the text on which this typesetter operates.

## Declaration

```objectivec
@property (assign, nullable) NSAttributedString * attributedString;
```

## See Also

### Accessing paragraph information

- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphGlyphRange](paragraphglyphrange.md): The current glyph range being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.
