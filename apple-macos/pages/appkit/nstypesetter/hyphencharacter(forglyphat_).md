> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/hyphencharacter(forglyphat:)](https://developer.apple.com/documentation/appkit/nstypesetter/hyphencharacter(forglyphat:))

# hyphenCharacter(forGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the hyphen character to be inserted after the specified glyph.

## Declaration

```swift
func hyphenCharacter(forGlyphAt glyphIndex: Int) -> UTF32Char
```

## Parameters

- `glyphIndex`: The index of the glyph in question.

<a id="return-value"></a>

## Return Value

The hyphen character to be inserted after the glyph at `glyphIndex`.

<a id="Discussion"></a>

## Discussion

The typesetter calls this method before hyphenating. A subclass can override this method to return a different hyphen glyph.

## See Also

### Laying out glyphs

- [layoutGlyphs(in:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:)](layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [getLineFragmentRect(\_:usedRect:remaining:forStartingGlyphAt:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:)](getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md): Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by a word break at the specified character.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.

# hyphenCharacterForGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the hyphen character to be inserted after the specified glyph.

## Declaration

```objectivec
- (UTF32Char) hyphenCharacterForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The index of the glyph in question.

<a id="return-value"></a>

## Return Value

The hyphen character to be inserted after the glyph at `glyphIndex`.

<a id="Discussion"></a>

## Discussion

The typesetter calls this method before hyphenating. A subclass can override this method to return a different hyphen glyph.

## See Also

### Laying out glyphs

- [layoutGlyphsInLayoutManager:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:](layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md): Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by a word break at the specified character.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.
