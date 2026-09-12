> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/hyphencharacter(forglyphat:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/hyphencharacter(forglyphat:))

# hyphenCharacter(forGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.

## Declaration

```swift
func hyphenCharacter(forGlyphAt glyphIndex: Int) -> UTF32Char
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method before hyphenating. A subclass can override this method to return a different hyphen glyph.

## See Also

### Laying Out Glyphs

- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

# hyphenCharacterForGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.

## Declaration

```objectivec
- (UTF32Char) hyphenCharacterForGlyphAtIndex:(NSUInteger) glyphIndex;
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method before hyphenating. A subclass can override this method to return a different hyphen glyph.

## See Also

### Laying Out Glyphs

- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.
