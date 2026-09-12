> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/enumeratelinefragments(forglyphrange:using:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/enumeratelinefragments(forglyphrange:using:))

# enumerateLineFragments(forGlyphRange:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Enumerates line fragments intersecting with the specified glyph range.

## Declaration

```swift
func enumerateLineFragments(forGlyphRange glyphRange: NSRange, using block: @escaping (CGRect, CGRect, NSTextContainer, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `glyphRange`: The glyph range for which to return line fragment rectangles.
- `block`: The block to apply to the glyph range. The block has five arguments:

  - **rect**: The current line fragment rectangle.
  - **usedRect**: The portion of the line fragment rectangle that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding).
  - **textContainer**: The text container in which the glyphs are laid out.
  - **glyphRange**: The range of glyphs laid out in the current line fragment.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The stop argument is an out-only argument. You should only set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation and layout for the line fragment containing the glyphs in the specified range, or if noncontiguous layout is not enabled, for all of the text up to and including that line fragment.

Line fragment rectangles are always in container coordinates.

## See Also

### Performing advanced layout queries

- [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndex(for:in:fractionOfDistanceBetweenInsertionPoints:)](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRects(forGlyphRange:withinSelectedGlyphRange:in:using:)](enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [fractionOfDistanceThroughGlyph(for:in:)](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPoints(forCharacterAt:alternatePositions:inDisplayOrder:positions:characterIndexes:)](getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndex(for:in:)](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndex(for:in:fractionOfDistanceThroughGlyph:)](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRange(forBoundingRect:in:)](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(forBoundingRectWithoutAdditionalLayout:in:)](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(for:)](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [range(ofNominallySpacedGlyphsContaining:)](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

# enumerateLineFragmentsForGlyphRange:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Enumerates line fragments intersecting with the specified glyph range.

## Declaration

```objectivec
- (void) enumerateLineFragmentsForGlyphRange:(NSRange) glyphRange usingBlock:(void (^)(CGRect rect, CGRect usedRect, NSTextContainer *textContainer, NSRange glyphRange, BOOL *stop)) block;
```

## Parameters

- `glyphRange`: The glyph range for which to return line fragment rectangles.
- `block`: The block to apply to the glyph range. The block has five arguments:

  - **rect**: The current line fragment rectangle.
  - **usedRect**: The portion of the line fragment rectangle that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding).
  - **textContainer**: The text container in which the glyphs are laid out.
  - **glyphRange**: The range of glyphs laid out in the current line fragment.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the array. The stop argument is an out-only argument. You should only set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation and layout for the line fragment containing the glyphs in the specified range, or if noncontiguous layout is not enabled, for all of the text up to and including that line fragment.

Line fragment rectangles are always in container coordinates.

## See Also

### Performing advanced layout queries

- [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndexForPoint:inTextContainer:fractionOfDistanceBetweenInsertionPoints:](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRectsForGlyphRange:withinSelectedGlyphRange:inTextContainer:usingBlock:](enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [fractionOfDistanceThroughGlyphForPoint:inTextContainer:](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPointsForCharacterAtIndex:alternatePositions:inDisplayOrder:positions:characterIndexes:](getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndexForPoint:inTextContainer:](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph:](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRangeForBoundingRect:inTextContainer:](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer:](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForTextContainer:](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [rangeOfNominallySpacedGlyphsContainingIndex:](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.
