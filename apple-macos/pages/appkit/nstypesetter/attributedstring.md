> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/attributedstring](https://developer.apple.com/documentation/appkit/nstypesetter/attributedstring)

# attributedString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the text backing store, usually an instance of `NSTextStorage`.

## Declaration

```swift
unowned(unsafe) var attributedString: NSAttributedString? { get set }
```

<a id="return-value"></a>

## Return Value

The text backing store.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

# attributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the text backing store, usually an instance of `NSTextStorage`.

## Declaration

```objectivec
@property (assign, nullable) NSAttributedString * attributedString;
```

<a id="return-value"></a>

## Return Value

The text backing store.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.
