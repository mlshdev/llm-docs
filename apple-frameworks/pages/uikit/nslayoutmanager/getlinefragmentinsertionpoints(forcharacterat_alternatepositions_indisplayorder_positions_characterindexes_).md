> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/getlinefragmentinsertionpoints(forcharacterat:alternatepositions:indisplayorder:positions:characterindexes:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/getlinefragmentinsertionpoints(forcharacterat:alternatepositions:indisplayorder:positions:characterindexes:))

# getLineFragmentInsertionPoints(forCharacterAt:alternatePositions:inDisplayOrder:positions:characterIndexes:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns insertion points in bulk for a specified line fragment.

## Declaration

```swift
func getLineFragmentInsertionPoints(forCharacterAt charIndex: Int, alternatePositions aFlag: Bool, inDisplayOrder dFlag: Bool, positions: UnsafeMutablePointer<CGFloat>?, characterIndexes charIndexes: UnsafeMutablePointer<Int>?) -> Int
```

## Parameters

- `charIndex`: The character index of one character within the line fragment.
- `aFlag`: If [true](https://developer.apple.com/documentation/swift/true), returns alternate, rather than primary, insertion points.
- `dFlag`: If [true](https://developer.apple.com/documentation/swift/true), returns insertion points in display, rather than logical, order.
- `positions`: On output, the positions of the insertion points, in the order specified.
- `charIndexes`: On output, the indexes of the characters corresponding to the returned insertion points.

<a id="return-value"></a>

## Return Value

The number of insertion points returned.

<a id="Discussion"></a>

## Discussion

The method allows clients to obtain all insertion points for a line fragment in one call. Each pointer passed in should either be `NULL` or else point to sufficient memory to hold as many elements as there are insertion points in the line fragment (which cannot be more than the number of characters + 1). The returned positions indicate a transverse offset relative to the line fragment rectangle’s origin. Internal caching is used to ensure that repeated calls to this method for the same line fragment (possibly with differing values for other arguments) are not significantly more expensive than a single call.

## See Also

### Related Documentation

- [rectArray(forCharacterRange:withinSelectedCharacterRange:in:rectCount:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forcharacterrange:withinselectedcharacterrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.
- [rectArray(forGlyphRange:withinSelectedGlyphRange:in:rectCount:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forglyphrange:withinselectedglyphrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given glyph range.

### Performing advanced layout queries

- [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndex(for:in:fractionOfDistanceBetweenInsertionPoints:)](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRects(forGlyphRange:withinSelectedGlyphRange:in:using:)](enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [enumerateLineFragments(forGlyphRange:using:)](enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyph(for:in:)](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [glyphIndex(for:in:)](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndex(for:in:fractionOfDistanceThroughGlyph:)](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRange(forBoundingRect:in:)](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(forBoundingRectWithoutAdditionalLayout:in:)](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(for:)](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [range(ofNominallySpacedGlyphsContaining:)](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

# getLineFragmentInsertionPointsForCharacterAtIndex:alternatePositions:inDisplayOrder:positions:characterIndexes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns insertion points in bulk for a specified line fragment.

## Declaration

```objectivec
- (NSUInteger) getLineFragmentInsertionPointsForCharacterAtIndex:(NSUInteger) charIndex alternatePositions:(BOOL) aFlag inDisplayOrder:(BOOL) dFlag positions:(CGFloat *) positions characterIndexes:(NSUInteger *) charIndexes;
```

## Parameters

- `charIndex`: The character index of one character within the line fragment.
- `aFlag`: If [true](https://developer.apple.com/documentation/swift/true), returns alternate, rather than primary, insertion points.
- `dFlag`: If [true](https://developer.apple.com/documentation/swift/true), returns insertion points in display, rather than logical, order.
- `positions`: On output, the positions of the insertion points, in the order specified.
- `charIndexes`: On output, the indexes of the characters corresponding to the returned insertion points.

<a id="return-value"></a>

## Return Value

The number of insertion points returned.

<a id="Discussion"></a>

## Discussion

The method allows clients to obtain all insertion points for a line fragment in one call. Each pointer passed in should either be `NULL` or else point to sufficient memory to hold as many elements as there are insertion points in the line fragment (which cannot be more than the number of characters + 1). The returned positions indicate a transverse offset relative to the line fragment rectangle’s origin. Internal caching is used to ensure that repeated calls to this method for the same line fragment (possibly with differing values for other arguments) are not significantly more expensive than a single call.

## See Also

### Related Documentation

- [rectArrayForCharacterRange:withinSelectedCharacterRange:inTextContainer:rectCount:](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forcharacterrange:withinselectedcharacterrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.
- [rectArrayForGlyphRange:withinSelectedGlyphRange:inTextContainer:rectCount:](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forglyphrange:withinselectedglyphrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given glyph range.

### Performing advanced layout queries

- [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndexForPoint:inTextContainer:fractionOfDistanceBetweenInsertionPoints:](characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRectsForGlyphRange:withinSelectedGlyphRange:inTextContainer:usingBlock:](enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [enumerateLineFragmentsForGlyphRange:usingBlock:](enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyphForPoint:inTextContainer:](fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [glyphIndexForPoint:inTextContainer:](glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph:](glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRangeForBoundingRect:inTextContainer:](glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer:](glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForTextContainer:](glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [rangeOfNominallySpacedGlyphsContainingIndex:](range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.
