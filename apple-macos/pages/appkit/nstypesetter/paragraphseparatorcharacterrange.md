> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/paragraphseparatorcharacterrange](https://developer.apple.com/documentation/appkit/nstypesetter/paragraphseparatorcharacterrange)

# paragraphSeparatorCharacterRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current paragraph separator character range.

## Declaration

```swift
var paragraphSeparatorCharacterRange: NSRange { get }
```

<a id="return-value"></a>

## Return Value

The current paragraph separator character range, which is the full range that contains the current character range and that extends from one paragraph separator character to the next.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

# paragraphSeparatorCharacterRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current paragraph separator character range.

## Declaration

```objectivec
@property (readonly) NSRange paragraphSeparatorCharacterRange;
```

<a id="return-value"></a>

## Return Value

The current paragraph separator character range, which is the full range that contains the current character range and that extends from one paragraph separator character to the next.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.
