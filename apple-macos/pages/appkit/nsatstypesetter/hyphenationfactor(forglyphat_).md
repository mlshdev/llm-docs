> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/hyphenationfactor(forglyphat:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/hyphenationfactor(forglyphat:))

# hyphenationFactor(forGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the hyphenation factor in effect at the specified glyph index.

## Declaration

```swift
func hyphenationFactor(forGlyphAt glyphIndex: Int) -> Float
```

<a id="Discussion"></a>

## Discussion

The hyphenation factor is a value ranging from 0.0 to 1.0 that controls when hyphenation is attempted. By default, the value is 0.0, meaning hyphenation is off. A factor of 1.0 causes hyphenation to be attempted always.

The typesetter calls this method with a proposed hyphenation point for a line break to find the hyphenation factor in effect at that time. A subclass can override this method to customize the text layout process.

## See Also

### Laying Out Glyphs

- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

# hyphenationFactorForGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the hyphenation factor in effect at the specified glyph index.

## Declaration

```objectivec
- (float) hyphenationFactorForGlyphAtIndex:(NSUInteger) glyphIndex;
```

<a id="Discussion"></a>

## Discussion

The hyphenation factor is a value ranging from 0.0 to 1.0 that controls when hyphenation is attempted. By default, the value is 0.0, meaning hyphenation is off. A factor of 1.0 causes hyphenation to be attempted always.

The typesetter calls this method with a proposed hyphenation point for a line break to find the hyphenation factor in effect at that time. A subclass can override this method to customize the text layout process.

## See Also

### Laying Out Glyphs

- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.
