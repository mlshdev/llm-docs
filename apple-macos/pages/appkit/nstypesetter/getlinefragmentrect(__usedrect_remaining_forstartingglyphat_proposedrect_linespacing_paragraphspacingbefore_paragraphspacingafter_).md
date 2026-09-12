> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/getlinefragmentrect(_:usedrect:remaining:forstartingglyphat:proposedrect:linespacing:paragraphspacingbefore:paragraphspacingafter:)](https://developer.apple.com/documentation/appkit/nstypesetter/getlinefragmentrect(_:usedrect:remaining:forstartingglyphat:proposedrect:linespacing:paragraphspacingbefore:paragraphspacingafter:))

# getLineFragmentRect(\_:usedRect:remaining:forStartingGlyphAt:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.

## Declaration

```swift
func getLineFragmentRect(_ lineFragmentRect: NSRectPointer!, usedRect lineFragmentUsedRect: NSRectPointer!, remaining remainingRect: NSRectPointer!, forStartingGlyphAt startingGlyphIndex: Int, proposedRect: NSRect, lineSpacing: CGFloat, paragraphSpacingBefore: CGFloat, paragraphSpacingAfter: CGFloat)
```

## Parameters

- `lineFragmentRect`: On return, the calculated line fragment rectangle.
- `lineFragmentUsedRect`: On return, the used rectangle (the portion of the line fragment rectangle that actually contains marks).
- `remainingRect`: On return, the remaining rectangle of `proposedRect`.
- `startingGlyphIndex`: The glyph index where the line fragment starts.
- `proposedRect`: The proposed rectangle of the line fragment.
- `lineSpacing`: The line spacing.
- `paragraphSpacingBefore`: The spacing before the paragraph.
- `paragraphSpacingAfter`: The spacing after the paragraph.

<a id="Discussion"></a>

## Discussion

The height of the line fragment is determined using `lineSpacing`, `paragraphSpacingBefore`, and `paragraphSpacingAfter` as well as `proposedRect`. The width for `lineFragmentUsedRect` is set to the `lineFragmentRect` width. In the standard implementation, paragraph spacing is included in the line fragment rectangle but not the line fragment used rectangle; line spacing is included in both.

## See Also

### Laying out glyphs

- [layoutGlyphs(in:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:)](layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by a word break at the specified character.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.

# getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.

## Declaration

```objectivec
- (void) getLineFragmentRect:(NSRectPointer) lineFragmentRect usedRect:(NSRectPointer) lineFragmentUsedRect remainingRect:(NSRectPointer) remainingRect forStartingGlyphAtIndex:(NSUInteger) startingGlyphIndex proposedRect:(NSRect) proposedRect lineSpacing:(CGFloat) lineSpacing paragraphSpacingBefore:(CGFloat) paragraphSpacingBefore paragraphSpacingAfter:(CGFloat) paragraphSpacingAfter;
```

## Parameters

- `lineFragmentRect`: On return, the calculated line fragment rectangle.
- `lineFragmentUsedRect`: On return, the used rectangle (the portion of the line fragment rectangle that actually contains marks).
- `remainingRect`: On return, the remaining rectangle of `proposedRect`.
- `startingGlyphIndex`: The glyph index where the line fragment starts.
- `proposedRect`: The proposed rectangle of the line fragment.
- `lineSpacing`: The line spacing.
- `paragraphSpacingBefore`: The spacing before the paragraph.
- `paragraphSpacingAfter`: The spacing after the paragraph.

<a id="Discussion"></a>

## Discussion

The height of the line fragment is determined using `lineSpacing`, `paragraphSpacingBefore`, and `paragraphSpacingAfter` as well as `proposedRect`. The width for `lineFragmentUsedRect` is set to the `lineFragmentRect` width. In the standard implementation, paragraph spacing is included in the line fragment rectangle but not the line fragment used rectangle; line spacing is included in both.

## See Also

### Laying out glyphs

- [layoutGlyphsInLayoutManager:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:](layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by a word break at the specified character.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.
