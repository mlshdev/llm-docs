> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/setparagraphglyphrange(_:separatorglyphrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/setparagraphglyphrange(_:separatorglyphrange:))

# setParagraphGlyphRange(\_:separatorGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the current glyph range being processed.

## Declaration

```swift
func setParagraphGlyphRange(_ paragraphRange: NSRange, separatorGlyphRange paragraphSeparatorRange: NSRange)
```

## Parameters

- `paragraphRange`: The current glyph range being processed.
- `paragraphSeparatorRange`: The range of the paragraph separator character or characters.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

# setParagraphGlyphRange:separatorGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the current glyph range being processed.

## Declaration

```objectivec
- (void) setParagraphGlyphRange:(NSRange) paragraphRange separatorGlyphRange:(NSRange) paragraphSeparatorRange;
```

## Parameters

- `paragraphRange`: The current glyph range being processed.
- `paragraphSeparatorRange`: The range of the paragraph separator character or characters.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.
