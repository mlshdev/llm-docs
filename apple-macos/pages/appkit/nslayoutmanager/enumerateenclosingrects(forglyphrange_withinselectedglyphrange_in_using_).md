> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/enumerateenclosingrects(forglyphrange:withinselectedglyphrange:in:using:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/enumerateenclosingrects(forglyphrange:withinselectedglyphrange:in:using:))

# enumerateEnclosingRects(forGlyphRange:withinSelectedGlyphRange:in:using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Enumerates enclosing rectangles for the specified glyph range in a text container.

## Declaration

```swift
func enumerateEnclosingRects(forGlyphRange glyphRange: NSRange, withinSelectedGlyphRange selectedRange: NSRange, in textContainer: NSTextContainer, using block: @escaping (NSRect, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `glyphRange`: The glyph range for which to return enclosing rectangles.
- `selectedRange`: Selected glyphs within `glyphRange`, which can affect the size of the rectangles. If not interested in selection rectangles, pass `{NSNotFound, 0}` as the selected range.
- `textContainer`: The text container in which the glyphs are laid out.
- `block`: The block to apply to the glyph range. The block has two arguments:

  - **rect**: The current enclosing rectangle.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The stop argument is an out-only argument. You should only set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

These rectangles are always in container coordinates. They can be used to draw the text background or highlight for the given range of characters. The rectangles don’t necessarily enclose glyphs that draw outside their line fragment rectangles; use [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md) to determine the area that contains all drawing performed for a range of glyphs.

If a selected range is given in the second argument, the rectangles returned are correct for drawing the selection.  Selection rectangles are generally more complicated than enclosing rectangles, and supplying a selected range determines whether the method does this extra work. This method does the minimum amount of work required to answer the question.

Performs glyph generation and layout if needed.

## See Also

### Performing advanced layout queries

- [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndex(for:in:fractionOfDistanceBetweenInsertionPoints:)](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateLineFragments(forGlyphRange:using:)](enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyph(for:in:)](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPoints(forCharacterAt:alternatePositions:inDisplayOrder:positions:characterIndexes:)](getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndex(for:in:)](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndex(for:in:fractionOfDistanceThroughGlyph:)](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRange(forBoundingRect:in:)](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(forBoundingRectWithoutAdditionalLayout:in:)](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(for:)](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [range(ofNominallySpacedGlyphsContaining:)](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

# enumerateEnclosingRectsForGlyphRange:withinSelectedGlyphRange:inTextContainer:usingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Enumerates enclosing rectangles for the specified glyph range in a text container.

## Declaration

```objectivec
- (void) enumerateEnclosingRectsForGlyphRange:(NSRange) glyphRange withinSelectedGlyphRange:(NSRange) selectedRange inTextContainer:(NSTextContainer *) textContainer usingBlock:(void (^)(NSRect rect, BOOL *stop)) block;
```

## Parameters

- `glyphRange`: The glyph range for which to return enclosing rectangles.
- `selectedRange`: Selected glyphs within `glyphRange`, which can affect the size of the rectangles. If not interested in selection rectangles, pass `{NSNotFound, 0}` as the selected range.
- `textContainer`: The text container in which the glyphs are laid out.
- `block`: The block to apply to the glyph range. The block has two arguments:

  - **rect**: The current enclosing rectangle.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The stop argument is an out-only argument. You should only set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

These rectangles are always in container coordinates. They can be used to draw the text background or highlight for the given range of characters. The rectangles don’t necessarily enclose glyphs that draw outside their line fragment rectangles; use [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md) to determine the area that contains all drawing performed for a range of glyphs.

If a selected range is given in the second argument, the rectangles returned are correct for drawing the selection.  Selection rectangles are generally more complicated than enclosing rectangles, and supplying a selected range determines whether the method does this extra work. This method does the minimum amount of work required to answer the question.

Performs glyph generation and layout if needed.

## See Also

### Performing advanced layout queries

- [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndexForPoint:inTextContainer:fractionOfDistanceBetweenInsertionPoints:](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateLineFragmentsForGlyphRange:usingBlock:](enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyphForPoint:inTextContainer:](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPointsForCharacterAtIndex:alternatePositions:inDisplayOrder:positions:characterIndexes:](getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndexForPoint:inTextContainer:](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph:](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRangeForBoundingRect:inTextContainer:](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer:](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForTextContainer:](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [rangeOfNominallySpacedGlyphsContainingIndex:](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.
