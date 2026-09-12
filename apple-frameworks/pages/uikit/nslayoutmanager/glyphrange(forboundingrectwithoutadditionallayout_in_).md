> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/glyphrange(forboundingrectwithoutadditionallayout:in:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/glyphrange(forboundingrectwithoutadditionallayout:in:))

# glyphRange(forBoundingRectWithoutAdditionalLayout:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.

## Declaration

```swift
func glyphRange(forBoundingRectWithoutAdditionalLayout bounds: CGRect, in container: NSTextContainer) -> NSRange
```

## Parameters

- `bounds`: The bounding rectangle for which to return glyphs.
- `container`: The text container in which the glyphs are laid out.

<a id="return-value"></a>

## Return Value

The range of glyphs that would need to be displayed in order to draw all glyphs that fall (even partially) within the given bounding rectangle. The range returned can include glyphs that don’t fall inside or intersect `bounds`, although the first and last glyphs in the range always do. At most this method returns the glyph range for the whole container.

<a id="Discussion"></a>

## Discussion

Unlike [glyphRange(forBoundingRect:in:)](glyphrange%28forboundingrect_in_%29.md), this variant of the method doesn’t perform glyph generation or layout. Its results, though faster, can be incorrect. This method is primarily for use by `NSTextView`; you should rarely need to use it yourself.

Bounding rectangles are always in container coordinates.

## See Also

### Performing advanced layout queries

- [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndex(for:in:fractionOfDistanceBetweenInsertionPoints:)](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRects(forGlyphRange:withinSelectedGlyphRange:in:using:)](enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [enumerateLineFragments(forGlyphRange:using:)](enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyph(for:in:)](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPoints(forCharacterAt:alternatePositions:inDisplayOrder:positions:characterIndexes:)](getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndex(for:in:)](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndex(for:in:fractionOfDistanceThroughGlyph:)](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRange(forBoundingRect:in:)](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(for:)](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [range(ofNominallySpacedGlyphsContaining:)](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

# glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.

## Declaration

```objectivec
- (NSRange) glyphRangeForBoundingRectWithoutAdditionalLayout:(CGRect) bounds inTextContainer:(NSTextContainer *) container;
```

## Parameters

- `bounds`: The bounding rectangle for which to return glyphs.
- `container`: The text container in which the glyphs are laid out.

<a id="return-value"></a>

## Return Value

The range of glyphs that would need to be displayed in order to draw all glyphs that fall (even partially) within the given bounding rectangle. The range returned can include glyphs that don’t fall inside or intersect `bounds`, although the first and last glyphs in the range always do. At most this method returns the glyph range for the whole container.

<a id="Discussion"></a>

## Discussion

Unlike [glyphRangeForBoundingRect:inTextContainer:](glyphrange%28forboundingrect_in_%29.md), this variant of the method doesn’t perform glyph generation or layout. Its results, though faster, can be incorrect. This method is primarily for use by `NSTextView`; you should rarely need to use it yourself.

Bounding rectangles are always in container coordinates.

## See Also

### Performing advanced layout queries

- [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndexForPoint:inTextContainer:fractionOfDistanceBetweenInsertionPoints:](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRectsForGlyphRange:withinSelectedGlyphRange:inTextContainer:usingBlock:](enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [enumerateLineFragmentsForGlyphRange:usingBlock:](enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyphForPoint:inTextContainer:](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPointsForCharacterAtIndex:alternatePositions:inDisplayOrder:positions:characterIndexes:](getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndexForPoint:inTextContainer:](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph:](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRangeForBoundingRect:inTextContainer:](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForTextContainer:](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [rangeOfNominallySpacedGlyphsContainingIndex:](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.
