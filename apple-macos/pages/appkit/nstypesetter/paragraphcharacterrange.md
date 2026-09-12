> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/paragraphcharacterrange](https://developer.apple.com/documentation/appkit/nstypesetter/paragraphcharacterrange)

# paragraphCharacterRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the character range currently being processed.

## Declaration

```swift
var paragraphCharacterRange: NSRange { get }
```

<a id="return-value"></a>

## Return Value

The character range currently being processed.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

# paragraphCharacterRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the character range currently being processed.

## Declaration

```objectivec
@property (readonly) NSRange paragraphCharacterRange;
```

<a id="return-value"></a>

## Return Value

The character range currently being processed.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.
