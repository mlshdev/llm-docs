> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/attributesforextralinefragment](https://developer.apple.com/documentation/appkit/nstypesetter/attributesforextralinefragment)

# attributesForExtraLineFragment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the attributes used to lay out the extra line fragment.

## Declaration

```swift
var attributesForExtraLineFragment: [NSAttributedString.Key : Any] { get }
```

<a id="return-value"></a>

## Return Value

A dictionary of attributes used to lay out the extra line fragment.

<a id="Discussion"></a>

## Discussion

The default implementation tries to use the `NSTextView` method [typingAttributes](../nstextview/typingattributes.md) if possible; otherwise, it uses the attributes for the last character.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.

# attributesForExtraLineFragment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the attributes used to lay out the extra line fragment.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * attributesForExtraLineFragment;
```

<a id="return-value"></a>

## Return Value

A dictionary of attributes used to lay out the extra line fragment.

<a id="Discussion"></a>

## Discussion

The default implementation tries to use the `NSTextView` method [typingAttributes](../nstextview/typingattributes.md) if possible; otherwise, it uses the attributes for the last character.

## See Also

### Accessing paragraph typesetting information

- [currentParagraphStyle](currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange:separatorGlyphRange:](setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
