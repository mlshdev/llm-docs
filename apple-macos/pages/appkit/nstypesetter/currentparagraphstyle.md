> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/currentparagraphstyle](https://developer.apple.com/documentation/appkit/nstypesetter/currentparagraphstyle)

# currentParagraphStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the paragraph style object for the text being typeset.

## Declaration

```swift
@NSCopying var currentParagraphStyle: NSParagraphStyle? { get }
```

<a id="return-value"></a>

## Return Value

The paragraph style object for the text being typeset. This value is valid only while the typesetter is performing layout.

## See Also

### Accessing paragraph typesetting information

- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

# currentParagraphStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the paragraph style object for the text being typeset.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSParagraphStyle * currentParagraphStyle;
```

<a id="return-value"></a>

## Return Value

The paragraph style object for the text being typeset. This value is valid only while the typesetter is performing layout.

## See Also

### Accessing paragraph typesetting information

- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.
