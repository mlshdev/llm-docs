> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/glyphindex(for:in:fractionofdistancethroughglyph:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/glyphindex(for:in:fractionofdistancethroughglyph:))

# glyphIndex(for:in:fractionOfDistanceThroughGlyph:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the index of the glyph at the specified point using the container’s coordinate system.

## Declaration

```swift
func glyphIndex(for point: NSPoint, in container: NSTextContainer, fractionOfDistanceThroughGlyph partialFraction: UnsafeMutablePointer<CGFloat>?) -> Int
```

## Parameters

- `point`: The point for which to return the glyph, in coordinates of `container`.
- `container`: The container in which the returned glyph is laid out.
- `partialFraction`: If not `NULL`, on output, the fraction of the distance between the location of the glyph returned and the location of the next glyph.

<a id="return-value"></a>

## Return Value

The index of the glyph falling under the given point, expressed in the given container’s coordinate system.

<a id="Discussion"></a>

## Discussion

If no glyph is under `point`, the nearest glyph is returned, where nearest is defined according to the requirements of selection by mouse. Clients who wish to determine whether the the point actually lies within the bounds of the glyph returned should follow this with a call to [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md) and test whether the point falls in the rectangle returned by that method. If `partialFraction` is non-NULL, it returns by reference the fraction of the distance between the location of the glyph returned and the location of the next glyph.

For purposes such as dragging out a selection or placing the insertion point, a partial percentage less than or equal to 0.5 indicates that `point` should be considered as falling before the glyph index returned; a partial percentage greater than 0.5 indicates that it should be considered as falling after the glyph index returned. If the nearest glyph doesn’t lie under `point` at all (for example, if `point` is beyond the beginning or end of a line), this ratio is 0 or 1.

If the glyph stream contains the glyphs “A” and “b”, with the width of “A” being 13 points, and the user clicks at a location 8 points into “A”, `partialFraction` is 8/13, or 0.615. In this case, the point given should be considered as falling between “A” and “b” for purposes such as dragging out a selection or placing the insertion point.

Performs glyph generation and layout if needed.

As part of its implementation, this method calls [fractionOfDistanceThroughGlyph(for:in:)](fractionofdistancethroughglyph%28for_in_%29.md) and [glyphIndex(for:in:)](glyphindex%28for_in_%29.md). To change this method’s behavior, override those two methods instead of this one.

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
- [glyphRange(forBoundingRect:in:)](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(forBoundingRectWithoutAdditionalLayout:in:)](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(for:)](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [range(ofNominallySpacedGlyphsContaining:)](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

# glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the index of the glyph at the specified point using the container’s coordinate system.

## Declaration

```objectivec
- (NSUInteger) glyphIndexForPoint:(NSPoint) point inTextContainer:(NSTextContainer *) container fractionOfDistanceThroughGlyph:(CGFloat *) partialFraction;
```

## Parameters

- `point`: The point for which to return the glyph, in coordinates of `container`.
- `container`: The container in which the returned glyph is laid out.
- `partialFraction`: If not `NULL`, on output, the fraction of the distance between the location of the glyph returned and the location of the next glyph.

<a id="return-value"></a>

## Return Value

The index of the glyph falling under the given point, expressed in the given container’s coordinate system.

<a id="Discussion"></a>

## Discussion

If no glyph is under `point`, the nearest glyph is returned, where nearest is defined according to the requirements of selection by mouse. Clients who wish to determine whether the the point actually lies within the bounds of the glyph returned should follow this with a call to [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md) and test whether the point falls in the rectangle returned by that method. If `partialFraction` is non-NULL, it returns by reference the fraction of the distance between the location of the glyph returned and the location of the next glyph.

For purposes such as dragging out a selection or placing the insertion point, a partial percentage less than or equal to 0.5 indicates that `point` should be considered as falling before the glyph index returned; a partial percentage greater than 0.5 indicates that it should be considered as falling after the glyph index returned. If the nearest glyph doesn’t lie under `point` at all (for example, if `point` is beyond the beginning or end of a line), this ratio is 0 or 1.

If the glyph stream contains the glyphs “A” and “b”, with the width of “A” being 13 points, and the user clicks at a location 8 points into “A”, `partialFraction` is 8/13, or 0.615. In this case, the point given should be considered as falling between “A” and “b” for purposes such as dragging out a selection or placing the insertion point.

Performs glyph generation and layout if needed.

As part of its implementation, this method calls [fractionOfDistanceThroughGlyphForPoint:inTextContainer:](fractionofdistancethroughglyph%28for_in_%29.md) and [glyphIndexForPoint:inTextContainer:](glyphindex%28for_in_%29.md). To change this method’s behavior, override those two methods instead of this one.

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
- [glyphRangeForBoundingRect:inTextContainer:](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer:](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForTextContainer:](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [rangeOfNominallySpacedGlyphsContainingIndex:](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.
