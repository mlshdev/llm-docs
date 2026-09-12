> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/shouldbreakline(bywordbeforecharacterat:)](https://developer.apple.com/documentation/appkit/nstypesetter/shouldbreakline(bywordbeforecharacterat:))

# shouldBreakLine(byWordBeforeCharacterAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the line being laid out should be broken by a word break at the specified character.

## Declaration

```swift
func shouldBreakLine(byWordBeforeCharacterAt charIndex: Int) -> Bool
```

## Parameters

- `charIndex`: The index of the character just after the proposed word break would occur.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the line should be broken by a word break, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The typesetter calls this method, if implemented by a subclass, before breaking a line by word wrapping before the character at `charIndex`, enabling the subclass to control line breaking.

A subclass can override this method to customize the text layout process. If the method returns [false](https://developer.apple.com/documentation/swift/false), the typesetter continues looking for a break point.

## See Also

### Laying out glyphs

- [layoutGlyphs(in:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:)](layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [getLineFragmentRect(\_:usedRect:remaining:forStartingGlyphAt:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:)](getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md): Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.

# shouldBreakLineByWordBeforeCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the line being laid out should be broken by a word break at the specified character.

## Declaration

```objectivec
- (BOOL) shouldBreakLineByWordBeforeCharacterAtIndex:(NSUInteger) charIndex;
```

## Parameters

- `charIndex`: The index of the character just after the proposed word break would occur.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the line should be broken by a word break, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The typesetter calls this method, if implemented by a subclass, before breaking a line by word wrapping before the character at `charIndex`, enabling the subclass to control line breaking.

A subclass can override this method to customize the text layout process. If the method returns [false](https://developer.apple.com/documentation/swift/false), the typesetter continues looking for a break point.

## See Also

### Laying out glyphs

- [layoutGlyphsInLayoutManager:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:](layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md): Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.
