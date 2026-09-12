> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/drawsoutsidelinefragment(forglyphat:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/drawsoutsidelinefragment(forglyphat:))

# drawsOutsideLineFragment(forGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Indicates whether the glyph draws outside its line fragment rectangle.

## Declaration

```swift
func drawsOutsideLineFragment(forGlyphAt glyphIndex: Int) -> Bool
```

## Parameters

- `glyphIndex`: Index of the glyph.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the glyph at `glyphIndex` exceeds the bounds of the line fragment where it’s laid out, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Exceeding bounds can happen when text is set at a fixed line height. For example, if the user specifies a fixed line height of 12 points and sets the font size to 24 points, the glyphs will exceed their layout rectangles.

This method causes glyph generation and layout for the line fragment containing the specified glyph, or if noncontiguous layout is not enabled, up to and including that line fragment.

Glyphs that draw outside their line fragment rectangles aren’t considered when calculating enclosing rectangles with the [rectArray(forCharacterRange:withinSelectedCharacterRange:in:rectCount:)](rectarray%28forcharacterrange_withinselectedcharacterrange_in_rectcount_%29.md) and [rectArray(forGlyphRange:withinSelectedGlyphRange:in:rectCount:)](rectarray%28forglyphrange_withinselectedglyphrange_in_rectcount_%29.md) methods. They are, however, considered by [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md).

## See Also

### Getting layout information

- [attachmentSize(forGlyphAt:)](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [extraLineFragmentRect](extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidCharacterIndex()](firstunlaidcharacterindex%28%29.md): Returns the index for the first character in the layout manager that isn’t in the layout.
- [firstUnlaidGlyphIndex()](firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex(\_:glyphIndex:)](getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRect(forGlyphAt:effectiveRange:)](linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:)](linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [location(forGlyphAt:)](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttribute(forGlyphAt:)](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRange(inLineFragmentForGlyphAt:)](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

# drawsOutsideLineFragmentForGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Indicates whether the glyph draws outside its line fragment rectangle.

## Declaration

```objectivec
- (BOOL) drawsOutsideLineFragmentForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: Index of the glyph.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the glyph at `glyphIndex` exceeds the bounds of the line fragment where it’s laid out, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Exceeding bounds can happen when text is set at a fixed line height. For example, if the user specifies a fixed line height of 12 points and sets the font size to 24 points, the glyphs will exceed their layout rectangles.

This method causes glyph generation and layout for the line fragment containing the specified glyph, or if noncontiguous layout is not enabled, up to and including that line fragment.

Glyphs that draw outside their line fragment rectangles aren’t considered when calculating enclosing rectangles with the [rectArrayForCharacterRange:withinSelectedCharacterRange:inTextContainer:rectCount:](rectarray%28forcharacterrange_withinselectedcharacterrange_in_rectcount_%29.md) and [rectArrayForGlyphRange:withinSelectedGlyphRange:inTextContainer:rectCount:](rectarray%28forglyphrange_withinselectedglyphrange_in_rectcount_%29.md) methods. They are, however, considered by [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md).

## See Also

### Getting layout information

- [attachmentSizeForGlyphAtIndex:](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [extraLineFragmentRect](extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidCharacterIndex](firstunlaidcharacterindex%28%29.md): Returns the index for the first character in the layout manager that isn’t in the layout.
- [firstUnlaidGlyphIndex](firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex:glyphIndex:](getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:](linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:](linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [locationForGlyphAtIndex:](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttributeForGlyphAtIndex:](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRangeInLineFragmentForGlyphAtIndex:](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.
