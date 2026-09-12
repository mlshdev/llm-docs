> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/shouldbreakline(bywordbeforecharacterat:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/shouldbreakline(bywordbeforecharacterat:))

# shouldBreakLine(byWordBeforeCharacterAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Breaks a line by word-wrapping before the character at the specified index.

## Declaration

```swift
func shouldBreakLine(byWordBeforeCharacterAt charIndex: Int) -> Bool
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method, if implemented by a subclass, before breaking a line by word-wrapping before the character at the given character index, enabling the subclass to control line breaking. A subclass can override this method to customize the text layout process. If the method returns [false](https://developer.apple.com/documentation/swift/false), the typesetter continues looking for a break point.

## See Also

### Laying Out Glyphs

- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

# shouldBreakLineByWordBeforeCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Breaks a line by word-wrapping before the character at the specified index.

## Declaration

```objectivec
- (BOOL) shouldBreakLineByWordBeforeCharacterAtIndex:(NSUInteger) charIndex;
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method, if implemented by a subclass, before breaking a line by word-wrapping before the character at the given character index, enabling the subclass to control line breaking. A subclass can override this method to customize the text layout process. If the method returns [false](https://developer.apple.com/documentation/swift/false), the typesetter continues looking for a break point.

## See Also

### Laying Out Glyphs

- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.
